import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Evan Clark",
  description: "Portfolio for Evan Clark - Software Developer",
  icons: "tech-color.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"bg-gradient-to-r from-black to-indigo-900 "}>{children}</body>
    </html>
  );
}
