import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import { Analytics } from "@vercel/analytics/react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/theme-provider"
import { WelcomePopup } from "@/components/welcome-popup"

export const metadata: Metadata = {
  title: "ImgXpress - Fast & Free Image Converter | JPG, PNG, WebP, PDF",
  description:
    "Convert images between JPG, PNG, WebP, and PDF formats instantly with ImgXpress. Fast, secure, and completely free online image converter with no registration required.",
  keywords:
    "ImgXpress, image converter, jpg to png, png to jpg, webp converter, pdf converter, free image conversion, online image converter, fast image conversion",
  authors: [{ name: "ImgXpress" }],
  creator: "ImgXpress",
  publisher: "ImgXpress",
  robots: "index, follow",
  openGraph: {
    title: "ImgXpress - Fast & Free Image Converter | JPG, PNG, WebP, PDF",
    description:
      "Convert images between JPG, PNG, WebP, and PDF formats instantly with ImgXpress. Fast, secure, and completely free online image converter.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "ImgXpress - Fast & Free Image Converter | JPG, PNG, WebP, PDF",
    description:
      "Convert images between JPG, PNG, WebP, and PDF formats instantly with ImgXpress. Fast, secure, and completely free online image converter.",
  },
    generator: 'ImgXpress'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header />
          {children}
          <Footer />
          <Toaster />
          <WelcomePopup />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
