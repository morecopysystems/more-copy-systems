import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CATEGORIES, ALL_PRODUCTS } from "@/data/products";
import { BRANDS } from "@/data/brands";
import PageHero from "@/components/PageHero";
import ContactCta from "@/components/ContactCta";
import { RevealGroup, RevealItem, Reveal } from "@/components/motion/Reveal";
import { Action } from "@/components/ui/action";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Products — Printers, Photocopiers, Toner & Office Equipment in Kochi",
  description:
    "Browse photocopiers, printers, scanners, laminators, binding machines, paper cutters, inks, toners and PVC card equipment available at More Copy Systems, Kacheripady, Ernakulam, Kochi.",
  alternates: { canonical: `${SITE.url}/products` },
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        kicker="Product catalogue"
        title={"Everything we stock,\nsorted by what it does."}
        body={`${ALL_PRODUCTS.length} product lines across ${CATEGORIES.length} categories — from A3 colour multifunction systems down to the cartridge that fits the machine on your desk.`}
        crumbs={[{ label: "Home", href: "/" }, { label: "Products" }]}
        action={
          <Action href="/services" variant="outline" arrow>
            Need service instead?
          </Action>
        }
      />

      <section className="pb-24 lg:pb-32">
        <div className="shell">
          <RevealGroup as="ul" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((category, i) => (
              <RevealItem as="li" key={category.slug}>
                <Link
                  href={`/products/${category.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-lg border border-hairline bg-surface transition-colors duration-500 ease-editorial hover:border-paper/25"
                >
                  <div className="shot-well relative aspect-[16/11] overflow-hidden">
                    <Image
                      src={category.cover}
                      alt={`${category.name} at More Copy Systems, Ernakulam`}
                      fill
                      sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                      loading={i < 3 ? "eager" : "lazy"}
                      className="object-contain p-8 transition-transform duration-700 ease-editorial group-hover:scale-[1.06]"
                    />
                    <span className="absolute left-5 top-5 font-mono text-[10px] tracking-[0.2em] text-ink/45">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-7">
                    <p className="label text-accent">{category.kicker}</p>
                    <div className="flex items-start justify-between gap-4">
                      <h2 className="font-display text-2xl leading-none">{category.name}</h2>
                      <ArrowUpRight
                        className="mt-0.5 h-5 w-5 shrink-0 text-paper-dim transition-[transform,color] duration-500 ease-editorial group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                        aria-hidden
                      />
                    </div>
                    <p className="text-sm leading-relaxed text-paper-muted">
                      {category.description}
                    </p>
                    <p className="mt-auto pt-4 font-mono text-xs text-paper-dim">
                      {category.products.length} listed
                    </p>
                  </div>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal className="mt-16">
            <div className="rounded-lg border border-hairline bg-surface p-8 lg:p-10">
              <p className="label mb-6">Brands under this roof</p>
              <ul className="flex flex-wrap items-center gap-x-10 gap-y-6">
                {BRANDS.map((b) => (
                  <li key={b.name} className="relative h-8 w-24 opacity-60 transition-opacity hover:opacity-100">
                    <Image
                      src={b.logo}
                      alt={`${b.name} — stocked at More Copy Systems`}
                      fill
                      sizes="96px"
                      loading="lazy"
                      className="logo-invert object-contain object-left"
                    />
                  </li>
                ))}
              </ul>
              <p className="mt-8 max-w-2xl text-sm leading-relaxed text-paper-muted">
                Not seeing the model you need? We source across all six brands and stock both
                genuine and compatible consumables. Send us the model number and we will confirm
                availability and price.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <ContactCta index="02" />
    </>
  );
}
