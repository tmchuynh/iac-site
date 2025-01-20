"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { LuArrowBigRightDash } from "react-icons/lu";

const NotFound = () => {
  const router = useRouter();
  const [countdown, setCountdown] = useState(10);
  const [redirect, setRedirect] = useState(true);

  useEffect(() => {
    if (!redirect) return;

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    const redirectTimer = setTimeout(() => {
      router.push(`/`);
    }, 10000);

    return () => {
      clearInterval(timer);
      clearTimeout(redirectTimer);
    };
  }, [router, redirect]);

  return (
    <main className="grid place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center min-h-screen">
        <h1 className="my-4 text-balance uppercase font-Luckiest tracking-wider lg:text-4xl text-lg text-secondary font-extrabold text-center">
          404 Page not found
        </h1>
        <div className="mt-6 text-pretty text-lg font-medium sm:text-xl/8">
          Sorry, we couldn’t find the page you’re looking for.
          {redirect && (
            <p>
              Redirecting you to the home page in{" "}
              <span className="font-bold">{countdown}</span> seconds.
            </p>
          )}
        </div>
        <div className="mt-10 flex flex-col items-center justify-center gap-x-6">
          <Button
            onClick={() => router.push(`/`)}
            className="mt-2 group w-1/2 flex justify-between"
          >
            Go back home
            <span className="inline-block transition-transform duration-300 ease-in-out group-hover:translate-x-4">
              <LuArrowBigRightDash />
            </span>
          </Button>
          {redirect && (
            <Button
              onClick={() => {
                setRedirect(false);
                setCountdown(0);
              }}
              variant="outline"
              className="mt-2 group w-1/2 flex justify-between"
            >
              Cancel Redirection
              <span className="inline-block transition-transform duration-300 ease-in-out group-hover:translate-x-4 group-hover:rotate-90">
                <IoMdClose />
              </span>
            </Button>
          )}
          <Button
            variant={"outline"}
            onClick={() => router.push(`mailto:tina@iacafterschools.com`)}
            className="mt-2 group w-1/2 flex justify-between"
          >
            Contact support
            <span className="inline-block transition-transform duration-300 ease-in-out group-hover:translate-x-4 group-hover:-rotate-90">
              <FaPhoneAlt />
            </span>
          </Button>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
