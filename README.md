# Bayside Green Solutions - Landscaping Service Website

A professional Next.js website for Bayside Green Solutions, a landscaping business serving the Bayside area of Melbourne, VIC.

## Features

- **Modern Next.js 14** with App Router
- **Tailwind CSS** for responsive, professional styling
- **SEO Optimized** pages with metadata
- **15 Location Pages** covering Bayside suburbs
- **6 Service Pages** for different landscaping services
- **Contact Page** with inquiry form
- **Click-to-call CTAs** throughout the site
- **Trust signals** and social proof elements
- **Mobile-responsive** design

## Pages Included

### Main Pages
- Homepage with hero, services overview, and trust signals
- Services overview page
- Locations overview page
- Contact page with form

### Service Pages (6)
1. Garden Design & Landscaping
2. Lawn Care & Maintenance
3. Tree & Hedge Trimming
4. Irrigation Systems
5. Paving & Retaining Walls
6. Garden Cleanup & Mulching

### Location Pages (15)
1. Brighton
2. Hampton
3. Sandringham
4. Black Rock
5. Beaumaris
6. Cheltenham
7. Mentone
8. Moorabbin
9. Highett
10. Parkdale
11. Mordialloc
12. Bentleigh
13. Carnegie
14. Elsternwick
15. Hampton East

## Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Deployment

This site is configured for static export and can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

The `next.config.js` is set up with `output: 'export'` for static HTML generation.

## Customization

### Update Phone Number
Search for `0400000000` and replace with actual business phone number.

### Update Email
Search for `info@baysidegreensolutions.com.au` and update as needed.

### Update Business Details
Modify content in:
- `app/page.tsx` - Homepage content
- `components/Footer.tsx` - Footer information
- `components/Header.tsx` - Header/navigation

### Add More Services or Locations
Follow the existing page structure in:
- `app/services/[service-name]/page.tsx`
- `app/locations/[suburb-name]/page.tsx`

## Technical Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Static Site Generation (SSG)

## License

Proprietary - All rights reserved by Bayside Green Solutions

