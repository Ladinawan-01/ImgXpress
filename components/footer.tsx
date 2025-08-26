import Link from "next/link"
import { FileImage } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <FileImage className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">ImageConverter</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Free online image converter supporting JPG, PNG, WebP, and PDF formats. Fast, secure, and easy to use.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Converters</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/jpg-to-png" className="text-muted-foreground hover:text-foreground">
                  JPG to PNG
                </Link>
              </li>
              <li>
                <Link href="/png-to-jpg" className="text-muted-foreground hover:text-foreground">
                  PNG to JPG
                </Link>
              </li>
              <li>
                <Link href="/webp-converter" className="text-muted-foreground hover:text-foreground">
                  WebP Converter
                </Link>
              </li>
              <li>
                <Link href="/pdf-converter" className="text-muted-foreground hover:text-foreground">
                  PDF Converter
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  About
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-muted-foreground hover:text-foreground">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-foreground">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 ImageConverter. All rights reserved. Free online image conversion tool.</p>
        </div>
      </div>
    </footer>
  )
}
