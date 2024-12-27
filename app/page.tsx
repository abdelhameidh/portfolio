"use client";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import React, { useEffect } from 'react';



const Home = () => {
    useEffect(() => {
    // Global client-side safety check
    if (typeof window !== 'undefined') {
      console.log('Page loaded on client side');
      
      // If you suspect a specific function is causing issues
      const safeCreateTag = () => {
        if (typeof document !== 'undefined') {
          // Your tag creation logic here
          console.log('Creating tag safely');
        }
      };

      safeCreateTag();
    }
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
