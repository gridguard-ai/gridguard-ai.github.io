# GridGuard Landing Page

A modern, responsive landing page for GridGuard — recycled Li-ion battery packs for home emergency power backup.

Built with **React 18**, **Vite**, and **Tailwind CSS**.

## Features

- Fully responsive design (mobile-first)
- Accessible (WCAG AA compliant, keyboard navigation, ARIA attributes)
- SEO optimized (meta tags, Open Graph, JSON-LD structured data)
- Performance optimized (lazy loading, preloading, minimal dependencies)
- Modular component architecture
- Centralized content configuration
- Scroll-triggered animations
- Client-side email validation

## Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository (or download)
cd gridguard-landing

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:3000`

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

## Project Structure

```
gridguard-landing/
├── public/
│   ├── assets/
│   │   └── placeholder-product.svg  # Main product image
│   └── favicon.svg                  # Site favicon
├── src/
│   ├── components/
│   │   ├── Header.jsx      # Navigation with mobile menu
│   │   ├── Hero.jsx        # Above-the-fold section
│   │   ├── Features.jsx    # Feature highlights
│   │   ├── HowItWorks.jsx  # Process steps
│   │   ├── Specs.jsx       # Technical specifications
│   │   ├── FAQ.jsx         # Accessible accordion
│   │   ├── CTABar.jsx      # Email capture form
│   │   └── Footer.jsx      # Site footer
│   ├── utils/
│   │   └── constants.js    # All content & configuration
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css           # Tailwind + custom styles
├── index.html              # Entry HTML with meta tags
├── tailwind.config.js      # Tailwind configuration
├── vite.config.js          # Vite configuration
└── package.json
```

## Customization

### Replacing the Product Image

1. Add your product image to `public/assets/`
2. Update the path in `src/utils/constants.js`:

```javascript
export const IMAGES = {
  heroProduct: '/assets/your-product-image.png',
  // ...
};
```

3. For best results, use:
   - Format: PNG or WebP with transparency, or JPG
   - Size: 500-800px width recommended
   - Aspect ratio: roughly 5:4 works well with the layout

### Changing Brand Colors

The site uses three brand colors:
- **Primary (Orange)**: `#D97706` - Smart/power features
- **Eco (Green)**: `#059669` - Sustainability features  
- **Brown**: `#78350F` - Safety/reliability features

Update the CSS custom properties in `src/index.css`:

```css
:root {
  /* Primary - Orange */
  --color-primary: #D97706;
  --color-primary-light: #F59E0B;
  --color-primary-dark: #B45309;
  
  /* Eco - Green */
  --color-eco: #059669;
  --color-eco-light: #10B981;
  --color-eco-dark: #047857;
  
  /* Brown */
  --color-brown: #78350F;
  --color-brown-light: #92400E;
  --color-brown-dark: #451A03;
}
```

Also update `tailwind.config.js` for Tailwind utility classes to match.

### Adding Background Images

Each section supports custom background images. Update `src/utils/constants.js`:

```javascript
export const BACKGROUNDS = {
  hero: '/assets/hero-bg.jpg',        // Set to image URL
  features: null,                      // Or null for gradient
  howItWorks: '/assets/process-bg.jpg',
  specs: null,
  faq: null,
  cta: '/assets/cta-bg.jpg',
};
```

When a background image is set, sections automatically apply a gradient overlay for text readability.

### Updating Content

All text content is centralized in `src/utils/constants.js`:

- **BRAND** — Product name, tagline, description
- **HERO** — Hero section headlines and CTAs
- **FEATURES** — Feature cards (title, description, icon)
- **HOW_IT_WORKS** — Process steps
- **SPECS** — Technical specifications
- **FAQ** — Questions and answers
- **CTA** — Email capture form text
- **FOOTER** — Footer links and social media

### Changing Fonts

Fonts are loaded via Google Fonts in `index.html`. To change:

1. Update the Google Fonts link in `index.html`
2. Update `tailwind.config.js`:

```javascript
fontFamily: {
  sans: ['Your Body Font', 'system-ui', 'sans-serif'],
  display: ['Your Display Font', 'Georgia', 'serif']
}
```

## Deployment

### Netlify

1. Push your code to GitHub
2. Connect your repo to [Netlify](https://netlify.com)
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

Or use the Netlify CLI:

```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### Vercel

1. Push your code to GitHub
2. Import your repo at [Vercel](https://vercel.com)
3. Vercel auto-detects Vite settings

Or use the Vercel CLI:

```bash
npm install -g vercel
vercel --prod
```

### Static Hosting

The `dist` folder after `npm run build` contains static files that can be deployed to any static hosting service (GitHub Pages, Cloudflare Pages, AWS S3, etc.).

## Adding Analytics

### Google Analytics 4

Add the following to `index.html` just before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

Replace `G-XXXXXXXXXX` with your GA4 measurement ID.

## Next Steps

1. **Replace placeholder image** — Add your real product photos
2. **Update meta tags** — Change the canonical URL and OG image in `index.html`
3. **Connect email form** — Integrate with your email service (Mailchimp, ConvertKit, etc.)
4. **Add analytics** — Track visitor behavior
5. **Set up domain** — Point your custom domain to deployment

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## License

MIT License — feel free to use this template for your projects.

---

Built with care for a sustainable future.
