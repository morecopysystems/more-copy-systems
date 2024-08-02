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
      className="max-w-max"
    >
      <CarouselContent className="">
        {ProductList[type].map((_, index) => (
          <CarouselItem
            key={index}
            className=" sm:basis-1/1 md:basis-1/2 lg:basis-1/3  xl:basis-1/4 "
          >
            <div className="p-1  ">
              <Card className="">
                <CardContent className="flex  flex-col aspect-square items-center justify-center p-6 overflow-hidden ">
                  <Image
                    src={_.imgUrl}
                    alt="printer"
                    width={500}
                    height={500}
                    className="object-cover max-w-"
                  />
                  <h1 className="mt-2 cursor-pointer">{_.title}</h1>

                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-xs">Description</AccordionTrigger>
                      <AccordionContent>
                        <p className=" text-xs">{_.desc}</p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
