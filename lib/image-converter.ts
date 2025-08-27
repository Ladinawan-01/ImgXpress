export type SupportedFormat = "jpg" | "jpeg" | "png" | "webp" | "pdf"

export interface ConversionOptions {
  quality?: number
  width?: number
  height?: number
  maintainAspectRatio?: boolean
}

export interface ConversionResult {
  blob: Blob
  filename: string
  originalSize: number
  convertedSize: number
  format: SupportedFormat
}

export interface MultipleImageConversionResult {
  blob: Blob
  filename: string
  totalOriginalSize: number
  convertedSize: number
  format: SupportedFormat
  imageCount: number
}

export class ImageConverter {
  private canvas: HTMLCanvasElement | null = null
  private ctx: CanvasRenderingContext2D | null = null

  private getCanvas(): { canvas: HTMLCanvasElement; ctx: CanvasRenderingContext2D } {
    if (typeof window === 'undefined') {
      throw new Error('Canvas is not available during server-side rendering')
    }
    
    if (!this.canvas) {
      this.canvas = document.createElement("canvas")
      this.ctx = this.canvas.getContext("2d")!
    }
    
    return { canvas: this.canvas, ctx: this.ctx! }
  }

  async convertImage(
    file: File,
    targetFormat: SupportedFormat,
    options: ConversionOptions = {},
  ): Promise<ConversionResult> {
    const { quality = 0.9, width, height, maintainAspectRatio = true } = options

    // Handle PDF conversion separately
    if (targetFormat === "pdf") {
      return this.convertToPDF([file], options)
    }

    // Load image
    const img = await this.loadImage(file)

    // Calculate dimensions
    const { width: canvasWidth, height: canvasHeight } = this.calculateDimensions(
      img.width,
      img.height,
      width,
      height,
      maintainAspectRatio,
    )

    // Set canvas size
    const { canvas, ctx } = this.getCanvas()
    canvas.width = canvasWidth
    canvas.height = canvasHeight

    // Clear canvas and draw image
    ctx.clearRect(0, 0, canvasWidth, canvasHeight)
    ctx.drawImage(img, 0, 0, canvasWidth, canvasHeight)

    // Convert to target format
    const mimeType = this.getMimeType(targetFormat)
    const blob = await this.canvasToBlob(mimeType, quality)

    const filename = this.generateFilename(file.name, targetFormat)

    return {
      blob,
      filename,
      originalSize: file.size,
      convertedSize: blob.size,
      format: targetFormat,
    }
  }

  async convertMultipleImages(
    files: File[],
    targetFormat: SupportedFormat,
    options: ConversionOptions = {},
  ): Promise<MultipleImageConversionResult> {
    if (targetFormat === "pdf") {
      return this.convertToPDF(files, options)
    }

    // For other formats, we'll convert them individually and zip them
    // For now, let's just convert the first image as a placeholder
    const result = await this.convertImage(files[0], targetFormat, options)
    
    return {
      blob: result.blob,
      filename: `converted_images.${targetFormat}`,
      totalOriginalSize: files.reduce((sum, file) => sum + file.size, 0),
      convertedSize: result.convertedSize,
      format: targetFormat,
      imageCount: files.length,
    }
  }

