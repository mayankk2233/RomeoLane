import React from 'react';
import { MenuItem } from '../types';

const items: MenuItem[] = [
  {
    id: '1',
    name: 'Prawns Asian Meal Bowl',
    description: 'A wholesome bowl of stir-fried prawns cooked in a flavorful Asian sauce, served with fragrant jasmine rice & fresh sautéed vegetables.',
    imageUrl: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '2',
    name: 'Truffle Mushroom Risotto',
    description: 'Creamy Arborio rice slowly cooked with wild mushrooms, finished with truffle oil and parmesan crisp.',
    imageUrl: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '3',
    name: 'Grilled Salmon Fillet',
    description: 'Pan-seared salmon served with asparagus spears, lemon butter sauce, and herb-crusted potatoes.',
    imageUrl: 'https://images.unsplash.com/photo-1467003909585-2f8a7270028d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '4',
    name: 'Signature Lamb Chops',
    description: 'Succulent lamb chops marinated in rosemary and garlic, grilled to perfection and served with mint reduction.',
    imageUrl: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  }
];

export const MenuHighlights: React.FC = () => {
  return (
    <section id="menu" className="py-20 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-gold font-sans text-sm tracking-[0.2em] uppercase font-bold mb-3">Culinary Delight</h2>
          <h3 className="text-4xl font-serif text-white">Menu Highlights</h3>
          <div className="w-24 h-1 bg-brand-gold mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {items.map((item) => (
            <div key={item.id} className="flex flex-col md:flex-row bg-brand-charcoal/50 border border-white/5 group hover:border-brand-gold/50 transition-colors duration-300">
              <div className="w-full md:w-2/5 h-64 md:h-auto overflow-hidden">
                <img 
                  src={item.imageUrl} 
                  alt={item.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                />
              </div>
              <div className="w-full md:w-3/5 p-8 flex flex-col justify-center">
                <h4 className="text-xl font-serif text-white mb-3 group-hover:text-brand-gold transition-colors">{item.name}</h4>
                <p className="text-gray-400 font-light leading-relaxed text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#" className="inline-block border-b border-brand-gold text-brand-gold pb-1 uppercase tracking-widest text-sm hover:text-white hover:border-white transition-all">
            View Full Menu
          </a>
        </div>
      </div>
    </section>
  );
};