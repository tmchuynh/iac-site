"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { programs } from "@/data/data";
import { LuArrowBigRightDash } from "react-icons/lu";

export default function ProgramCards() {
  const router = useRouter();

  return (
    <section className="mb-12 grid grid-cols-3 gap-3 px-6 w-11/12 mx-auto">
      {programs.map((program, index) => (
        <Card
          key={index}
          className={
            index % 2 === 0
              ? "grid grid-rows-2 bg-background"
              : "grid grid-rows-2"
          }
        >
          <CardHeader className="row-span-2 flex flex-col justify-between gap-1">
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
                        ? "text-xl text-chart-5"
                        : "text-xl text-chart-1"
                      : idx % 3 === 0
                      ? "text-xl text-chart-3"
                      : "text-xl text-chart-2"
                  }
                />
              ))}
            </div>
          </CardHeader>
          <CardContent className="h-48">
            <img
              src={program.image}
              alt={program.title + " image"}
              className="w-full pb-5 h-48 object-cover object-center"
            />
          </CardContent>
          <CardFooter>
            <Button
              variant={index % 2 === 0 ? "outline" : "default"}
              onClick={() => router.push(`/info/programs#${index}`)}
              className="w-full group"
            >
              More Information
              <span className="inline-block transition-transform duration-300 ease-in-out group-hover:translate-x-4">
                <LuArrowBigRightDash />
              </span>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </section>
  );
}
