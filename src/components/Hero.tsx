"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Mail } from "lucide-react";
import { profile } from "@/lib/data";
import { LinkedinIcon } from "@/components/icons";
import { CopyEmail } from "@/components/CopyEmail";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16"
    >
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_40%,transparent_100%)]" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[480px] w-[680px] rounded-full bg-accent/10 blur-[120px]" />
      <div className="absolute top-40 right-0 h-[320px] w-[320px] rounded-full bg-accent-2/20 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl w-full px-6 sm:px-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-6"
        >
          {profile.subRole}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-display text-balance text-[13vw] sm:text-7xl md:text-8xl font-semibold leading-[0.95] tracking-tight"
        >
          {profile.name}
          <br />
          <span className="gradient-text">{profile.role}</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-8 max-w-xl"
        >
          <p className="text-lg sm:text-xl text-muted text-balance">
            {profile.tagline}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5"
          >
            View Projects
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium hover:border-accent hover:text-accent transition-colors"
          >
            <LinkedinIcon size={16} />
            LinkedIn
          </a>
          <CopyEmail
            email={profile.email}
            className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium hover:border-accent hover:text-accent transition-colors"
          >
            <Mail size={16} />
            Email
          </CopyEmail>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted hover:text-foreground transition-colors"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">
          Scroll
        </span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.span>
      </motion.a>
    </section>
  );
}
