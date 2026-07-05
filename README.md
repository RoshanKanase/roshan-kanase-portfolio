# Roshan Kanase — Portfolio Website

A dark-mode personal portfolio built with **React**, **TypeScript**, **Vite**, **Tailwind CSS**, and **Framer Motion**.

## Quick Start (Local)

```bash
# 1. Navigate to project folder
cd portfolio-website

# 2. Install dependencies
npm install

# 3. Copy your resume (optional but recommended)
# Copy "Roshan Kanase Resume.pdf" to public/resume.pdf

# 4. Start development server
npm run dev
```

Open **http://localhost:5173** in your browser.

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start local dev server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |

## Project Structure

```
portfolio-website/
├── src/
│   ├── components/     # UI sections (Hero, About, Skills, etc.)
│   ├── data/           # Portfolio content (edit portfolio.ts)
│   └── index.css       # Tailwind + custom dark theme
├── public/
│   ├── favicon.svg
│   └── resume.pdf      # Your resume (add manually)
├── .github/workflows/  # GitHub Pages auto-deploy
└── vite.config.ts
```

## Customize

Edit `src/data/portfolio.ts` to update your info, skills, projects, and links.

Update GitHub/LinkedIn URLs in the same file if needed.

## Deploy to GitHub Pages

See **DEPLOYMENT.md** for complete step-by-step instructions.
