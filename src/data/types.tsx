import { LucideProps } from 'lucide-react';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
import { IconType } from 'react-icons/lib';

export interface navItem {
  title: string;
  url?: string;
  icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>> | IconType;
  items?: navSubItem[];
}

export interface navSubItem {
  title: string;
  url: string;
}

export interface staffInfo {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  icons: string[];
  moreInfo?: {
    text: string;
    images: string[];
  };
}

export interface programInfo {
  title: string;
  icons: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>[] | IconType[];
  description: string;
}

export interface testimonialsInfo {
  name: string;
  title: string;
  school: string;
  class: string;
  text: string;
}