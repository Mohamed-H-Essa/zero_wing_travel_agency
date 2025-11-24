# Travel Agency Landing Page

A beautiful, fully responsive travel agency landing page built with React, TypeScript, and Tailwind CSS, featuring a stunning hero section and comprehensive travel booking interface.

## Features ✨

### Hero Section
- **Full-screen immersive hero** with animated background
- **Smooth animations** including subtle zoom, fade-in-up, and bounce effects
- **Responsive design** that adapts to all screen sizes
- **Call-to-action button** with smooth scroll to tours section
- **Custom background image** support with gradient overlay

### Complete Landing Page
- **Fixed navigation header** with scroll-based transparency
- **Social proof section** showcasing trust indicators
- **Featured tours** with detailed cards and ratings
- **Popular destinations** showcase
- **Why choose us** section with compelling features
- **FAQ section** for common customer questions
- **Footer** with comprehensive links and contact information
- **Help widget** for instant customer support

### Technical Features
- **React 18** with TypeScript for type safety
- **Tailwind CSS** for responsive styling
- **Custom animations** defined in Tailwind config
- **Responsive grid layouts** for all screen sizes
- **Accessible design** with proper semantic HTML
- **Modern ES6+** code with Vite build system

## Quick Start 🚀

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure 📁

```
src/
├── components/
│   ├── MinimalHero.tsx       # Main hero section with animations
│   ├── Header.tsx            # Fixed navigation header
│   ├── SocialProof.tsx       # Trust indicators
│   ├── FeaturedTours.tsx     # Tour cards with ratings
│   ├── Destinations.tsx      # Popular destinations
│   ├── WhyChooseUs.tsx       # Value propositions
│   ├── FAQ.tsx               # Frequently asked questions
│   ├── Footer.tsx            # Site footer
│   └── HelpWidget.tsx        # Customer support widget
├── App.tsx                   # Main application component
├── main.tsx                  # Application entry point
└── index.css                 # Global styles
```

## Customization 🎨

### Hero Section
- Update background image in `App.tsx`
- Modify title and overline text
- Customize CTA button text and action
- Adjust animations in `tailwind.config.js`

### Colors & Branding
- Primary color: Blue (#3B82F6)
- Accent color: Orange (#FF8A3D)
- Update colors in component files and Tailwind config

### Content
- Tours data in `FeaturedTours.tsx`
- Destinations in `Destinations.tsx`
- FAQ content in `FAQ.tsx`
- Company information in `Footer.tsx`

## Animations 🎭

Custom animations defined in Tailwind config:
- `subtle-zoom`: 20s background zoom effect
- `fade-in-up`: Entrance animation for hero content
- `bounce-subtle`: Scroll indicator animation

## Responsive Design 📱

- **Mobile-first** approach
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Flexible grid layouts** for all components
- **Touch-friendly** navigation and interactions

## Performance 🚀

- **Optimized images** using Unsplash URLs with compression
- **Minimal dependencies** for fast loading
- **Tree-shaking** with Vite for smaller bundles
- **CSS purging** with Tailwind for minimal stylesheets

## Browser Support 🌐

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment 🚀

The project is ready for deployment on platforms like Vercel, Netlify, or any static hosting service.

```bash
npm run build
# Upload dist/ folder to your hosting provider
```

---

Built with ❤️ using React, TypeScript, and Tailwind CSS