"use client";

import { MotionValue, motion, useTransform } from "framer-motion";
import { hero } from "@/lib/site-content";

interface OverlayProps {
  scrollYProgress: MotionValue<number>;
}

export function Overlay({ scrollYProgress }: OverlayProps) {
  const firstOpacity = useTransform(scrollYProgress, [0, 0.12, 0.2], [1, 1, 0]);
  const firstY = useTransform(scrollYProgress, [0, 0.2], [0, -24]);

  const secondOpacity = useTransform(scrollYProgress, [0.2, 0.32, 0.45], [0, 1, 0]);
  const secondX = useTransform(scrollYProgress, [0.2, 0.45], [-16, 0]);
  const secondY = useTransform(scrollYProgress, [0.2, 0.45], [14, -12]);

  const thirdOpacity = useTransform(scrollYProgress, [0.48, 0.62, 0.78], [0, 1, 0]);
  const thirdX = useTransform(scrollYProgress, [0.48, 0.78], [18, 0]);
  const thirdY = useTransform(scrollYProgress, [0.48, 0.78], [20, -16]);

  const supportOpacity = useTransform(scrollYProgress, [0, 0.08], [0, 1]);

  return (
    <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden px-4 py-6 sm:px-10 sm:py-8 lg:px-14">
      <motion.div
        className="absolute left-1/2 top-1/2 w-[min(100%,48rem)] -translate-x-1/2 -translate-y-1/2 text-center"
        style={{ opacity: firstOpacity, y: firstY }}
      >
        <p className="mb-3 text-[11px] uppercase tracking-[0.28em] text-white/50 sm:mb-4 sm:text-xs sm:tracking-[0.5em]">Bangladesh University of Professionals</p>
        <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
          Al Sadique Nuhin
        </h1>
        <p className="mt-3 text-[11px] uppercase tracking-[0.22em] text-sky-200/75 sm:mt-4 sm:text-sm sm:tracking-[0.45em]">{hero.tagline}</p>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-white/72 sm:mt-5 sm:text-lg sm:leading-7">
          Undergraduate Computer Science &amp; Engineering student building a future in cloud computing, scalable systems, and elegant problem solving.
        </p>
      </motion.div>

      <motion.div
        className="absolute left-0 top-[28%] hidden max-w-sm rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl sm:left-8 sm:block sm:p-6"
        style={{ opacity: secondOpacity, x: secondX, y: secondY }}
      >
        <p className="text-xs uppercase tracking-[0.45em] text-sky-200/70">Identity</p>
        <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">I build digital experiences.</h2>
        <p className="mt-3 text-sm leading-6 text-white/70 sm:text-base">
          A disciplined learner who values clarity, technical depth, and dependable execution.
        </p>
      </motion.div>

      <motion.div
        className="absolute right-0 top-[58%] hidden max-w-sm rounded-3xl border border-white/10 bg-white/5 p-5 text-right backdrop-blur-xl sm:right-8 sm:block sm:p-6"
        style={{ opacity: thirdOpacity, x: thirdX, y: thirdY }}
      >
        <p className="text-xs uppercase tracking-[0.45em] text-sky-200/70">Vision</p>
        <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">Bridging design and engineering.</h2>
        <p className="mt-3 text-sm leading-6 text-white/70 sm:text-base">
          From structured code to thoughtful interfaces, I aim to make software feel purposeful and memorable.
        </p>
      </motion.div>

      <motion.div
        className="absolute inset-x-4 bottom-16 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-xl sm:hidden"
        style={{ opacity: secondOpacity }}
      >
        <p className="text-[11px] uppercase tracking-[0.25em] text-sky-200/75">Identity & Vision</p>
        <p className="mt-2 text-sm leading-6 text-white/72">
          I build digital experiences with a practical engineering mindset, balancing clean design and dependable systems.
        </p>
      </motion.div>

      <motion.div
        className="absolute bottom-0 left-0 right-0 flex justify-center pb-5 sm:pb-6"
        style={{ opacity: supportOpacity }}
      >
        <div className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-[10px] uppercase tracking-[0.24em] text-white/45 backdrop-blur-md sm:text-[11px] sm:tracking-[0.4em]">
          Scroll to explore the journey
        </div>
      </motion.div>
    </div>
  );
}