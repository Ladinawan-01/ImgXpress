import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MessageSquare, HelpCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us - Image Converter Support",
  description:
    "Get in touch with our team for support, feedback, or questions about our free image conversion tools. We're here to help!",
  keywords: "contact, support, help, image converter, feedback",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Have questions, suggestions, or need help? We're here to assist you with our image conversion tools.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input id="subject" placeholder="How can we help?" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Tell us more about your question or feedback..." rows={5} />
                </div>
                <Button className="w-full">Send Message</Button>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <MessageSquare className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">General Inquiries</h3>
                </div>
                <p className="text-muted-foreground">
                  Questions about our image conversion tools, features, or general feedback about your experience.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <HelpCircle className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">Technical Support</h3>
                </div>
                <p className="text-muted-foreground">
                  Having trouble with conversions? Need help with a specific file format? We're here to help you resolve
                  any technical issues.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">Frequently Asked Questions</h3>
                <p className="text-muted-foreground">
                  Before reaching out, you might find your answer in our{" "}
                  <a href="/faq" className="text-primary hover:underline">
                    FAQ section
                  </a>
                  . We've compiled answers to the most common questions about image conversion.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">Response Time</h3>
                <p className="text-muted-foreground">
                  We typically respond to all inquiries within 24-48 hours. For urgent technical issues, please include
                  detailed information about your browser, operating system, and the specific problem you're
                  experiencing.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
