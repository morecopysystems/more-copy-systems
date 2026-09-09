"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";
import SplitText from "@/components/motion/SplitText";
import { Action, ActionAnchor } from "@/components/ui/action";
import Magnetic from "@/components/motion/Magnetic";
import { SITE } from "@/data/site";
import { BRANDS } from "@/data/brands";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  // Depth: background drifts slowest, product floats fastest, copy lifts out.
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const productY = useTransform(scrollYProgress, [0, 1], ["0%", "-22%"]);
  const copyY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const still = { y: undefined, scale: undefined, opacity: undefined };

  return (
    <section
      ref={ref}
      className="relative isolate flex min-h-[100svh] flex-col justify-between overflow-hidden pt-28 lg:pt-32"
    >
      {/* Layer 1 — showroom photography, pushed back behind a scrim */}
      <motion.div
        style={reduced ? still : { y: bgY, scale: bgScale }}
        className="absolute inset-0 -z-20 will-change-transform"
      >
        <Image
          src="/hero-img-1.jpg"
          alt="More Copy Systems showroom in Kacheripady, Ernakulam, Kochi"
          fill
          priority
          sizes="100vw"
          quality={70}
          className="object-cover"
        />
      </motion.div>
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,hsl(var(--ink))_0%,hsl(var(--ink)/0.72)_38%,hsl(var(--ink)/0.86)_72%,hsl(var(--ink))_100%)]"
      />
      <div
        aria-hidden
        className="glow-accent absolute -right-24 top-1/4 -z-10 h-[36rem] w-[36rem] rounded-full blur-3xl"
      />

      <div className="shell relative flex flex-1 flex-col justify-center">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <motion.div
            style={reduced ? still : { y: copyY, opacity: copyOpacity }}
            className="lg:col-span-7"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="label mb-6 flex flex-wrap items-center gap-3"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
              {SITE.name}
              <span className="text-paper-dim">/</span>
              Kacheripady, Ernakulam
            </motion.p>

            <h1 className="font-display text-[clamp(2.5rem,5.6vw,5.25rem)] font-semibold leading-[0.95] tracking-[-0.04em]">
              <SplitText
                immediate
                text={"Professional printing\n& office equipment\nsolutions"}
                delay={0.15}
                trailing={<span className="text-accent">.</span>}
              />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.55, ease: EASE }}
              className="mt-7 max-w-xl text-base leading-relaxed text-paper-muted sm:text-lg"
            >
              Photocopiers, printers, consumables and the service team behind them — sold, rented,
              exchanged and repaired from a counter on Banerji Road, Kochi.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.68, ease: EASE }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <Magnetic>
                <Action href="/products" size="lg" arrow>
                  Explore products
                </Action>
              </Magnetic>
              <Action href="/services#repair" variant="outline" size="lg">
                Get service
              </Action>
              <ActionAnchor
                href={SITE.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                variant="ghost"
                size="lg"
                arrow
              >
                Talk to us
              </ActionAnchor>
            </motion.div>
          </motion.div>

          {/* Layer 2 — a machine, cut out and floating in front of the room */}
          <motion.div
            style={reduced ? still : { y: productY }}
            className="relative hidden lg:col-span-5 lg:block"
          >
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.3, ease: EASE }}
              className="relative aspect-square w-full"
            >
              <div aria-hidden className="glow absolute inset-0 rounded-full blur-2xl" />
              <Image
                src="/PR04 imageRUNNER 2925 2925i.png"
                alt="Canon imageRUNNER 2925 multifunction photocopier"
                fill
                priority
                sizes="(max-width: 1024px) 0px, 40vw"
                className="object-contain drop-shadow-[0_40px_60px_rgba(0,0,0,0.65)]"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Foot of the hero — brands carried, and a cue to keep going */}
      <div className="relative border-t border-hairline/70 bg-ink/30 backdrop-blur-sm">
        <div className="shell flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="label shrink-0">Authorised & stocked</p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {BRANDS.map((b, i) => (
              <motion.li
                key={b.name}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + i * 0.06, ease: EASE }}
                className="font-mono text-xs uppercase tracking-[0.16em] text-paper-muted"
              >
                {b.name}
              </motion.li>
            ))}
          </ul>
          <a
            href="#journeys"
            className="hidden shrink-0 items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-paper-dim transition-colors hover:text-paper sm:flex"
          >
            Scroll
            <ArrowDown className="h-3.5 w-3.5 animate-bounce" aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}
