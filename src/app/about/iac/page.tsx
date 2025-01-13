"use client";

import { FC } from "react";

const ProgramsPage: FC = () => {
  return (
    <main className="mx-auto px-4 py-8">
      <section className="text-center mb-12">
        <h1 className="my-4 text-balance uppercase font-Luckiest tracking-wider lg:text-4xl text-lg text-secondary font-extrabold text-center">About IAC</h1>
        <p className="text-lg text-muted">IAC is committed to making our programs accessible and affordable for all!</p>
      </section>


      <section className="mb-12">
        <h1 className="my-4 text-balance uppercase font-Luckiest tracking-wider lg:text-4xl text-lg text-secondary font-extrabold text-center">What Makes Us Different</h1>
        <p>
          Our after-school program offers activities like soccer, basketball, performing arts, chess, and coding. With expert instructors and top-notch resources, we provide a fun, supportive space for kids to explore new passions, build skills, and grow through sports, arts, and technology.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <h2 className="text-2xl font-semibold mb-2 font-Cute_Rabbit tracking-widest">Innovation</h2>
            <p>We constantly develop new tools and resources to enhance learning, making our programs more accessible, engaging, and effective.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2 font-Cute_Rabbit tracking-widest">Empowerment</h2>
            <p>We foster belonging and self-confidence, ensuring students feel supported to succeed and thrive in inclusive programs.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2 font-Cute_Rabbit tracking-widest">Affordable</h2>
            <p>We prioritize affordability, designing programs accessible to all without compromising quality or engagement.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2 font-Cute_Rabbit tracking-widest">Engaging</h2>
            <p>We create fun and interactive programs that inspire students, making learning an enjoyable experience.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2 font-Cute_Rabbit tracking-widest">Excellence</h2>
            <p>We strive for excellence by continuously improving our programs to deliver the highest quality learning experience.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2 font-Cute_Rabbit tracking-widest">Resilience</h2>
            <p>We design adaptable programs that meet challenges head-on, ensuring effective and impactful learning outcomes.</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h1 className="my-4 text-balance uppercase font-Luckiest tracking-wider lg:text-4xl text-lg text-secondary font-extrabold text-center">Our Mission</h1>
        <p>Our mission is to create a future where every student has the opportunity to learn, grow, and thrive. We believe in the power of curiosity, innovation, and in the transformative potential of a well-rounded, inclusive, and empowering education. We are committed to providing a supportive, inclusive, and effective educational environment that nurtures creativity, innovation, and resilience, and we are always looking for ways to make our programs</p>
      </section>
    </main>
  );
};

export default ProgramsPage;
