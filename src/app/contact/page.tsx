import type { Metadata } from "next";
import { Clock, MapPin, Navigation, Phone } from "lucide-react";
import { SITE } from "@/data/site";
import PageHero from "@/components/PageHero";
import MapEmbed from "@/components/MapEmbed";
import ContactCta from "@/components/ContactCta";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { ActionAnchor } from "@/components/ui/action";
import { enquiryHref } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact & Showroom — Kacheripady, Ernakulam, Kochi",
  description: `Visit More Copy Systems at ${SITE.address.line2}, ${SITE.address.city} — ${SITE.address.postalCode}. Call ${SITE.phones[0].label} or ${SITE.phones[1].label}. Open ${SITE.hours.display}.`,
  alternates: { canonical: `${SITE.url}/contact` },
};

/** Pre-filled enquiry routes, so the first message already has context. */
const QUICK_REQUESTS = [
  { label: "Product enquiry", subject: "a product enquiry", note: "Price, availability, specs" },
  { label: "Service request", subject: "a service request", note: "Repair or breakdown" },
  { label: "Request a quote", subject: "a quotation", note: "Written quote for purchase" },
  { label: "Rental enquiry", subject: "renting a machine", note: "Short or long term" },
  { label: "Exchange my machine", subject: "exchanging my old machine", note: "Trade-in valuation" },
  { label: "Consumables", subject: "toner, ink or paper", note: "Cartridge or paper stock" },
];

export default function ContactPage() {
  const { address } = SITE;

  return (
    <>
      <PageHero
        kicker="Contact"
        title={"Come in, call,\nor send a message."}
        body="Metro Pillar 625 on Banerji Road, Kacheripady. Open six days a week."
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        action={
          <ActionAnchor href={SITE.phones[0].href} arrow>
            Call {SITE.phones[0].label}
          </ActionAnchor>
        }
      />

      <section className="pb-20">
        <div className="shell grid gap-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="flex h-full flex-col gap-8 rounded-lg border border-hairline bg-surface p-8">
              <div>
                <p className="label mb-6">Showroom</p>
                <address className="space-y-5 not-italic text-sm text-paper-muted">
                  <div className="flex gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                    <span>
                      <span className="text-paper">{SITE.name}</span>
                      <br />
                      {address.line1}
                      <br />
                      {address.line2}
                      <br />
                      {address.city}, {address.region} — {address.postalCode}
                      <br />
                      <span className="text-paper-dim">{address.landmark}</span>
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                    <span>
                      <span className="text-paper">{SITE.hours.days}</span>
                      <br />
                      {SITE.hours.open} – {SITE.hours.close}
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                    <span className="flex flex-col">
                      {SITE.phones.map((p) => (
                        <a key={p.href} href={p.href} className="font-mono text-base text-paper hover:text-accent">
                          {p.label}
                        </a>
                      ))}
                      <a href={`mailto:${SITE.email}`} className="mt-2 link-underline">
                        {SITE.email}
                      </a>
                    </span>
                  </div>
                </address>
              </div>

              <div className="mt-auto flex flex-wrap gap-3">
                <ActionAnchor
                  href={SITE.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="sm"
                  variant="outline"
                >
                  <Navigation className="h-3.5 w-3.5" aria-hidden />
                  Directions
                </ActionAnchor>
                <ActionAnchor
                  href={SITE.whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="sm"
                >
                  WhatsApp
                </ActionAnchor>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-7">
            <div id="map" className="h-full scroll-mt-28">
              <MapEmbed height={560} className="h-full" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-8">
        <div className="shell">
          <Reveal>
            <div className="flex items-baseline gap-4 pb-8">
              <span className="label text-accent">01</span>
              <span className="label">Start a conversation</span>
              <span className="hidden h-px flex-1 bg-hairline sm:block" />
            </div>
          </Reveal>

          <RevealGroup as="ul" className="grid gap-px overflow-hidden rounded-lg border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
            {QUICK_REQUESTS.map((r) => (
              <RevealItem as="li" key={r.label}>
                <a
                  href={enquiryHref(r.subject)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col gap-2 bg-ink-900 p-7 transition-colors duration-500 hover:bg-ink-800"
                >
                  <p className="font-display text-xl text-paper transition-colors group-hover:text-accent">
                    {r.label}
                  </p>
                  <p className="text-sm text-paper-muted">{r.note}</p>
                  <span className="mt-4 font-mono text-[10px] uppercase tracking-[0.14em] text-paper-dim">
                    Opens WhatsApp →
                  </span>
                </a>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <ContactCta index="02" />
    </>
  );
}
