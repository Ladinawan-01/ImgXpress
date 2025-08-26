import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Zap, Shield, Globe } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-cyan-500 to-amber-500 bg-clip-text text-transparent">ImgXpress</span>{" "}
            - Lightning Fast <span className="text-primary">Image Converter</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience the fastest way to convert images between JPG, PNG, WebP, and PDF formats. With ImgXpress, enjoy
            instant conversions, complete privacy, and zero registration hassles.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <Link href="#converter">Start Converting</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
              <Link href="/about">Learn More</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Lightning Fast</h3>
                <p className="text-muted-foreground">Convert images in seconds with our optimized conversion engine</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">100% Secure</h3>
                <p className="text-muted-foreground">
                  Your files are processed locally and never uploaded to our servers
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Works Everywhere</h3>
                <p className="text-muted-foreground">
                  Use on any device with a web browser - no software installation needed
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
