"use client";

import { Button } from "@/components/ui/button";
import { FC } from "react";
import { useRouter } from "next/navigation";
import { FaCheckDouble } from "react-icons/fa";

const CommitmentPage: FC = () => {
  const router = useRouter();
  return (
    <main className="text-foreground flex flex-col justify-center p-6 w-11/12 mx-auto">
      <h1 className="my-4 text-balance uppercase font-Luckiest tracking-wider lg:text-4xl text-lg text-secondary font-extrabold text-center">
        Our Commitment to Every Student
      </h1>
      <p className="text-md leading-relaxed">
        At{" "}
        <span className="font-semibold text-primary dark:text-accent-3">
          International Activities Club
        </span>
        , we believe every student deserves the opportunity to learn, grow, and
        thrive—{" "}
        <span className="text-accent underline underline-offset-4">
          no exceptions
        </span>
        .
      </p>
      <h2 className="text-2xl font-Cute_Rabbit tracking-widest mt-6 mb-2">
        Who We Welcome
      </h2>
      <p className="text-md leading-relaxed">
        We warmly welcome students of all ethnicities, cultural backgrounds,
        gender identities, religions, and abilities. We believe that diversity
        is not just something to embrace but a core strength that enriches our
        community, fosters understanding, and enhances the learning experience
        for everyone. By celebrating each individual’s unique perspective and
        story, we create an inclusive environment where students feel valued,
        respected, and empowered to succeed. Our commitment to diversity extends
        beyond representation, shaping programs and practices that ensure equity
        and access for all. Together, we build a vibrant and dynamic community
        that thrives on shared experiences and mutual respect.
      </p>
      <h2 className="text-2xl font-Cute_Rabbit tracking-widest mt-6 mb-2">
        Accessibility for All
      </h2>
      <p className="text-md leading-relaxed">
        We are committed to making our programs accessible to students with
        learning disabilities or other unique needs. We adapt and support each
        individual to ensure they have the tools and environment necessary to
        succeed.
      </p>
      <h2 className="text-2xl font-Cute_Rabbit tracking-widest mt-6 mb-2">
        Core Promises
      </h2>
      <ul className="space-y-2 text-md">
        {[
          "Equal access to all programs and resources.",
          "Safe and respectful spaces for collaboration and learning.",
          "Continuous effort to eliminate barriers to inclusion.",
        ].map((item, index) => (
          <li key={index} className="flex items-center space-x-2">
            <FaCheckDouble className="text-xl text-accent-2" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <p className="text-md leading-relaxed mt-4">
        Our mission is to nurture a community where every student feels valued,
        empowered, and celebrated for who they are.
      </p>
      <p className="text-md mt-2">
        If you have questions about our inclusivity or need accommodations,
        <Button
          variant="link"
          className="p-1"
          onClick={() => router.push("/contact")}
        >
          Contact Us
        </Button>
      </p>
    </main>
  );
};

export default CommitmentPage;
