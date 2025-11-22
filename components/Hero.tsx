import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transform scale-105 animate-slow-zoom"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')` 
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/70 via-brand-dark/50 to-brand-dark/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-brand-gold font-sans text-sm md:text-base tracking-[0.3em] uppercase mb-4 font-bold">
            Welcome to Meerut's Finest
          </h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-tight">
            Romeo Lane <br />
            <span className="text-3xl md:text-5xl italic font-light block mt-2 text-gray-300">Dine in Style</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Chef-crafted cuisine • Curated ambiance • Reserve your evening now
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#reservation"
              className="px-8 py-4 bg-brand-gold text-brand-dark font-bold uppercase tracking-widest hover:bg-white transition-colors duration-300 min-w-[200px] flex items-center justify-center"
            >
              Book a Table
            </a>
            <a
              href="#menu"
              className="px-8 py-4 border border-white text-white font-bold uppercase tracking-widest hover:bg-white hover:text-brand-dark transition-colors duration-300 min-w-[200px] flex items-center justify-center group"
            >
              View Menu
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Info Strip integrated into Hero bottom */}
      <div className="absolute bottom-0 left-0 w-full border-t border-white/10 bg-brand-dark/80 backdrop-blur-sm py-4 md:py-6 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-center items-center text-gray-300 text-sm md:text-base tracking-wider">
            <span className="mx-4">Lunch: 11 AM - 3 PM</span>
            <span className="text-brand-gold">•</span>
            <span className="mx-4">Dinner: 6 PM - 11 PM</span>
            <span className="text-brand-gold">•</span>
            <span className="mx-4">Buffet Available</span>
        </div>
      </div>
    </div>
  );
};