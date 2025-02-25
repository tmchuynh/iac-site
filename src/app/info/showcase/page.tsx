"use client";

import { RequestForm } from "@/components/RequestForm";
import { ShowcaseWork } from "@/components/StudentWork";
import HeroSection from "@/components/ui/hero";
import { FC } from "react";

const Showcase: FC = () => {
  return (
    <>
      <HeroSection imageSrc="/images/Class_Photos/Performing_Arts/pa-3.jpg" />
      <main className="mx-auto px-4 py-8 w-11/12">
        <section className=" mb-12">
          <h1 className="my-4 text-balance uppercase font-Luckiest tracking-wider lg:text-4xl text-lg text-secondary font-extrabold text-center">
            Showcasing Children's Creativity
          </h1>
          <p className="">
            Celebrating imagination, innovation, and learning, this showcase
            highlights the incredible talents and boundless creativity of
            children. Each piece of work tells a unique story, reflecting their
            curiosity, dedication, and passion for discovery. Through art,
            writing, science projects, and more, we aim to nurture their growth
            and inspire them to dream big, think boldly, and express themselves
            freely. Join us in honoring their efforts and marveling at the
            amazing potential of young minds.
          </p>
          <p>
            All pieces shown on the website are voluntary by the students. Some
            students wanted to stay anonymous and their names aren't shown on
            our website to respect their privacy.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-2 font-Cute_Rabbit tracking-widest">
            QuickLinks
          </h2>
          <ShowcaseWork />
        </section>

        <section className="mb-12">
          <RequestForm />
        </section>
      </main>
    </>
  );
};

export default Showcase;
