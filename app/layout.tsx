import type { Metadata } from "next";

import { poppins } from "@styles/fonts";
import "@styles/globals.css";

import { ThemeProvider } from "@context/ThemeProvider";

export const metadata: Metadata = {
  title: "Starter template",
  description: "Emran's Next.js Starter template",
  icons: {
    icon: "/assets/logo/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-background`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
