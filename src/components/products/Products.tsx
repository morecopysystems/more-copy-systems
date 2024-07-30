import MaxWidthWrapper from "../MaxWidthWrapper";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProductImg } from "./ProductImg";
import Image from "next/image";

export default function Products() {
  return (
    <section id="products">
      <MaxWidthWrapper className="flex flex-col justify-center">
        <h1 className="text-center text-3xl font-bold my-16">Products</h1>
        <Tabs defaultValue="account" className="w-full flex flex-col justify-center">
          <TabsList  >
            <TabsTrigger value="photocopiers">Photocopiers</TabsTrigger>
            <TabsTrigger value="printers">Printers</TabsTrigger>
            <TabsTrigger value="scanners">Scanners</TabsTrigger>
            <TabsTrigger value="laminators">Laminators</TabsTrigger>
          </TabsList>

          <TabsContent value="photocopiers" >
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
        </Tabs>
      </MaxWidthWrapper>
    </section>
  );
}
