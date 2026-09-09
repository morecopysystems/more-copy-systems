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
 * Desktop pins the section and converts vertical scroll into horizontal travel.
 * Everything narrower — and anyone with reduced motion on — gets a native
 * snap-scrolling rail with identical content and no pinning.
 */
export default function ProductShowcase() {
  const reduced = useReducedMotion();
  const [pinned, setPinned] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const apply = () => setPinned(mq.matches && !reduced);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, [reduced]);

  return (
    <section id="products" className="relative scroll-mt-24 py-24 lg:pb-12 lg:pt-36">
      <div className="shell">
        <SectionHeader
          index="02"
          kicker="Product catalogue"
          title={"Ten categories.\nOne counter."}
          body="From an A3 colour multifunction system down to the right toner cartridge for the machine you already own."
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
      // How far the track has to travel for its last card to reach the right edge.
      setDistance(Math.max(0, trackRef.current.scrollWidth - window.innerWidth + 96));
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

  // Horizontal travel runs faster than vertical scroll, so the section does not
  // hijack five screens of scrolling to show ten cards.
  const sectionHeight = Math.round(distance * 0.62) + 560;

  return (
    <div ref={sectionRef} style={{ height: `${sectionHeight}px` }} className="relative mt-16">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <motion.div
          ref={trackRef}
          style={{ x }}
          className="flex gap-6 pl-[max(1.25rem,calc((100vw-1440px)/2+3rem))] pr-24 will-change-transform"
        >
          {CATEGORIES.map((c, i) => (
            <CategoryCard key={c.slug} category={c} index={i} className="w-[26rem] shrink-0" />
          ))}
        </motion.div>

        <div className="shell mt-10">
          <div className="h-px w-full bg-hairline">
            <motion.div style={{ width: progress }} className="h-px bg-accent" />
          </div>
          <p className="label mt-4">Keep scrolling</p>
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
            className="w-[80vw] shrink-0 snap-start sm:w-[26rem]"
          />
        ))}
      </div>
      <p className="shell label mt-4">Swipe for more categories</p>
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
          sizes="(max-width: 1024px) 80vw, 26rem"
          loading={index < 2 ? "eager" : "lazy"}
          className="object-contain p-8 transition-transform duration-700 ease-editorial group-hover:scale-[1.06]"
        />
        <span className="absolute left-5 top-5 font-mono text-[10px] tracking-[0.2em] text-ink/45">
          {String(index + 1).padStart(2, "0")} / {String(CATEGORIES.length).padStart(2, "0")}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-7">
        <p className="label text-accent">{category.kicker}</p>
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-3xl leading-none">{category.name}</h3>
          <ArrowUpRight
            className="mt-1 h-5 w-5 shrink-0 text-paper-dim transition-[transform,color] duration-500 ease-editorial group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
            aria-hidden
          />
        </div>
        <p className="text-sm leading-relaxed text-paper-muted">{category.description}</p>
        <p className="mt-auto pt-4 font-mono text-xs text-paper-dim">
          {category.products.length} {category.products.length === 1 ? "line" : "lines"} listed
        </p>
      </div>
    </Link>
  );
}
