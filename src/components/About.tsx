import { motion } from 'framer-motion'
import { personalInfo } from '../data/portfolio'

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-2 font-mono text-sm uppercase tracking-widest text-accent">
            About Me
          </h2>
          <h3 className="mb-12 text-3xl font-bold sm:text-4xl">
            Building data-driven solutions
          </h3>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="mb-6 text-lg leading-relaxed text-text-secondary">
              {personalInfo.summary}
            </p>
            <p className="text-lg leading-relaxed text-text-secondary">
              I possess knowledge of machine learning algorithms, data preprocessing,
              exploratory data analysis, and model evaluation — with a growing passion for
              cloud architecture and DevOps practices.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass rounded-2xl p-8 glow-accent"
          >
            <h4 className="mb-6 text-lg font-semibold">Quick Info</h4>
            <dl className="space-y-4">
              {[
                { label: 'Name', value: personalInfo.name },
                { label: 'Location', value: personalInfo.location },
                { label: 'Email', value: personalInfo.email },
                { label: 'Phone', value: personalInfo.phone },
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between border-b border-border pb-3">
                  <dt className="text-text-secondary">{label}</dt>
                  <dd className="font-medium text-right text-sm">{value}</dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
