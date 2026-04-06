"use client";

import Research from "@/components/research";
import Scope from "@/components/scope";
import Resources from "@/components/resources";
import About from "@/components/about";
import Product from "@/components/product";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Research />
      <Scope />
      <Resources />
      <About />
      <Product />
      <Contact />
    </main>
  );
}
