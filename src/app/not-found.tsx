"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";
import { LuArrowBigRightDash } from "react-icons/lu";

const NotFound = () => {
  const router = useRouter();
  return (
    <main className="grid place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center min-h-screen">
        <h1 className="my-4 text-balance uppercase font-Luckiest tracking-wider lg:text-4xl text-lg text-secondary font-extrabold text-center">
          404 Page not found
        </h1>
        <p className="mt-6 text-pretty text-lg font-medium sm:text-xl/8">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button onClick={() => router.push(`/`)} className="w-1/2 group">
            Go back home
            <span className="inline-block transition-transform duration-300 ease-in-out group-hover:translate-x-4">
              <LuArrowBigRightDash />
            </span>
          </Button>
          <Button
            variant={"outline"}
            onClick={() => router.push(`mailto:tina@iacafterschools.com`)}
            className="w-1/2 group"
          >
            Contact support
            <span className="inline-block transition-transform duration-300 ease-in-out group-hover:translate-x-4">
              <LuArrowBigRightDash />
            </span>
          </Button>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
