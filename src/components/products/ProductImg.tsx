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
      <CarouselContent className="mt-2">
        {ProductList[type].map((product, i) => (
          <CarouselItem
            key={`productList-${i}-products`}
            className=" sm:basis-1/1 md:basis-1/2 lg:basis-1/3  xl:basis-1/4 "
          >
            {/* <div className="p-1  "> */}
            <Card className="">
              <CardContent className="flex flex-col  items-center justify-between p-6  overflow-hidden ">
                <div className="w-full h-full max-w-sm aspect-square ">
                  <Image
                    src={product.imgUrl}
                    alt={product.title}
                    width={720}
                    height={420}
                    className="w-full max-h-3/4 h-full"
                  />
                </div>
                <div>
                  <h3 className="mt-2 cursor-pointer text-[15px] font-semibold">
                    {product.title}
                  </h3>

                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-xs">
                        Specifications
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="text-xs whitespace-pre-line">{product.desc}</p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </CardContent>
            </Card>
            {/* </div> */}
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
