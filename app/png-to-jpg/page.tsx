import type { Metadata } from "next"
import { ConversionPageLayout } from "@/components/conversion-page-layout"

export const metadata: Metadata = {
  title: "PNG to JPG Converter - Free Online Image Conversion",
  description:
    "Convert PNG images to JPG format online for free. Reduce file size, optimize for web, and get instant results. No registration required.",
  keywords: "png to jpg, png to jpeg, image converter, file size reduction, free conversion",
}

export default function PngToJpgPage() {
  const benefits = [
    "Significantly reduce file size for faster web loading",
    "Optimize images for email attachments and sharing",
    "Better compression for photographs and complex images",
    "Universal compatibility across all devices and platforms",
    "Ideal format for social media and web publishing",
  ]

  const useCases = [
    "Optimizing website images for faster loading times",
    "Reducing file sizes for email attachments",
    "Preparing photos for social media platforms",
    "Converting screenshots for documentation",
    "Optimizing images for mobile applications",
  ]

  return (
    <ConversionPageLayout
      title="PNG to JPG Converter"
      description="Convert your PNG images to JPG format instantly. Reduce file size and optimize for web with our free online converter."
      fromFormat="PNG"
      toFormat="JPG"
      benefits={benefits}
      useCases={useCases}
      defaultTargetFormat="jpg"
    />
  )
}
