import MaxWidthWrapper from "../MaxWidthWrapper";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProductImg } from "./ProductImg";
import { ProductList } from "@/constants";

export default function Products() {
  return (
    <section id="products" className="grainy-light mt-8 mb-8 ">
      <MaxWidthWrapper className="flex flex-col justify-center ">
        <h2 className="text-3xl md:text-5xl font-semibold text-center ">
          Products
        </h2>
        <Tabs
          defaultValue="photocopiers"
          className="w-full flex flex-col justify-center"
        >
          <TabsList className="mb-12 md:mb-4">
            <TabsTrigger value="photocopiers">Photocopiers</TabsTrigger>
            <TabsTrigger value="printers">Printers</TabsTrigger>
            <TabsTrigger value="scanners">Scanners</TabsTrigger>
            <TabsTrigger value="laminators">Laminators</TabsTrigger>
            <TabsTrigger value="inks">Inks & Cartridges</TabsTrigger>
            <TabsTrigger value="papers">Papers</TabsTrigger>
            <TabsTrigger value="binders">Binders</TabsTrigger>
            <TabsTrigger value="papercutters">Paper Cutters</TabsTrigger>
          </TabsList>

          <TabsContent value="photocopiers" className="">
            <ProductImg type="Photocopiers" />
          </TabsContent>

          <TabsContent value="printers">
            <ProductImg type="Printers" />
          </TabsContent>

          <TabsContent value="scanners">
            <ProductImg type="Scanners" />
          </TabsContent>

          <TabsContent value="laminators">
            <ProductImg type="Laminators" />
          </TabsContent>

          <TabsContent value="inks">
            <ProductImg type="Inks" />
          </TabsContent>

          <TabsContent value="papers">
            <ProductImg type="Papers" />
          </TabsContent>

          <TabsContent value="binders">
            <ProductImg type="Binders" />
          </TabsContent>

          <TabsContent value="papercutters">
            <ProductImg type="PaperCutters" />
          </TabsContent>
        </Tabs>

        <div className="sr-only">
          <h2>Printers and Photocopiers Available in Ernakulam, Kochi</h2>
          <p>More Copy Systems stocks the following products in Ernakulam, Kochi, Kerala:</p>
          <ul>
            {Object.values(ProductList).flat().map((product, i) => (
              product.title ? (
                <li key={i}>{product.title} — available for sale and service in Kochi, Ernakulam</li>
              ) : null
            ))}
          </ul>
          <p>
            More Copy Systems provides the following services in Ernakulam and Kochi, Kerala:
            Printer Service and Repair, Photocopier Service, Bulk Printing, Photo Framing,
            Certificate Designing and Printing, Visiting Card Printing, Letter Head Printing and
            Designing, Lamination (Hot and Cold, A4 and A3), PVC Card Printing, and Bulk Photocopying.
            We are a Canon Printer Authorized Dealer and Canon Photocopier Machines Authorized Dealer
            in Ernakulam, Kerala.
          </p>
          <p>Additional products and consumables available at More Copy Systems, Ernakulam, Kochi:</p>
          <ul>
            <li>Epson EcoTank L8050 Ink Tank Photo Printer — Single Function 6 Colour Wi-Fi Borderless CD/DVD PVC Card Printing</li>
            <li>Epson EcoTank L3250 A4 Wi-Fi All-in-One Ink Tank Printer</li>
            <li>Canon PIXMA G3012 — Printer</li>
            <li>Konica Minolta bizhub C266i — Colour Multifunctional Photocopier MFD</li>
            <li>Evolis PVC Card Printer — ID Card Printer Kochi Ernakulam</li>
            <li>Riso Digital Duplicator — Riso Ink and Master available Ernakulam Kerala</li>
            <li>Comb Binding Machine — available Ernakulam Kochi Kerala</li>
            <li>Lamination Films A4 A3 — available Ernakulam Kochi Kerala</li>
            <li>Lamination Pouches JMD — available Ernakulam Kochi Kerala</li>
            <li>Epson Special Quality Inkjet Printable PVC Cards Glossy White — compatible with L8050 L18050 L800 L805 L810 L850</li>
            <li>EVM Laser Toner Cartridge — Ernakulam Kerala</li>
            <li>HP 78A Laser Toner Cartridge — Compatible available Ernakulam</li>
            <li>Canon Cartridge 071 / NPG-71 Toner — available Ernakulam Kerala</li>
            <li>Epson Ink 003 Black — EcoTank Genuine Ink available Ernakulam</li>
            <li>Epson Ink 774 Black — EcoTank Genuine Ink available Ernakulam</li>
            <li>Epson Ink 005 — EcoTank Genuine Ink available Ernakulam</li>
          </ul>
          <p>
            We also stock genuine and compatible toner cartridges, ink cartridges, drums,
            and consumables for all major brands including Canon, Kyocera, Xerox, Epson,
            Brother, and Konica Minolta — available in Ernakulam, Kerala.
          </p>
          <p>
            Compatible and genuine toner cartridges: 12A, 88A, 78A, 925, 336x, 337, Cartridge 071, NPG 71
            for Canon and HP laser printers. Canon Genuine Inks GI-71 and GI-790. Epson Genuine Inks
            001 003 005 008 664 774 available. Laser Printer Toner Cartridges, Photocopier Toner,
            Printer Cartridges for all major brands. Inkjet PVC Card, Premium PVC Card, Epson Inkjet PVC
            Card available. We service all MFD (Multifunctional Printing Devices), Multifunctional
            Photocopier Machines, Digital Duplicators (Riso), and Printing Equipment in Ernakulam and
            Kochi, Kerala.
          </p>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
