"use client";

import { motion } from "framer-motion";
import { skillGroups, languages } from "@/lib/data";
import { handleSpotlight } from "@/lib/spotlight";

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 sm:py-36 bg-surface/40">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.3, margin: "-80px" }}
          transition={{ duration: 0.35 }}
          className="mb-16"
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-4">
            04 · Skills
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight">
            Toolkit
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 18, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.3, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.06, ease: "easeOut" }}
              onMouseMove={handleSpotlight}
              className="spotlight-card rounded-2xl border border-line bg-surface p-6"
            >
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-line px-3 py-1.5 text-sm text-foreground hover:border-accent hover:text-accent transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.3, margin: "-60px" }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          onMouseMove={handleSpotlight}
          className="spotlight-card mt-6 rounded-2xl border border-line bg-surface p-6"
        >
          <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted mb-4">
            Languages
          </h3>
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {languages.map((lang) => (
              <div key={lang.name} className="flex items-baseline gap-2">
                <span className="text-sm font-medium text-foreground">
                  {lang.name}
                </span>
                <span className="font-mono text-[11px] text-muted">
                  {lang.level}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
