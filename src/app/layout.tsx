import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Durham Robotics Society",
  description: "Learn electronics, 3D modelling, and programming!",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={cn("h-full antialiased", rubik.className)}>
      <body className="min-h-full flex flex-col bg-gradient text-foreground">
        {children}
      </body>
    </html>
  );
}
