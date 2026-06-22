"use client";

import { motion } from "framer-motion";
import AICareerChat from "@/components/AICareerChat";

export default function Chat() {
  return (
    <section id="chat" className="relative py-28 sm:py-36 bg-surface/40">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.3, margin: "-80px" }}
          transition={{ duration: 0.35 }}
          className="mb-12 text-center"
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-4">
            05 · Digital Twin
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight">
            Ask me anything
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            An AI version of me, trained on my own career, skills, and projects — ask it whatever you&rsquo;d ask in an interview.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.3, margin: "-60px" }}
          transition={{ duration: 0.35, delay: 0.1, ease: "easeOut" }}
          className="mx-auto max-w-2xl"
        >
          <AICareerChat />
        </motion.div>
      </div>
    </section>
  );
}
