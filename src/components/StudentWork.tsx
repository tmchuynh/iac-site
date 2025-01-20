import { showcase } from "@/data/data";
import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ShowcaseDrawer from "./DrawerContent";

export const ShowcaseWork: React.FC = () => {
  return (
    <Tabs defaultValue="Creative Writing" className="w-full">
      <TabsList className="gap-3 flex-wrap">
        {showcase.map((subject, index) => (
          <TabsTrigger value={subject.subject} key={index}>
            {subject.subject}
          </TabsTrigger>
        ))}
      </TabsList>
      {showcase.map((subject, index) => (
        <TabsContent value={subject.subject} key={index}>
          <div className="flex flex-col gap-4">
            {subject.works.map((work, index) => (
              <Card
                key={index}
                className={index % 2 === 0 ? "border-r-8" : "border-l-8"}
              >
                <CardHeader className="pb-3">
                  <h4 className="text-lg font-Cute_Rabbit tracking-widest">
                    {work.title}
                  </h4>
                  <p className="meta text-xs">
                    <span className="font-bold">By: </span>
                    {work.author}
                  </p>
                  <p className="meta text-xs">
                    <span className="font-bold">Date: </span>
                    {work.date}
                  </p>
                </CardHeader>
                <CardContent className="gap-3 flex flex-col">
                  {work.description}
                  <hr />
                  {work.preview && (
                    <p className="italic text-sm">{work.preview}...</p>
                  )}

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
                </CardContent>

                <CardFooter className="flex justify-end">
                  {" "}
                  <ShowcaseDrawer work={work} />
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
};
