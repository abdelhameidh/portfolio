"use client";
import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';


const FloatingNav = dynamic(() => import('@/components/ui/FloatingNav').then((mod) => mod.FloatingNav), { ssr: false });
const Hero = dynamic(() => import('@/components/Hero').then((mod) => mod.Hero), { ssr: false });
const Grid = dynamic(() => import('@/components/Grid').then((mod) => mod.Grid), { ssr: false });
const RecentProjects = dynamic(() => import('@/components/RecentProjects').then((mod) => mod.RecentProjects), { ssr: false });
const Experience = dynamic(() => import('@/components/Experience').then((mod) => mod.Experience), { ssr: false });
const Footer = dynamic(() => import('@/components/Footer').then((mod) => mod.Footer), { ssr: false });



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
