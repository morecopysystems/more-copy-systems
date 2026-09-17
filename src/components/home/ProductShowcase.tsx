"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { CATEGORIES, type Category } from "@/data/products";
import SectionHeader from "@/components/SectionHeader";
import { Action } from "@/components/ui/action";

/**
 * Pins the section and converts vertical scroll into horizontal travel
 * on both desktop and mobile viewports, featuring the "Keep scrolling" progress bar.
 * Reduced-motion users receive the static snap-scrolling rail.
 */
export default function ProductShowcase() {
  const reduced = useReducedMotion();
  const [pinned, setPinned] = useState(false);

  useEffect(() => {
    // Active on all viewports (mobile & desktop) unless reduced motion is preferred
    setPinned(!reduced);
  }, [reduced]);

  return (
    <section id="products" className="relative scroll-mt-24 border-t border-hairline py-20 lg:pb-12 lg:pt-36">
      <div className="shell">
        <SectionHeader
          index="02"
          kicker="Product catalogue"
          title={"Ten categories.\nOne counter."}
          body="From heavy-duty A3 colour multifunction photocopiers down to the right toner cartridge for the machine you already own."
          action={
            <Action href="/products" variant="outline" arrow>
              Browse all products
            </Action>
          }
        />
      </div>

      {pinned ? <PinnedRail /> : <SnapRail />}
    </section>
  );
}

function PinnedRail() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);

  useLayoutEffect(() => {
    const measure = () => {
      if (!trackRef.current) return;
      // Calculate travel distance so the last card reaches the right margin
      const padding = window.innerWidth >= 1024 ? 96 : 32;
      setDistance(Math.max(0, trackRef.current.scrollWidth - window.innerWidth + padding));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const rawX = useTransform(scrollYProgress, [0, 1], [0, -distance]);
  const x = useSpring(rawX, { stiffness: 320, damping: 44, mass: 0.5 });
  const progress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Calculate scroll runway: scaled for natural travel on mobile and desktop
  const sectionHeight = Math.round(distance * 0.65) + 520;

  return (
    <div ref={sectionRef} style={{ height: `${sectionHeight}px` }} className="relative mt-12 sm:mt-16">
      <div className="sticky top-0 flex h-[100svh] flex-col justify-center overflow-hidden">
        <motion.div
          ref={trackRef}
          style={{ x }}
          className="flex gap-4 pl-5 pr-12 sm:gap-6 sm:pl-[max(1.25rem,calc((100vw-1440px)/2+3rem))] sm:pr-24 will-change-transform"
        >
          {CATEGORIES.map((c, i) => (
            <CategoryCard
              key={c.slug}
              category={c}
              index={i}
              className="w-[82vw] max-w-[21rem] shrink-0 sm:max-w-none sm:w-[26rem]"
            />
          ))}
        </motion.div>

        <div className="shell mt-6 sm:mt-10">
          <div className="h-px w-full bg-hairline">
            <motion.div style={{ width: progress }} className="h-px bg-accent" />
          </div>
          <div className="mt-3 flex items-center justify-between sm:mt-4">
            <p className="label flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" aria-hidden />
              Keep scrolling
            </p>
            <p className="font-mono text-xs text-paper-dim">
              10 categories
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SnapRail() {
  return (
    <div className="mt-14">
      <div className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 sm:px-8">
        {CATEGORIES.map((c, i) => (
          <CategoryCard
            key={c.slug}
            category={c}
            index={i}
            className="w-[82vw] shrink-0 snap-start sm:w-[26rem]"
          />
        ))}
      </div>
      <div className="shell mt-4">
        <p className="label">Swipe for more categories</p>
      </div>
    </div>
  );
}

function CategoryCard({
  category,
  index,
  className,
}: {
  category: Category;
  index: number;
  className?: string;
}) {
  return (
    <Link
      href={`/products/${category.slug}`}
      className={`group relative flex flex-col overflow-hidden rounded-lg border border-hairline bg-surface transition-colors duration-500 ease-editorial hover:border-paper/25 ${className ?? ""}`}
    >
      <div className="shot-well relative aspect-[16/11] w-full overflow-hidden">
        <Image
          src={category.cover}
          alt={`${category.name} available at More Copy Systems, Ernakulam`}
          fill
          sizes="(max-width: 640px) 82vw, (max-width: 1024px) 21rem, 26rem"
          loading={index < 2 ? "eager" : "lazy"}
          className="object-contain p-6 sm:p-8 transition-transform duration-700 ease-editorial group-hover:scale-[1.06]"
        />
        <span className="absolute left-4 top-4 font-mono text-[10px] tracking-[0.2em] text-ink/45 sm:left-5 sm:top-5">
          {String(index + 1).padStart(2, "0")} / {String(CATEGORIES.length).padStart(2, "0")}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-2.5 p-5 sm:gap-3 sm:p-7">
        <p className="label text-accent">{category.kicker}</p>
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-2xl leading-none sm:text-3xl">{category.name}</h3>
          <ArrowUpRight
            className="mt-0.5 h-4 w-4 shrink-0 text-paper-dim transition-[transform,color] duration-500 ease-editorial group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent sm:h-5 sm:w-5"
            aria-hidden
          />
        </div>
        <p className="line-clamp-2 text-xs leading-relaxed text-paper-muted sm:line-clamp-none sm:text-sm">
          {category.description}
        </p>
        <p className="mt-auto pt-2 font-mono text-[11px] text-paper-dim sm:pt-4 sm:text-xs">
          {category.products.length} {category.products.length === 1 ? "line" : "lines"} listed
        </p>
      </div>
    </Link>
  );
}
