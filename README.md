# ImgXpress 🖼️

A lightning-fast, secure, and free online image converter built with Next.js 15, React 19, and TypeScript. Convert images between JPG, PNG, WebP, and PDF formats instantly with no registration required.

![ImgXpress](https://img.shields.io/badge/ImgXpress-Image%20Converter-blue?style=for-the-badge&logo=next.js)
![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.9-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

- **🚀 Lightning Fast Conversion** - Convert images in seconds with optimized algorithms
- **🔒 100% Secure** - All processing happens locally in your browser
- **📱 Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **🎨 Modern UI** - Beautiful, intuitive interface with dark/light theme support
- **🔄 Multiple Formats** - Support for JPG, PNG, WebP, and PDF conversions
- **📊 Quality Control** - Adjustable quality settings and size optimization
- **🎯 No Registration** - Start converting immediately without any signup
- **♾️ Unlimited Use** - Convert as many images as you need, completely free

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) with custom animations
- **UI Components**: [Radix UI](https://www.radix-ui.com/) primitives
- **Icons**: [Lucide React](https://lucide.dev/)
- **Forms**: [React Hook Form](https://react-hook-form.com/) with Zod validation
- **Theming**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Fonts**: [Geist](https://vercel.com/font) by Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/imgxpress.git
   cd imgxpress
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Run the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

### Build for Production

```bash
# Build the application
pnpm build

# Start the production server
pnpm start
```

## 📁 Project Structure

```
imgxpress/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── blog/              # Blog page
│   ├── contact/           # Contact page
│   ├── faq/               # FAQ page
│   ├── how-it-works/      # How it works page
│   ├── jpg-to-png/        # JPG to PNG converter
│   ├── png-to-jpg/        # PNG to JPG converter
│   ├── pdf-converter/     # PDF converter
│   ├── webp-converter/    # WebP converter
│   ├── privacy/           # Privacy policy
│   ├── terms/             # Terms of service
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── image-converter.tsx # Main converter component
│   ├── hero-section.tsx   # Hero section
│   ├── header.tsx         # Navigation header
│   ├── footer.tsx         # Footer component
│   └── ...
├── lib/                  # Utility libraries
│   ├── image-converter.ts # Core conversion logic
│   └── utils.ts          # Helper functions
├── hooks/                # Custom React hooks
├── public/               # Static assets
└── styles/               # Global styles
```

## 🎯 Key Features Implementation

### Image Conversion Engine
The core conversion logic is implemented in `lib/image-converter.ts` using HTML5 Canvas API for client-side processing:

- **Format Support**: JPG, PNG, WebP, PDF
- **Quality Control**: Adjustable compression settings
- **Size Optimization**: Automatic dimension calculations
- **Privacy First**: All processing happens locally

### Modern UI Components
Built with Radix UI primitives and Tailwind CSS for a consistent, accessible design:

- **Responsive Design**: Mobile-first approach
- **Dark/Light Themes**: System preference detection
- **Accessibility**: WCAG compliant components
- **Animations**: Smooth transitions and micro-interactions

### Performance Optimizations
- **Client-side Processing**: No server uploads required
- **Lazy Loading**: Components load on demand
- **Optimized Bundles**: Next.js automatic code splitting
- **Image Optimization**: Built-in Next.js image optimization

## 🌟 Supported Formats

| Format | Input | Output | Features |
|--------|-------|--------|----------|
| **JPG/JPEG** | ✅ | ✅ | High compression, web-friendly |
| **PNG** | ✅ | ✅ | Lossless, transparency support |
| **WebP** | ✅ | ✅ | Modern format, excellent compression |
| **PDF** | ✅ | ✅ | Document format conversion |

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file in the root directory:

```env
# Optional: Analytics tracking
NEXT_PUBLIC_GA_ID=your-google-analytics-id

# Optional: Contact form endpoint
CONTACT_FORM_ENDPOINT=your-contact-form-url
```

### Customization
- **Themes**: Modify `components/theme-provider.tsx` for custom themes
- **Styling**: Update `app/globals.css` for global styles
- **Components**: Customize UI components in `components/ui/`

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Use conventional commit messages
- Ensure all tests pass
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Ladin Fazal**
- Email: [ladinawan4@gmail.com](mailto:ladinawan4@gmail.com)
- GitHub: [@yourusername](https://github.com/Ladinawan-01)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) team for the amazing framework
- [Vercel](https://vercel.com/) for hosting and deployment
- [Radix UI](https://www.radix-ui.com/) for accessible components
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [Lucide](https://lucide.dev/) for beautiful icons

## 📊 Project Status

![GitHub stars](https://img.shields.io/github/stars/yourusername/imgxpress?style=social)
![GitHub forks](https://img.shields.io/github/forks/yourusername/imgxpress?style=social)
![GitHub issues](https://img.shields.io/github/issues/yourusername/imgxpress)
![GitHub pull requests](https://img.shields.io/github/issues-pr/yourusername/imgxpress)

---

⭐ **Star this repository if you find it helpful!**

Made with ❤️ by [Ladin Fazal](mailto:ladinawan4@gmail.com)
