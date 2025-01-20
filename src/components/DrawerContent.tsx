"use client";

import React from "react";
import { Drawer } from "vaul";
import {
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "./ui/drawer";
import { Work } from "@/data/types";

interface ShowcaseDrawerProps {
  work: Work;
}

const ShowcaseDrawer: React.FC<ShowcaseDrawerProps> = ({ work }) => {
  return (
    <Drawer.Root shouldScaleBackground={true}>
      <DrawerTrigger className="" variant="destructive">
        View {work.title}
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{work.title}</DrawerTitle>
          <DrawerDescription>
            <strong>By:</strong> {work.author}
            <strong>Date:</strong> {work.date}
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-4">
          <p>{work.description}</p>
          {work.preview && <p className="mt-2">Preview: {work.preview}</p>}
          {work.writing && <p className="mt-2">{work.writing}</p>}
          {work.images && (
            <div className="grid grid-cols-2 gap-2 mt-4">
              {work.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${work.title} Image ${index + 1}`}
                  className="rounded-lg border"
                />
              ))}
            </div>
          )}
        </div>
        <DrawerFooter>
          <DrawerClose className="bg-red-500 text-white px-4 py-2 rounded-md">
            Close
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer.Root>
  );
};

export default ShowcaseDrawer;
