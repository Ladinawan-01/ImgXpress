import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Upload, Settings, Download, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "How It Works - Image Conversion Process Explained",
  description:
    "Learn how our free image converter works. Understand the conversion process, supported formats, and why your files stay private.",
  keywords: "how it works, image conversion, process, tutorial, guide",
}

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-background py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">How It Works</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our image converter uses advanced browser technology to convert your images locally, ensuring privacy and
            speed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="text-center">
            <CardContent className="p-6 space-y-4">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                1
              </div>
              <Upload className="h-8 w-8 mx-auto text-primary" />
              <h3 className="text-lg font-semibold">Upload Image</h3>
              <p className="text-sm text-muted-foreground">
                Select your image file or drag and drop it into the upload area
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6 space-y-4">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                2
              </div>
              <Settings className="h-8 w-8 mx-auto text-primary" />
              <h3 className="text-lg font-semibold">Choose Format</h3>
              <p className="text-sm text-muted-foreground">
                Select the target format you want to convert your image to
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6 space-y-4">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                3
              </div>
              <Shield className="h-8 w-8 mx-auto text-primary" />
              <h3 className="text-lg font-semibold">Process Locally</h3>
              <p className="text-sm text-muted-foreground">
                Your image is converted in your browser - never uploaded to servers
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6 space-y-4">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                4
              </div>
              <Download className="h-8 w-8 mx-auto text-primary" />
              <h3 className="text-lg font-semibold">Download Result</h3>
              <p className="text-sm text-muted-foreground">Download your converted image instantly in the new format</p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-3xl font-bold mb-6 text-center">The Technology Behind the Magic</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Client-Side Processing</h3>
                <p className="text-muted-foreground">
                  Our converter uses HTML5 Canvas API and modern JavaScript to process images directly in your browser.
                  This means your images never leave your device, ensuring complete privacy and security.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Advanced Algorithms</h3>
                <p className="text-muted-foreground">
                  We employ sophisticated compression and conversion algorithms to maintain image quality while
                  optimizing file size. Each format conversion is optimized for the best possible results.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6 text-center">Supported Format Conversions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">JPG/JPEG Format</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Best for photographs and images with many colors. Uses lossy compression for smaller file sizes.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Excellent for photos</li>
                    <li>• Smaller file sizes</li>
                    <li>• Universal compatibility</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">PNG Format</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Perfect for graphics with transparency. Uses lossless compression to preserve image quality.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Supports transparency</li>
                    <li>• Lossless compression</li>
                    <li>• Great for logos and graphics</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">WebP Format</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Modern format offering superior compression. Up to 35% smaller than JPG with similar quality.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Superior compression</li>
                    <li>• Faster web loading</li>
                    <li>• Modern browser support</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">PDF Format</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Universal document format perfect for sharing and archiving images in a professional format.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Universal compatibility</li>
                    <li>• Professional documents</li>
                    <li>• Perfect for archiving</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="bg-muted/30 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-center">Why Choose Our Converter?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center space-y-3">
                <Shield className="h-12 w-12 mx-auto text-primary" />
                <h3 className="text-lg font-semibold">100% Private</h3>
                <p className="text-sm text-muted-foreground">
                  Your images are processed locally and never uploaded to our servers
                </p>
              </div>
              <div className="text-center space-y-3">
                <Settings className="h-12 w-12 mx-auto text-primary" />
                <h3 className="text-lg font-semibold">High Quality</h3>
                <p className="text-sm text-muted-foreground">
                  Advanced algorithms ensure optimal quality in every conversion
                </p>
              </div>
              <div className="text-center space-y-3">
                <Download className="h-12 w-12 mx-auto text-primary" />
                <h3 className="text-lg font-semibold">Instant Results</h3>
                <p className="text-sm text-muted-foreground">
                  Fast processing with immediate download of converted files
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
