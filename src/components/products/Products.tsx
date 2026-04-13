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
            We also stock genuine and compatible toner cartridges, ink cartridges, drums,
            and consumables for all major brands including Canon, Kyocera, Xerox, Epson,
            Brother, and Konica Minolta — available in Ernakulam, Kerala.
          </p>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
