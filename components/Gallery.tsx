import React from 'react';
import { Instagram } from 'lucide-react';

const testimonials = [
  { id: 1, text: "An unforgettable evening. The ambiance transports you to another world.", author: "Priya S." },
  { id: 2, text: "Great food, impeccable service. The Asian Bowl is a must-try.", author: "Rahul M." },
  { id: 3, text: "The perfect spot for our anniversary dinner in Meerut.", author: "Ankit & Sneha" }
];

const images = [
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
];

export const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-20 bg-brand-dark">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         
         {/* Gallery Grid */}
         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
            {images.map((src, idx) => (
              <div key={idx} className={`overflow-hidden h-64 ${idx === 0 ? 'col-span-2 md:col-span-2' : 'col-span-1'}`}>
                <img 
                  src={src} 
                  alt="Gallery" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 opacity-80 hover:opacity-100" 
                />
              </div>
            ))}
         </div>

         {/* Testimonials */}
         <div className="bg-brand-charcoal p-8 md:p-12 text-center relative mb-12">
            <div className="text-4xl text-brand-gold font-serif absolute top-4 left-4 opacity-20">"</div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((t) => (
                <div key={t.id} className="flex flex-col items-center">
                  <p className="text-gray-300 italic mb-4 font-light text-lg">"{t.text}"</p>
                  <p className="text-brand-gold font-bold text-sm uppercase tracking-widest">- {t.author}</p>
                </div>
              ))}
            </div>
         </div>

         {/* Social */}
         <div className="text-center">
            <a href="https://instagram.com/romeolanemeerut" target="_blank" rel="noreferrer" className="inline-flex items-center text-gray-400 hover:text-brand-gold transition-colors">
              <Instagram className="w-5 h-5 mr-2" />
              <span className="uppercase tracking-widest text-sm">Follow @romeolanemeerut</span>
            </a>
         </div>

       </div>
    </section>
  );
};