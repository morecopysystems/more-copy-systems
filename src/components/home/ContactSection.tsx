import Image from "next/image";
import { Clock, MapPin, Navigation, MessageCircle, Phone, Mail, ArrowUpRight } from "lucide-react";
import { SITE } from "@/data/site";
import SectionHeader from "@/components/SectionHeader";
import { Reveal } from "@/components/motion/Reveal";
import { Action, ActionAnchor } from "@/components/ui/action";

export default function ContactSection() {
  const { address } = SITE;

  return (
    <section id="contact" className="relative scroll-mt-24 border-t border-hairline py-24 lg:py-36">
      <div
        aria-hidden
        className="glow-accent pointer-events-none absolute left-1/2 top-0 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/3 rounded-full blur-3xl opacity-50"
      />
      <div className="shell relative">
        <SectionHeader
          index="06"
          kicker="Showroom & Contact"
          title={"Visit us in Kacheripady,\nor reach out directly."}
          body="Metro Pillar 625 on Banerji Road. Come in with the machine, the cartridge, or just the problem — or message us for a fast quote."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Showroom details & visual */}
          <Reveal className="flex flex-col justify-between rounded-lg border border-hairline bg-surface p-8 lg:col-span-6">
            <div>
              <div className="relative mb-6 aspect-[16/9] w-full overflow-hidden rounded-md border border-hairline">
                <Image
                  src="/hero-img-2.jpg"
                  alt="Inside the More Copy Systems showroom, Kacheripady, Ernakulam"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                  quality={70}
                  className="object-cover"
                />
              </div>

              <p className="label text-accent">Walk-in Showroom</p>
              <h3 className="mt-2 font-display text-2xl text-paper">
                Banerji Road, Kacheripady
              </h3>

              <address className="mt-6 space-y-4 not-italic text-sm text-paper-muted">
                <div className="flex gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                  <span>
                    <span className="text-paper">{SITE.name}</span>
                    <br />
                    {address.line1}, {address.line2}
                    <br />
                    {address.city}, {address.region} — {address.postalCode}
                    <br />
                    <span className="font-mono text-xs text-accent">Landmark: {address.landmark}</span>
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
              </address>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-hairline pt-6">
              <ActionAnchor
                href={SITE.maps}
                target="_blank"
                rel="noopener noreferrer"
                size="sm"
                variant="outline"
              >
                <Navigation className="h-3.5 w-3.5" aria-hidden />
                Get directions
              </ActionAnchor>
              <Action href="/contact" size="sm" arrow>
                Full contact page
              </Action>
            </div>
          </Reveal>

          {/* Direct channels */}
          <div className="flex flex-col gap-4 lg:col-span-6">
            {/* WhatsApp */}
            <Reveal delay={0.05}>
              <a
                href={SITE.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between gap-4 rounded-lg border border-hairline bg-surface p-6 transition-[border-color,background-color] hover:border-accent hover:bg-ink-800 sm:flex-row sm:items-center"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-hairline text-accent group-hover:border-accent group-hover:bg-accent/10">
                    <MessageCircle className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <p className="label text-accent">WhatsApp</p>
                    <h4 className="font-display text-xl text-paper">Message us</h4>
                    <p className="mt-1 text-xs text-paper-muted">
                      Fastest for machine error photos, part checks &amp; quick quotes
                    </p>
                  </div>
                </div>
                <span className="flex shrink-0 items-center gap-1 font-mono text-xs text-accent">
                  Chat now <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </a>
            </Reveal>

            {/* Direct Phone */}
            <Reveal delay={0.1}>
              <div className="rounded-lg border border-hairline bg-surface p-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-hairline text-accent">
                    <Phone className="h-5 w-5" aria-hidden />
                  </span>
                  <div className="flex-1">
                    <p className="label">Showroom desk</p>
                    <h4 className="font-display text-xl text-paper">Call directly</h4>
                    <p className="mt-1 text-xs text-paper-muted">
                      Direct line to showroom technicians for immediate stock and service status
                    </p>
                    <div className="mt-4 flex flex-wrap gap-3">
                      {SITE.phones.map((phone) => (
                        <ActionAnchor
                          key={phone.href}
                          href={phone.href}
                          size="sm"
                          variant="outline"
                        >
                          {phone.label}
                        </ActionAnchor>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Email */}
            <Reveal delay={0.15}>
              <a
                href={`mailto:${SITE.email}`}
                className="group flex items-center justify-between gap-4 rounded-lg border border-hairline bg-surface p-6 transition-[border-color,background-color] hover:border-paper/25 hover:bg-ink-800"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-hairline text-paper-muted group-hover:text-accent">
                    <Mail className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <p className="label">Institutional &amp; bulk</p>
                    <p className="font-mono text-sm text-paper">{SITE.email}</p>
                    <p className="mt-0.5 text-xs text-paper-muted">
                      Purchase orders, tenders &amp; corporate enquiries
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-paper-dim transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
              </a>
            </Reveal>

            {/* Service Areas */}
            <Reveal delay={0.2}>
              <div className="rounded-lg border border-hairline/60 bg-surface/40 p-5">
                <p className="label mb-3 text-paper-dim">Areas we service across Kerala</p>
                <ul className="flex flex-wrap gap-1.5">
                  {SITE.serviceArea.map((area) => (
                    <li
                      key={area}
                      className="rounded-full border border-hairline px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-paper-dim"
                    >
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
