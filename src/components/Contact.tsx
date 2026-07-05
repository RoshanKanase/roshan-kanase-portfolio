import { motion } from 'framer-motion'
import { Mail, Phone, Send } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './icons'
import { personalInfo } from '../data/portfolio'

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-2 font-mono text-sm uppercase tracking-widest text-accent">
            Contact
          </h2>
          <h3 className="text-3xl font-bold sm:text-4xl">Let&apos;s connect</h3>
          <p className="mx-auto mt-4 max-w-xl text-text-secondary">
            I&apos;m open to internships, collaborations, and data analytics opportunities.
            Feel free to reach out!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass rounded-2xl p-8 glow-accent"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-4 rounded-xl bg-surface p-4 transition-all hover:ring-1 hover:ring-accent/40"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <Mail size={20} className="text-accent" />
              </div>
              <div>
                <p className="text-sm text-text-secondary">Email</p>
                <p className="text-sm font-medium">{personalInfo.email}</p>
              </div>
            </a>

            <a
              href={`tel:${personalInfo.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-4 rounded-xl bg-surface p-4 transition-all hover:ring-1 hover:ring-accent/40"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <Phone size={20} className="text-accent" />
              </div>
              <div>
                <p className="text-sm text-text-secondary">Phone</p>
                <p className="text-sm font-medium">{personalInfo.phone}</p>
              </div>
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-xl bg-surface p-4 transition-all hover:ring-1 hover:ring-accent/40"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <LinkedinIcon size={20} className="text-accent" />
              </div>
              <div>
                <p className="text-sm text-text-secondary">LinkedIn</p>
                <p className="text-sm font-medium">Connect with me</p>
              </div>
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-xl bg-surface p-4 transition-all hover:ring-1 hover:ring-accent/40"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <GithubIcon size={20} className="text-accent" />
              </div>
              <div>
                <p className="text-sm text-text-secondary">GitHub</p>
                <p className="text-sm font-medium">View my repositories</p>
              </div>
            </a>
          </div>

          <div className="mt-8 text-center">
            <a
              href={`mailto:${personalInfo.email}?subject=Hello%20Roshan`}
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-3 text-sm font-semibold text-surface transition-all hover:bg-accent-light glow-accent"
            >
              <Send size={16} />
              Send a Message
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
