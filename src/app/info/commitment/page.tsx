"use client";

import { Button } from "@/components/ui/button";
import { FC } from "react";
import { useRouter } from 'next/navigation';

const CommitmentPage: FC = () => {
  const router = useRouter();
  return (
    <main className="min-h-screen text-foreground flex flex-col items-center justify-center p-6">
      <h1 className="my-4 text-balance font-semibold tracking-wide text-4xl font-Nabana ">Our Commitment to Every Student</h1>
      <p className="text-md leading-relaxed mb-4">
        At <span className="font-semibold">[Organization Name]</span>, we believe every student deserves the opportunity to learn, grow, and thrive—no exceptions.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Who We Welcome</h2>
      <p className="text-md leading-relaxed mb-4">
        We embrace students of every ethnicity, cultural background, gender identity, religion, and ability. Diversity strengthens our community and enriches the learning experience.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Accessibility for All</h2>
      <p className="text-md leading-relaxed mb-4">
        We are committed to making our programs accessible to students with learning disabilities or other unique needs. We adapt and support each individual to ensure they have the tools and environment necessary to succeed.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Core Promises</h2>
      <ul className="list-disc list-inside space-y-2 text-md">
        <li>Equal access to all programs and resources.</li>
        <li>Safe and respectful spaces for collaboration and learning.</li>
        <li>Continuous effort to eliminate barriers to inclusion.</li>
      </ul>
      <p className="text-md leading-relaxed mt-6">
        Our mission is to nurture a community where every student feels valued, empowered, and celebrated for who they are.
      </p>
      <p className="text-md mt-6">
        If you have questions about our inclusivity or need accommodations,
        <Button
          variant="link"
          onClick={() => router.push( '/contact' )}
        >
          Contact Us
        </Button>
      </p>
    </main>
  );
};

export default CommitmentPage;
