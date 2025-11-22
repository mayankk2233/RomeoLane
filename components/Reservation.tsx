import React from 'react';
import { Phone, MapPin, Clock } from 'lucide-react';

export const Reservation: React.FC = () => {
  return (
    <section id="reservation" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-brand-gold opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-brand-gold opacity-20"></div>

      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <h2 className="text-brand-gold font-sans text-sm tracking-[0.3em] uppercase font-bold mb-4">Reservations</h2>
        <h3 className="text-4xl md:text-6xl font-serif text-white mb-8">Reserve Your Table</h3>
        <p className="text-gray-300 text-lg font-light mb-12 max-w-2xl mx-auto">
          To ensure the best experience, we recommend booking your table in advance. 
          Call us directly to secure your evening at Romeo Lane.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6 mb-16">
          <a 
            href="tel:+919520934111" 
            className="group flex items-center justify-center px-8 py-6 bg-brand-gold hover:bg-white transition-colors duration-300 min-w-[250px]"
          >
            <Phone className="w-6 h-6 text-brand-dark mr-3" />
            <div className="text-left">
              <span className="block text-brand-dark font-bold uppercase tracking-wider text-xs">Call Line 1</span>
              <span className="block text-brand-dark font-serif text-xl">+91-95209 34111</span>
            </div>
          </a>
          <a 
            href="tel:+919520924111" 
            className="group flex items-center justify-center px-8 py-6 border border-brand-gold hover:bg-brand-gold transition-colors duration-300 min-w-[250px]"
          >
            <Phone className="w-6 h-6 text-brand-gold group-hover:text-brand-dark mr-3 transition-colors" />
            <div className="text-left">
              <span className="block text-white group-hover:text-brand-dark font-bold uppercase tracking-wider text-xs transition-colors">Call Line 2</span>
              <span className="block text-white group-hover:text-brand-dark font-serif text-xl transition-colors">+91-95209 24111</span>
            </div>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left bg-brand-charcoal p-8 md:p-12 border border-white/5">
          <div className="flex items-start">
             <MapPin className="w-6 h-6 text-brand-gold mt-1 flex-shrink-0" />
             <div className="ml-4">
               <h4 className="text-white font-bold uppercase tracking-wider mb-2">Location</h4>
               <p className="text-gray-400 font-light">
                 2nd Floor, Downtown<br/>
                 Opposite Defence Colony<br/>
                 Mawana Road, Meerut, UP
               </p>
             </div>
          </div>
          <div className="flex items-start">
             <Clock className="w-6 h-6 text-brand-gold mt-1 flex-shrink-0" />
             <div className="ml-4">
               <h4 className="text-white font-bold uppercase tracking-wider mb-2">Timings</h4>
               <p className="text-gray-400 font-light mb-1"><span className="text-white">Lunch:</span> 11:00 AM - 3:00 PM</p>
               <p className="text-gray-400 font-light"><span className="text-white">Dinner:</span> 6:00 PM - 11:00 PM</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};