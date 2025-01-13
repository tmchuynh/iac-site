"use client";

import DoughnutChart from "@/components/PieChart";
import { ProgramDetails } from "@/components/ProgramDetails";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";
import { useRouter } from "next/navigation";
import { FC } from "react";
import {
  FaBrain,
  FaChartPie,
  FaCheck,
  FaGraduationCap,
  FaMedal,
} from "react-icons/fa";
import { LuArrowBigRightDash } from "react-icons/lu";

const ProgramsPage: FC = () => {
  const router = useRouter();
  const { open } = useSidebar();

  return (
    <main className="mx-auto px-4 py-8">
      <section className="mb-5">
        <h1 className="my-4 text-balance uppercase font-Luckiest tracking-wider lg:text-4xl text-lg text-secondary font-extrabold text-center">
          About Our Classes
        </h1>
        <div className="flex gap-3 flex-wrap pb-5">
          <Button
            variant={"outline"}
            onClick={() => router.push("/info/schools")}
          >
            Chess
          </Button>
          <Button
            variant={"outline"}
            onClick={() => router.push("/info/schools")}
          >
            Basketball
          </Button>
          <Button
            variant={"outline"}
            onClick={() => router.push("/info/schools")}
          >
            Soccer
          </Button>
          <Button
            variant={"outline"}
            onClick={() => router.push("/info/schools")}
          >
            Volleyball
          </Button>
          <Button
            variant={"outline"}
            onClick={() => router.push("/info/schools")}
          >
            Flag Football
          </Button>
          <Button
            variant={"outline"}
            onClick={() => router.push("/info/schools")}
          >
            Performing Arts
          </Button>
          <Button
            variant={"outline"}
            onClick={() => router.push("/info/schools")}
          >
            Creative Writing
          </Button>
          <Button
            variant={"outline"}
            onClick={() => router.push("/info/schools")}
          >
            Comic Book Club
          </Button>
          <Button
            variant={"outline"}
            onClick={() => router.push("/info/schools")}
          >
            Public Speaking
          </Button>
          <Button
            variant={"outline"}
            onClick={() => router.push("/info/schools")}
          >
            Coding/Programming
          </Button>
        </div>
        <p className="text-md leading-relaxed">
          In order to provide an organized and effective learning experience,
          our classes are thoughtfully structured into several distinct
          segments, each designed to maximize the educational benefit for our
          students:
        </p>
      </section>

      <section className="mb-5">
        <DoughnutChart />
        <ul className="py-2 flex flex-col gap-3">
          {[
            {
              title: "Attendance Verification:",
              description:
                "Before delving into the day's lessons, instructors begin each class by verifying attendance. They cross-reference the list of enrolled students with records from the front office and parents to ensure that every student is accounted for. This initial step helps maintain a secure and structured learning environment.",
            },
            {
              title: "Introduction of New Concepts:",
              description:
                "As the class progresses, students eagerly delve into the exploration of new concepts. Instructors introduce fresh subject matter, building upon the foundation laid in previous sessions. This phase serves to expand students' knowledge, stimulate their curiosity, and broaden their understanding of the topic at hand.",
            },
            {
              title: "Practical Application of Learned Concepts:",
              description:
                "Students are given the opportunity to put into practice the concepts they have previously learned. This hands-on segment is crucial for reinforcing their understanding and skills. It allows students to engage with the material, collaborate with their peers, and apply their knowledge in a safe and supportive setting.",
            },
            {
              title: "Collaborative Learning:",
              description:
                "Our classes also emphasize the importance of teamwork and peer-to-peer interaction. Students are encouraged to engage in discussions, group activities, and collaborative projects. This fosters a sense of community within the class, promotes knowledge sharing, and enhances social and problem-solving skills.",
            },
            {
              title: "Review and Assessment:",
              description:
                "Periodically, students engage in review and assessment sessions, where they consolidate their learning by revisiting key concepts and topics. This process helps instructors gauge the progress of each student and identify areas that may require additional support.",
            },
            {
              title: "Q&A and Discussion:",
              description:
                "Open dialogue is highly encouraged, and students are invited to ask questions, seek clarification, and engage in meaningful discussions. This interactive approach ensures that every student has the opportunity to actively participate and gain a comprehensive understanding of the subject matter.",
            },
          ].map((item, index) => (
            <li key={index} className="grid grid-cols-12 text-balance">
              <FaCheck className="text-chart-3 text-xl col-span-1 mt-1 mx-auto" />
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
          By meticulously structuring our classes into these essential segments,
          we aim to create a holistic and engaging learning experience that
          caters to the diverse needs of our students. This approach not only
          ensures that students acquire a deep understanding of the material but
          also cultivates critical thinking, problem-solving, and collaboration
          skills that are invaluable in their academic journey and beyond.
        </p>

        <Button
          onClick={() => router.push("/info/schools")}
          className="w-2/5 group"
        >
          More About Our Curriculum
          <span className="inline-block transition-transform duration-300 ease-in-out group-hover:translate-x-2">
            <LuArrowBigRightDash />
          </span>
        </Button>
      </section>

      <section className="mb-12">
        <div
          className={
            open
              ? "grid grid-cols-1 md:grid-cols-2 py-2 uppercase text-md gap-2 font-Cute_Rabbit text-2xl"
              : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-2 uppercase gap-2 font-Cute_Rabbit text-2xl"
          }
        >
          <div className="flex flex-col items-center text-center gap-3">
            <div className="bg-chart-1 w-fit p-2 rounded-md mx-auto">
              <FaMedal className="w-8 h-8" />
            </div>
            <p>Trusted by leading schools and parents</p>
          </div>
          <div className="flex flex-col items-center text-center gap-3">
            <div className="bg-chart-2 w-fit p-2 rounded-md mx-auto">
              <FaGraduationCap className="w-8 h-8" />
            </div>
            <p>Experienced & Dedicated Professional Instructors</p>
          </div>
          <div className="flex flex-col items-center text-center gap-3">
            <div className="bg-chart-3 w-fit p-2 rounded-md mx-auto">
              <FaChartPie className="w-8 h-8" />
            </div>
            <p>Well diversed classes in various disciplines</p>
          </div>
          <div className="flex flex-col items-center text-center gap-3">
            <div className="bg-chart-3 w-fit p-2 rounded-md mx-auto">
              <FaBrain className="w-8 h-8" />
            </div>
            <p>Inspires growth and collaboration</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <ProgramDetails />
      </section>
    </main>
  );
};

export default ProgramsPage;
