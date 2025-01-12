"use client";

import { testimonials } from "@/data/data";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./carousel";
import Autoplay from "embla-carousel-autoplay";

export default function Testimonial() {
  return (
    <section className="relative isolate overflow-hidden px-6">
      <Carousel className="mx-auto max-w-lg"
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay( {
            delay: 4000,
          } ),
        ]}>
        <CarouselContent>
          {testimonials.map( ( testimonial, index ) => (
            <CarouselItem key={index} className="mt-10">
              <blockquote className="text-center text-xl/8 font-semibold sm:text-2xl/9">
                <p>{`“${ testimonial.text }”`}</p>
              </blockquote>
              <figcaption className="mt-2">
                <img
                  alt={`${ testimonial.name } profile`}
                  src={testimonial.image}
                  className="mx-auto size-16 rounded-full"
                />
                <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                  <div className="font-semibold">{testimonial.name}</div>
                  <svg
                    width={3}
                    height={3}
                    viewBox="0 0 2 2"
                    aria-hidden="true"
                    className="fill-gray-900"
                  >
                    <circle r={1} cx={1} cy={1} />
                  </svg>
                  <div className="">{testimonial.title}</div>
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
            </CarouselItem>
          ) )}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
