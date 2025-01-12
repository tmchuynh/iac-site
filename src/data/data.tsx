import { House, Info, Send } from "lucide-react";
import { FaChess, FaBasketballBall, FaVolleyballBall, FaFootballBall, FaPencilAlt, FaTheaterMasks, FaChessBishop, FaChessKing, FaChessKnight, FaChessQueen, FaChessRook, FaCode, FaLaptopCode } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { GiAmericanFootballHelmet, GiBasketballJersey, GiWhistle } from "react-icons/gi";
import { TfiWrite } from "react-icons/tfi";
import { IoIosChatbubbles } from "react-icons/io";
import { MdOutlineFormatQuote, MdOutlineSportsSoccer, MdTimer } from "react-icons/md";

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
      title: "About Us",
      icon: Info,
      items: [
        {
          title: "Our Mission",
          url: "/about/iac",
        },
        {
          title: "Staff",
          url: "/about/staff",
        },
      ],
    },
    {
      title: "Contact",
      url: "/contact",
      icon: Send,
    },
  ],
};

export const programs = [
  {
    title: 'Chess',
    icons: [FaChessBishop, FaChessKing, FaChessKnight, FaChessQueen, FaChessRook],
    image: "/images/chessboard.jpg",
    description: 'Dive into the world of chess and unleash your potential for strategic mastery, honing your critical thinking and tactical brilliance every step of the way.',
  },
  {
    title: 'Basketball',
    icons: [FaBasketballBall, GiBasketballJersey],
    image: "/images/basketball.jpg",
    description: 'Master the court with our basketball classes, where skill and strategy come together in an electrifying blend of teamwork and excitement.',
  },
  {
    title: 'Volleyball',
    icons: [FaVolleyballBall, MdTimer],
    image: "/images/volleyball.jpg",
    description: 'Set, spike, and serve your way to volleyball mastery, where precision, strategy, and sportsmanship come together for an unbeatable experience.',
  },
  {
    title: 'Flag Football',
    icons: [FaFootballBall, GiAmericanFootballHelmet],
    image: "/images/flagfootball.jpg",
    description: 'Experience the thrill of flag football, where high energy and teamwork blend seamlessly for an exciting time on the field.',
  },
  {
    title: 'Soccer',
    icons: [MdOutlineSportsSoccer, GiWhistle],
    image: "/images/soccer.jpg",
    description: 'Step onto the field and elevate your game, sharpening your skills while embracing the spirit of teamwork and strategic play.',
  },
  {
    title: 'Performing Arts',
    icons: [FaTheaterMasks],
    image: "/images/theater.jpg",
    description: 'Learn to play theater and masks with our theater and masks classes, where skill and creativity come together in an exciting blend of artistic expression and creative problem-solving.',
  },
  {
    title: 'Coding',
    icons: [FaLaptopCode, FaCode],
    image: "/images/codingclass.jpg",
    description: 'Code your way to creativity and innovation with hands-on projects and interactive, game-based learning that makes programming fun and inspiring.',
  },
  {
    title: 'Creative Writing',
    icons: [FaPencil, TfiWrite, MdOutlineFormatQuote],
    image: "/images/creativewriting.jpg",
    description: 'Unleash your imagination and bring your ideas to life by transforming them into compelling narratives through the art of writing.',
  }
];

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
    src: "/images/School_Icons/arroyo.jpg",
  },
  {
    alt: "Reform",
    src: "/images/School_Icons/fairmont.jpg",
  },
  {
    alt: "Tuple",
    src: "/images/School_Icons/hicks.jpg",
  },
  {
    alt: "SavvyCal",
    src: "/images/School_Icons/ladera.jpg",
  },
  {
    alt: "Statamic",
    src: "/images/School_Icons/myford.jpg",
  },
  {
    alt: "Statamic",
    src: "/images/School_Icons/orchardhills.jpg",
  },
  {
    alt: "Statamic",
    src: "/images/School_Icons/peterscanyon.jpg",
  },
  {
    alt: "Statamic",
    src: "/images/School_Icons/redhill.jpg",
  },
  {
    alt: "Statamic",
    src: "/images/School_Icons/tustinranch.jpg",
  },
];

export const testimonials = [
  {
    name: 'John Doe',
    title: 'Student',
    school: 'Orchard Hills',
    class: 'Chess',
    image: "/images/School_Icons/peterscanyon.jpg",
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel libero id lectus consectetur consectetur vel non velit. Aliquam erat volutpat.',
  },
  {
    name: 'Jane Smith',
    title: 'Teacher',
    school: 'Arroyo',
    class: 'Soccer',
    image: "/images/School_Icons/redhill.jpg",
    text:
      'Proin vel tellus ac neque vulputate gravida. Sed vel libero id lectus consectetur consectetur vel non velit. Aliquam erat volutpat.',
  },
  {
    name: 'Michael Johnson',
    title: 'Principal',
    school: 'Fairmont',
    class: 'Creative Writing',
    image: "/images/School_Icons/hicks.jpg",
    text:
      'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
  },
  {
    name: 'Sarah Davis',
    title: 'Teacher',
    school: 'Hicks',
    class: 'Chess',
    image: "/images/School_Icons/fairmont.jpg",
    text:
      'Sed vel libero id lectus consectetur consectetur vel non velit. Aliquam erat volutpat. Proin vel tellus ac neque vulputate gravida.',
  },
  {
    name: 'Emily Watson',
    title: 'Student',
    school: 'Ladera',
    class: 'Theater',
    image: "/images/School_Icons/arroyo.jpg",
    text:
      'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
  }
];