import { programs } from "@/data/data";
import React, { useState } from "react";
import { LuArrowBigRightDash } from "react-icons/lu";
import { Button } from "./ui/button";

export const ProgramDetails: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null); // Track active program index

  return (
    <div className="flex flex-col gap-4">
      {programs.map((program, index) => (
        <div key={index} className="" id={`${index}`}>
          {/* Content */}
          <div className="pb-6">
            <h2 className="text-2xl font-bold mb-4 font-MorningBakery tracking-widest text-secondary">
              {program.title}
            </h2>

            {/* Overview */}
            {program.overview && (
              <>
                <h3 className="text-lg font-semibold mt-4 font-Cute_Rabbit tracking-widest">
                  Overview
                </h3>
                <p className="mb-4">{program.overview}</p>
              </>
            )}

            {/* Keypoints */}
            {program.keypoints.length > 0 && (
              <>
                <h3 className="text-lg font-semibold mt-4 font-Cute_Rabbit tracking-widest">
                  Key Components
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  {program.keypoints.map((point, pointIndex) => (
                    <li key={pointIndex}>
                      <strong>{point.split(":")[0]}:</strong>{" "}
                      {point.split(":")[1]}
                    </li>
                  ))}
                </ul>
              </>
            )}

            {/* Outcomes */}
            {program.outcome && (
              <>
                <h3 className="text-lg font-semibold mt-4 font-Cute_Rabbit tracking-widest">
                  Learning Outcomes
                </h3>
                <p className="mb-4">{program.outcome}</p>
              </>
            )}

            {/* Goals */}
            {program.goal && (
              <>
                <h3 className="text-lg font-semibold mt-4 font-Cute_Rabbit tracking-widest">
                  Program Goals
                </h3>
                <p className="">{program.goal}</p>
              </>
            )}

            {/* Images */}
            {program.images.length > 0 ? (
              <div className="py-2">
                <div className="flex items-start justify-between pb-7">
                  <h3 className="text-lg font-semibold font-Cute_Rabbit m-0 tracking-widest">
                    Class Images
                  </h3>
                  <Button
                    onClick={
                      () => setActiveIndex(activeIndex === index ? null : index) // Toggle active index
                    }
                    className="w-1/5 group"
                  >
                    View Images
                    <span className="inline-block transition-transform duration-300 ease-in-out group-hover:translate-x-2">
                      <LuArrowBigRightDash />
                    </span>
                  </Button>
                </div>
                <div>
                  {activeIndex === index && (
                    <div className="flex flex-wrap gap-5 justify-between">
                      {program.images.map((image, imageIndex) => (
                        <img
                          key={imageIndex}
                          src={image}
                          className="object-cover object-center aspect-video w-1/5"
                          alt={`${program.title} Image ${imageIndex + 1}`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="py-6 text-center uppercase">
                {" "}
                Class Photos To Come
              </div>
            )}

            {index === programs.length - 1 ? "" : <hr />}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProgramDetails;
