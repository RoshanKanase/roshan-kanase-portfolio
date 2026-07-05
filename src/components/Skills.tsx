import { motion } from 'framer-motion'
import { skillCategories } from '../data/portfolio'

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-surface-elevated/50">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-2 font-mono text-sm uppercase tracking-widest text-accent">
            Skills
          </h2>
          <h3 className="text-3xl font-bold sm:text-4xl">Technologies I work with</h3>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-6 transition-all hover:border-border-hover"
            >
              <h4 className="mb-4 text-lg font-semibold text-accent">{category.title}</h4>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg bg-surface px-3 py-1.5 text-sm text-text-secondary ring-1 ring-border transition-all hover:ring-accent/40 hover:text-text"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
