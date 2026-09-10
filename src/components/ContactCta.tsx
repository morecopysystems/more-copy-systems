import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import { SITE } from "@/data/site";
import SplitText from "@/components/motion/SplitText";
import { RevealGroup, RevealItem, Reveal } from "@/components/motion/Reveal";

const CHANNELS = [
  {
    icon: Phone,
    label: "Call",
    value: SITE.phones[0].label,
    sub: SITE.phones[1].label,
    href: SITE.phones[0].href,
    subHref: SITE.phones[1].href,
    note: "Fastest for service and stock checks",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Message us",
    href: SITE.whatsapp.href,
    external: true,
    note: "Send a photo of the machine or the error",
  },
  {
    icon: Mail,
    label: "Email",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
    note: "For quotes, tenders and bulk enquiries",
  },
  {
    icon: MapPin,
    label: "Visit",
    value: "Kacheripady showroom",
    href: SITE.maps,
    external: true,
    note: `${SITE.hours.display}`,
  },
];

export default function ContactCta({ index = "07" }: { index?: string }) {
  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden border-t border-hairline py-24 lg:py-36"
    >
      <div
        aria-hidden
        className="glow-accent pointer-events-none absolute left-1/2 top-0 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/3 rounded-full blur-3xl"
      />
      <div className="shell relative">
        <div className="flex items-baseline gap-4 pb-8">
          <span className="label text-accent">{index}</span>
          <span className="label">Contact</span>
          <span className="hidden h-px flex-1 bg-hairline sm:block" />
        </div>

        <SplitText
          as="h2"
          text={"Tell us what you need.\nWe will tell you what it costs."}
          className="max-w-4xl font-display text-display-md text-balance"
        />

        <Reveal delay={0.1}>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-paper-muted">
            A quote, a service call, a rental term, a cartridge number — whichever it is, one
            message gets it moving. No forms that vanish.
          </p>
        </Reveal>

        <RevealGroup as="ul" className="mt-16 grid gap-px overflow-hidden rounded-lg border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
          {CHANNELS.map((c) => {
            const Icon = c.icon;
            return (
              <RevealItem as="li" key={c.label}>
                <a
                  href={c.href}
                  {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex h-full flex-col gap-6 bg-ink-900 p-8 transition-colors duration-500 hover:bg-ink-800"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline transition-colors duration-500 group-hover:border-accent group-hover:bg-accent/10">
                    <Icon
                      className="h-4 w-4 text-paper-muted transition-colors duration-500 group-hover:text-accent"
                      aria-hidden
                    />
                  </span>
                  <div>
                    <p className="label mb-3">{c.label}</p>
                    <p className="font-display text-xl leading-tight text-paper">{c.value}</p>
                    {c.sub ? (
                      <p className="mt-1 font-mono text-xs text-paper-dim">{c.sub}</p>
                    ) : null}
                  </div>
                  <p className="mt-auto text-xs leading-relaxed text-paper-dim">{c.note}</p>
                </a>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
