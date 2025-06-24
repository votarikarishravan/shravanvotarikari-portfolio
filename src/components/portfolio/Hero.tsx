
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Download } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Professional background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
        }}
      ></div>
      
      {/* Smooth gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/85 via-purple-800/80 to-cyan-700/75"></div>
      
      {/* Subtle animated elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse animation-delay-2000"></div>
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 bg-gradient-to-br from-white/95 to-white/80 backdrop-blur-md rounded-full mx-auto mb-6 flex items-center justify-center shadow-2xl border border-white/30">
              <span className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"><img src="Shravan.png" alt="Profile" className="rounded-full w-40 h-40 mx-auto mb-4" /></span>
            </div>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-white drop-shadow-2xl">Shravan Votarikari</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-white/95 mb-4 drop-shadow-lg">
            Integration Developer & Java Backend Specialist
          </p>
          
          <p className="text-lg text-white/85 mb-8 max-w-2xl mx-auto drop-shadow-lg">
            Building robust enterprise solutions with 3+ years of experience in IBM middleware technologies, 
            Java frameworks, and cloud platforms.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={scrollToAbout} className="bg-white/95 hover:bg-white text-indigo-700 font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 backdrop-blur-sm">
              Explore My Work
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="border-white/40 text-indigo-700 hover:bg-white/15 backdrop-blur-md shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
