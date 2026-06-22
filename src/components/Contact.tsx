"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { profile } from "@/lib/data";
import { LinkedinIcon } from "@/components/icons";
import { Logo } from "@/components/Logo";
import { CopyEmail } from "@/components/CopyEmail";

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 sm:py-36 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[360px] w-[640px] rounded-full bg-accent/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.3, margin: "-80px" }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-4">
            06 · Contact
          </p>
          <h2 className="font-display text-4xl sm:text-6xl font-semibold tracking-tight text-balance">
            Let&rsquo;s build something
            <span className="gradient-text"> worth shipping.</span>
          </h2>
          <p className="mt-6 text-lg text-muted text-balance">
            Open to internships, collaborations, and opportunities to learn from real-world teams.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <CopyEmail
              email={profile.email}
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5"
            >
              <Mail size={16} />
              {profile.email}
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </CopyEmail>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium hover:border-accent hover:text-accent transition-colors"
            >
              <LinkedinIcon size={16} />
              Connect on LinkedIn
            </a>
          </div>

          <div className="mt-8 inline-flex items-center gap-2 text-sm text-muted">
            <MapPin size={14} />
            {profile.location}
          </div>
        </motion.div>
      </div>

      <footer className="relative mt-24 border-t border-line">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <Logo size={28} />
            <p className="font-display text-sm font-medium">{profile.name}</p>
          </div>
          <p className="font-mono text-xs text-muted">
            © {new Date().getFullYear()} — Built with Next.js
          </p>
        </div>
      </footer>
    </section>
  );
}
