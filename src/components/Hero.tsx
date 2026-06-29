"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { hero } from "@/data/content";
import { usePrefersFallback } from "@/hooks/usePrefersFallback";
import TechGrid from "@/components/TechGrid";

const TechConstellation = dynamic(
  () => import("@/components/three/TechConstellation"),
  { ssr: false },
);

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.1 * i, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Hero() {
  const useFallback = usePrefersFallback();

  return (
    <section className="relative overflow-hidden">
      {/* vibrant background wash */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10%] h-[60vh] w-[60vh] -translate-x-1/2 rounded-full bg-linear-to-br from-blue-400/40 via-violet-400/30 to-transparent blur-3xl" />
        <div className="absolute right-[-10%] top-1/3 h-[40vh] w-[40vh] rounded-full bg-linear-to-br from-violet-400/30 to-transparent blur-3xl" />
        <div className="absolute left-[-10%] bottom-0 h-[40vh] w-[40vh] rounded-full bg-linear-to-tr from-sky-300/30 to-transparent blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-8 px-6 pt-16 pb-12 lg:grid-cols-2 lg:pt-24 lg:pb-20">
        <div className="text-center lg:text-left">
          <motion.span
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="inline-flex items-center gap-2 rounded-full border border-blue-200/70 bg-white/60 px-4 py-1.5 text-sm font-medium text-blue-700 backdrop-blur"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-blue-500" />
            {hero.badge}
          </motion.span>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
          >
            <span className="bg-linear-to-r from-blue-600 via-violet-600 to-blue-600 bg-clip-text text-transparent">
              {hero.headline}
            </span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mx-auto mt-6 max-w-xl text-lg text-slate-600 lg:mx-0"
          >
            {hero.subheadline}
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
          >
            <a
              href={hero.ctaPrimary.href}
              className="rounded-full bg-linear-to-r from-blue-600 to-violet-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-blue-600/20 transition hover:shadow-xl hover:shadow-violet-600/30"
            >
              {hero.ctaPrimary.label}
            </a>
            <a
              href={hero.ctaSecondary.href}
              className="rounded-full border border-slate-300 bg-white/60 px-6 py-3 text-sm font-medium text-slate-700 backdrop-blur transition hover:border-slate-400"
            >
              {hero.ctaSecondary.label}
            </a>
          </motion.div>
        </div>

        {/* 3D constellation on desktop, lightweight 2D grid on mobile / reduced-motion */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-[360px] w-full sm:h-[460px] lg:h-[560px]"
        >
          {useFallback ? (
            <TechGrid />
          ) : (
            <>
              <TechConstellation />
              <p className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 text-xs text-slate-400">
                Bougez la souris · survolez les technologies
              </p>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}
