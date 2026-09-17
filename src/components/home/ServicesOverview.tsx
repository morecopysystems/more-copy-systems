import Link from "next/link";
import { Wrench, Printer, Repeat, Handshake, ArrowUpRight } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { Action } from "@/components/ui/action";

const SERVICE_PILLARS = [
  {
    id: "repair",
    icon: Wrench,
    kicker: "Keep it running",
    title: "Service & Repair",
    summary:
      "Diagnosis, part replacement and preventive maintenance for photocopiers and printers across all major brands — on-site or at our counter.",
    points: ["Fault diagnosis", "Wear-part replacement", "All major brands", "On-site & workshop"],
    href: "/services#repair",
  },
  {
    id: "printing",
    icon: Printer,
    kicker: "Bring us the file",
    title: "Printing & Document Services",
    summary:
      "Visiting cards, letterheads, certificates, lamination, PVC cards and bulk photocopying with fast turnaround and finishing included.",
    points: ["Visiting cards & stationery", "Bulk mono & colour", "A4 & A3 lamination", "PVC card printing"],
    href: "/services#printing",
  },
  {
    id: "rental",
    icon: Repeat,
    kicker: "Use it, don't buy it",
    title: "Equipment Rental",
    summary:
      "Short and long-term rental for photocopiers and printers matched to your monthly volume. Delivery, setup, maintenance and toner included.",
    points: ["Flexible terms", "Delivery & setup included", "Maintenance included", "Zero capital outlay"],
    href: "/services#rental",
  },
  {
    id: "exchange",
    icon: Handshake,
    kicker: "Trade up",
    title: "Trade-in & Exchange",
    summary:
      "Put the value of your ageing machine toward a current model. Fair inspection valuation for all brands, with data transfer assistance.",
    points: ["Valuation on inspection", "Credit toward new machine", "All brands accepted", "Data & settings handled"],
    href: "/services#exchange",
  },
];

export default function ServicesOverview() {
  return (
    <section id="services" className="relative scroll-mt-24 border-t border-hairline py-24 lg:py-36">
      <div className="shell">
        <SectionHeader
          index="03"
          kicker="Services & Support"
          title={"We do not just sell\nthe machine."}
          body="Repair, maintenance, rental, exchange and production printing — for equipment we supplied and equipment we did not."
          action={
            <Action href="/services" variant="outline" arrow>
              All services in detail
            </Action>
          }
        />

        <RevealGroup
          as="div"
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          stagger={0.06}
        >
          {SERVICE_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <RevealItem key={pillar.id} as="div">
                <Link
                  href={pillar.href}
                  className="group flex h-full flex-col justify-between rounded-lg border border-hairline bg-surface p-7 transition-[border-color,background-color,transform] duration-500 ease-editorial hover:-translate-y-1 hover:border-paper/25 hover:bg-ink-800"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="flex h-11 w-11 items-center justify-center rounded-full border border-hairline transition-colors duration-500 group-hover:border-accent group-hover:bg-accent/10">
                        <Icon className="h-4 w-4 text-paper-muted transition-colors duration-500 group-hover:text-accent" aria-hidden />
                      </span>
                      <ArrowUpRight
                        className="h-4 w-4 text-paper-dim transition-[transform,color] duration-500 ease-editorial group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                        aria-hidden
                      />
                    </div>

                    <p className="label mt-6 text-accent">{pillar.kicker}</p>
                    <h3 className="mt-2 font-display text-xl leading-snug text-paper">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-paper-muted">
                      {pillar.summary}
                    </p>
                  </div>

                  <ul className="mt-6 flex flex-wrap gap-x-2.5 gap-y-1.5 border-t border-hairline pt-4">
                    {pillar.points.map((p) => (
                      <li key={p} className="font-mono text-[10px] uppercase tracking-[0.12em] text-paper-dim">
                        {p}
                      </li>
                    ))}
                  </ul>
                </Link>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
