import Link from "next/link";

import { ThemeToggle } from "@components/shared/ThemeToggle";
import { Button } from "@components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 py-12 transition-colors duration-300">
      <div className="mb-8 space-y-4 text-center ">
        <h1 className="text-4xl font-semibold tracking-tight text-primary sm:text-5xl lg:text-6xl">
          Welcome to my Template!
        </h1>
        <p className="text-md text-muted-foreground md:text-lg">
          This is a Next.js template with Tailwind CSS and TypeScript and a bit
          of Emran's touch.
        </p>
      </div>
      <div className="flex flex-row items-center gap-4">
        <ThemeToggle />
        <Button variant="link" className="text-muted-foreground">
          <Link href="/colors">Color Pallete</Link>
        </Button>
      </div>
    </div>
  );
}
