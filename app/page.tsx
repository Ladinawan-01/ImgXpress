import { ImageConverter } from "@/components/image-converter"
import { HeroSection } from "@/components/hero-section"
import { FormatShowcase } from "@/components/format-showcase"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />

      <section id="converter" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Convert Your Images Now</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Upload your image, select the target format, and download your converted file in seconds
            </p>
          </div>
          <ImageConverter />
        </div>
      </section>

      <FormatShowcase />

      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">Why Choose Our Image Converter?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">No Registration Required</h3>
                <p className="text-muted-foreground">
                  Start converting images immediately without creating an account or providing personal information.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Unlimited Conversions</h3>
                <p className="text-muted-foreground">
                  Convert as many images as you need, whenever you need. No limits, no restrictions.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">High Quality Output</h3>
                <p className="text-muted-foreground">
                  Our advanced conversion algorithms ensure your images maintain their quality during conversion.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Privacy Protected</h3>
                <p className="text-muted-foreground">
                  All conversions happen in your browser. Your images never leave your device.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
