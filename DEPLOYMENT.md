# Deployment Guide

## Quick Start

Your portfolio is ready to deploy! Follow these steps to get it live on Vercel.

## Prerequisites

- [ ] All content is customized (name, email, projects, etc.)
- [ ] Resume PDF added to `/public/resume.pdf`
- [ ] Code is pushed to GitHub

## Deploy to Vercel

### Step 1: Push to GitHub

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial portfolio setup"

# Create main branch
git branch -M main

# Add your GitHub repository as remote
# Replace with your actual GitHub repo URL
git remote add origin https://github.com/jbrace02/portfolio.git

# Push to GitHub
git push -u origin main
```

### Step 2: Deploy on Vercel

1. **Go to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Click "Sign Up" or "Log In"
   - Sign in with your GitHub account

2. **Import Your Project**
   - Click "Add New..." → "Project"
   - Select your GitHub repository from the list
   - If you don't see it, click "Adjust GitHub App Permissions" to grant access

3. **Configure Project**
   - **Project Name**: Choose a name (e.g., `jeremy-brace-portfolio`)
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (leave as default)
   - **Build Settings**: Leave as default
     - Build Command: `next build`
     - Output Directory: `.next`
     - Install Command: `npm install`

4. **Deploy**
   - Click "Deploy"
   - Wait 1-2 minutes for deployment to complete
   - Your site will be live at `https://your-project.vercel.app`

### Step 3: Add Custom Domain (Optional)

1. **In Vercel Dashboard**
   - Go to your project
   - Click "Settings" → "Domains"

2. **Add Domain**
   - Enter your domain name (e.g., `jeremybrace.com`)
   - Click "Add"

3. **Configure DNS**
   - Vercel will show you DNS records to add
   - Go to your domain registrar (GoDaddy, Namecheap, etc.)
   - Add the A or CNAME records as shown
   - Wait 24-48 hours for DNS propagation

4. **Enable HTTPS**
   - Vercel automatically provides SSL/HTTPS
   - No additional configuration needed

## Environment Variables (Optional)

If you add features that need API keys or secrets:

1. Go to Project Settings → Environment Variables
2. Add your variables:
   - `VARIABLE_NAME`: `value`
3. Redeploy your project

## Automatic Deployments

Vercel automatically deploys when you push to GitHub:

- **Push to `main`**: Deploys to production
- **Push to other branches**: Creates preview deployments

```bash
# Make changes
git add .
git commit -m "Update project description"
git push

# Vercel automatically deploys!
```

## Deployment Checklist

Before deploying, make sure:

- [ ] Resume PDF is in `/public/resume.pdf`
- [ ] All contact links work (email, GitHub, X)
- [ ] Projects are up to date
- [ ] Skills section reflects current stack
- [ ] Metadata is correct in `app/layout.js`
- [ ] No placeholder text remains
- [ ] Tested locally with `npm run build`
- [ ] All images optimized (if you added any)

## Testing Your Deployment

1. **Visit Your Site**
   - Open your Vercel URL
   - Check all sections load correctly

2. **Test Responsiveness**
   - Open on mobile
   - Check tablet view
   - Verify desktop layout

3. **Test Links**
   - Click all social links
   - Test resume download
   - Verify email link opens mail client

4. **Check Performance**
   - Run [PageSpeed Insights](https://pagespeed.web.dev/)
   - Run [GTmetrix](https://gtmetrix.com/)
   - Target: 95+ score

## Troubleshooting

### Build Fails on Vercel

**Issue**: Build fails with module errors

**Solution**:
- Ensure all imports are correct
- Test locally: `npm run build`
- Check `jsconfig.json` exists
- Verify all files are committed

### Resume Not Found

**Issue**: 404 error when clicking resume link

**Solution**:
- Verify `resume.pdf` is in `/public/` folder
- File name must be exactly `resume.pdf`
- Commit and push the PDF file
- Redeploy on Vercel

### Changes Not Showing

**Issue**: Updates don't appear on live site

**Solution**:
- Clear browser cache
- Wait 1-2 minutes for deployment
- Check Vercel deployment status
- Hard refresh: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)

### Custom Domain Not Working

**Issue**: Domain shows error or doesn't load

**Solution**:
- Verify DNS records are correct
- Wait 24-48 hours for propagation
- Check nameservers are correct
- Use [DNS Checker](https://dnschecker.org/)

## Updating Your Site

To make changes after deployment:

```bash
# 1. Make your changes locally
# Edit files in components/, app/, etc.

# 2. Test locally
npm run dev
# Visit http://localhost:3000

# 3. Build to verify
npm run build

# 4. Commit and push
git add .
git commit -m "Describe your changes"
git push

# 5. Vercel auto-deploys!
# Check deployment status at vercel.com
```

## Advanced: Preview Deployments

Create preview deployments for testing:

```bash
# Create a new branch
git checkout -b feature/new-project

# Make changes
# Edit files...

# Commit and push
git add .
git commit -m "Add new project"
git push -u origin feature/new-project

# Vercel creates a preview URL
# Test at: https://your-project-git-feature-new-project.vercel.app

# If good, merge to main
git checkout main
git merge feature/new-project
git push
```

## Performance Optimization

Your site is already optimized, but here's what's included:

- ✅ Static generation (SSG) - Fastest possible loading
- ✅ Automatic image optimization (if you add images)
- ✅ Font optimization (system fonts)
- ✅ CSS purging (unused Tailwind removed)
- ✅ Code splitting (automatic with Next.js)
- ✅ Edge network (Vercel CDN)

## Monitoring

Vercel provides:

- **Analytics**: Page views, visitors (upgrade for detailed analytics)
- **Speed Insights**: Real user performance data
- **Deployment Logs**: Debug build issues

Access these in your Vercel dashboard.

## Support

If you encounter issues:

1. **Check Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
2. **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)
3. **Check Build Logs**: Vercel Dashboard → Deployments → View logs

## Next Steps After Deployment

1. **Share Your Portfolio**
   - Add URL to GitHub profile
   - Update LinkedIn with portfolio link
   - Share on X/Twitter

2. **Set Up Analytics** (Optional)
   - Google Analytics
   - Plausible (privacy-focused)
   - Vercel Analytics (paid)

3. **Monitor Performance**
   - Check PageSpeed weekly
   - Review Vercel analytics
   - Optimize images if needed

4. **Keep Updated**
   - Add new projects as you build
   - Update skills as you learn
   - Refresh resume periodically

---

**Your portfolio is ready to showcase your work! Good luck with your applications!**
