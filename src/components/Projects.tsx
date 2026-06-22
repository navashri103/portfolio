"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";
import { projects } from "@/lib/data";
import { handleSpotlight } from "@/lib/spotlight";

const statusStyles: Record<string, string> = {
  Live: "text-accent border-accent/40",
  "In Progress": "text-accent-2 border-accent-2/40",
  "Coming Soon": "text-muted border-line",
};

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.3, margin: "-80px" }}
          transition={{ duration: 0.35 }}
          className="mb-16 flex flex-wrap items-end justify-between gap-4"
        >
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-4">
              03 · Portfolio
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight">
              Selected projects
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted">
            Live demo and source links are landing here as each project ships publicly — check back soon.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 18, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.3, margin: "-60px" }}
              transition={{ duration: 0.4, delay: (i % 2) * 0.08, ease: "easeOut" }}
              onMouseMove={handleSpotlight}
              className="spotlight-card group relative flex flex-col justify-between rounded-2xl border border-line bg-surface p-7 hover:border-accent/40 transition-colors"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="font-display text-xl font-semibold">
                    {project.name}
                  </h3>
                  <span
                    className={`flex-none flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.1em] ${statusStyles[project.status]}`}
                  >
                    {project.status === "Coming Soon" && <Clock size={10} />}
                    {project.status}
                  </span>
                </div>
                <p className="text-sm text-muted leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-surface-2 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-muted/70">
                  <span>Link coming soon</span>
                  <ArrowUpRight
                    size={14}
                    className="opacity-50 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
