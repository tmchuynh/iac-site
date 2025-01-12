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

export default function ProgramCards() {
  const router = useRouter();

  return (
    <section className="mb-12 grid grid-cols-2 gap-3">
      {programs.map( ( program, index ) => (
        <Card key={index} className="grid grid-rows-2">
          <CardHeader className="row-span-2">
            <CardTitle>{program.title}</CardTitle>
            <CardDescription>{program.description}</CardDescription>
            <Button
              className="p-1 w-fit"
              variant={"link"}
              onClick={() => router.push( "/register" )}
            >
              More Information
            </Button>
          </CardHeader>
          <CardContent className="h-48">
            <img
              src={program.image}
              alt={program.title + " image"}
              className="w-full pb-5 h-48 object-cover object-center"
            />
          </CardContent>
          <CardFooter className="flex flex-wrap gap-2 justify-around">
            {program.icons.map( ( Icon, idx ) => (
              <Icon key={idx} className={idx % 2 === 0 ? ( idx % 5 === 0 ? "text-xl text-chart-5" : "text-xl text-chart-1" ) : ( idx % 3 === 0 ? "text-xl text-chart-3" : "text-xl text-chart-2" )} />
            ) )}
          </CardFooter>
        </Card>
      ) )}
    </section>
  );
}
