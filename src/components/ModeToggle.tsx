"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import * as React from "react";
import { useEffect, useState } from "react";
import { Switch } from "./ui/switch";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState( false );

  useEffect( () => {
    setMounted( true );
  }, [] );

  useEffect( () => {
    const handleKeydown = ( e: KeyboardEvent ) => {
      if ( e.ctrlKey && e.altKey && e.key === "l" ) {
        setTheme( theme === "dark" ? "light" : "dark" );
      }
    };

    window.addEventListener( "keydown", handleKeydown );

    return () => {
      window.removeEventListener( "keydown", handleKeydown );
    };
  } );

  if ( !mounted ) {
    return null;
  }

  const handleThemeToggle = () => {
    setTheme( theme === "dark" ? "light" : "dark" );
  };

  return (
    <Switch
      checked={theme === 'dark'}
      onCheckedChange={handleThemeToggle}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="transition-all rotate-0 scale-75 m-auto h-full" role="img" aria-label="toggle light mode" />
      ) : (
        <Moon className="transition-all rotate-12 scale-75 m-auto h-full" role="img" aria-label="toggle dark mode" />
      )}
    </Switch>
  );
}
