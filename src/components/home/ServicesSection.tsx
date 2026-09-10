import {
  Wrench,
  Printer,
  PackagePlus,
  CalendarCheck,
  Droplets,
  CreditCard,
  FileText,
  Award,
  Layers,
  Copy,
  ShieldCheck,
  Image as ImageIcon,
  Repeat,
  Handshake,
  type LucideIcon,
} from "lucide-react";
import { SERVICE_GROUPS } from "@/data/services";
import SectionHeader from "@/components/SectionHeader";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { Action } from "@/components/ui/action";
import { enquiryHref } from "@/lib/utils";

const ICONS: Record<string, LucideIcon> = {
  "printer-repair": Wrench,
  "photocopier-service": Printer,
  installation: PackagePlus,
  maintenance: CalendarCheck,
  "toner-replacement": Droplets,
  "visiting-cards": CreditCard,
  letterheads: FileText,
  certificates: Award,
  "bulk-printing": Layers,
  "bulk-photocopying": Copy,
  lamination: ShieldCheck,
  "pvc-card-printing": CreditCard,
  "photo-framing": ImageIcon,
  "equipment-rental": Repeat,
  "equipment-exchange": Handshake,
};

export default function ServicesSection({ standalone = false }: { standalone?: boolean }) {
  return (
    <section id="services" className="relative scroll-mt-24 border-t border-hairline py-24 lg:py-36">
      <div className="shell">
        {standalone ? null : (
          <SectionHeader
            index="04"
            kicker="Services"
            title={"We do not just sell\nthe machine."}
            body="Repair, installation, maintenance, rental, exchange and the printing work itself — for equipment we supplied and equipment we did not."
            action={
              <Action href="/services" variant="outline" arrow>
                All services in detail
              </Action>
            }
          />
        )}

        <div className={standalone ? "" : "mt-16"}>
          {SERVICE_GROUPS.map((group) => (
            <div
              key={group.id}
              id={group.id}
              className="grid scroll-mt-28 gap-8 border-t border-hairline py-12 lg:grid-cols-12 lg:gap-12 lg:py-16"
            >
              <div className="lg:col-span-4">
                <div className="lg:sticky lg:top-28">
                  <p className="label text-accent">{group.kicker}</p>
                  <h3 className="mt-4 font-display text-display-sm">{group.name}</h3>
                  <p className="mt-4 max-w-sm text-sm leading-relaxed text-paper-muted">
                    {group.description}
                  </p>
                </div>
              </div>

              <RevealGroup
                as="ul"
                className="grid gap-4 sm:grid-cols-2 lg:col-span-8"
                stagger={0.05}
              >
                {group.services.map((service) => {
                  const Icon = ICONS[service.slug] ?? Wrench;
                  return (
                    <RevealItem as="li" key={service.slug}>
                      <a
                        id={service.slug}
                        href={enquiryHref(service.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex h-full scroll-mt-28 flex-col gap-4 rounded-lg border border-hairline bg-surface p-6 transition-[border-color,background-color,transform] duration-500 ease-editorial hover:-translate-y-1 hover:border-paper/25 hover:bg-ink-800"
                      >
                        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline transition-colors duration-500 group-hover:border-accent group-hover:bg-accent/10">
                          <Icon className="h-4 w-4 text-paper-muted transition-colors duration-500 group-hover:text-accent" aria-hidden />
                        </span>

                        <div>
                          <h4 className="text-base font-medium text-paper">{service.name}</h4>
                          <p className="mt-2 text-sm leading-relaxed text-paper-muted">
                            {service.summary}
                          </p>
                        </div>

                        <ul className="mt-auto flex flex-wrap gap-x-3 gap-y-1.5 border-t border-hairline pt-4">
                          {service.points.map((p) => (
                            <li key={p} className="font-mono text-[10px] uppercase tracking-[0.12em] text-paper-dim">
                              {p}
                            </li>
                          ))}
                        </ul>

                        <span className="text-xs text-paper-dim transition-colors duration-500 group-hover:text-accent">
                          Request this →
                        </span>
                      </a>
                    </RevealItem>
                  );
                })}
              </RevealGroup>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
