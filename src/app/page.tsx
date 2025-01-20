"use client";
import IntroHeader from "@/components/IntroHeader";
import ProgramCards from "@/components/ProgramCards";
import { Button } from "@/components/ui/button";
import Testimonial from "@/components/ui/testimonial";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaChalkboardTeacher } from "react-icons/fa";
import { LuArrowBigRightDash } from "react-icons/lu";

export default function Home() {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <main>
      <IntroHeader />
      <section className="mb-12 w-11/12 mx-auto px-4 pt-8 flex justify-center items-center">
        <div>
          <h1 className="my-4 text-balance uppercase font-Luckiest tracking-wider lg:text-4xl text-lg text-secondary font-extrabold text-center">
            About IAC
          </h1>
          <p>
            Our dynamic after-school program offers an exciting range of
            activities, including soccer, volleyball, basketball, performing
            arts, creative writing, chess, and coding. With experienced
            instructors and top-quality resources, we provide a fun and
            enriching environment where your child can explore and develop new
            passions. Our innovative approach covers a broad spectrum of skills
            in sports, arts, and technology. Your child will enjoy engaging in
            creative projects, teamwork challenges, and much more, all within a
            safe, supportive setting tailored for their growth and success.
          </p>
          <Button
            onClick={() => router.push(`/info/programs`)}
            className="mt-2 group"
          >
            Our Programs
            <span className="inline-block transition-transform duration-300 ease-in-out group-hover:translate-x-4">
              <LuArrowBigRightDash />
            </span>
          </Button>
        </div>
        {theme === "dark" ? (
          <img
            alt="IAC Logo"
            src="/images/whiteLogo.png"
            className="h-28 w-auto"
          />
        ) : (
          <img
            alt="IAC Logo"
            src="/images/tShirtLogo.png"
            className="h-40 w-auto"
          />
        )}
      </section>

      <section className="mb-12 w-11/12 mx-auto px-4">
        <h1 className="my-4 text-balance uppercase font-Luckiest tracking-wider lg:text-4xl text-lg text-secondary font-extrabold text-center">
          What Makes Us Different
        </h1>
        <p>
          Our after-school program offers activities like soccer, basketball,
          performing arts, chess, public speaking, creative writing, comic book
          club, etc. With expert instructors and top-notch resources, we provide
          a fun, supportive space for kids to explore new passions, build
          skills, and grow through sports, arts, and technology.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <h2 className="text-2xl font-semibold mb-2 font-Cute_Rabbit tracking-widest">
              Innovation
            </h2>
            <p>
              We constantly develop new tools and resources to enhance learning,
              making our programs more accessible, engaging, and effective.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2 font-Cute_Rabbit tracking-widest">
              Empowerment
            </h2>
            <p>
              We foster belonging and self-confidence, ensuring students feel
              supported to succeed and thrive in inclusive programs.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2 font-Cute_Rabbit tracking-widest">
              Affordable
            </h2>
            <p>
              We prioritize affordability, designing programs accessible to all
              without compromising quality or engagement.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2 font-Cute_Rabbit tracking-widest">
              Engaging
            </h2>
            <p>
              We create fun and interactive programs that inspire students,
              making learning an enjoyable experience.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2 font-Cute_Rabbit tracking-widest">
              Excellence
            </h2>
            <p>
              We strive for excellence by continuously improving our programs to
              deliver the highest quality learning experience.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2 font-Cute_Rabbit tracking-widest">
              Resilience
            </h2>
            <p>
              We design adaptable programs that meet challenges head-on,
              ensuring effective and impactful learning outcomes.
            </p>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-2 w-11/12 mx-auto items-center">
        <section className="mb-12 w-11/12 mx-auto">
          <h1 className="my-4 text-balance uppercase font-Luckiest tracking-wider lg:text-4xl text-lg text-secondary font-extrabold text-center">
            Amazing Dedicated Instructors
          </h1>
          <p>
            At IAC, our dynamic team comprises software engineers, professional
            athletes, marine officer candidates, credentialed teachers, and
            sports coaches, forming the foundation of our organization. Our
            instructors undergo rigorous training, including in-class experience
            alongside experienced teachers, ensuring the highest quality
            education for our students. We are dedicated to providing:
          </p>

          <ul className="py-2 flex flex-col gap-3">
            {[
              {
                title: "Interactive and Entertaining Curriculum:",
                description:
                  "Our instructors are skilled at crafting engaging, interactive, and informative curricula that make learning enjoyable and memorable.",
              },
              {
                title: "Proactive Classroom Management:",
                description:
                  "We prioritize creating a positive and productive learning environment. Our instructors are well-versed in classroom management techniques that promote an atmosphere of respect, participation, and collaboration.",
              },
              {
                title: "Efficient Technical Administration:",
                description:
                  "As technology plays a crucial role in education, our team is proficient in efficiently managing the technical aspects of our classes, ensuring that students have seamless access to the resources they need.",
              },
              {
                title: "Customized Learning Pathways:",
                description:
                  "We recognize that each student is unique, and our instructors tailor their teaching approaches to cater to individual learning styles and needs, providing customized learning pathways for optimal growth.",
              },
              {
                title: "Progress Monitoring and Feedback:",
                description:
                  "Our instructors are committed to monitoring each student's progress and providing constructive feedback. This approach allows students to track their development and make necessary adjustments to their learning journey.",
              },
            ].map((item, index) => (
              <li key={index} className="grid grid-cols-12">
                <FaChalkboardTeacher className="text-accent-5 col-span-1 mt-1 text-xl mx-auto" />
                <div className="col-span-11">
                  <span className="font-semibold font-Cute_Rabbit tracking-widest">
                    {item.title}
                  </span>{" "}
                  {item.description}
                </div>
              </li>
            ))}
          </ul>
          <Button
            onClick={() => router.push(`/about/staff`)}
            className="mt-2 group"
          >
            Meet The Team
            <span className="inline-block transition-transform duration-300 ease-in-out group-hover:translate-x-4">
              <LuArrowBigRightDash />
            </span>
          </Button>
        </section>

        <section className="mb-12 px-10 mx-auto">
          <h1 className="mb-4 text-balance uppercase font-Luckiest tracking-wider lg:text-4xl text-lg text-secondary font-extrabold text-center">
            Testimonials
          </h1>
          <Testimonial />
          <p className="text-end px-4 text-destructive">
            *Names have been omitted to safeguard everyone's privacy
          </p>
        </section>
      </div>

      <section className="mb-12 mt-8 w-11/12 mx-auto">
        <h1 className="my-4 text-balance uppercase font-Luckiest tracking-wider lg:text-4xl text-lg text-secondary font-extrabold text-center">
          Our "A.R.C" Initiative
        </h1>
        <p>
          Over two decades, we've meticulously developed our curriculum to
          inspire students to apply classroom knowledge to real-life situations.
          Supported by student learning guides and visual aids, we've cultivated
          a nurturing learning environment that promotes success and instills
          confidence for exploration.
        </p>

        <div className="flex mx-auto gap-6 justify-center py-3">
          <div className="rounded-full bg-accent-3 h-16 w-16 flex justify-center items-center pt-2 font-Magic text-5xl dark:text-background">
            A
          </div>
          <div className="rounded-full bg-accent-1 h-16 w-16 flex justify-center items-center pt-2 font-Magic text-5xl dark:text-background">
            R
          </div>
          <div className="rounded-full bg-accent-2 h-16 w-16 flex justify-center items-center pt-2 font-Magic text-5xl dark:text-background">
            C
          </div>
        </div>

        <p>
          In addition to our robust curriculum, we offer a wide range of
          educational and extracurricular after-school activities. Our core
          focus is nurturing the next generation of innovators and critical
          thinkers, fostering vital skills like problem-solving, effective
          communication, and collaboration. These skills are honed from 1st
          Grade through High School, ensuring students are well-prepared for the
          challenges of the future.
        </p>
        <Button
          onClick={() => router.push(`/info/schools`)}
          className="mt-2 group"
        >
          Learn More About A.R.C.
          <span className="inline-block transition-transform duration-300 ease-in-out group-hover:translate-x-4">
            <LuArrowBigRightDash />
          </span>
        </Button>
      </section>

      <section className="mb-12">
        <h1 className="my-4 text-balance uppercase font-Luckiest tracking-wider lg:text-4xl text-lg text-secondary font-extrabold text-center">
          Our Programs
        </h1>
        <ProgramCards />
      </section>
    </main>
  );
}
