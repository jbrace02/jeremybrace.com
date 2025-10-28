# Jeremy Brace - Portfolio Website

A minimal, elegant portfolio website built with Next.js 15, inspired by Steve Jobs and Jack Dorsey's design philosophy.

## Design Philosophy

This portfolio follows principles of extreme minimalism:
- **Simplicity first**: No clutter, only essential content
- **Clean typography**: System fonts, generous spacing
- **Purposeful interactions**: Subtle hover states, smooth transitions
- **Dark mode**: Professional, focused aesthetic
- **Performance**: Fast loading, minimal JavaScript

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **Language**: JavaScript (ES6+)

## Local Development

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone or download this repository

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

The site will hot-reload as you make changes.

## Project Structure

```
portfolio-website/
├── app/
│   ├── layout.js          # Root layout with metadata
│   ├── page.js            # Main page (imports all sections)
│   └── globals.css        # Global styles and Tailwind
├── components/
│   ├── Hero.jsx           # Hero section with CTA
│   ├── Skills.jsx         # Skills/tech stack grid
│   ├── Projects.jsx       # Featured projects section
│   ├── ProjectCard.jsx    # Individual project card
│   └── Footer.jsx         # Footer with contact links
├── public/
│   └── resume.pdf         # Your resume (add this file)
├── tailwind.config.js     # Tailwind configuration
├── next.config.js         # Next.js configuration
├── package.json           # Dependencies
└── README.md              # This file
```

## Customization Guide

### Adding Your Resume

1. Create or export your resume as a PDF
2. Name it `resume.pdf`
3. Place it in the `/public` folder
4. The download link will automatically work

### Updating Projects

Edit `/components/Projects.jsx`:

```javascript
const projects = [
  {
    title: 'Your Project Name',
    techStack: ['Next.js', 'React', 'etc'],
    description: 'Brief description of your project...',
    achievements: [
      'First achievement with metrics',
      'Second achievement',
      'Third achievement',
    ],
    github: 'https://github.com/yourusername/repo', // or null for private
    live: 'https://yourproject.com', // or null if not deployed
    status: 'Live in Production', // or null
  },
  // Add more projects...
]
```

### Adding Project Screenshots

1. Add images to `/public/projects/`
2. In ProjectCard.jsx, add an image section:

```jsx
{/* Add this above the project header in ProjectCard.jsx */}
{project.image && (
  <div className="w-full h-64 bg-surface">
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-full object-cover"
    />
  </div>
)}
```

3. Add `image: '/projects/yourimage.png'` to your project object

### Updating Skills

Edit `/components/Skills.jsx`:

```javascript
const skills = [
  'Your Skill',
  'Another Skill',
  // Add or remove skills...
]
```

### Changing Colors

Edit `/tailwind.config.js`:

```javascript
colors: {
  primary: '#3B82F6',    // Main accent color
  background: '#0A0A0A',  // Page background
  surface: '#1A1A1A',     // Card backgrounds
  text: '#E5E5E5',        // Text color
}
```

### Updating Contact Info

Edit these files:

1. **Email**: Update in `/components/Hero.jsx` and `/components/Footer.jsx`
2. **Social links**: Update URLs in both Hero and Footer components
3. **Metadata**: Update in `/app/layout.js`

## Deployment to Vercel

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Sign up or log in
4. Click "Add New Project"
5. Import your GitHub repository
6. Vercel will auto-detect Next.js settings
7. Click "Deploy"
8. Your site will be live at `your-project.vercel.app`

### Option 2: Deploy via CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts
4. Your site will be deployed

### Custom Domain (Optional)

1. Go to your project in Vercel Dashboard
2. Navigate to Settings → Domains
3. Add your custom domain
4. Follow DNS configuration instructions
5. Your site will be live at your custom domain

## Build Commands

```bash
# Development
npm run dev

# Production build (test locally)
npm run build
npm run start

# Lint
npm run lint
```

## Performance Optimization

This site is already optimized for performance:

- ✅ Minimal JavaScript
- ✅ Server-side rendering (SSR)
- ✅ Optimized fonts (system fonts)
- ✅ No external dependencies (except React/Next.js)
- ✅ Tailwind CSS purging (production)

Expected Lighthouse scores:
- Performance: 95-100
- Accessibility: 90-100
- Best Practices: 95-100
- SEO: 95-100

## Adding New Sections

To add a new section:

1. Create a component in `/components/YourSection.jsx`
2. Import it in `/app/page.js`
3. Add it to the main layout

Example:

```jsx
// components/About.jsx
export default function About() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">About</h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          Your content here...
        </p>
      </div>
    </section>
  )
}

// app/page.js
import About from '@/components/About'
// Add to the page
```

## Troubleshooting

### Module not found errors
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build fails
- Check all imports are correct
- Ensure all files are saved
- Run `npm run build` locally to test

### Styling not working
- Make sure Tailwind directives are in `globals.css`
- Check `tailwind.config.js` paths are correct
- Clear cache: `rm -rf .next`

## Contact

Jeremy Brace
- Email: jeremy@shoprefit.com
- GitHub: [@jbrace02](https://github.com/jbrace02)
- X: [@JeremyBrace](https://x.com/JeremyBrace)
- Website: [shoprefit.com](https://www.shoprefit.com)

## License

All rights reserved © 2025 Jeremy Brace

---

**Built with Next.js 15** - The React Framework for the Web
