"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const ICONS = [
  "react", "nextjs", "laravel", "nodejs", "python",
  "javascript", "php", "java", "html5", "css3",
  "tailwindcss", "sass", "bootstrap", "mysql", "mongodb",
  "postgresql", "git", "docker", "linux", "figma",
];

export default function TechGrid() {
  const reduce = useReducedMotion();

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="grid grid-cols-4 gap-3 sm:grid-cols-5 sm:gap-4">
        {ICONS.map((name, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              ...(reduce ? {} : { y: [0, -6, 0] }),
            }}
            viewport={{ once: true }}
            transition={
              reduce
                ? { duration: 0.4, delay: i * 0.03 }
                : {
                    opacity: { duration: 0.4, delay: i * 0.03 },
                    scale: { duration: 0.4, delay: i * 0.03 },
                    y: {
                      duration: 2.6 + (i % 5) * 0.3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }
            }
            className="flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200/80 bg-white/80 shadow-sm backdrop-blur sm:h-16 sm:w-16"
          >
            <Image
              src={`/icons/${name}.svg`}
              alt={name}
              width={32}
              height={32}
              unoptimized
              className="h-8 w-8 object-contain"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
