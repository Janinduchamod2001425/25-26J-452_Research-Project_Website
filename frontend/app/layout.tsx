import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeContextProvider from "@/context/theme-context";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeTransition from "@/components/theme-transition";
import ToastProvider from "@/components/toast-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "25-26J-452 - FabricVision Home",
  description: "AI-Driven Fabric Defect Detection and Monitoring System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-black dark:text-gray-50 dark:text-opacity-90`}
      >
        {/* Light Mode Backgrounds (Sri Lankan Garment Theme: Tea & Gemstone) */}

        {/* Right Blob: Deep Sapphire Blue - Darker, richer blue for premium garment quality */}
        <div
          className="bg-[#0a2a44] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] opacity-70
    sm:w-[68.75rem] dark:bg-[#1a3a5a] dark:opacity-90"
        ></div>

        {/* Left Blob: Burnt Orange / Cinnamon - Warm orange inspired by Ceylon cinnamon and spices */}
        <div
          className="bg-[#e0672e] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] opacity-60
    sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#c55a2c] dark:opacity-80"
        ></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Navbar />

            {children}

            <ToastProvider />

            <Footer />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
