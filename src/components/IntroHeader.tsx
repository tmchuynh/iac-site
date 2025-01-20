"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import HeroSection from "./ui/hero";

export default function IntroHeader() {
  const router = useRouter();
  return (
    <>
      <HeroSection imageSrc="/images/Class_Photos/Soccer/soccer-5.jpg" />
      <div className="relative isolate px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:py-4 lg:py-10">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm/6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              <a
                href="/register"
                className="font-Cute_Rabbit tracking-widest text-xl"
              >
                Registration is now open. Book before classes fill up!{" "}
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="my-4 text-balance uppercase font-Luckiest tracking-wider lg:text-4xl text-lg text-secondary font-extrabold text-center">
              Superior classes, exceptional instructors, outstanding outcomes.
            </h1>
            <div className="mt-6 flex items-center justify-center gap-x-6">
              <Button onClick={() => router.push("/register")}>
                Book Classes Today!
              </Button>
              <Button
                variant={"outline"}
                onClick={() => router.push("/info/programs")}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
