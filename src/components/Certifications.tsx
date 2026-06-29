"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { certifications } from "@/data/content";

export default function Certifications() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const count = certifications.length;

  const paginate = useCallback(
    (dir: number) => {
      setDirection(dir);
      setIndex((prev) => (prev + dir + count) % count);
    },
    [count],
  );

  // auto-advance every 4s
  useEffect(() => {
    const t = setInterval(() => paginate(1), 4000);
    return () => clearInterval(t);
  }, [paginate]);

  const cert = certifications[index];

  return (
    <div>
      {/* card */}
      <div className="relative h-64 w-full overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={index}
            custom={direction}
            initial={{ opacity: 0, x: direction * 80, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: direction * -80, scale: 0.95 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(_, info) => {
              if (info.offset.x < -60) paginate(1);
              else if (info.offset.x > 60) paginate(-1);
            }}
            className="absolute inset-0 flex cursor-grab flex-col items-center justify-center rounded-3xl border border-slate-200/80 bg-white/80 p-6 text-center shadow-xl backdrop-blur active:cursor-grabbing"
          >
            <div
              className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br ${cert.accent} text-xl font-bold text-white shadow-lg`}
            >
              {cert.issuer.slice(0, 2).toUpperCase()}
            </div>
            <h4 className="mt-4 text-lg font-semibold text-slate-900">{cert.title}</h4>
            <p className="mt-1 text-sm font-medium text-blue-600">{cert.issuer}</p>
            <span className="mt-3 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600">
              {cert.detail}
            </span>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* controls */}
      <div className="mt-5 flex items-center justify-center gap-4">
        <button
          aria-label="Précédent"
          onClick={() => paginate(-1)}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-600 shadow-sm transition hover:border-blue-300 hover:text-blue-600"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
        </button>

        <div className="flex items-center gap-2">
          {certifications.map((_, i) => (
            <button
              key={i}
              aria-label={`Certification ${i + 1}`}
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              className={`h-2 rounded-full transition-all ${
                i === index
                  ? "w-6 bg-linear-to-r from-blue-600 to-violet-600"
                  : "w-2 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>

        <button
          aria-label="Suivant"
          onClick={() => paginate(1)}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-600 shadow-sm transition hover:border-blue-300 hover:text-blue-600"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
        </button>
      </div>
    </div>
  );
}
