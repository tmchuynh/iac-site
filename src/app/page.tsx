import IntroHeader from "@/components/IntroHeader";
import ProgramCards from "@/components/ProgramCards";
import Testimonial from "@/components/ui/testimonial";
import { FaChalkboardTeacher } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <IntroHeader />

      <section className="mb-12">
        <h1 className="my-4 text-balance uppercase font-Luckiest tracking-wider lg:text-4xl text-lg text-secondary font-extrabold text-center">Our "A.R.C" Initiative</h1>
        <p>Over two decades, we've meticulously developed our curriculum to inspire students to apply classroom knowledge to real-life situations. Supported by student learning guides and visual aids, we've cultivated a nurturing learning environment that promotes success and instills confidence for exploration.</p>

        <div className="flex mx-auto gap-6 justify-center py-3">
          <div className="rounded-full bg-chart-3 h-16 w-16 flex justify-center items-center pt-2 font-Magic text-5xl dark:text-background">
            A
          </div>
          <div className="rounded-full bg-chart-1 h-16 w-16 flex justify-center items-center pt-2 font-Magic text-5xl dark:text-background">
            R
          </div>
          <div className="rounded-full bg-chart-2 h-16 w-16 flex justify-center items-center pt-2 font-Magic text-5xl dark:text-background">
            C
          </div>
        </div>

        <p>In addition to our robust curriculum, we offer a wide range of educational and extracurricular after-school activities. Our core focus is nurturing the next generation of innovators and critical thinkers, fostering vital skills like problem-solving, effective communication, and collaboration. These skills are honed from 1st Grade through High School, ensuring students are well-prepared for the challenges of the future.</p>
      </section>

      <section className="mb-12">
        <h1 className="mb-4 text-balance uppercase font-Luckiest tracking-wider lg:text-4xl text-lg text-secondary font-extrabold text-center">Testimonials</h1>
        <Testimonial />
        <p className="text-end px-4 text-destructive">*Names have been omitted to safeguard everyone's privacy</p>
      </section>


      <section className="mb-12">
        <h1 className="my-4 text-balance uppercase font-Luckiest tracking-wider lg:text-4xl text-lg text-secondary font-extrabold text-center">Our Programs</h1>
        <ProgramCards />
      </section>

      <section className="mb-12">
        <h1 className="my-4 text-balance uppercase font-Luckiest tracking-wider lg:text-4xl text-lg text-secondary font-extrabold text-center">Amazing Dedicated Instructors</h1>
        <p>At IAC, our dynamic team comprises software engineers, professional athletes, marine officer candidates, credentialed teachers, and sports coaches, forming the foundation of our organization. Our instructors undergo rigorous training, including in-class experience alongside experienced teachers, ensuring the highest quality education for our students. We are dedicated to providing:</p>

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
          ].map( ( item, index ) => (
            <li key={index} className="grid grid-cols-12">
              <FaChalkboardTeacher className="text-chart-5 col-span-1 mt-1 text-xl mx-auto" />
              <div className="col-span-11">
                <span className="font-semibold font-Chicle tracking-widest">
                  {item.title}
                </span>{" "}
                {item.description}
              </div>
            </li>
          ) )}
        </ul>
      </section>

    </>
  );
}
