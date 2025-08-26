"use client"

import type React from "react"

import { useState, useCallback, useEffect } from "react"
import { Upload, Download, FileImage, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { useToast } from "@/hooks/use-toast"
import { imageConverter, type SupportedFormat, type ConversionResult } from "@/lib/image-converter"
import { useAnalytics } from "@/components/analytics"

interface ImageConverterProps {
  defaultFormat?: SupportedFormat
}

export function ImageConverter({ defaultFormat }: ImageConverterProps) {
  const [dragActive, setDragActive] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [targetFormat, setTargetFormat] = useState<SupportedFormat>(defaultFormat || "png")
  const [isConverting, setIsConverting] = useState(false)
  const [conversionResult, setConversionResult] = useState<ConversionResult | null>(null)
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
      handleFileSelect(files[0])
    }
  }, [])

  const handleFileSelect = (file: File) => {
    if (!file.type.startsWith("image/")) {
      toast({
        title: "Invalid file type",
        description: "Please select an image file.",
        variant: "destructive",
      })
      return
    }

    setSelectedFile(file)
    setConversionResult(null)
  }

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      handleFileSelect(files[0])
    }
  }

  const handleConvert = async () => {
    if (!selectedFile) return

    setIsConverting(true)
    setProgress(0)

    try {
      // Track conversion start
      analytics.trackUserAction("conversion_started", {
        file_size: selectedFile.size,
        target_format: targetFormat,
      })

      // Simulate progress
      const progressInterval = setInterval(() => {
        setProgress((prev) => Math.min(prev + 10, 90))
      }, 100)

      const result = await imageConverter.convertImage(selectedFile, targetFormat)

      clearInterval(progressInterval)
      setProgress(100)
      setConversionResult(result)

      // Track successful conversion
      analytics.trackImageConversion(
        selectedFile.type.split('/')[1] || 'unknown',
        targetFormat,
        selectedFile.size
      )

      toast({
        title: "Conversion successful!",
        description: `Image converted to ${targetFormat.toUpperCase()}`,
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
      original_size: conversionResult.originalSize,
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

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      {/* File Upload Area */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileImage className="h-5 w-5" />
            Upload Image
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
            <p className="text-lg font-medium mb-2">{selectedFile ? selectedFile.name : "Drop your image here"}</p>
            <p className="text-sm text-muted-foreground mb-4">or click to browse files</p>
            <input type="file" accept="image/*" onChange={handleFileInputChange} className="hidden" id="file-input" />
            <Button asChild variant="outline">
              <label htmlFor="file-input" className="cursor-pointer">
                Choose File
              </label>
            </Button>
          </div>

          {selectedFile && (
            <div className="mt-4 p-4 bg-muted rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{selectedFile.name}</p>
                  <p className="text-sm text-muted-foreground">{formatFileSize(selectedFile.size)}</p>
                </div>
                <FileImage className="h-8 w-8 text-primary" />
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Format Selection */}
      {selectedFile && (
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

            <Button onClick={handleConvert} disabled={isConverting || !selectedFile} className="w-full" size="lg">
              {isConverting ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Converting...
                </>
              ) : (
                "Convert Now"
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
                <p className="text-muted-foreground">{formatFileSize(conversionResult.originalSize)}</p>
              </div>
              <div>
                <p className="font-medium">New Size:</p>
                <p className="text-muted-foreground">{formatFileSize(conversionResult.convertedSize)}</p>
              </div>
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
