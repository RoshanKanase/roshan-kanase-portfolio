import { motion, type Variants } from 'framer-motion'
import { ArrowDown, Download, Mail, MapPin } from 'lucide-react'
import { personalInfo } from '../data/portfolio'
import { GithubIcon, LinkedinIcon } from './icons'

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-emerald-500/5 blur-3xl" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto max-w-4xl px-6 text-center"
      >
        <motion.div variants={item} className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm text-text-secondary">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          Available for opportunities
        </motion.div>

        <motion.h1 variants={item} className="mb-4 text-5xl font-bold tracking-tight sm:text-7xl">
          Hi, I&apos;m{' '}
          <span className="gradient-text">{personalInfo.name.split(' ')[0]}</span>
        </motion.h1>

        <motion.p variants={item} className="mb-2 text-xl text-text-secondary sm:text-2xl">
          {personalInfo.title}
        </motion.p>

        <motion.p variants={item} className="mx-auto mb-8 max-w-2xl text-text-secondary">
          {personalInfo.tagline}
        </motion.p>

        <motion.div variants={item} className="mb-8 flex items-center justify-center gap-2 text-sm text-muted">
          <MapPin size={16} className="text-accent" />
          {personalInfo.location}
        </motion.div>

        <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-surface transition-all hover:bg-accent-light glow-accent"
          >
            View My Work
          </a>
          <a
            href={`${import.meta.env.BASE_URL}resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg glass px-6 py-3 text-sm font-medium text-text transition-all hover:border-border-hover"
          >
            <Download size={16} />
            Download Resume
          </a>
        </motion.div>

        <motion.div variants={item} className="mt-10 flex items-center justify-center gap-6">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary transition-colors hover:text-accent"
            aria-label="GitHub"
          >
            <GithubIcon size={22} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary transition-colors hover:text-accent"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={22} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-text-secondary transition-colors hover:text-accent"
            aria-label="Email"
          >
            <Mail size={22} />
          </a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-secondary transition-colors hover:text-accent"
        aria-label="Scroll down"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <ArrowDown size={24} />
        </motion.div>
      </motion.a>
    </section>
  )
}
