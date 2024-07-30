import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import { ProductList, TProductList } from "@/constants"

interface IProductImg {
  type: TProductList
}

export function ProductImg({type}: IProductImg) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full "
    >
      <CarouselContent className="">
        {ProductList[type].map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4 ">
            <div className="p-1 ">
              <Card className=" ">
                <CardContent className="flex  flex-col aspect-square items-center justify-center p-6">
                  <Image src={_.imgUrl} alt="printer" width={1000} height={1000} className="text-3xl font-semibold"/>
                  <h1>{_.title}</h1>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}


