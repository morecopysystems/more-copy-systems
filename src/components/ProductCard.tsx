"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight, ImageOff } from "lucide-react";
import type { Product } from "@/data/products";
import { cn, enquiryHref } from "@/lib/utils";

type Props = {
  product: Product;
  /** Constrains the image well; list pages use "tall", showcases use "wide". */
  ratio?: "tall" | "wide";
  className?: string;
  priority?: boolean;
};

export default function ProductCard({ product, ratio = "tall", className, priority }: Props) {
  const [index, setIndex] = useState(0);
  const hasImage = product.images.length > 0;
  const multi = product.images.length > 1;

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-lg border border-hairline bg-surface transition-colors duration-500 ease-editorial hover:border-paper/25",
        className
      )}
    >
      {hasImage ? (
        <div
          className={cn(
            "shot-well relative w-full overflow-hidden",
            ratio === "tall" ? "aspect-[4/3]" : "aspect-[16/10]"
          )}
        >
          {product.images.map((src, i) => (
            <Image
              key={src}
              src={src}
              alt={
                i === 0
                  ? `${product.name} — available at More Copy Systems, Ernakulam, Kochi`
                  : `${product.name} — alternate view ${i + 1}`
              }
              fill
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
              priority={priority && i === 0}
              loading={priority && i === 0 ? undefined : "lazy"}
              className={cn(
                "object-contain p-6 transition-[opacity,transform] duration-700 ease-editorial group-hover:scale-[1.04]",
                i === index ? "opacity-100" : "opacity-0"
              )}
            />
          ))}

          {multi ? (
            <div className="absolute inset-x-0 bottom-0 flex flex-wrap justify-center gap-1.5 p-3">
              {product.images.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setIndex(i)}
                  onMouseEnter={() => setIndex(i)}
                  aria-label={`Show image ${i + 1} of ${product.name}`}
                  aria-current={i === index}
                  className={cn(
                    "h-1.5 w-5 rounded-full transition-colors duration-300",
                    i === index ? "bg-ink" : "bg-ink/25 hover:bg-ink/50"
                  )}
                />
              ))}
            </div>
          ) : null}
        </div>
      ) : (
        <div
          className={cn(
            "relative flex w-full items-end overflow-hidden border-b border-hairline bg-ink-900 p-6",
            ratio === "tall" ? "aspect-[4/3]" : "aspect-[16/10]"
          )}
        >
          <div className="glow-accent absolute -left-10 -top-10 h-48 w-48 rounded-full opacity-60" />
          <ImageOff className="absolute right-6 top-6 h-4 w-4 text-paper-dim" aria-hidden />
          <p className="relative font-display text-display-sm leading-none text-paper/90">
            {product.name}
          </p>
        </div>
      )}

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex items-center justify-between gap-3">
          <span className="label text-paper-dim">{product.brand}</span>
          <span className="label text-accent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            In store
          </span>
        </div>

        <div>
          <h3 className="text-lg font-medium leading-snug text-paper">{product.name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-paper-muted">{product.tagline}</p>
        </div>

        {product.specs.length > 0 ? (
          <ul className="mt-auto space-y-1.5 border-t border-hairline pt-4">
            {product.specs.slice(0, 4).map((spec) => (
              <li key={spec} className="flex gap-2.5 font-mono text-xs leading-relaxed text-paper-dim">
                <span aria-hidden className="text-accent">
                  ·
                </span>
                <span>{spec}</span>
              </li>
            ))}
          </ul>
        ) : null}

        {product.note ? (
          <p className="text-xs leading-relaxed text-paper-dim">{product.note}</p>
        ) : null}

        <a
          href={enquiryHref(product.name)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center gap-2 pt-2 text-sm font-medium text-paper transition-colors duration-300 hover:text-accent"
        >
          <span className="link-underline">Enquire on WhatsApp</span>
          <ArrowUpRight
            className="h-4 w-4 transition-transform duration-500 ease-editorial group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden
          />
          <span className="sr-only">about {product.name}</span>
        </a>
      </div>
    </article>
  );
}
