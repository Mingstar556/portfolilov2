import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LGP · Freelance Web Developer",
  description:
    "Heavy-motion portfolio of a freelance web developer — Next.js, Three.js, WebGL, and motion design.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="overflow-x-hidden">{children}</body>
    </html>
  );
}