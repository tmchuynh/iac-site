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
    <section className="relative isolate overflow-hidden px-6">
      <Carousel
        opts={{
          align: "start",
        }}
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
        orientation="vertical"
        className="w-full"
      >
        <CarouselContent className="-mt-1 h-[37em]">
          {testimonials.map((testimonial, index) => (
            <CarouselItem
              key={index}
              className="flex flex-col justify-around w-full"
            >
              <div className="px-2 mb-3">
                <Card className="p-3 min-h-fit bg-transparent">
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
