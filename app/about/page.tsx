import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us - Free Image Converter Tool",
  description:
    "Learn about our mission to provide free, secure, and easy-to-use image conversion tools. Convert JPG, PNG, WebP, and PDF formats online.",
  keywords: "about image converter, free tools, image conversion, online converter",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">About ImageConverter</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're dedicated to providing free, secure, and easy-to-use image conversion tools for everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center">
            <CardContent className="p-6 space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">For Everyone</h3>
              <p className="text-muted-foreground">
                Our tools are designed for content creators, developers, designers, and anyone who needs quick image
                conversions.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6 space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Our Mission</h3>
              <p className="text-muted-foreground">
                To make image conversion accessible, fast, and secure without requiring registration or software
                installation.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6 space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Quality First</h3>
              <p className="text-muted-foreground">
                We use advanced algorithms to ensure your images maintain their quality during the conversion process.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold mb-6">Why We Built This Tool</h2>
          <p className="text-muted-foreground mb-6">
            In today's digital world, we often need to convert images between different formats for various purposes.
            Whether you're a web developer optimizing images for faster loading, a content creator preparing graphics
            for social media, or someone who simply needs to convert a file format, we believe these tools should be
            accessible to everyone.
          </p>

          <h2 className="text-3xl font-bold mb-6">Our Commitment to Privacy</h2>
          <p className="text-muted-foreground mb-6">
            Your privacy is our top priority. All image conversions happen directly in your browser using client-side
            processing. This means your images never leave your device and are never uploaded to our servers. We don't
            store, analyze, or have access to any of your files.
          </p>

          <h2 className="text-3xl font-bold mb-6">Supported Formats</h2>
          <p className="text-muted-foreground mb-4">We currently support conversion between these popular formats:</p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
            <li>
              <strong>JPG/JPEG:</strong> Perfect for photographs and images with many colors
            </li>
            <li>
              <strong>PNG:</strong> Ideal for images with transparency and graphics with few colors
            </li>
            <li>
              <strong>WebP:</strong> Modern format offering superior compression for web use
            </li>
            <li>
              <strong>PDF:</strong> Universal document format for sharing and archiving
            </li>
          </ul>

          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
          <p className="text-muted-foreground">
            Have questions, suggestions, or feedback? We'd love to hear from you. Visit our{" "}
            <a href="/contact" className="text-primary hover:underline">
              contact page
            </a>{" "}
            to get in touch with our team.
          </p>
        </div>
      </div>
    </main>
  )
}
