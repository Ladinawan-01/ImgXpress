"use client"

import type React from "react"

import { useState, useCallback, useEffect } from "react"
import { Upload, Download, FileImage, Loader2, X, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { useToast } from "@/hooks/use-toast"
import { imageConverter, type SupportedFormat, type ConversionResult, type MultipleImageConversionResult } from "@/lib/image-converter"
import { useAnalytics } from "@/components/analytics"

interface ImageConverterProps {
  defaultFormat?: SupportedFormat
}

export function ImageConverter({ defaultFormat }: ImageConverterProps) {
  const [dragActive, setDragActive] = useState(false)
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])
  const [targetFormat, setTargetFormat] = useState<SupportedFormat>(defaultFormat || "png")
  const [isConverting, setIsConverting] = useState(false)
  const [conversionResult, setConversionResult] = useState<ConversionResult | MultipleImageConversionResult | null>(null)
  const [progress, setProgress] = useState(0)
  const { toast } = useToast()
  const analytics = useAnalytics()

  useEffect(() => {
    if (defaultFormat) {
      setTargetFormat(defaultFormat)
    }
  }, [defaultFormat])

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    const files = Array.from(e.dataTransfer.files)
    if (files.length > 0) {
      handleFilesSelect(files)
    }
  }, [])

  const handleFilesSelect = (files: File[]) => {
    const imageFiles = files.filter(file => file.type.startsWith("image/"))
    
    if (imageFiles.length === 0) {
      toast({
        title: "Invalid file type",
        description: "Please select image files only.",
        variant: "destructive",
      })
      return
    }

    if (imageFiles.length !== files.length) {
      toast({
        title: "Some files skipped",
        description: `${files.length - imageFiles.length} non-image files were skipped.`,
        variant: "destructive",
      })
    }

    setSelectedFiles(prev => [...prev, ...imageFiles])
    setConversionResult(null)
  }

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      handleFilesSelect(Array.from(files))
    }
  }

  const removeFile = (index: number) => {
    setSelectedFiles(prev => prev.filter((_, i) => i !== index))
  }

  const clearAllFiles = () => {
    setSelectedFiles([])
    setConversionResult(null)
  }

  const handleConvert = async () => {
    if (selectedFiles.length === 0) return

    setIsConverting(true)
    setProgress(0)

    try {
      // Track conversion start
      analytics.trackUserAction("conversion_started", {
        file_count: selectedFiles.length,
        total_file_size: selectedFiles.reduce((sum, file) => sum + file.size, 0),
        target_format: targetFormat,
      })

      // Simulate progress
      const progressInterval = setInterval(() => {
        setProgress((prev) => Math.min(prev + 10, 90))
      }, 100)

      let result: ConversionResult | MultipleImageConversionResult

      if (selectedFiles.length === 1) {
        result = await imageConverter.convertImage(selectedFiles[0], targetFormat)
      } else {
        result = await imageConverter.convertMultipleImages(selectedFiles, targetFormat)
      }

      clearInterval(progressInterval)
      setProgress(100)
      setConversionResult(result)

      // Track successful conversion
      analytics.trackImageConversion(
        selectedFiles[0].type.split('/')[1] || 'unknown',
        targetFormat,
        selectedFiles.reduce((sum, file) => sum + file.size, 0)
      )

      toast({
        title: "Conversion successful!",
        description: selectedFiles.length === 1 
          ? `Image converted to ${targetFormat.toUpperCase()}`
          : `${selectedFiles.length} images converted to ${targetFormat.toUpperCase()}`,
      })
    } catch (error) {
      // Track conversion error
      analytics.trackError("conversion_failed", `Failed to convert to ${targetFormat}`)

      toast({
        title: "Conversion failed",
        description: "An error occurred during conversion. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsConverting(false)
      setTimeout(() => setProgress(0), 1000)
    }
  }

  const handleDownload = () => {
    if (!conversionResult) return

    // Track download event
    analytics.trackUserAction("file_downloaded", {
      format: conversionResult.format,
      original_size: 'totalOriginalSize' in conversionResult ? conversionResult.totalOriginalSize : conversionResult.originalSize,
      converted_size: conversionResult.convertedSize,
      filename: conversionResult.filename,
    })

    // Only execute on client side
    if (typeof window !== 'undefined') {
      const url = URL.createObjectURL(conversionResult.blob)
      const a = document.createElement("a")
      a.href = url
      a.download = conversionResult.filename
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
    }
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
  }

  const totalFileSize = selectedFiles.reduce((sum, file) => sum + file.size, 0)

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      {/* File Upload Area */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileImage className="h-5 w-5" />
            Upload Images
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div
            className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
              dragActive ? "border-primary bg-primary/5" : "border-muted-foreground/25 hover:border-primary/50"
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
            <p className="text-lg font-medium mb-2">
              {selectedFiles.length === 0 
                ? "Drop your images here" 
                : `${selectedFiles.length} image${selectedFiles.length > 1 ? 's' : ''} selected`
              }
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              {selectedFiles.length === 0 
                ? "or click to browse files (supports multiple images)" 
                : `Total size: ${formatFileSize(totalFileSize)}`
              }
            </p>
            <input 
              type="file" 
              accept="image/*" 
              multiple
              onChange={handleFileInputChange} 
              className="hidden" 
              id="file-input" 
            />
            <Button asChild variant="outline">
              <label htmlFor="file-input" className="cursor-pointer">
                Choose Files
              </label>
            </Button>
          </div>

          {selectedFiles.length > 0 && (
            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">Selected Files ({selectedFiles.length})</p>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={clearAllFiles}
                  className="text-destructive hover:text-destructive"
                >
                  Clear All
                </Button>
              </div>
              <div className="max-h-48 overflow-y-auto space-y-2">
                {selectedFiles.map((file, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                    <div className="flex items-center gap-3">
                      <FileImage className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium text-sm">{file.name}</p>
                        <p className="text-xs text-muted-foreground">{formatFileSize(file.size)}</p>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeFile(index)}
                      className="h-6 w-6 p-0 text-muted-foreground hover:text-destructive"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Format Selection */}
      {selectedFiles.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Convert To</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Select value={targetFormat} onValueChange={(value: SupportedFormat) => setTargetFormat(value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select format" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="jpg">JPG</SelectItem>
                <SelectItem value="png">PNG</SelectItem>
                <SelectItem value="webp">WebP</SelectItem>
                <SelectItem value="pdf">PDF</SelectItem>
              </SelectContent>
            </Select>

            {targetFormat === "pdf" && selectedFiles.length > 1 && (
              <div className="p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  <FileText className="h-4 w-4 inline mr-1" />
                  Multiple images will be combined into a single PDF with each image on a separate page.
                </p>
              </div>
            )}

            <Button onClick={handleConvert} disabled={isConverting || selectedFiles.length === 0} className="w-full" size="lg">
              {isConverting ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Converting...
                </>
              ) : (
                `Convert ${selectedFiles.length > 1 ? `${selectedFiles.length} Images` : 'Image'} to ${targetFormat.toUpperCase()}`
              )}
            </Button>

            {isConverting && progress > 0 && (
              <div className="space-y-2">
                <Progress value={progress} className="w-full" />
                <p className="text-sm text-center text-muted-foreground">{progress}% complete</p>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Conversion Result */}
      {conversionResult && (
        <Card>
          <CardHeader>
            <CardTitle className="text-green-600">Conversion Complete!</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-medium">Original Size:</p>
                <p className="text-muted-foreground">
                  {formatFileSize('totalOriginalSize' in conversionResult ? conversionResult.totalOriginalSize : conversionResult.originalSize)}
                </p>
              </div>
              <div>
                <p className="font-medium">New Size:</p>
                <p className="text-muted-foreground">{formatFileSize(conversionResult.convertedSize)}</p>
              </div>
              {'imageCount' in conversionResult && conversionResult.imageCount > 1 && (
                <div className="col-span-2">
                  <p className="font-medium">Images Processed:</p>
                  <p className="text-muted-foreground">{conversionResult.imageCount} images</p>
                </div>
              )}
            </div>

            <Button onClick={handleDownload} className="w-full" size="lg">
              <Download className="h-4 w-4 mr-2" />
              Download {conversionResult.format.toUpperCase()}
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
