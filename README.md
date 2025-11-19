# KMS Construction Website

A modern, responsive website for KMS Construction - leading tile dealers and tile laying experts in Namakkal, Tamil Nadu.

## Features

- 🏠 **Home Page** - Hero section, services preview, stats, and testimonials
- 📖 **About Us** - Company story, mission, and values
- 🛠️ **Services** - Detailed service pages with features
- 🖼️ **Projects/Gallery** - Project showcase with lightbox modal
- 📞 **Contact** - Contact information, map, and WhatsApp integration
- 📝 **Booking Form** - Service booking with API integration and WhatsApp redirect
- 💬 **WhatsApp Button** - Floating chat button for instant contact
- 🎨 **Modern Design** - Clean, light blue theme with Framer Motion animations
- 📱 **Fully Responsive** - Works perfectly on all devices
- 🔍 **SEO Optimized** - Meta tags and structured data

## Technology Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations
- **Lucide React** - Modern icon library

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Deployment

This project is ready to deploy on Vercel:

1. Push your code to GitHub
2. Import the project in Vercel
3. Deploy automatically

Or use Vercel CLI:
```bash
npm i -g vercel
vercel
```

## Configuration

### Update Contact Information

Edit the following files to update contact details:
- `components/Footer.tsx` - Footer contact info
- `components/WhatsAppButton.tsx` - WhatsApp phone number
- `app/contact/page.tsx` - Contact page details
- `app/book/page.tsx` - Booking form WhatsApp number
- `app/api/book/route.ts` - API endpoint (add email/SMS integration)

### Update Google Maps

Replace the Google Maps embed URL in `app/contact/page.tsx` with your actual location coordinates.

### Customize Colors

Edit `tailwind.config.ts` to customize the color theme.

## Project Structure

```
├── app/
│   ├── api/
│   │   └── book/
│   │       └── route.ts          # Booking API endpoint
│   ├── about/
│   │   └── page.tsx              # About Us page
│   ├── book/
│   │   └── page.tsx              # Booking form page
│   ├── contact/
│   │   └── page.tsx              # Contact page
│   ├── projects/
│   │   └── page.tsx              # Projects/Gallery page
│   ├── services/
│   │   └── page.tsx              # Services page
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Home page
├── components/
│   ├── Footer.tsx                # Footer component
│   ├── Hero.tsx                  # Hero section component
│   ├── Navbar.tsx                # Navigation bar
│   ├── Testimonials.tsx          # Testimonials section
│   └── WhatsAppButton.tsx        # Floating WhatsApp button
└── package.json
```

## License

This project is created for KMS Construction.



