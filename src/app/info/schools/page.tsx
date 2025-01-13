"use client";

import LogoCloud from "@/components/LogoCloud";
import { Button } from "@/components/ui/button";
import { LuArrowBigRightDash } from "react-icons/lu";
import { useRouter } from "next/navigation";
import { FC } from "react";
import {
  FaBook,
  FaCalendarAlt,
  FaCheckDouble,
  FaMoneyBillAlt,
} from "react-icons/fa";

const SchoolsInfo: FC = () => {
  const router = useRouter();
  return (
    <main className="mx-auto px-4 py-8 w-11/12">
      <section className="mb-12">
        <h1 className="my-4 text-balance uppercase font-Luckiest tracking-wider lg:text-4xl text-lg text-secondary font-extrabold text-center">
          Our Partners
        </h1>
        <p className="">
          Our key collaborators, spanning school districts and diverse
          organizations, share a common commitment to nurturing creativity and
          innovation in the next generation. These partnerships are united by
          the belief that empowering young minds is pivotal for a brighter
          future. We collectively provide resources, support, and educational
          opportunities to foster curiosity, exploration, and ingenuity. Our
          shared goal is to inspire, mentor, and equip youth with the skills to
          become tomorrow's creators and innovators. We aim to create an
          environment where imagination knows no bounds, and the innovative
          spirit of the next generation is celebrated. Together, we pave the way
          for a future filled with fresh ideas, groundbreaking inventions, and
          transformative contributions to society.
        </p>

        <Button
          onClick={() => router.push("/contact")}
          className="mt-2 w-1/4 group"
        >
          Start Today
          <span className="inline-block transition-transform duration-300 ease-in-out group-hover:translate-x-4">
            <LuArrowBigRightDash />
          </span>
        </Button>
      </section>

      <section className="mb-12">
        <h1 className="my-4 text-balance uppercase font-Luckiest tracking-wider lg:text-4xl text-lg text-secondary font-extrabold text-center">
          Trusted By These Amazing Schools
        </h1>
        <LogoCloud />
      </section>

      <section className="mb-12">
        <h1 className="my-4 text-balance uppercase font-Luckiest tracking-wider lg:text-4xl text-lg text-secondary font-extrabold text-center">
          Enrichment Made Easy
        </h1>
        <p>
          In our program, effectiveness goes beyond rote learning, emphasizing
          comprehension and practical application. We focus on critical thinking
          and problem-solving skills. We embrace inclusivity, recognizing the
          diversity in learners' abilities, backgrounds, and ages. Our approach
          is flexible and personalized, catering to both beginners and advanced
          learners, ensuring value and enrichment for all.
        </p>
        <p>
          Introducing IAC's cutting-edge "A.R.C" initiative, which delivers
          academic enrichment programs directly to your school.
        </p>
        <ul className="py-2 flex flex-col gap-3">
          {[
            {
              title: "Comprehensive Success:",
              description:
                "Our Comprehensive Success plan is not short-term; it's a long-term strategy. Our program offers a multi-year pathway to success, focusing on lifelong learning and skills that extend beyond the program's duration, empowering students for lasting academic and personal success.",
            },
            {
              title: "Advanced Resources:",
              description:
                "We're dedicated to offering Advanced Resources that keep your students at the forefront of STEM education with cutting-edge technology and materials, constantly evolving to match the changing educational landscape.",
            },
            {
              title: "Refined Curriculum:",
              description:
                "Our Refined Curriculum is the core of our program, continuously improved through data-driven insights and educational research to keep it fresh, relevant, and aligned with the latest standards, guaranteeing your students the most effective educational content.",
            },
          ].map((item, index) => (
            <li key={index} className="grid grid-cols-12 text-balance">
              <FaBook className="text-chart-3 text-xl col-span-1 mt-1 mx-auto" />
              <div className="col-span-11">
                <span className="font-semibold font-Cute_Rabbit tracking-widest">
                  {item.title}
                </span>{" "}
                {item.description}
              </div>
            </li>
          ))}
        </ul>
        <p>
          The A.R.C. for Education program creates a holistic and effective
          educational journey by blending immersion, effectiveness, and
          inclusivity. Each element is like a vital instrument in a symphony,
          ensuring that students of all ages and skill levels find a strong
          educational foundation. Immersion engages students actively in their
          learning, stimulating their curiosity and creativity. This program is
          our commitment to providing an environment where every student can
          flourish. Through the harmony of these elements, we aim to empower the
          next generation to shape a promising and transformative future.
        </p>
      </section>

      <section className="mb-12">
        <h1 className="my-4 text-balance uppercase font-Luckiest tracking-wider lg:text-4xl text-lg text-secondary font-extrabold text-center">
          Get Involved Today
        </h1>
        <p>
          Imagine welcoming a dedicated and accomplished organization to your
          school, with a mission to empower students through a diverse
          curriculum. The subjects enhance critical thinking, strategic
          thinking, communication, and problem-solving skills, while fostering
          effective collaboration with peers. This initiative encourages
          proactive thinking, logical expression of thoughts, and emotional
          well-being. It also introduces fundamental software engineering
          concepts. This collaboration enriches students' educational journey,
          equipping them with comprehensive skills and knowledge to excel
          academically and navigate the modern world.
        </p>
        <p>
          If you have any questions, need assistance, or would like to learn
          more about our program, please don't hesitate to reach out to us at
          <Button
            variant="link"
            className="p-1"
            onClick={() => router.push("mailto:justin@iacafterschools.com")}
          >
            justin@iacafterschools.com
          </Button>
          .
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-2 font-Cute_Rabbit text-lg lg:text-2xl">
          <div className="flex flex-col items-center text-center gap-3">
            <div className="bg-chart-1 w-fit p-2 rounded-md mx-auto">
              <FaCalendarAlt className="w-8 h-8" />
            </div>
            <p>Schedule a consultation</p>
          </div>
          <div className="flex flex-col items-center text-center gap-3">
            <div className="bg-chart-2 w-fit p-2 rounded-md mx-auto">
              <FaMoneyBillAlt className="w-8 h-8" />
            </div>
            <p>Discuss pricing and plan options</p>
          </div>
          <div className="flex flex-col items-center text-center gap-3">
            <div className="bg-chart-3 w-fit p-2 rounded-md mx-auto">
              <FaCheckDouble className="w-8 h-8" />
            </div>
            <p>Review site specific program requirements</p>
          </div>
        </div>
        <p>
          Thank you for considering IAC's A.R.C. for your school's educational
          after school program(s). We look forward to working with you to create
          a future where every student has the opportunity to learn, grow, and
          thrive.
        </p>
        <Button
          onClick={() => router.push("/contact")}
          className="mt-2 w-1/4 group"
        >
          Get In Touch
          <span className="inline-block transition-transform duration-300 ease-in-out group-hover:translate-x-4">
            <LuArrowBigRightDash />
          </span>
        </Button>
      </section>
    </main>
  );
};

export default SchoolsInfo;
