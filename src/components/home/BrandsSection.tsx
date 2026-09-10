"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BRANDS } from "@/data/brands";
import SectionHeader from "@/components/SectionHeader";
import { Reveal } from "@/components/motion/Reveal";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Brand names behave as a control surface: hovering or focusing a name swaps
 * the mark and the description beside it. Keyboard users get the same thing.
 */
export default function BrandsSection() {
  const [active, setActive] = useState(0);
  const brand = BRANDS[active];

  return (
    <section id="brands" className="relative scroll-mt-24 border-t border-hairline py-24 lg:py-36">
      <div className="shell">
        <SectionHeader
          index="03"
          kicker="Brands we carry"
          title={"Six manufacturers,\nserviced under one roof."}
          body="We are a Canon authorised dealer, and we stock, sell and repair across the rest of the shortlist too."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <ul className="lg:col-span-7">
            {BRANDS.map((b, i) => (
              <li key={b.name}>
                <button
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  aria-pressed={active === i}
                  className="group flex w-full items-center justify-between gap-6 border-b border-hairline py-5 text-left transition-colors duration-500 hover:border-paper/25"
                >
                  <span
                    className={`font-display text-4xl leading-none transition-colors duration-500 ease-editorial sm:text-5xl lg:text-6xl ${
                      active === i ? "text-paper" : "text-paper/25 group-hover:text-paper/60"
                    }`}
                  >
                    {b.name}
                  </span>
                  <span
                    className={`h-1.5 w-1.5 shrink-0 rounded-full transition-colors duration-500 ${
                      active === i ? "bg-accent" : "bg-paper/15"
                    }`}
                    aria-hidden
                  />
                </button>
              </li>
            ))}
          </ul>

          <div className="lg:col-span-5">
            <div className="sticky top-28 rounded-lg border border-hairline bg-surface p-8">
              <div className="relative h-16 w-40">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={brand.name}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.35, ease: EASE }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      fill
                      sizes="160px"
                      className="logo-invert object-contain object-left opacity-90"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={`${brand.name}-copy`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: EASE }}
                >
                  <p className="mt-8 text-base leading-relaxed text-paper-muted">{brand.focus}</p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {brand.strengths.map((s) => (
                      <li
                        key={s}
                        className="rounded-full border border-hairline px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-paper-dim"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>

              <Link
                href="/products"
                className="mt-8 inline-block text-sm text-accent link-underline"
              >
                See what we stock
              </Link>
            </div>
          </div>
        </div>

        <Reveal className="mt-16">
          <div className="mask-fade-x overflow-hidden">
            <div
              className="flex w-max animate-marquee items-center gap-16"
              style={{ ["--marquee-duration" as string]: "38s" }}
            >
              {[...BRANDS, ...BRANDS].map((b, i) => (
                <div key={`${b.name}-${i}`} className="relative h-8 w-28 shrink-0 opacity-35">
                  <Image
                    src={b.logo}
                    alt=""
                    aria-hidden
                    fill
                    sizes="112px"
                    className="logo-invert object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
