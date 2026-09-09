import type { Metadata } from "next";
import { SERVICE_GROUPS, ALL_SERVICES } from "@/data/services";
import { SITE } from "@/data/site";
import PageHero from "@/components/PageHero";
import ServicesSection from "@/components/home/ServicesSection";
import ContactCta from "@/components/ContactCta";
import { ActionAnchor } from "@/components/ui/action";

export const metadata: Metadata = {
  title: "Services — Printer Repair, Photocopier Service, Rental & Printing in Kochi",
  description:
    "Printer repair, photocopier service, installation, maintenance, toner replacement, rental, exchange, lamination, binding, PVC card printing and bulk printing in Ernakulam, Kochi.",
  alternates: { canonical: `${SITE.url}/services` },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: `Services — ${SITE.name}, Ernakulam`,
  itemListElement: ALL_SERVICES.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Service",
      name: s.name,
      description: s.summary,
      areaServed: { "@type": "City", name: "Kochi, Ernakulam, Kerala" },
      provider: { "@type": "LocalBusiness", name: SITE.name, telephone: SITE.phones[0].label },
    },
  })),
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <PageHero
        kicker="Services"
        title={"Sold, serviced, rented,\ntaken back."}
        body="Four groups of work, one team. Whether we supplied the machine or not, bring it to Kacheripady — or tell us where it is and we will come to it."
        crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
        action={
          <ActionAnchor
            href={SITE.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            arrow
          >
            Request service
          </ActionAnchor>
        }
      />

      <nav aria-label="Service groups" className="shell pb-4">
        <ul className="flex flex-wrap gap-2">
          {SERVICE_GROUPS.map((g) => (
            <li key={g.id}>
              <a
                href={`#${g.id}`}
                className="inline-block rounded-full border border-hairline px-4 py-2 text-sm text-paper-muted transition-colors duration-300 hover:border-paper/40 hover:text-paper"
              >
                {g.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <ServicesSection standalone />

      <ContactCta index="02" />
    </>
  );
}
