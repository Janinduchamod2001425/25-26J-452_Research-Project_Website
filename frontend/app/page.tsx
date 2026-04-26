"use client";

import Domain from "@/components/domain";
import Documents from "@/components/documents";
import About from "@/components/about";
import Presentations from "@/components/presentations";
import Contact from "@/components/contact";
import HomePage from "@/components/home";
import Milestones from "@/components/milestones";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <HomePage />
      <Domain />
      <Milestones />
      <Documents />
      <Presentations />
      <About />
      <Contact />
    </main>
  );
}
