import { showcase } from "@/data/data";
import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { useRouter } from "next/navigation";
import { IoClose } from "react-icons/io5";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { LuArrowBigRightDash } from "react-icons/lu";
import { Button } from "./ui/button";

export const ShowcaseDetails: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 w-11/12 mx-auto">
      {showcase.map((subject, index) => (
        <div key={index} className="" id={`{index}`}>
          {/* Content */}
          <CardHeader className="section-title" id="{subject.subject}">
            <h3 className="font-MorningBakery text-3xl">{subject.subject}</h3>
          </CardHeader>

          <div className="flex flex-col gap-4">
            {subject.works.map((work, index) => (
              <Card
                key={index}
                className={index % 2 === 0 ? "border-r-8" : "border-l-8"}
              >
                <CardHeader className="pb-3">
                  <h4 className="font-Cute_Rabbit tracking-widest">
                    {work.title}
                  </h4>
                  <p className="meta">
                    <span className="font-bold">By: </span>
                    {work.author} | <span className="font-bold">Date: </span>
                    {work.date}
                  </p>
                </CardHeader>
                <CardContent className="gap-3 flex flex-col">
                  {work.description}
                  <hr />
                  {work.preview && <p>{work.preview}...</p>}
                </CardContent>

                {work.images && (
                  <>
                    <hr />
                    <div className="grid grid-cols-3 gap-4">
                      {work.images.map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt={`${work.title} image ${index + 1}`}
                          className="rounded-lg border border-input"
                        />
                      ))}
                    </div>
                  </>
                )}

                {work.writing && (
                  <Drawer>
                    <DrawerTrigger className="group w-1/4 mx-6 mb-6">
                      Read Entire Piece
                      <span className="inline-block transition-transform duration-300 ease-in-out group-hover:translate-x-4">
                        <LuArrowBigRightDash />
                      </span>
                    </DrawerTrigger>
                    <DrawerContent>
                      <DrawerHeader>
                        <div className="flex justify-between">
                          <DrawerTitle>{work.title}</DrawerTitle>
                          <DrawerClose
                            className="group w-1/12 absolute right-0 top-5 hover:border-none"
                            variant="ghost"
                            size="icon"
                          >
                            <span className="inline-block transition-transform duration-300 ease-in-out group-hover:rotate-90">
                              <IoClose />
                            </span>
                          </DrawerClose>
                        </div>
                        <DrawerDescription>
                          {work.writing.split("\n").map((line, index) => (
                            <React.Fragment key={index}>
                              &emsp;
                              {line}
                              <br />
                            </React.Fragment>
                          ))}
                        </DrawerDescription>
                      </DrawerHeader>
                    </DrawerContent>
                  </Drawer>
                )}
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export const ShowcaseNavigation: React.FC = () => {
  const router = useRouter();
  return (
    <div className="flex flex-wrap gap-4">
      {showcase.map((subject, index) => (
        <Button
          key={index}
          variant={"outline"}
          size={"sm"}
          onClick={() => router.push(`/info/showcase#${index}`)}
          className="mt-2 group"
        >
          {subject.subject}
        </Button>
      ))}
    </div>
  );
};

export default { ShowcaseDetails, ShowcaseNavigation };
