import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function FormatShowcase() {
  const formats = [
    {
      title: "JPG to PNG Converter",
      description:
        "Convert JPG images to PNG format with transparency support. Perfect for logos and graphics that need transparent backgrounds.",
      href: "/jpg-to-png",
      popular: true,
    },
    {
      title: "PNG to JPG Converter",
      description:
        "Convert PNG images to JPG format for smaller file sizes. Ideal for photos and images where transparency is not needed.",
      href: "/png-to-jpg",
      popular: true,
    },
    {
      title: "WebP Converter",
      description: "Convert images to/from modern WebP format for better compression and faster web loading times.",
      href: "/webp-converter",
      popular: false,
    },
    {
      title: "PDF Converter",
      description:
        "Convert images to PDF format for document sharing and printing. Combine multiple images into a single PDF.",
      href: "/pdf-converter",
      popular: false,
    },
  ]

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Supported Image Formats</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Convert between the most popular image formats with just a few clicks
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {formats.map((format) => (
            <Card key={format.title} className="relative overflow-hidden">
              {format.popular && (
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                  Popular
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-xl">{format.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{format.description}</p>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href={format.href} className="flex items-center justify-center gap-2">
                    Try Now <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
