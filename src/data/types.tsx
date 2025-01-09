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