import { Reveal } from "@/components/motion/Reveal";
import { ALL_PRODUCTS } from "@/data/products";
import { ALL_SERVICES } from "@/data/services";

/**
 * The catalogue as a plain index. It replaces the old wall of keyword text:
 * everything here is a real thing we stock or do, laid out so both a customer
 * scanning for a part number and a crawler can find it.
 */
const CONSUMABLES = [
  "Canon GI-71 genuine ink",
  "Canon GI-790 genuine ink",
  "Canon Cartridge 071 / NPG-71 toner",
  "Epson EcoTank 001 ink",
  "Epson EcoTank 003 ink",
  "Epson EcoTank 005 ink",
  "Epson EcoTank 008 ink",
  "Epson 664 ink",
  "Epson 774 ink",
  "Kyocera TK-1178 toner kit",
  "Kyocera TK-4109 toner kit",
  "Kyocera TK-4140 toner kit",
  "Kyocera TK-7120 toner kit",
  "Compatible toner 12A",
  "Compatible toner 88A",
  "Compatible toner 78A",
  "Compatible toner 925",
  "Compatible toner 336x",
  "Compatible toner 337",
  "EVM laser toner cartridges",
  "Lamination film A4 & A3",
  "JMD lamination pouches",
  "Inkjet printable PVC cards",
  "Riso ink & masters",
  "Copier paper 70 / 75 / 80 / 90 GSM",
  "Spiral binding springs & sheets",
];

export default function SeoIndex() {
  return (
    <section className="border-t border-hairline py-20 lg:py-28">
      <div className="shell">
        <Reveal>
          <div className="flex items-baseline gap-4 pb-10">
            <span className="label text-accent">08</span>
            <span className="label">Index</span>
            <span className="hidden h-px flex-1 bg-hairline sm:block" />
          </div>
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-3">
          <IndexColumn
            title="Equipment"
            note="Every line listed on this site, stocked or sourced to order."
            items={ALL_PRODUCTS.map((p) => p.name)}
          />
          <IndexColumn
            title="Consumables & spares"
            note="Genuine and compatible. Bring the model number, we will match it."
            items={CONSUMABLES}
          />
          <IndexColumn
            title="Services"
            note="Across Kochi, Ernakulam and the surrounding areas of Kerala."
            items={ALL_SERVICES.map((s) => s.name)}
          />
        </div>
      </div>
    </section>
  );
}

function IndexColumn({
  title,
  note,
  items,
}: {
  title: string;
  note: string;
  items: string[];
}) {
  return (
    <Reveal>
      <h2 className="font-display text-xl text-paper">{title}</h2>
      <p className="mt-2 max-w-xs text-xs leading-relaxed text-paper-dim">{note}</p>
      <ul className="mt-6 columns-1 gap-x-6 space-y-1.5 sm:columns-2 lg:columns-1">
        {items.map((item) => (
          <li key={item} className="break-inside-avoid text-xs leading-relaxed text-paper-muted">
            {item}
          </li>
        ))}
      </ul>
    </Reveal>
  );
}
