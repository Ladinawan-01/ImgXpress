import { ImageConverter } from "@/components/image-converter"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

interface ConversionPageLayoutProps {
  title: string
  description: string
  fromFormat: string
  toFormat: string
  benefits: string[]
  useCases: string[]
  defaultTargetFormat: "jpg" | "jpeg" | "png" | "webp" | "pdf"
}

export function ConversionPageLayout({
  title,
  description,
  fromFormat,
  toFormat,
  benefits,
  useCases,
  defaultTargetFormat,
}: ConversionPageLayoutProps) {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">{title}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">{description}</p>
        </div>
      </section>

      {/* Conversion Tool */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Convert {fromFormat} to {toFormat} Online
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Upload your {fromFormat} file and convert it to {toFormat} format instantly
            </p>
          </div>
          <ImageConverter defaultFormat={defaultTargetFormat} />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold mb-6">
                Why Convert {fromFormat} to {toFormat}?
              </h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Common Use Cases</h3>
              <div className="space-y-4">
                {useCases.map((useCase, index) => (
                  <Card key={index} className="border-l-4 border-l-primary">
                    <CardContent className="p-4">
                      <p className="text-sm text-muted-foreground">{useCase}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-12">
            How to Convert {fromFormat} to {toFormat}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                1
              </div>
              <h4 className="text-xl font-semibold">Upload Your File</h4>
              <p className="text-muted-foreground">
                Click "Choose File" or drag and drop your {fromFormat} image into the upload area
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                2
              </div>
              <h4 className="text-xl font-semibold">Convert Instantly</h4>
              <p className="text-muted-foreground">
                Click "Convert Now" and our tool will process your image to {toFormat} format
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                3
              </div>
              <h4 className="text-xl font-semibold">Download Result</h4>
              <p className="text-muted-foreground">
                Download your converted {toFormat} file immediately - no waiting, no registration required
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
