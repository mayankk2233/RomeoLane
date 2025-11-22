import React from 'react';

export const InfoStripMobile: React.FC = () => {
  return (
    <div className="md:hidden bg-brand-charcoal py-6 px-4 text-center border-b border-white/5">
        <p className="text-brand-gold uppercase text-xs tracking-widest mb-2 font-bold">Opening Hours</p>
        <p className="text-gray-300 text-sm mb-1">Lunch: 11:00 AM - 3:00 PM</p>
        <p className="text-gray-300 text-sm mb-1">Dinner: 6:00 PM - 11:00 PM</p>
        <p className="text-white/60 text-xs mt-2 italic">Buffet available for both services</p>
    </div>
  );
};