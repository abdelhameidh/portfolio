"use client";
import Hero from "@/components/Hero";
import React, { useEffect } from 'react';
import { FloatingNav } from "@/components/ui/FloatingNav";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

const Home = () => {
  useEffect(() => {
    // Any client-side only initialization can go here
    console.log('Page loaded on client side');
  }, []);
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Experience />
        <Footer />

      </div>
    </main>
  );
}
export default Home;
