import Link from "next/link";
import { ArrowUpRight, MapPin, Clock, Mail } from "lucide-react";
import { CATEGORIES } from "@/data/products";
import { SERVICE_GROUPS } from "@/data/services";
import { SITE } from "@/data/site";
import { Reveal } from "@/components/motion/Reveal";

const year = new Date().getFullYear();

export default function SiteFooter() {
  const { address } = SITE;

  return (
    <footer className="relative border-t border-hairline bg-ink-900">
      <div className="shell py-20 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="label mb-5">Kacheripady, Ernakulam</p>
              <p className="max-w-sm font-display text-display-sm text-balance">
                Printers, photocopiers and the people who keep them running.
              </p>
              <address className="mt-8 space-y-4 not-italic text-sm text-paper-muted">
                <div className="flex gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                  <span>
                    {SITE.name}
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
                  <span>{SITE.hours.display}</span>
                </div>
                <div className="flex gap-3">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                  <a href={`mailto:${SITE.email}`} className="link-underline">
                    {SITE.email}
                  </a>
                </div>
              </address>

              <div className="mt-8 flex flex-col gap-1">
                {SITE.phones.map((p) => (
                  <a
                    key={p.href}
                    href={p.href}
                    className="w-fit font-mono text-lg text-paper transition-colors duration-300 hover:text-accent"
                  >
                    {p.label}
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-8">
            <FooterColumn title="Products" href="/products">
              {CATEGORIES.map((c) => (
                <FooterLink key={c.slug} href={`/products/${c.slug}`}>
                  {c.name}
                </FooterLink>
              ))}
            </FooterColumn>

            <FooterColumn title="Services" href="/services">
              {SERVICE_GROUPS.flatMap((g) => g.services)
                .slice(0, 10)
                .map((s) => (
                  <FooterLink key={s.slug} href={`/services#${s.slug}`}>
                    {s.name}
                  </FooterLink>
                ))}
            </FooterColumn>

            <div className="flex flex-col gap-10">
              <FooterColumn title="Company">
                <FooterLink href="/#why">Why More Copy Systems</FooterLink>
                <FooterLink href="/#brands">Brands we carry</FooterLink>
                <FooterLink href="/contact">Contact & showroom</FooterLink>
                <FooterLink href="/contact#map">Find us on the map</FooterLink>
              </FooterColumn>

              <FooterColumn title="Elsewhere">
                {SITE.socials.map((s) => (
                  <FooterExternal key={s.href} href={s.href}>
                    {s.name}
                  </FooterExternal>
                ))}
                <FooterExternal href={SITE.googleListing}>Google Business</FooterExternal>
              </FooterColumn>
            </div>
          </div>
        </div>

        <div className="mt-20 border-t border-hairline pt-8">
          <p className="text-xs leading-relaxed text-paper-dim">
            Serving {SITE.serviceArea.join(" · ")} and the surrounding areas of Kerala. Sales,
            rental, exchange, repair and consumables for Canon, Kyocera, Konica Minolta, Xerox,
            Epson and Brother printers, photocopiers and multifunction devices.
          </p>
          <div className="mt-6 flex flex-col gap-2 text-xs text-paper-dim sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {year} {SITE.name}. All rights reserved.
            </p>
            <p className="font-mono">Kacheripady · Ernakulam · Kerala 682018</p>
          </div>
        </div>
      </div>

      {/* Oversized wordmark — the closing note of the page. */}
      <div
        aria-hidden
        className="mask-fade-b select-none overflow-hidden px-2 pb-2 text-center leading-[0.8]"
      >
        <span className="font-display text-[clamp(2.5rem,13vw,13rem)] font-semibold tracking-tighter text-paper/[0.055]">
          MORE COPY SYSTEMS
        </span>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  href,
  children,
}: {
  title: string;
  href?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      {href ? (
        <Link href={href} className="label mb-5 inline-flex items-center gap-1 hover:text-paper">
          {title} <ArrowUpRight className="h-3 w-3" aria-hidden />
        </Link>
      ) : (
        <p className="label mb-5">{title}</p>
      )}
      <ul className="space-y-2.5">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm text-paper-muted transition-colors duration-300 hover:text-paper"
      >
        {children}
      </Link>
    </li>
  );
}

function FooterExternal({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-paper-muted transition-colors duration-300 hover:text-paper"
      >
        {children}
      </a>
    </li>
  );
}
