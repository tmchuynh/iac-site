"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { programs } from "@/data/data";
import { LuArrowBigRightDash } from "react-icons/lu";
import { useTabs } from "@/app/context/TabsContext";

export default function ProgramCards() {
  const router = useRouter();
  const { setDefaultTab } = useTabs();

  function handleClick(program: string) {
    setDefaultTab(program);
    router.push(`/info/programs#${program}`);
  }

  return (
    <section className="mb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 px-6 w-11/12 mx-auto">
      {programs.map((program, index) => (
        <Card
          key={index}
          className={`flex flex-col justify-between overflow-hidden bg-card text-card-foreground`}
        >
          <CardHeader className="h-full flex flex-col justify-between">
            <div>
              <CardTitle>{program.title}</CardTitle>
              <CardDescription>{program.description}</CardDescription>
            </div>
            <div className="flex flex-wrap gap-2 justify-around">
              {program.icons.map((Icon, idx) => (
                <Icon
                  key={idx}
                  className={
                    idx % 2 === 0
                      ? idx % 5 === 0
                        ? "text-xl text-accent-5"
                        : "text-xl text-accent-1"
                      : idx % 3 === 0
                      ? "text-xl text-accent-3"
                      : "text-xl text-accent-2"
                  }
                />
              ))}
            </div>
          </CardHeader>
          <CardContent className="h-fit">
            <img
              src={program.image}
              alt={program.title + " image"}
              className="min-w-full pb-5 h-48 object-cover object-center"
            />
            <Button
              variant={index % 2 === 0 ? "outline" : "default"}
              onClick={() => handleClick(program.title)}
              className="mt-2 group w-full text-wrap"
            >
              More Information
              <span className="inline-block transition-transform duration-300 ease-in-out group-hover:translate-x-4">
                <LuArrowBigRightDash />
              </span>
            </Button>
          </CardContent>
        </Card>
      ))}
    </section>
  );
}
