"use client";

import { FC } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { staffCategories } from "@/data/data";
import React from "react";
import { IoClose } from "react-icons/io5";

const StaffPage: FC = () => {
  return (
    <main className="px-4 py-8 w-11/12 mx-auto">
      <section className="text-center mb-12">
        <h1 className="my-4 text-balance uppercase font-Luckiest tracking-wider lg:text-4xl text-lg text-secondary font-extrabold text-center">
          Our Team
        </h1>
        <p>Meet the people who make everything possible.</p>
      </section>

      {staffCategories.map((category) => (
        <section key={category.category} className="mb-12">
          <h2 className="text-2xl font-MorningBakery mb-6 text-primary">
            {category.category}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.members.map((staff, index) => (
              <div
                key={index}
                className="bg-card rounded-lg shadow-lg p-6 flex flex-col justify-between items-center text-center"
              >
                <div className="flex flex-col h-full justify-between">
                  <img
                    src={staff.image}
                    alt={staff.name}
                    className="w-28 h-28 rounded-full object-cover object-center mb-4 mx-auto border border-input"
                  />
                  <h3 className="text-xl font-semibold mb-2">{staff.name}</h3>
                  <p className="text-sm text-accent font-medium mb-4">
                    {staff.role}
                  </p>
                  {staff.bio && (
                    <p className="text-muted text-sm text-pretty mb-4 w-[11rem]">
                      {staff.bio}
                    </p>
                  )}
                </div>

                <div>
                  <div className="flex flex-wrap space-x-4 justify-center mb-4">
                    {staff.icons.map((Icon, idx) => (
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

                  {staff.moreInfo && (
                    <Drawer>
                      <DrawerTrigger
                        className="w-full text-wrap h-fit"
                        variant="secondary"
                      >
                        Learn More About {staff.name}
                      </DrawerTrigger>
                      <DrawerContent>
                        <DrawerHeader>
                          <DrawerTitle className="font-MorningBakery tracking-widest text-accent text-3xl">
                            About {staff.name}
                            <DrawerClose
                              className="group w-1/12 absolute right-0 top-5 hover:border-none"
                              variant="ghost"
                              size="icon"
                            >
                              <span className="inline-block transition-transform duration-300 ease-in-out group-hover:rotate-90">
                                <IoClose />
                              </span>
                            </DrawerClose>
                          </DrawerTitle>
                          <DrawerDescription>
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
                          </DrawerDescription>
                        </DrawerHeader>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 px-4 mb-4">
                          {staff.moreInfo.images.map((image, index) => (
                            <img
                              key={index}
                              src={image}
                              alt={`${staff.name} additional info ${index + 1}`}
                              className="rounded-lg border border-input"
                            />
                          ))}
                        </div>
                      </DrawerContent>
                    </Drawer>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
};

export default StaffPage;