  private async loadImage(file: File): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
      const img = new Image()
      img.crossOrigin = "anonymous"
      img.onload = () => resolve(img)
      img.onerror = reject
      img.src = URL.createObjectURL(file)
    })
  }

  private calculateDimensions(
    originalWidth: number,
    originalHeight: number,
    targetWidth?: number,
    targetHeight?: number,
    maintainAspectRatio = true,
  ): { width: number; height: number } {
    if (!targetWidth && !targetHeight) {
      return { width: originalWidth, height: originalHeight }
    }

    if (!maintainAspectRatio) {
      return {
        width: targetWidth || originalWidth,
        height: targetHeight || originalHeight,
      }
    }

    const aspectRatio = originalWidth / originalHeight

    if (targetWidth && targetHeight) {
      const targetAspectRatio = targetWidth / targetHeight
      if (aspectRatio > targetAspectRatio) {
        return { width: targetWidth, height: targetWidth / aspectRatio }
      } else {
        return { width: targetHeight * aspectRatio, height: targetHeight }
      }
    }

    if (targetWidth) {
      return { width: targetWidth, height: targetWidth / aspectRatio }
    }

    if (targetHeight) {
      return { width: targetHeight * aspectRatio, height: targetHeight }
    }

    return { width: originalWidth, height: originalHeight }
  }

  private getMimeType(format: SupportedFormat): string {
    const mimeTypes: Record<SupportedFormat, string> = {
      jpg: "image/jpeg",
      jpeg: "image/jpeg",
      png: "image/png",
      webp: "image/webp",
      pdf: "application/pdf",
    }
    return mimeTypes[format]
  }

  private async canvasToBlob(mimeType: string, quality: number): Promise<Blob> {
    return new Promise((resolve, reject) => {
      const { canvas } = this.getCanvas()
      canvas.toBlob(
        (blob) => {
          if (blob) {
            resolve(blob)
          } else {
            reject(new Error("Failed to convert canvas to blob"))
          }
        },
        mimeType,
        quality,
      )
    })
  }

  private async convertToPDF(files: File[], options: ConversionOptions): Promise<MultipleImageConversionResult> {
    // Dynamic import to avoid SSR issues
    const { jsPDF } = await import('jspdf')
    
    const pdf = new jsPDF('p', 'mm', 'a4')
    const pageWidth = pdf.internal.pageSize.getWidth()
    const pageHeight = pdf.internal.pageSize.getHeight()
    const margin = 10
    const maxWidth = pageWidth - (2 * margin)
    const maxHeight = pageHeight - (2 * margin)

    let totalOriginalSize = 0

    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      totalOriginalSize += file.size

      try {
        const img = await this.loadImage(file)
        
        // Calculate image dimensions to fit on page
        const imgAspectRatio = img.width / img.height
        let imgWidth = maxWidth
        let imgHeight = maxWidth / imgAspectRatio

        if (imgHeight > maxHeight) {
          imgHeight = maxHeight
          imgWidth = maxHeight * imgAspectRatio
        }

        // Center the image on the page
        const x = margin + (maxWidth - imgWidth) / 2
        const y = margin + (maxHeight - imgHeight) / 2

        // Convert image to data URL
        const { canvas, ctx } = this.getCanvas()
        canvas.width = img.width
        canvas.height = img.height
        ctx.drawImage(img, 0, 0)
        
        const imageData = canvas.toDataURL('image/jpeg', 0.9)

        // Add image to PDF
        pdf.addImage(imageData, 'JPEG', x, y, imgWidth, imgHeight)

        // Add new page if not the last image
        if (i < files.length - 1) {
          pdf.addPage()
        }
      } catch (error) {
        console.error(`Error processing image ${file.name}:`, error)
        // Continue with other images
      }
    }

    const pdfBlob = pdf.output('blob')
    const filename = files.length === 1 
      ? this.generateFilename(files[0].name, "pdf")
      : `images_to_pdf.pdf`

    return {
      blob: pdfBlob,
      filename,
      totalOriginalSize,
      convertedSize: pdfBlob.size,
      format: "pdf",
      imageCount: files.length,
    }
  }

  private generateFilename(originalName: string, targetFormat: SupportedFormat): string {
    const nameWithoutExt = originalName.replace(/\.[^/.]+$/, "")
    return `${nameWithoutExt}.${targetFormat}`
  }

  static getSupportedFormats(): SupportedFormat[] {
    return ["jpg", "jpeg", "png", "webp", "pdf"]
  }

  static isFormatSupported(format: string): format is SupportedFormat {
    return this.getSupportedFormats().includes(format as SupportedFormat)
  }
}

export const imageConverter = new ImageConverter()
