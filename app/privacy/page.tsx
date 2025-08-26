import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy - Image Converter",
  description:
    "Learn how we protect your privacy. Our image converter processes files locally in your browser without uploading to servers.",
  keywords: "privacy policy, data protection, image converter, security",
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Privacy Policy</h1>
          <p className="text-xl text-muted-foreground">Last updated: December 2024</p>
        </div>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-3xl font-bold mb-4">Our Commitment to Your Privacy</h2>
            <p className="text-muted-foreground">
              At ImageConverter, we are committed to protecting your privacy and ensuring the security of your personal
              information. This Privacy Policy explains how we collect, use, and protect your information when you use
              our image conversion services.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Information We Do NOT Collect</h2>
            <p className="text-muted-foreground mb-4">
              <strong>Your Images:</strong> All image conversions are processed locally in your browser. Your images are
              never uploaded to our servers, stored, or accessed by us in any way.
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>We do not store your uploaded images</li>
              <li>We do not analyze the content of your images</li>
              <li>We do not have access to your files during or after conversion</li>
              <li>We do not require registration or personal information to use our service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Information We May Collect</h2>
            <p className="text-muted-foreground mb-4">
              We may collect limited, non-personal information to improve our service:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>
                <strong>Usage Analytics:</strong> General usage statistics (page views, conversion counts) to understand
                how our service is used
              </li>
              <li>
                <strong>Technical Information:</strong> Browser type, operating system, and device information for
                compatibility purposes
              </li>
              <li>
                <strong>Error Logs:</strong> Technical error information to help us improve the service (no personal
                data included)
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">How We Use Information</h2>
            <p className="text-muted-foreground mb-4">Any information we collect is used solely to:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Improve the functionality and performance of our service</li>
              <li>Identify and fix technical issues</li>
              <li>Understand usage patterns to enhance user experience</li>
              <li>Ensure compatibility across different browsers and devices</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Third-Party Services</h2>
            <p className="text-muted-foreground mb-4">We may use third-party services for analytics and advertising:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>
                <strong>Google Analytics:</strong> To understand website usage (you can opt-out using browser settings)
              </li>
              <li>
                <strong>Google AdSense:</strong> To display relevant advertisements (subject to Google's privacy policy)
              </li>
            </ul>
            <p className="text-muted-foreground">
              These services have their own privacy policies and data collection practices.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Data Security</h2>
            <p className="text-muted-foreground">
              Since your images are processed locally in your browser and never transmitted to our servers, they remain
              completely secure on your device. We implement industry-standard security measures to protect any
              non-personal information we may collect.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Cookies</h2>
            <p className="text-muted-foreground">
              We may use cookies and similar technologies to enhance your experience and collect usage analytics. You
              can control cookie settings through your browser preferences.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Changes to This Policy</h2>
            <p className="text-muted-foreground">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an
              updated revision date. We encourage you to review this policy periodically.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
            <p className="text-muted-foreground">
              If you have any questions about this Privacy Policy or our data practices, please{" "}
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
