import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { ProductList, TProductList } from "@/constants";

interface IProductImg {
  type: TProductList;
}

export function ProductImg({ type }: IProductImg) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent className="mt-2 border-2">
        {ProductList[type].map((_, index) => (
          <CarouselItem
            key={${index}-Carousal-item-${_.imgUrl}-${_.title}-${type}}
            className=" sm:basis-1/1 md:basis-1/2 lg:basis-1/3  xl:basis-1/4 "
          >
           
              <Card className="">
                <CardContent className="flex flex-col  items-center justify-between p-6  overflow-hidden ">
                  <div className="w-full h-full max-w-sm aspect-square max-h-[250px] border-2">
                    <Image
                      src={_.imgUrl}
                      alt="printer"
                      width={720}
                      height={420}
                      className="  w-full max-h-3/4 h-full"
                    />
                  </div>
                  <div>
                    <h1 className="mt-2 cursor-pointer text-[15px] font-semibold">
                      {_.title}
                    </h1>
                    <Accordion type="single" collapsible>
                      <AccordionItem value="item-1">
                        <AccordionTrigger className="text-xs">
                          Specifications
                        </AccordionTrigger>
                        <AccordionContent>
                          <p className=" text-xs">{_.desc}</p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </CardContent>
              </Card>
         
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}












import MaxWidthWrapper from "../MaxWidthWrapper";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProductImg } from "./ProductImg";


export default function Products() {
  return (
    <section id="products" className="grainy-light mt-16 mb-8 ">
      <MaxWidthWrapper className="flex flex-col justify-center ">
        <h1 className="text-3xl md:text-5xl font-semibold text-center my-16">Products</h1>
        <Tabs
          defaultValue="photocopiers"
          className="w-full flex flex-col justify-center "
        >
          <TabsList className="mb-4">
            <TabsTrigger value="photocopiers">Photocopiers</TabsTrigger>
            <TabsTrigger value="printers">Printers</TabsTrigger>
            <TabsTrigger value="scanners">Scanners</TabsTrigger>
            <TabsTrigger value="laminators">Laminators</TabsTrigger>
            <TabsTrigger value="inks">Inks & Cartridges</TabsTrigger>
            <TabsTrigger value="papers">Papers</TabsTrigger>
          </TabsList>

          <TabsContent  value="photocopiers" className="">
            <ProductImg key={ProductImg-Photocopiers} type="Photocopiers" />
          </TabsContent>

          <TabsContent value="printers">
            <ProductImg key={ProductImg-Printers} type="Printers" />
          </TabsContent>

          <TabsContent value="scanners">
            <ProductImg key={ProductImg-Scanners} type="Scanners" />
          </TabsContent>

          <TabsContent value="laminators">
            <ProductImg key={ProductImg-Laminators} type="Laminators" />
          </TabsContent>
        
          <TabsContent value="inks">
            <ProductImg key={ProductImg-Inks} type="Inks" />
          </TabsContent>
          
          <TabsContent value="papers">
            <ProductImg key={ProductImg-Papers} type="Papers" />
          </TabsContent>
        </Tabs>
        
      </MaxWidthWrapper>
    </section>
  );
}