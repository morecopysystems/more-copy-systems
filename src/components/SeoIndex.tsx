import { ALL_PRODUCTS } from "@/data/products";
import { ALL_SERVICES } from "@/data/services";

/**
 * The catalogue as a plain index for search engines, AI models and crawlers.
 * Visually hidden via sr-only so it remains discoverable in the HTML DOM without
 * cluttering the homepage interface.
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
    <section aria-label="Product and Service Index" className="sr-only">
      <h2>Complete Equipment, Consumables & Services Index</h2>
      <div>
        <h3>Equipment</h3>
        <p>Every line listed on this site, stocked or sourced to order in Ernakulam, Kochi.</p>
        <ul>
          {ALL_PRODUCTS.map((p) => (
            <li key={p.name}>
              {p.brand} {p.name} — {p.tagline} ({p.specs.join(", ")})
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Consumables & spares</h3>
        <p>Genuine and compatible cartridges, inks, toner kits and media stocked in Kacheripady.</p>
        <ul>
          {CONSUMABLES.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Services</h3>
        <p>Office equipment services across Kochi, Ernakulam and surrounding Kerala.</p>
        <ul>
          {ALL_SERVICES.map((s) => (
            <li key={s.name}>
              {s.name} — {s.summary} ({s.points.join(", ")})
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
