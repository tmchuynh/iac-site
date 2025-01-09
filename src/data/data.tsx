import { House, Info, Send, Pen, MessageSquareCode, BookMarked } from "lucide-react";

export const navBar = {
  navMain: [
    {
      title: "Home",
      url: "/",
      icon: House,
    },
    {
      title: "Info",
      icon: Info,
      items: [
        {
          title: "About Me",
          url: "/info/about",
        },
        {
          title: "Accessibility Declaration",
          url: "/info/accessibility",
        },
        {
          title: "Resume",
          url: "/info/resume",
        },
        {
          title: "Tech Stacks",
          url: "/info/techStack",
        },
        {
          title: "Achievements",
          url: "/info/experiences&achievements",
        },
      ],
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