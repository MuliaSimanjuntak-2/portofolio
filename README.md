# Portfolio Website - Nama Kamu

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features a clean design with royal blue and cream color scheme.

## 🚀 Features

- **Modern Design**: Clean, professional design with royal blue (#4169E1) and cream (#F7EED6) color scheme
- **Fully Responsive**: Mobile-first design that works perfectly on all devices
- **Performance Optimized**: Built with Next.js 16+ and optimized for Core Web Vitals
- **SEO Ready**: Comprehensive SEO setup with metadata, sitemap, and structured data
- **Accessibility**: WCAG AA compliant with proper focus states and semantic HTML
- **Type Safe**: Full TypeScript implementation for better development experience

## 📁 Project Structure

```
my-portfolio/
├── app/                     # Next.js App Router
│   ├── projects/[slug]/     # Dynamic project pages
│   ├── globals.css          # Global styles with Tailwind
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   ├── sitemap.ts          # Auto-generated sitemap
│   └── robots.ts           # Robots.txt configuration
├── components/             # React components
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Hero section
│   ├── ProjectCard.tsx     # Individual project card
│   ├── ProjectList.tsx     # Projects grid
│   ├── Skills.tsx          # Skills section
│   ├── ContactForm.tsx     # Contact form with Formspree
│   └── Footer.tsx          # Footer with social links
├── data/
│   └── projects.json       # Project data
├── lib/
│   └── projects.ts         # Project utilities
└── public/
    └── images/             # Static images
```

## 🛠 Tech Stack

- **Framework**: Next.js 16+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Fonts**: Inter (body) + Poppins (headings) from Google Fonts
- **Form Handling**: Formspree integration
- **Deployment**: Vercel-ready configuration

## 🎨 Design System

### Colors
- **Primary (Royal Blue)**: `#4169E1`
- **Primary Dark**: `#2447B0`
- **Accent (Cream)**: `#F7EED6`
- **Background**: `#FAFAFB`
- **Text**: `#0F172A`
- **Border/Muted**: `#E6E9EE`

### Typography
- **Headings**: Poppins (semibold/bold)
- **Body**: Inter (regular)
- **Font Loading**: Optimized with `display: swap`

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/username/my-portfolio.git
   cd my-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## ⚙️ Configuration

### 1. Personal Information
Update the following files with your information:

- `app/layout.tsx` - Metadata and structured data
- `components/Hero.tsx` - Personal introduction
- `components/ContactForm.tsx` - Contact information
- `components/Footer.tsx` - Social links
- `data/projects.json` - Your projects

### 2. Contact Form Setup
Replace `YOUR_FORMSPREE_ID` in `components/ContactForm.tsx`:

```typescript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  // ... form configuration
});
```

### 3. Domain Configuration
Update URLs in:
- `app/layout.tsx` - Open Graph URLs
- `app/sitemap.ts` - Base URL for sitemap
- `app/robots.ts` - Sitemap URL

### 4. Add Your Images
Replace placeholder images in `/public/images/`:
- `og-image.jpg` (1200x630) - Open Graph image
- `projects/` - Project screenshots
- Profile photo (optional)

## 📊 SEO & Performance

### Built-in SEO Features
- ✅ Metadata optimization
- ✅ Open Graph tags
- ✅ Twitter Cards
- ✅ JSON-LD structured data
- ✅ Auto-generated sitemap
- ✅ Robots.txt
- ✅ Canonical URLs

### Performance Optimizations
- ✅ Next.js Image optimization
- ✅ Font preloading
- ✅ Static generation (SSG)
- ✅ Automatic code splitting
- ✅ Optimized CSS with Tailwind

## 🎯 Accessibility

- ✅ Semantic HTML structure
- ✅ ARIA labels and roles
- ✅ Keyboard navigation support
- ✅ Focus indicators
- ✅ Color contrast compliance
- ✅ Screen reader friendly

## 📱 Responsive Design

- **Mobile**: 320px+ (single column layout)
- **Tablet**: 768px+ (two column layout)
- **Desktop**: 1024px+ (three column layout)
- **Large**: 1280px+ (optimized spacing)

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will auto-detect Next.js and deploy

3. **Custom Domain** (Optional)
   - Add your custom domain in Vercel dashboard
   - Update URLs in configuration files

### Environment Variables
No environment variables required for basic setup. Add Formspree endpoint or analytics as needed.

## 🔧 Customization

### Adding New Projects
Add new projects to `data/projects.json`:

```json
{
  "id": "4",
  "slug": "new-project",
  "title": "Project Name",
  "short": "Brief description",
  "long": "Detailed description for case study",
  "tech": ["React", "Node.js"],
  "image": "/images/projects/new-project.jpg",
  "repo": "https://github.com/username/repo",
  "live": "https://project-demo.com",
  "date": "2024-01-01",
  "role": "Full Stack Developer",
  "metrics": {
    "users": "1000+ users",
    "performance": "98% Lighthouse score"
  },
  "hasDetailPage": true
}
```

### Color Scheme
Modify colors in `app/globals.css`:

```css
@theme inline {
  --color-royal: #4169E1;
  --color-royal-dark: #2447B0;
  --color-cream: #F7EED6;
  /* ... other colors */
}
```

### Adding New Sections
Create new components and import them in `app/page.tsx`:

```typescript
import NewSection from '@/components/NewSection';

// Add in the main function
<NewSection />
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check [issues page](../../issues).

## 📞 Contact

**Nama Kamu**
- Email: nama@email.com
- LinkedIn: [linkedin.com/in/namakamu](https://linkedin.com/in/namakamu)
- GitHub: [github.com/namakamu](https://github.com/namakamu)

---

⭐ Don't forget to give this project a star if you found it helpful!
