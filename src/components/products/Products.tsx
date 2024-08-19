import MaxWidthWrapper from "../MaxWidthWrapper";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProductImg } from "./ProductImg";

export default function Products() {
  return (
    <section id="products" className="grainy-light mt-16 mb-8 ">
      <MaxWidthWrapper className="flex flex-col justify-center ">
        <h1 className="text-3xl md:text-5xl font-semibold text-center my-16">
          Products
        </h1>
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
      </MaxWidthWrapper>
    </section>
  );
}
