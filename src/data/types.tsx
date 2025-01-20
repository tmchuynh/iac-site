import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import { IconType } from "react-icons/lib";

export interface MiddleSquareOptions {
  seed?: number;
  iterations?: number;
  minVal?: number;
  maxVal?: number;
}

export interface navItem {
  title: string;
  url?: string;
  icon:
    | ForwardRefExoticComponent<
        Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
      >
    | IconType;
  items?: navSubItem[];
}

export interface navSubItem {
  title: string;
  url: string;
}

export interface staffInfo {
  category: string;
  members: {
    name: string;
    role: string;
    bio?: string;
    image: string;
    icons?:
      | ForwardRefExoticComponent<
          Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
        >[]
      | IconType[];
    moreInfo?: {
      text: string;
      images: string[];
      email?: string;
      phone?: string;
    };
  }[];
}

export interface programInfo {
  title: string;
  image: string;
  icons:
    | ForwardRefExoticComponent<
        Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
      >[]
    | IconType[];
  description: string;
  overview: string;
  keypoints: string[];
  outcome: string;
  goal: string;
  images: string[];
}

export interface testimonialsInfo {
  name: string;
  title: string;
  school: string;
  image: string;
  class: string;
  text: string;
}

export interface showcaseInfo {
  subject: string;
  works: Work[];
}

export interface Work {
  title: string;
  author: string;
  date: string;
  description: string;
  preview?: string;
  writing?: string;
  images?: string[];
}
