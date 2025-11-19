# Quick Start Guide

## Installation Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Before Deployment

### Update Contact Information

1. **Phone Numbers** - Update in these files:
   - `components/Footer.tsx` (line with phone number)
   - `components/WhatsAppButton.tsx` (phoneNumber variable)
   - `app/contact/page.tsx` (phoneNumber variable)
   - `app/book/page.tsx` (phoneNumber in generateWhatsAppMessage)

2. **Email Address** - Update in:
   - `components/Footer.tsx`
   - `app/contact/page.tsx`

3. **Google Maps** - Update in:
   - `app/contact/page.tsx` - Replace the iframe src with your actual location

4. **Domain Name** - Update in:
   - `app/sitemap.ts` - Replace `kmsconstruction.com` with your domain
   - `app/robots.ts` - Replace `kmsconstruction.com` with your domain
   - `public/robots.txt` - Replace `kmsconstruction.com` with your domain

### Customize Images

Replace placeholder images with your actual project photos:
- Update image URLs in `app/projects/page.tsx`
- Update background images in `components/Hero.tsx`
- Update images in `app/about/page.tsx` and `app/services/page.tsx`

### API Integration (Optional)

The booking API endpoint (`app/api/book/route.ts`) currently just logs the data. To integrate with email/SMS:

1. Add email service (e.g., Resend, SendGrid)
2. Add SMS service (e.g., Twilio)
3. Add database to store bookings
4. Update the route handler accordingly

## Deployment to Vercel

1. Push code to GitHub
2. Import project in Vercel dashboard
3. Deploy automatically

Or use CLI:
```bash
npm i -g vercel
vercel
```

## Features Included

✅ Responsive design for all devices
✅ SEO optimized with meta tags
✅ WhatsApp integration
✅ Contact form with API endpoint
✅ Project gallery with lightbox
✅ Smooth animations with Framer Motion
✅ Modern UI with Tailwind CSS
✅ Testimonials section
✅ Service booking system

## Color Theme

- Primary Blue: #3B82F6
- Light Blue: #60A5FA
- Very Light Blue: #BFDBFE
- Dark: #1F2937

All colors are configured in `tailwind.config.ts` and can be customized.



