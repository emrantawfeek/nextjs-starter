import { cn } from "@lib/utils";

import { ThemeToggle } from "@components/shared/ThemeToggle";

const colorsObject = [
  {
    num: "0",
    name: "background",
    bg: "bg-background",
    text: "text-background",
  },
  {
    num: "I",
    name: "foreground",
    bg: "bg-foreground",
    text: "text-foreground",
  },
  { num: "0", name: "card", bg: "bg-card", text: "text-card" },
  {
    num: "I",
    name: "card-foreground",
    bg: "bg-card-foreground",
    text: "text-card-foreground",
  },
  { num: "0", name: "popover", bg: "bg-popover", text: "text-popover" },
  {
    num: "I",
    name: "popover-foreground",
    bg: "bg-popover-foreground",
    text: "text-popover-foreground",
  },
  { num: "X", name: "primary", bg: "bg-primary", text: "text-primary" },
  {
    num: "X",
    name: "primary-foreground",
    bg: "bg-primary-foreground",
    text: "text-primary-foreground",
  },
  { num: "II", name: "secondary", bg: "bg-secondary", text: "text-secondary" },
  {
    num: "XX",
    name: "secondary-foreground",
    bg: "bg-secondary-foreground",
    text: "text-secondary-foreground",
  },
  { num: "II", name: "muted", bg: "bg-muted", text: "text-muted" },
  {
    num: "X",
    name: "muted-foreground",
    bg: "bg-muted-foreground",
    text: "text-muted-foreground",
  },
  { num: "II", name: "accent", bg: "bg-accent", text: "text-accent" },
  {
    num: "XX",
    name: "accent-foreground",
    bg: "bg-accent-foreground",
    text: "text-accent-foreground",
  },
  {
    num: "Y",
    name: "destructive",
    bg: "bg-destructive",
    text: "text-destructive",
  },
  {
    num: "Y",
    name: "destructive-foreground",
    bg: "bg-destructive-foreground",
    text: "text-destructive-foreground",
  },
  { num: "Z", name: "border", bg: "bg-border", text: "text-border" },
  { num: "Z", name: "input", bg: "bg-input", text: "text-input" },
];

export default function page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 py-6 pb-0 transition-colors duration-300">
      <div className="mb-8 space-y-4 text-center ">
        <div className="flex flex-col justify-center">
          <div className="mb-6 flex flex-row items-center justify-between gap-12">
            <h1 className=" text-2xl font-semibold tracking-tight text-primary sm:text-3xl lg:text-3xl">
              Color Palette
            </h1>
            <ThemeToggle />
          </div>
          <div className="flex flex-col gap-4">
            {colorsObject.map((color) => (
              <div
                key={color.name}
                className="flex flex-row items-center gap-4"
              >
                <div className="w-6 text-left text-xs">{color.num}</div>
                <div
                  className={cn("h-6 w-6 rounded-lg border p-2", color.bg)}
                />
                <span className="w-36 text-left text-xs">{color.name}</span>
                <span className={cn(`w-36 text-left text-xs`, color.text)}>
                  {color.name}
                </span>
              </div>
            ))}
            <div className="h-6 w-full rounded-lg bg-primary p-2 ring-4 ring-ring" />
          </div>
          <div className="flex flex-col gap-4"></div>
        </div>
      </div>
    </div>
  );
}
