import React, { useState, ReactNode } from "react";
import { Button } from "./ui/button";

interface Action {
  id: string;
  tooltip: string;
  icon: ReactNode;
}

interface SpeedDialProps {
  actions: Action[];
}

const SpeedDial: React.FC<SpeedDialProps> = ({ actions }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleMouseEnter = () => {
    if (window.innerWidth > 768) {
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 768) {
      setIsOpen(false);
    }
  };

  return (
    <div
      className="fixed end-6 z-20 bottom-6 group flex items-center mb-2 space-x-2"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <p className="sr-only">Extra Options</p>
      <div
        id="speed-dial-menu"
        className={`transition-all ${isOpen ? "flex" : "hidden"}`}
      >
        {actions.map((action, index) => (
          <div key={index} className="rounded-full overflow-hidden">
            {action.icon}
          </div>
        ))}
      </div>
      <Button
        size="icon"
        className="rounded-full"
        aria-controls="speed-dial-menu"
        aria-expanded={isOpen}
        onClick={toggleMenu}
      >
        <svg
          className="w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 18"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 1v16M1 9h16"
          />
        </svg>
      </Button>
    </div>
  );
};

export default SpeedDial;
