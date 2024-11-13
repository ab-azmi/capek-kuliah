"use client";

import * as React from "react";
import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      
    } else if (theme === "dark") {
      setTheme("system");
      
    } else {
      setTheme("light");
      
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="relative overflow-hidden"
    >
      
        <Moon
          className={`h-[1.2rem] w-[1.2rem] absolute inset-0 m-auto ${
            theme === "dark" ? "" : "hidden"
          }`}
        />
        <Sun
          className={`h-[1.2rem] text-primary absolute inset-0 m-auto ${
            theme === "light" ? "" : "hidden"
          }`}
        />
        <Monitor
          className={`h-[1.2rem] absolute inset-0 m-auto ${
            theme === "system" ? "" : "hidden"
          }`}
        />
      
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
