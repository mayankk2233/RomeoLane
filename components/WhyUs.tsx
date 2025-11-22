import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const WhyUs: React.FC = () => {
  const reasons = [
    "Chef-crafted menu using the finest local and imported ingredients",
    "Stylish contemporary interior located in Downtown, Mawana Road",
    "Personalized service with reservation-only seating options",
    "Expertly curated wine list and signature artisanal cocktails",
    "Exclusive private dining areas for special occasions"
  ];

  return (
    <section className="py-20 bg-brand-charcoal border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2">
           <img 
            src="https://images.unsplash.com/photo-1550966871-3ed3c622171d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Interior Details" 
            className="shadow-2xl border border-white/10"
           />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-brand-gold font-sans text-sm tracking-[0.2em] uppercase font-bold mb-3">Why Choose Us</h2>
          <h3 className="text-3xl md:text-4xl font-serif text-white mb-8">An Unmatched Atmosphere in Meerut</h3>
          <ul className="space-y-6">
            {reasons.map((reason, idx) => (
              <li key={idx} className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-brand-gold flex-shrink-0 mr-4 mt-1" />
                <span className="text-gray-300 text-lg font-light">{reason}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};