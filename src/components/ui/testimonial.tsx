"use client";

import { testimonials } from "@/data/data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./carousel";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "./card";

export default function Testimonial() {
  return (
    <section className="relative isolate overflow-hidden px-12">
      <Carousel
        opts={{
          align: "start",
        }}
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
        orientation="horizontal"
        className="w-full"
      >
        <CarouselContent className="-mt-1 xl:h-[25em] lg:h-[32em] h-[37em] md:h-[20em] lg:w-[24em] w-[20em] xl:w-[40em] md:w-[50em] text-wrap">
          {testimonials.map((testimonial, index) => (
            <CarouselItem
              key={index}
              className="flex flex-col justify-around w-full"
            >
              <div className="px-2 mb-3">
                <Card className="p-3 min-h-fit min-w-fit bg-transparent xl:w-[27em] lg:h-[20em] md:h-[16em] h-[30em]">
                  <CardContent>
                    <blockquote className="text-pretty text-sm">
                      <p>{`“${testimonial.text}”`}</p>
                    </blockquote>
                    <figcaption className="mt-2">
                      <img
                        alt={`${testimonial.name} profile`}
                        src={testimonial.image}
                        className="mx-auto size-16 rounded-full"
                      />
                      <div className="mt-4 flex flex-wrap items-center justify-center space-x-3 text-base">
                        <div className="font-semibold">{testimonial.title}</div>
                        <svg
                          width={3}
                          height={3}
                          viewBox="0 0 2 2"
                          aria-hidden="true"
                          className="fill-gray-900"
                        >
                          <circle r={1} cx={1} cy={1} />
                        </svg>
                        <div className="">{testimonial.school}</div>
                        <svg
                          width={3}
                          height={3}
                          viewBox="0 0 2 2"
                          aria-hidden="true"
                          className="fill-gray-900"
                        >
                          <circle r={1} cx={1} cy={1} />
                        </svg>
                        <div className="">{testimonial.class}</div>
                      </div>
                    </figcaption>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
