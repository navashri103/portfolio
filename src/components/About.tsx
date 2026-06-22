"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { profile } from "@/lib/data";
import { handleSpotlight } from "@/lib/spotlight";

export default function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.3, margin: "-80px" }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="lg:col-span-4"
          >
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-4">
              01 · About
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight mb-8">
              Who I am
            </h2>

            <div className="relative aspect-[4/5] w-full max-w-xs overflow-hidden rounded-3xl border border-line bg-surface">
              <Image
                src="/images/profile.jpg"
                alt={profile.name}
                fill
                sizes="(max-width: 1024px) 80vw, 320px"
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.975 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.3, margin: "-80px" }}
            transition={{ duration: 0.35, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-8 space-y-5"
          >
            {profile.bio.map((p, i) => (
              <p key={i} className="text-lg text-muted leading-relaxed text-balance">
                {p}
              </p>
            ))}

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {profile.quickFacts.map((fact, i) => (
                <motion.div
                  key={fact.label}
                  initial={{ opacity: 0, y: 16, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: false, amount: 0.3, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: i * 0.06, ease: "easeOut" }}
                  onMouseMove={handleSpotlight}
                  className="spotlight-card rounded-2xl border border-line bg-surface px-5 py-4"
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted mb-1">
                    {fact.label}
                  </p>
                  <p className="text-sm font-medium text-foreground">
                    {fact.value}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
