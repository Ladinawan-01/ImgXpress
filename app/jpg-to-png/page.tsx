import type { Metadata } from "next"
import { ConversionPageLayout } from "@/components/conversion-page-layout"

export const metadata: Metadata = {
  title: "JPG to PNG Converter - Free Online Image Conversion",
  description:
    "Convert JPG images to PNG format online for free. Add transparency, preserve quality, and get instant results. No registration required.",
  keywords: "jpg to png, jpeg to png, image converter, transparency, free conversion",
}

export default function JpgToPngPage() {
  const benefits = [
    "Add transparency support to your images for logos and graphics",
    "Preserve image quality with lossless PNG compression",
    "Perfect for web graphics that need transparent backgrounds",
    "Maintain original image dimensions and color depth",
    "No quality loss during conversion process",
  ]

  const useCases = [
    "Converting logos for websites with transparent backgrounds",
    "Preparing graphics for presentations and documents",
    "Creating icons and UI elements for applications",
    "Converting photos for graphic design projects",
    "Preparing images for print materials",
  ]

  return (
    <ConversionPageLayout
      title="JPG to PNG Converter"
      description="Convert your JPG images to PNG format instantly. Add transparency support and preserve image quality with our free online converter."
      fromFormat="JPG"
      toFormat="PNG"
      benefits={benefits}
      useCases={useCases}
      defaultTargetFormat="png"
    />
  )
}
