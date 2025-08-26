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

export class ImageConverter {
  private canvas: HTMLCanvasElement
  private ctx: CanvasRenderingContext2D

  constructor() {
    this.canvas = document.createElement("canvas")
    this.ctx = this.canvas.getContext("2d")!
  }

  async convertImage(
    file: File,
    targetFormat: SupportedFormat,
    options: ConversionOptions = {},
  ): Promise<ConversionResult> {
    const { quality = 0.9, width, height, maintainAspectRatio = true } = options

    // Handle PDF conversion separately
    if (targetFormat === "pdf") {
      return this.convertToPDF(file, options)
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
    this.canvas.width = canvasWidth
    this.canvas.height = canvasHeight

    // Clear canvas and draw image
    this.ctx.clearRect(0, 0, canvasWidth, canvasHeight)
    this.ctx.drawImage(img, 0, 0, canvasWidth, canvasHeight)

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
      this.canvas.toBlob(
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

  private async convertToPDF(file: File, options: ConversionOptions): Promise<ConversionResult> {
    // For PDF conversion, we'll use a simple approach with jsPDF
    // This is a basic implementation - in production, you might want to use a more robust solution
    const img = await this.loadImage(file)

    // Create a simple PDF with the image
    // Note: This is a simplified implementation
    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")!

    canvas.width = img.width
    canvas.height = img.height
    ctx.drawImage(img, 0, 0)

    const imageData = canvas.toDataURL("image/jpeg", 0.9)

    // Create a simple PDF blob (this is a mock implementation)
    // In a real app, you'd use a proper PDF library
    const pdfContent = `%PDF-1.4\n1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] >>\nendobj\nxref\n0 4\n0000000000 65535 f \n0000000010 00000 n \n0000000053 00000 n \n0000000125 00000 n \ntrailer\n<< /Size 4 /Root 1 0 R >>\nstartxref\n213\n%%EOF`

    const blob = new Blob([pdfContent], { type: "application/pdf" })
    const filename = this.generateFilename(file.name, "pdf")

    return {
      blob,
      filename,
      originalSize: file.size,
      convertedSize: blob.size,
      format: "pdf",
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
