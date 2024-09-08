'use client'

import React from 'react'
import Autoplay from "embla-carousel-autoplay"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";
  import { sliderImage } from "@/constants";
import Image from 'next/image';

const FeedbackSlider = () => {
    const plugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: true })
      )
  return (
    <Carousel
    plugins={[plugin.current]}
    className='w-full'
    opts={{
      align: "start",
      loop: true,
    }}
  >
    <CarouselContent>
      {sliderImage.map((link, key) => (
      <CarouselItem key={key} className="p-5 pl-10">
        <Image src={link.imageUrl} alt={link.title} width={1920} height={1080} className="w-full rounded-3xl" />
      </CarouselItem>
      ))}
    </CarouselContent>
  </Carousel>
  )
}

export default FeedbackSlider