import Image from "next/image";
import { Clock, MapPin, Navigation } from "lucide-react";
import { SITE } from "@/data/site";
import SectionHeader from "@/components/SectionHeader";
import MapEmbed from "@/components/MapEmbed";
import Parallax from "@/components/motion/Parallax";
import { Reveal } from "@/components/motion/Reveal";
import { ActionAnchor } from "@/components/ui/action";

export default function LocalSection() {
  const { address } = SITE;

  return (
    <section id="local" className="relative scroll-mt-24 border-t border-hairline py-24 lg:py-36">
      <div className="shell">
        <SectionHeader
          index="06"
          kicker="Local presence"
          title={"Kacheripady, Ernakulam.\nNot a call centre."}
          body="Metro Pillar 625 on Banerji Road. Come in with the machine, the cartridge, or just the problem."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <MapEmbed height={520} className="h-full" />
          </Reveal>

          <div className="flex flex-col gap-6 lg:col-span-5">
            <Reveal delay={0.06}>
              <div className="rounded-lg border border-hairline bg-surface p-8">
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
                </address>

                <div className="mt-8 flex flex-wrap gap-3">
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
                  <ActionAnchor href={SITE.phones[0].href} size="sm">
                    Call the showroom
                  </ActionAnchor>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="overflow-hidden rounded-lg border border-hairline">
                <Parallax distance={26} className="relative aspect-[16/10]">
                  <Image
                    src="/hero-img-2.jpg"
                    alt="Inside the More Copy Systems showroom, Kacheripady, Ernakulam"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    loading="lazy"
                    quality={70}
                    className="scale-110 object-cover"
                  />
                </Parallax>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <div>
                <p className="label mb-4">Areas we serve</p>
                <ul className="flex flex-wrap gap-2">
                  {SITE.serviceArea.map((area) => (
                    <li
                      key={area}
                      className="rounded-full border border-hairline px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-paper-dim"
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
