import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service - Image Converter",
  description:
    "Terms of service for our free image conversion tool. Learn about usage guidelines and service limitations.",
  keywords: "terms of service, usage terms, image converter, legal",
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Terms of Service</h1>
          <p className="text-xl text-muted-foreground">Last updated: December 2024</p>
        </div>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-3xl font-bold mb-4">Acceptance of Terms</h2>
            <p className="text-muted-foreground">
              By accessing and using ImageConverter, you accept and agree to be bound by the terms and provision of this
              agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Service Description</h2>
            <p className="text-muted-foreground">
              ImageConverter provides free online image conversion services, allowing users to convert between various
              image formats including JPG, PNG, WebP, and PDF. All conversions are processed locally in your browser for
              maximum privacy and security.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Acceptable Use</h2>
            <p className="text-muted-foreground mb-4">
              You agree to use our service only for lawful purposes. You may not:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Upload or convert images that contain illegal, harmful, or offensive content</li>
              <li>Attempt to reverse engineer, modify, or interfere with the service</li>
              <li>Use the service to violate any applicable laws or regulations</li>
              <li>Attempt to overwhelm our servers with excessive requests</li>
              <li>Use the service for commercial purposes without permission</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Intellectual Property</h2>
            <p className="text-muted-foreground">
              You retain all rights to the images you convert using our service. We do not claim any ownership or rights
              to your content. The ImageConverter service, including its design, functionality, and code, is protected
              by copyright and other intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Service Availability</h2>
            <p className="text-muted-foreground">
              We strive to maintain high availability of our service, but we do not guarantee uninterrupted access. The
              service may be temporarily unavailable due to maintenance, updates, or technical issues. We reserve the
              right to modify or discontinue the service at any time.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Disclaimer of Warranties</h2>
            <p className="text-muted-foreground">
              The service is provided "as is" without any warranties, express or implied. We do not warrant that the
              service will be error-free, secure, or available at all times. Use of the service is at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Limitation of Liability</h2>
            <p className="text-muted-foreground">
              In no event shall ImageConverter be liable for any indirect, incidental, special, consequential, or
              punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible
              losses, resulting from your use of the service.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Privacy</h2>
            <p className="text-muted-foreground">
              Your privacy is important to us. Please review our{" "}
              <a href="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </a>
              , which also governs your use of the service, to understand our practices.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Changes to Terms</h2>
            <p className="text-muted-foreground">
              We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting
              to this page. Your continued use of the service after any changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
            <p className="text-muted-foreground">
              If you have any questions about these Terms of Service, please{" "}
              <a href="/contact" className="text-primary hover:underline">
                contact us
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
