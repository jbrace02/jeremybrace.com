# Quick Setup Guide

Your portfolio is built and ready! Here's what to do next:

## Immediate Next Steps

### 1. Test Locally

```bash
# Start the development server
npm run dev
```

Visit `http://localhost:3000` (or check the terminal for the actual port).

### 2. Add Your Resume

1. Export your resume as PDF
2. Name it `resume.pdf`
3. Replace `/public/resume.pdf` with your actual resume
4. The download button will now work

### 3. Customize Content (Optional)

The site already has your info, but you can customize:

#### Update Projects
Edit `/components/Projects.jsx`:
- Add new projects
- Update descriptions
- Add GitHub links (if repos are public)
- Update achievement metrics

#### Update Skills
Edit `/components/Skills.jsx`:
- Add new technologies
- Remove skills you don't use
- Reorder by proficiency

#### Add Project Screenshots (Optional)
1. Add images to `/public/projects/`
2. See README.md for how to display them

### 4. Deploy to Vercel

See `DEPLOYMENT.md` for complete step-by-step instructions.

**Quick version:**
```bash
# Push to GitHub
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/jbrace02/your-repo.git
git push -u origin main

# Then go to vercel.com and import your repo
```

## What's Included

Your portfolio has:

✅ **Hero Section** - Name, title, bio, CTA buttons, social links
✅ **Skills Section** - 10 key technologies in a clean grid
✅ **Projects Section** - 3 featured projects with metrics
✅ **Footer** - Contact info and social links

## Design Philosophy

Following Steve Jobs/Jack Dorsey minimalism:

- **Clean typography** - System fonts, generous spacing
- **Dark mode first** - Professional, focused aesthetic
- **Blue accent** (#3B82F6) - Subtle, professional
- **Minimal animations** - Smooth, purposeful interactions
- **Fast loading** - Optimized, minimal JavaScript

## File Structure

```
personalwebsite/
├── app/
│   ├── layout.js       # Metadata, SEO
│   ├── page.js         # Main page
│   └── globals.css     # Styles
├── components/
│   ├── Hero.jsx        # Hero section
│   ├── Skills.jsx      # Skills grid
│   ├── Projects.jsx    # Projects section
│   ├── ProjectCard.jsx # Project cards
│   └── Footer.jsx      # Footer
├── public/
│   └── resume.pdf      # Your resume (REPLACE THIS)
├── README.md           # Full documentation
├── DEPLOYMENT.md       # Deployment guide
└── package.json        # Dependencies
```

## Common Tasks

### Update Your Bio
Edit `/components/Hero.jsx` - line 18-20

### Change Accent Color
Edit `/tailwind.config.js` - line 10 (`primary` color)

### Add a New Project
Edit `/components/Projects.jsx` - add to `projects` array

### Update Social Links
Edit `/components/Hero.jsx` (line 46-74) and `/components/Footer.jsx` (line 24-52)

## Testing Checklist

Before deploying, verify:

- [ ] Site runs locally (`npm run dev`)
- [ ] Build succeeds (`npm run build`)
- [ ] Resume PDF is in place
- [ ] All links work
- [ ] Projects are up to date
- [ ] No placeholder text
- [ ] Mobile responsive (test in browser)

## Need Help?

- **Full docs**: See `README.md`
- **Deployment**: See `DEPLOYMENT.md`
- **Next.js docs**: [nextjs.org/docs](https://nextjs.org/docs)
- **Vercel docs**: [vercel.com/docs](https://vercel.com/docs)

## Quick Commands

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build for production
npm run start        # Run production build locally

# Deployment
git push             # Auto-deploys via Vercel
```

---

**Your portfolio is ready! Add your resume and deploy to Vercel.**

For arc.dev, Upwork applications - your portfolio URL will be:
`https://your-project.vercel.app` (or your custom domain)
