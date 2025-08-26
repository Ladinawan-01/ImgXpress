import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, User } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Blog - Image Conversion Tips and Guides",
  description:
    "Learn about image formats, conversion best practices, and optimization tips. Stay updated with the latest in image processing.",
  keywords: "blog, image conversion, tips, guides, optimization, formats",
}

export default function BlogPage() {
  const blogPosts = [
    {
      title: "JPG vs PNG vs WebP: Which Format Should You Choose?",
      excerpt:
        "Understanding the differences between image formats and when to use each one for optimal results and file sizes.",
      date: "December 15, 2024",
      author: "ImageConverter Team",
      slug: "jpg-vs-png-vs-webp-comparison",
    },
    {
      title: "How to Optimize Images for Web Performance",
      excerpt: "Learn the best practices for optimizing images to improve website loading speed and user experience.",
      date: "December 10, 2024",
      author: "ImageConverter Team",
      slug: "optimize-images-web-performance",
    },
    {
      title: "Understanding Image Compression: Lossy vs Lossless",
      excerpt:
        "Dive deep into the world of image compression and understand when to use lossy vs lossless compression methods.",
      date: "December 5, 2024",
      author: "ImageConverter Team",
      slug: "image-compression-lossy-vs-lossless",
    },
    {
      title: "The Complete Guide to WebP Format",
      excerpt:
        "Everything you need to know about WebP format, its benefits, browser support, and how to implement it effectively.",
      date: "November 28, 2024",
      author: "ImageConverter Team",
      slug: "complete-guide-webp-format",
    },
    {
      title: "Best Practices for Image SEO",
      excerpt:
        "Learn how to optimize your images for search engines with proper file names, alt text, and format selection.",
      date: "November 20, 2024",
      author: "ImageConverter Team",
      slug: "image-seo-best-practices",
    },
    {
      title: "Converting Images for Social Media: Platform-Specific Guidelines",
      excerpt:
        "Optimize your images for different social media platforms with the right dimensions, formats, and quality settings.",
      date: "November 15, 2024",
      author: "ImageConverter Team",
      slug: "social-media-image-optimization",
    },
  ]

  return (
    <main className="min-h-screen bg-background py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Image Conversion Blog</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Tips, guides, and insights about image formats, conversion best practices, and optimization techniques.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.slug} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl leading-tight">
                  <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                    {post.title}
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {post.author}
                  </div>
                </div>
                <Link href={`/blog/${post.slug}`} className="inline-block text-primary hover:underline font-medium">
                  Read More →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-muted/30 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-6">
              Get the latest tips and guides about image conversion and optimization delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-md border border-input bg-background"
              />
              <button className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
