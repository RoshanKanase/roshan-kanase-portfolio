import { motion } from 'framer-motion'
import { Award, GraduationCap } from 'lucide-react'
import { certifications, education } from '../data/portfolio'

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 bg-surface-elevated/50">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-2 font-mono text-sm uppercase tracking-widest text-accent">
            Achievements
          </h2>
          <h3 className="text-3xl font-bold sm:text-4xl">Certifications & Education</h3>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass rounded-2xl p-8 lg:col-span-1 glow-accent"
          >
            <GraduationCap size={32} className="mb-4 text-accent" />
            <h4 className="mb-2 text-lg font-semibold">Education</h4>
            <p className="mb-1 font-medium">{education.degree}</p>
            <p className="text-sm text-text-secondary">{education.institution}</p>
            <p className="mt-2 font-mono text-sm text-accent">{education.period}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass rounded-2xl p-8 lg:col-span-2"
          >
            <Award size={32} className="mb-4 text-accent" />
            <h4 className="mb-6 text-lg font-semibold">Certifications</h4>
            <ul className="grid gap-3 sm:grid-cols-2">
              {certifications.map((cert, i) => (
                <motion.li
                  key={cert}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-2 text-sm text-text-secondary"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {cert}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
