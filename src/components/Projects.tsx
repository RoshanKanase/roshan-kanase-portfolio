import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { projects } from '../data/portfolio'

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="mb-2 font-mono text-sm uppercase tracking-widest text-accent">
            Projects
          </h2>
          <h3 className="text-3xl font-bold sm:text-4xl">Featured work</h3>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group glass overflow-hidden rounded-2xl transition-all hover:border-border-hover"
            >
              <div className="grid lg:grid-cols-5">
                <div
                  className={`flex items-center justify-center bg-gradient-to-br ${project.gradient} p-8 lg:col-span-2`}
                >
                  <div className="text-center">
                    <ExternalLink
                      size={40}
                      className={`mx-auto mb-3 ${project.accent} opacity-60`}
                    />
                    <h4 className={`text-2xl font-bold ${project.accent}`}>
                      {project.title}
                    </h4>
                  </div>
                </div>

                <div className="p-8 lg:col-span-3">
                  <p className="mb-1 text-sm font-medium text-accent">{project.subtitle}</p>
                  <p className="mb-4 text-text-secondary">{project.description}</p>

                  <ul className="mb-6 space-y-2">
                    {project.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-2 text-sm text-text-secondary"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-surface px-2.5 py-1 text-xs font-mono text-muted ring-1 ring-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
