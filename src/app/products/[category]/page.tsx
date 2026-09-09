import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CATEGORIES, getCategory } from "@/data/products";
import { SITE } from "@/data/site";
import PageHero from "@/components/PageHero";
import ProductCard from "@/components/ProductCard";
import ContactCta from "@/components/ContactCta";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { Action } from "@/components/ui/action";

type Params = { params: { category: string } };

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ category: c.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const category = getCategory(params.category);
  if (!category) return {};

  const title = `${category.name} in Kochi, Ernakulam`;
  return {
    title,
    description: `${category.description} Available at More Copy Systems, Kacheripady, Ernakulam, Kochi. Call ${SITE.phones[0].label}.`,
    alternates: { canonical: `${SITE.url}/products/${category.slug}` },
    openGraph: {
      title: `${title} | ${SITE.name}`,
      description: category.description,
      url: `${SITE.url}/products/${category.slug}`,
    },
  };
}

export default function CategoryPage({ params }: Params) {
  const category = getCategory(params.category);
  if (!category) notFound();

  const index = CATEGORIES.findIndex((c) => c.slug === category.slug);
  const prev = CATEGORIES[(index - 1 + CATEGORIES.length) % CATEGORIES.length];
  const next = CATEGORIES[(index + 1) % CATEGORIES.length];

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${category.name} — ${SITE.name}, Ernakulam`,
    itemListElement: category.products.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Product",
        name: p.name,
        description: p.tagline,
        ...(p.brand !== "Multi-brand" ? { brand: { "@type": "Brand", name: p.brand } } : {}),
        ...(p.images[0] ? { image: `${SITE.url}${encodeURI(p.images[0])}` } : {}),
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          areaServed: "Ernakulam, Kerala",
          seller: { "@type": "LocalBusiness", name: SITE.name },
        },
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      <PageHero
        kicker={category.kicker}
        title={category.name}
        body={category.description}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: category.name },
        ]}
        action={
          <Action href="/products" variant="outline">
            All categories
          </Action>
        }
      />

      <section className="pb-24 lg:pb-32">
        <div className="shell">
          <RevealGroup as="ul" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {category.products.map((product, i) => (
              <RevealItem as="li" key={product.slug} className="h-full">
                <ProductCard product={product} priority={i < 3} />
              </RevealItem>
            ))}
          </RevealGroup>

          {/* Lateral navigation keeps browsing going rather than dead-ending */}
          <nav
            aria-label="Category navigation"
            className="mt-20 grid gap-px overflow-hidden rounded-lg border border-hairline bg-hairline sm:grid-cols-2"
          >
            <Link
              href={`/products/${prev.slug}`}
              className="group bg-ink-900 p-8 transition-colors duration-500 hover:bg-ink-800"
            >
              <p className="label mb-4">← Previous</p>
              <p className="font-display text-2xl transition-colors group-hover:text-accent">
                {prev.name}
              </p>
            </Link>
            <Link
              href={`/products/${next.slug}`}
              className="group bg-ink-900 p-8 text-right transition-colors duration-500 hover:bg-ink-800"
            >
              <p className="label mb-4">Next →</p>
              <p className="font-display text-2xl transition-colors group-hover:text-accent">
                {next.name}
              </p>
            </Link>
          </nav>
        </div>
      </section>

      <ContactCta index="02" />
    </>
  );
}
