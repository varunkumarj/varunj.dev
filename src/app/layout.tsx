import type { Metadata } from "next";
import { JetBrains_Mono, Inter, Roboto_Serif } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";
import "../styles/globals.css";

// Configure fonts with display: 'swap' for better performance
const jetBrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const roboto = Roboto_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
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
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${jetBrains.variable} ${inter.variable} ${roboto.variable} flex flex-col min-h-screen bg-gray-950 text-gray-100`}>
        <ThemeProvider>
          <Navbar />
          <main className="flex-grow w-full">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              {children}
            </div>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
