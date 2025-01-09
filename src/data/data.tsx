import { House, Info, Send, Pen, MessageSquareCode, BookMarked } from "lucide-react";
import { FaChess, FaBasketballBall, FaVolleyballBall, FaFootballBall, FaPencilAlt, FaTheaterMasks } from "react-icons/fa";
import { IoIosChatbubbles } from "react-icons/io";
import { MdOutlineSportsSoccer } from "react-icons/md";

export const navBar = {
  navMain: [
    {
      title: "Home",
      url: "/",
      icon: House,
    },
    {
      title: "Our Programs",
      icon: Info,
      items: [
        {
          title: "Program Information",
          url: "/info/programs",
        },
        {
          title: "Our Commitment",
          url: "/info/commitment",
        },
        {
          title: "Student Showcase",
          url: "/info/showcase",
        },
        {
          title: "Information for Schools",
          url: "/info/schools",
        },
      ],
    },
    {
      title: "Staff",
      url: "/staff",
      icon: Send,
    },
    {
      title: "Contact",
      url: "/contact",
      icon: Send,
    },
  ],
  works: [
    {
      title: "Writings",
      icon: Pen,
      items: [
        {
          title: "Front-End Development Book",
          url: "/book/frontendbook",
        },
        {
          title: "Back-End Development Book",
          url: "/book/backendbook",
        },
        {
          title: "Dev.to Blog",
          url: "/writings/devto",
        },
      ],
    },
    {
      title: "Projects",
      icon: MessageSquareCode,
      items: [
        {
          title: "My Business",
          url: "/projects/mybusiness",
        },
        {
          title: "IAC Website",
          url: "/projects/iacwebsite",
        },
        {
          title: "Quiz Application",
          url: "/projects/quizapplication",
        },
        {
          title: "Sudoku",
          url: "/projects/sudoku",
        },
        {
          title: "More on GitHub",
          url: "https://github.com/tmchuynh?tab=repositories",
        },
      ],
    },
    {
      title: "Future Projects",
      icon: BookMarked,
      items: [
        {
          title: "Book Collection",
          url: "/futureProjects/bookCollection",
        },
        {
          title: "Event Planner",
          url: "/futureProjects/eventPlanner",
        },
        {
          title: "Habit Tracker",
          url: "/futureProjects/habitTracker",
        },
        {
          title: "Health and Wellness Tracker",
          url: "/futureProjects/health&wellness",
        },
        {
          title: "Job Market Data App",
          url: "/futureProjects/jobMarketData",
        },
        {
          title: "Life Management Platform",
          url: "/futureProjects/lifeManagementPlatform",
        },
        {
          title: "Online Learning Platform",
          url: "/futureProjects/onlineLearning",
        },
        {
          title: "Personal Finance",
          url: "/futureProjects/personalFinance",
        },
        {
          title: "Pet Adoption Service",
          url: "/futureProjects/petAdoptionService",
        },
        {
          title: "Storytelling Platform",
          url: "/futureProjects/storytellingPlatform",
        },
        {
          title: "Automatic Travel Itinerary Planner",
          url: "/futureProjects/automaticTravelItinerary",
        },
      ]
    },
  ],
};

export const staffCategories = [
  {
    category: 'Founder',
    members: [
      {
        id: 1,
        name: 'John Doe',
        role: 'Founder',
        bio: 'Visionary leader with a passion for education.',
        image: '/images/staff/john_doe.jpg',
        icons: ['icon1.svg', 'icon2.svg'],
        moreInfo: {
          text: 'John Doe has been at the forefront of educational innovation for over 20 years. His work focuses on creating opportunities for learners worldwide.',
          images: ['/images/staff/john_doe_1.jpg', '/images/staff/john_doe_2.jpg'],
        },
      },
    ],
  },
  {
    category: 'Senior Instructors',
    members: [
      {
        id: 2,
        name: 'Jane Smith',
        role: 'Senior Instructor',
        bio: 'Dedicated to creating engaging learning experiences.',
        image: '/images/staff/jane_smith.jpg',
        icons: ['icon3.svg', 'icon4.svg'],
        moreInfo: {
          text: 'Jane Smith specializes in interactive teaching techniques and has received multiple awards for her outstanding contributions to education.',
          images: ['/images/staff/jane_smith_1.jpg', '/images/staff/jane_smith_2.jpg'],
        },
      },
    ],
  },
  {
    category: 'Lead Instructors',
    members: [],
  },
  {
    category: 'Assistant Instructors',
    members: [],
  },
  {
    category: 'Oversight',
    members: [],
  },
];

export const features = [
  {
    name: 'Push to deploy',
    description:
      'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
    icon: MdOutlineSportsSoccer,
  },
  {
    name: 'SSL certificates',
    description:
      'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
    icon: FaChess,
  },
  {
    name: 'Simple queues',
    description:
      'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
    icon: FaBasketballBall,
  },
  {
    name: 'Advanced security',
    description:
      'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
    icon: FaVolleyballBall,
  },
  {
    name: 'Simple queues',
    description:
      'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
    icon: FaFootballBall,
  },
  {
    name: 'Simple queues',
    description:
      'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
    icon: FaPencilAlt,
  },
  {
    name: 'Simple queues',
    description:
      'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
    icon: IoIosChatbubbles,
  },
  {
    name: 'Simple queues',
    description:
      'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
    icon: FaTheaterMasks,
  },
];

export const stats = [
  { name: 'Offices worldwide', value: '12' },
  { name: 'Full-time colleagues', value: '300+' },
  { name: 'Hours per week', value: '40' },
  { name: 'Paid time off', value: 'Unlimited' },
];

export const links = [
  { name: 'Open roles', href: '#' },
  { name: 'Internship program', href: '#' },
  { name: 'Our values', href: '#' },
  { name: 'Meet our leadership', href: '#' },
];

export const logos = [
  {
    alt: "Transistor",
    src: "https://tailwindui.com/plus/img/logos/158x48/transistor-logo-gray-900.svg",
  },
  {
    alt: "Reform",
    src: "https://tailwindui.com/plus/img/logos/158x48/reform-logo-gray-900.svg",
  },
  {
    alt: "Tuple",
    src: "https://tailwindui.com/plus/img/logos/158x48/tuple-logo-gray-900.svg",
  },
  {
    alt: "SavvyCal",
    src: "https://tailwindui.com/plus/img/logos/158x48/savvycal-logo-gray-900.svg",
  },
  {
    alt: "Statamic",
    src: "https://tailwindui.com/plus/img/logos/158x48/statamic-logo-gray-900.svg",
  },
];