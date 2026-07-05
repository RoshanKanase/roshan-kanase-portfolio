import { personalInfo } from '../data/portfolio'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-mono text-sm text-text-secondary">
          <span className="gradient-text font-bold">{personalInfo.name.split(' ')[0]}</span>
          <span className="text-accent">.</span> © {year}
        </p>
        <p className="text-sm text-muted">
          Built with React, TypeScript, Tailwind CSS & Framer Motion
        </p>
      </div>
    </footer>
  )
}
