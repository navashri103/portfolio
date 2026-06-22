"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Sparkles } from "lucide-react";
import { journey } from "@/lib/data";
import { handleSpotlight } from "@/lib/spotlight";

const icons = {
  experience: Briefcase,
  education: GraduationCap,
  milestone: Sparkles,
};

export default function Journey() {
  return (
    <section id="journey" className="relative py-28 sm:py-36 bg-surface/40">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.3, margin: "-80px" }}
          transition={{ duration: 0.35 }}
          className="mb-16"
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-4">
            02 · Journey
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight">
            Career journey
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[19px] sm:left-[23px] top-2 bottom-2 w-px bg-line" />

          <div className="space-y-10">
            {journey.map((item, i) => {
              const Icon = icons[item.kind];
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -16, scale: 0.97 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: false, amount: 0.3, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: i * 0.06, ease: "easeOut" }}
                  className="relative flex gap-6 sm:gap-8"
                >
                  <div className="relative z-10 flex h-10 w-10 sm:h-12 sm:w-12 flex-none items-center justify-center rounded-full border border-line bg-background">
                    <Icon size={18} className="text-accent" />
                  </div>

                  <div
                    onMouseMove={handleSpotlight}
                    className="spotlight-card flex-1 rounded-2xl border border-line bg-surface px-6 py-5 hover:border-accent/40 transition-colors"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h3 className="font-display text-lg font-semibold">
                        {item.title}
                      </h3>
                      <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-accent mb-3">
                      {item.org}
                    </p>
                    <p className="text-sm text-muted leading-relaxed mb-4">
                      {item.description}
                    </p>
                    {item.tags && (
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-line px-3 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-muted"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
