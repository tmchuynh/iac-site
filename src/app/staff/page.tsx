"use client";
import { Drawer } from "vaul";
import { FC } from "react";
import { accentColors, staffCategories } from "@/data/data";
import React from "react";
import { IoClose } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogClose,
} from "@radix-ui/react-dialog";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import HeroSection from "@/components/ui/hero";

const StaffPage: FC = () => {
  const router = useRouter();

  return (
    <>
      <HeroSection imageSrc="/images/Class_Photos/Chess/chess-46.jpg" />
      <main className="mx-auto px-4 py-8 w-11/12 relative">
        <section className="text-center mb-12">
          <h1 className="my-4 text-balance uppercase font-Luckiest tracking-wider lg:text-4xl text-lg text-secondary font-extrabold text-center">
            Our Team
          </h1>
          <p>Meet the people who make everything possible.</p>
        </section>

        {staffCategories.map((category) => (
          <section key={category.category} className="mb-12">
            <h2 className="text-2xl font-MorningBakery mb-6 text-accent-5">
              {category.category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {category.members
                .sort((a, b) => {
                  if (
                    category.category === "Senior Instructors" ||
                    category.category === "Founder"
                  ) {
                    return 0;
                  }
                  return a.name.localeCompare(b.name);
                })
                .map((staff, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-lg border-primary border-2 border-dashed shadow-lg p-6 flex flex-col justify-between items-center text-center relative"
                  >
                    <Badge className="text-xs w-fit justify-center bg-primary text-primary-foreground font-medium mb-4 absolute -top-3">
                      {staff.role}
                    </Badge>
                    <div className="flex flex-col h-full justify-between items-center">
                      <img
                        src={staff.image}
                        alt={staff.name}
                        className="w-28 h-28 rounded-full object-cover object-center mb-4 mx-auto border border-muted border-opacity-10 shadow-md"
                      />
                      <h3 className="text-xl font-semibold mb-2 font-Luckiest tracking-widest">
                        {staff.name}
                      </h3>
                      {staff.icons ? (
                        <div className="flex flex-wrap space-x-4 justify-center items-center mb-4">
                          {staff.icons.map((Icon) => {
                            const colorIndex =
                              [...Icon.name].reduce(
                                (sum, char) =>
                                  Math.abs(sum - 260 + char.charCodeAt(0)),
                                0
                              ) % accentColors.length;
                            const assignedColor = accentColors[colorIndex];
                            const iconName = Icon.name.split(/(?=[A-Z])/);
                            const randomNumber = Math.random() * 900;

                            return (
                              <TooltipProvider
                                key={index + staff.name + randomNumber}
                              >
                                <Tooltip>
                                  <TooltipTrigger>
                                    <Icon
                                      key={Icon.name}
                                      className={
                                        Icon.name === "PiSoccerBallFill" ||
                                        Icon.name === "GiMicrophone"
                                          ? `size-6 ${assignedColor}`
                                          : `size-5 ${assignedColor}`
                                      }
                                    />
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    {iconName[1] === "Pencil"
                                      ? "Creative Writing"
                                      : iconName[1] === "Microphone"
                                      ? "Public Speaking"
                                      : iconName[1] === "Laptop"
                                      ? "Coding"
                                      : iconName[1]}
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            );
                          })}
                        </div>
                      ) : null}
                      {staff.bio && (
                        <p className="text-muted text-sm text-pretty mb-4 w-[11rem]">
                          {staff.bio}
                        </p>
                      )}
                    </div>

                    <div>
                      {staff.moreInfo && (
                        <Drawer.Root>
                          <Drawer.Trigger className="relative flex h-10 flex-shrink-0 items-center justify-center gap-2 overflow-hidden rounded-lg px-4 py-6 text-xs font-medium transition-all bg-secondary border border-transparent text-secondary-foreground hover:bg-transparent hover:text-foreground hover:border-border">
                            Learn More About {staff.name}
                          </Drawer.Trigger>
                          <Drawer.Portal>
                            <Drawer.Overlay className="fixed inset-0 bg-black/40" />
                            <Drawer.Content className="bg-card flex flex-col rounded-t-[10px] mt-24 h-3/4 fixed bottom-0 left-0 right-0 outline-none">
                              <div className="p-4 rounded-t-[10px] flex-1 overflow-y-auto">
                                <div className="w-11/12 mx-auto space-y-4 pt-5">
                                  <Drawer.Title className="font-medium mb-4 flex justify-between">
                                    <div>
                                      <p className="font-MorningBakery tracking-widest text-accent text-3xl">
                                        About {staff.name}
                                      </p>
                                      <br />
                                      <p className="font-extrabold uppercase -mt-2">
                                        {staff.role}
                                      </p>
                                    </div>
                                    <div className="flex flex-col items-end">
                                      {staff.moreInfo.email && (
                                        <Button
                                          variant={"link"}
                                          onClick={() =>
                                            router.push(
                                              `mailto:${staff.moreInfo?.email}`
                                            )
                                          }
                                          rel="noopener noreferrer"
                                        >
                                          {staff.moreInfo.email}
                                        </Button>
                                      )}
                                      {staff.moreInfo.phone && (
                                        <Button
                                          variant={"link"}
                                          onClick={() =>
                                            router.push(
                                              `tel:${staff.moreInfo?.phone}`
                                            )
                                          }
                                          rel="noopener noreferrer"
                                        >
                                          {staff.moreInfo.phone}
                                        </Button>
                                      )}
                                    </div>
                                  </Drawer.Title>
                                  <Drawer.Close className="group w-1/12 absolute right-0 top-5 hover:border-none">
                                    <span className="inline-block transition-transform duration-300 ease-in-out group-hover:rotate-90">
                                      <IoClose />
                                    </span>
                                  </Drawer.Close>
                                  <Drawer.Description>
                                    {staff.moreInfo.text
                                      .split("<br/>")
                                      .map((line, index) => (
                                        <React.Fragment key={index}>
                                          &emsp;
                                          {line}
                                          <br />
                                          <br />
                                        </React.Fragment>
                                      ))}
                                  </Drawer.Description>
                                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 mb-4">
                                    {staff.moreInfo.images.map(
                                      (image, index) => (
                                        <Dialog key={index}>
                                          <DialogTrigger>
                                            {" "}
                                            <img
                                              key={index}
                                              src={image}
                                              alt={`${
                                                staff.name
                                              } additional info ${index + 1}`}
                                              className="object-cover h-64 aspect-auto mx-auto"
                                            />
                                          </DialogTrigger>
                                          <DialogContent className="absolute top-[20%] left-[20%] bg-popover p-4 rounded-lg">
                                            <DialogTitle className="sr-only">
                                              {`${staff.name} additional info ${
                                                index + 1
                                              }`}
                                            </DialogTitle>
                                            <DialogClose className="group w-1/12 absolute right-0 top-5 hover:border-none">
                                              <span className="inline-block transition-transform duration-300 ease-in-out group-hover:rotate-90">
                                                <IoClose />
                                              </span>
                                            </DialogClose>
                                            <img
                                              key={index}
                                              src={image}
                                              alt={`${
                                                staff.name
                                              } additional info ${index + 1}`}
                                              className="object-scale-down h-96 aspect-video"
                                            />
                                          </DialogContent>
                                        </Dialog>
                                      )
                                    )}
                                  </div>
                                </div>
                              </div>
                            </Drawer.Content>
                          </Drawer.Portal>
                        </Drawer.Root>
                      )}
                    </div>
                  </div>
                ))}
            </div>
          </section>
        ))}
      </main>
    </>
  );
};

export default StaffPage;
