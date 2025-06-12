
import React from 'react';
import Hero from '@/components/portfolio/Hero';
import About from '@/components/portfolio/About';
import Experience from '@/components/portfolio/Experience';
import Skills from '@/components/portfolio/Skills';
import Services from '@/components/portfolio/Services';
import Portfolio from '@/components/portfolio/Portfolio';
import Contact from '@/components/portfolio/Contact';
import Navigation from '@/components/portfolio/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Services />
        <Portfolio />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
