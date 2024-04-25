"use client";

import { useTheme } from "next-themes";
import { LuMoon, LuSun } from "react-icons/lu";

import { Button } from "@components/ui/button";

export const ThemeToggle = () => {
  const { setTheme, theme } = useTheme();

  const handleThemeChange = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <Button
      className="group rounded-md px-4 py-2 text-sm font-medium duration-300"
      onClick={handleThemeChange}
    >
      <LuSun className="h-5 w-5 rotate-0 scale-100 text-background transition-transform dark:-rotate-90 dark:scale-0" />
      <LuMoon className="absolute h-5 w-5 rotate-90 scale-0 text-background transition-transform dark:rotate-0 dark:scale-100" />
    </Button>
  );
};
