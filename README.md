# Portfolio 2.0

Personal portfolio built with Next.js (App Router), TypeScript and Tailwind CSS.

## Stack
- Next.js 14 + React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- next-themes
- tsParticles

## Project Structure
- `src/app`: routes, layout, metadata (`robots`, `sitemap`)
- `src/components`: UI components
- `src/utils`: constants and portfolio data
- `src/types`: shared TypeScript types
- `public/assets`: static assets (images, icons, CV)

## Local Development

Requirements:
- Node.js `>=22`

Install and run:
```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Scripts
- `npm run dev`: start development server
- `npm run build`: production build
- `npm run start`: run production server
- `npm run lint`: run ESLint
- `npm run format`: format source files in `src`
- `npm run format:check`: check formatting without writing

## Quality Checklist
- `npm run lint` passes
- `npm run build` passes
- No hydration mismatch when switching theme
- Keyboard navigation works for interactive controls
- Social metadata is present (`openGraph`, `twitter`)
- `robots.txt` and `sitemap.xml` resolve correctly

## Deployment
Designed for Vercel deployment, but can run on any Node.js environment that supports Next.js 14.
