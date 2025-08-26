import type { Metadata } from "next"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "FAQ - Frequently Asked Questions | Image Converter",
  description:
    "Find answers to common questions about our free image conversion tool. Learn about supported formats, file sizes, and more.",
  keywords: "faq, questions, help, image converter, support, file formats",
}

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-background py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Find answers to the most common questions about our image conversion tool.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-left">Is the image converter really free to use?</AccordionTrigger>
            <AccordionContent>
              Yes, our image converter is completely free to use. There are no hidden fees, subscription costs, or
              limits on the number of conversions you can perform. We believe image conversion should be accessible to
              everyone.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-left">Are my images safe and private?</AccordionTrigger>
            <AccordionContent>
              Absolutely. All image conversions happen locally in your browser using client-side processing. Your images
              are never uploaded to our servers, stored, or accessed by us in any way. Your files remain completely
              private on your device.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-left">What image formats do you support?</AccordionTrigger>
            <AccordionContent>
              We currently support conversion between JPG/JPEG, PNG, WebP, and PDF formats. You can convert from any of
              these formats to any other supported format. We're continuously working to add support for additional
              formats.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-left">Is there a file size limit?</AccordionTrigger>
            <AccordionContent>
              Since conversions happen in your browser, the main limitation is your device's available memory. Most
              modern devices can handle images up to 50-100MB without issues. Very large files may take longer to
              process or may not work on older devices with limited memory.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger className="text-left">Do I need to create an account?</AccordionTrigger>
            <AccordionContent>
              No registration or account creation is required. You can start converting images immediately without
              providing any personal information. Simply visit our website, upload your image, select the target format,
              and convert.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger className="text-left">Will the image quality be affected?</AccordionTrigger>
            <AccordionContent>
              We use advanced conversion algorithms to maintain the highest possible quality during conversion. However,
              some quality loss may occur when converting from lossless formats (like PNG) to lossy formats (like JPG).
              Converting from lossy to lossless formats will preserve the existing quality but cannot recover lost
              information.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7">
            <AccordionTrigger className="text-left">Can I convert multiple images at once?</AccordionTrigger>
            <AccordionContent>
              Currently, our tool processes one image at a time to ensure optimal performance and quality. We're working
              on adding batch conversion capabilities in future updates. For now, you can convert multiple images by
              repeating the process for each file.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8">
            <AccordionTrigger className="text-left">What browsers are supported?</AccordionTrigger>
            <AccordionContent>
              Our image converter works on all modern web browsers including Chrome, Firefox, Safari, and Edge. We
              recommend using the latest version of your browser for the best experience and performance.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-9">
            <AccordionTrigger className="text-left">Why should I choose WebP format?</AccordionTrigger>
            <AccordionContent>
              WebP is a modern image format that provides superior compression compared to JPG and PNG, resulting in
              smaller file sizes (up to 35% smaller) while maintaining high quality. This makes it ideal for web use as
              it reduces loading times and bandwidth usage.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-10">
            <AccordionTrigger className="text-left">Can I use this tool on mobile devices?</AccordionTrigger>
            <AccordionContent>
              Yes, our image converter is fully responsive and works on smartphones and tablets. The interface adapts to
              smaller screens, and you can upload images from your device's camera or gallery.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-11">
            <AccordionTrigger className="text-left">What if I encounter an error during conversion?</AccordionTrigger>
            <AccordionContent>
              If you experience any issues, try refreshing the page and attempting the conversion again. Make sure your
              image file is not corrupted and is in a supported format. If problems persist, please contact us through
              our support page with details about your browser, device, and the specific error you're encountering.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-12">
            <AccordionTrigger className="text-left">How can I provide feedback or suggestions?</AccordionTrigger>
            <AccordionContent>
              We welcome your feedback and suggestions! Please visit our contact page to send us your thoughts, feature
              requests, or report any issues. Your input helps us improve the service for everyone.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Didn't find what you were looking for?{" "}
            <a href="/contact" className="text-primary hover:underline">
              Contact us
            </a>{" "}
            and we'll be happy to help!
          </p>
        </div>
      </div>
    </main>
  )
}
