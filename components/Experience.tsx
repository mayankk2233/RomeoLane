import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, Wine, PartyPopper } from 'lucide-react';

const features = [
  {
    id: 1,
    title: "Signature Dishes",
    description: "Experience culinary masterpieces like our Prawns Asian Bowl, featuring stir-fried prawns with jasmine rice & fresh vegetables.",
    icon: <Utensils className="w-8 h-8 text-brand-gold mb-4" />,
    img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Ambience & Bar",
    description: "Immerse yourself in our dim, warm lighting and modern décor while enjoying premium cocktails crafted by expert mixologists.",
    icon: <Wine className="w-8 h-8 text-brand-gold mb-4" />,
    img: "https://images.unsplash.com/photo-1572116469696-9a76f7d90090?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Events & Celebrations",
    description: "Host unforgettable private dining events. From intimate gatherings to grand celebrations, we provide the perfect backdrop.",
    icon: <PartyPopper className="w-8 h-8 text-brand-gold mb-4" />,
    img: "https://images.unsplash.com/photo-1519671482502-9759101d45bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-brand-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-gold font-sans text-sm tracking-[0.2em] uppercase font-bold mb-3">The Experience</h2>
          <h3 className="text-4xl font-serif text-white">Discover Romeo Lane</h3>
          <div className="w-24 h-1 bg-brand-gold mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div 
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="group relative overflow-hidden"
            >
              <div className="h-80 overflow-hidden mb-6 relative">
                 <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10" />
                 <img 
                  src={feature.img} 
                  alt={feature.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                 />
              </div>
              <div className="flex flex-col items-center text-center px-4">
                {feature.icon}
                <h4 className="text-2xl font-serif text-white mb-3">{feature.title}</h4>
                <p className="text-gray-400 leading-relaxed font-light">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};