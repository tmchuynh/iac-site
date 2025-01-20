"use client";
import HeroSection from "@/components/ui/hero";
import { FC } from "react";

const Register: FC = () => {
  return (
    <>
      <HeroSection imageSrc="/images/Class_Photos/Performing_Arts/pa-8.jpg" />
      <main className="mx-auto px-4 py-8 w-11/12">
        <section className="mb-5">
          <div className="text-center">
            <h1 className="my-4 text-balance uppercase font-Luckiest tracking-wider lg:text-4xl text-lg text-secondary font-extrabold text-center">
              Register Today
            </h1>
          </div>

          <div className="mb-12 w-11/12 mx-auto">
            <h2 className="text-2xl font-semibold mb-2 font-Cute_Rabbit tracking-widest text-destructive underline">
              New Credit Card Processing Procedure
            </h2>
            <ol className="list-decimal">
              {[
                "When signing your child up for their desired class, indicate if paying by check or credit card.",
                "If paying by check mail check to the address provided on the flyer.",
                "If paying by credit card you will receive an invoice from IAC to the email address used in the sign-up form.",
                "If preferable, you can still call into the office to make a payment with credit card.",
                "You will be able to pay through Square (via a link in the email invoice) with any major credit card of your choice. You will receive a receipt in your email upon payment.",
              ].map((item, index) => (
                <li key={index}>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="mb-12 w-11/12 mx-auto">
            <div className="w-full h-[4150px]">
              <iframe
                title="Registration Form"
                src="https://docs.google.com/forms/d/e/1FAIpQLSfl2uFJoSClaFk2rm0yUVKi2pYF5M5QFX8_FxxStX25F6q2vQ/viewform?embedded=true"
                width="100%"
                height="100%"
              >
                Loading…
              </iframe>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Register;
