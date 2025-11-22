import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InfoStripMobile } from './components/InfoStripMobile';
import { Experience } from './components/Experience';
import { WhyUs } from './components/WhyUs';
import { MenuHighlights } from './components/MenuHighlights';
import { Reservation } from './components/Reservation';
import { Gallery } from './components/Gallery';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-dark text-slate-200 font-sans selection:bg-brand-gold selection:text-brand-dark">
      <Navbar />
      
      <main>
        <Hero />
        <InfoStripMobile />
        <Experience />
        <WhyUs />
        <MenuHighlights />
        <Reservation />
        <Gallery />
      </main>

      <Footer />
      
      {/* Sticky Mobile Call Button */}
      <div className="fixed bottom-4 right-4 z-50 md:hidden">
        <a 
          href="tel:+919520934111" 
          className="flex items-center justify-center w-14 h-14 bg-brand-gold rounded-full shadow-lg text-brand-dark animate-bounce"
          aria-label="Call Now"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
        </a>
      </div>
    </div>
  );
};

export default App;