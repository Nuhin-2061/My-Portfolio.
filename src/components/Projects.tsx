"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/site-content";

export function Projects() {
  return (
    <section className="relative px-6 py-20 sm:px-10 lg:px-14 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.45em] text-sky-200/70">Selected Work</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Projects with practical purpose.</h2>
          </div>
          <p className="max-w-2xl text-sm leading-6 text-white/60 sm:text-base">
            A compact set of projects that reflect problem solving, technical learning, and a steady approach to building systems that feel useful.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="group rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-glow backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1 hover:border-sky-300/30"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.45em] text-sky-200/70">Case Study {String(index + 1).padStart(2, "0")}</span>
                <span className="h-2 w-2 rounded-full bg-sky-300 shadow-[0_0_18px_rgba(125,211,252,0.7)]" />
              </div>

              <h3 className="text-2xl font-semibold text-white">{project.name}</h3>
              <p className="mt-4 text-sm leading-6 text-white/68 sm:text-[15px]">{project.description}</p>

              <div className="mt-6 space-y-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-white/40">Purpose</p>
                  <p className="mt-2 text-sm leading-6 text-white/72">{project.purpose}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-white/40">Impact</p>
                  <p className="mt-2 text-sm leading-6 text-white/72">{project.impact}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}