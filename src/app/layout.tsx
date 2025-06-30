import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import "../styles/globals.css";
const jetBrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "varunj.dev",
  description: "Portfolio of Varun J.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetBrains.variable} font-mono antialiased bg-black text-white`}>
        <Navbar />
        <main className="min-h-screen px-4 md:px-8 py-8 max-w-screen-lg mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
