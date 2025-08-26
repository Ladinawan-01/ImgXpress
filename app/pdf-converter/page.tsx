import type { Metadata } from "next"
import { ConversionPageLayout } from "@/components/conversion-page-layout"

export const metadata: Metadata = {
  title: "Image to PDF Converter - Free Online PDF Creation",
  description:
    "Convert images to PDF format online for free. Create PDFs from JPG, PNG, WebP images. Perfect for documents and sharing.",
  keywords: "image to pdf, jpg to pdf, png to pdf, pdf converter, document creation, free conversion",
}

export default function PdfConverterPage() {
  const benefits = [
    "Create professional documents from images",
    "Perfect for sharing and archiving important images",
    "Universal format that opens on any device",
    "Combine multiple images into a single PDF document",
    "Ideal for creating portfolios and presentations",
  ]

  const useCases = [
    "Converting scanned documents to PDF format",
    "Creating portfolios from image collections",
    "Preparing images for professional presentations",
    "Archiving important documents and receipts",
    "Converting artwork and designs for sharing",
  ]

  return (
    <ConversionPageLayout
      title="Image to PDF Converter"
      description="Convert your images to PDF format instantly. Create professional documents from JPG, PNG, and WebP images with our free online converter."
      fromFormat="Image"
      toFormat="PDF"
      benefits={benefits}
      useCases={useCases}
      defaultTargetFormat="pdf"
    />
  )
}
