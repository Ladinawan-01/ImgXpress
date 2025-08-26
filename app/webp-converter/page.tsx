import type { Metadata } from "next"
import { ConversionPageLayout } from "@/components/conversion-page-layout"

export const metadata: Metadata = {
  title: "WebP Converter - Convert Images to/from WebP Format",
  description:
    "Convert images to WebP format for better compression and faster loading. Also convert WebP to JPG/PNG. Free online converter.",
  keywords: "webp converter, webp to jpg, webp to png, jpg to webp, png to webp, image optimization",
}

export default function WebpConverterPage() {
  const benefits = [
    "Up to 35% smaller file sizes compared to JPG and PNG",
    "Faster website loading times and better user experience",
    "Support for both lossy and lossless compression",
    "Modern format supported by all major browsers",
    "Maintains high image quality at smaller file sizes",
  ]

  const useCases = [
    "Optimizing website images for better performance",
    "Reducing bandwidth usage for mobile users",
    "Improving SEO with faster page load times",
    "Converting legacy formats to modern WebP",
    "Preparing images for progressive web applications",
  ]

  return (
    <ConversionPageLayout
      title="WebP Converter"
      description="Convert images to and from WebP format for better compression and faster web loading. Support for JPG, PNG to WebP conversion."
      fromFormat="Image"
      toFormat="WebP"
      benefits={benefits}
      useCases={useCases}
      defaultTargetFormat="webp"
    />
  )
}
