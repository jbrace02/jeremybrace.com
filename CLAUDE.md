# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Next.js dev server on http://localhost:3000
npm run build    # Production build
npm run start    # Run the production build locally
npm run lint     # next lint
```

There is no test suite.

## Architecture

Single-page portfolio built on Next.js 15 (App Router) + React 19 + Tailwind CSS. JavaScript only (no TypeScript), despite TS being mentioned in the metadata.

- `app/page.js` is the entire site — it composes `Hero`, `Skills`, `Projects`, `Footer` in order. To add a section, create a component and import it here.
- `app/layout.js` owns all SEO metadata (title, description, OpenGraph, Twitter card). Update here when changing how the site presents externally.
- Path alias `@/*` → repo root (see `jsconfig.json`). Use `@/components/Foo` style imports.

### Content lives in components, not data files

Project entries and skills are hard-coded as arrays inside the component files — there is no CMS, JSON, or MDX layer:

- `components/Projects.jsx` — `mainProjects` and `personalProjects` arrays. Each item: `{ title, techStack, description, achievements, github, live, status }`. `github` / `live` may be `null` to hide the corresponding button. `ProjectCard.jsx` is the shared renderer.
- `components/Skills.jsx` — flat `skills` string array.
- `components/Hero.jsx` and `components/Footer.jsx` — contact info, social URLs, and resume link are inline.

When the user says "add a project" or "update skills", edit these files directly.

### Static assets in `/public`

- `profile.jpg` — Hero photo. Filename is case-sensitive (a prior commit fixed this for Vercel — `Profile.jpg` vs `profile.jpg`).
- `Brace_Jeremy_Resume.pdf` — referenced by exact filename in `Hero.jsx` and `Footer.jsx`. If renamed, update both.

### Styling

Custom Tailwind theme in `tailwind.config.js`:

- `primary` `#3B82F6` (blue accent), `background` `#0A0A0A`, `surface` `#1A1A1A`, `text` `#E5E5E5`.
- Use these tokens (`bg-primary`, `border-primary`, `bg-surface`) rather than raw hex.
- Dark theme is unconditional — `body` background is set in `app/globals.css`, no theme toggle.
- `.fade-in` keyframe in `globals.css` is the project's only custom animation.

### `'use client'` policy

Only `Hero.jsx` is a client component (it has an `onError` handler on the profile image). Everything else is a server component. Don't add `'use client'` unless a component actually needs browser-only APIs or event handlers.

## Repo notes

- `archive/` holds old resume drafts and interview prep — not shipped, ignore unless asked.
- Deployment is Vercel via GitHub auto-deploy on push to `main`. See `DEPLOYMENT.md` for the full flow.
