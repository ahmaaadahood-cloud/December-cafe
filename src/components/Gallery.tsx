import React from 'react';
import { motion } from 'motion/react';
import { GALLERY_IMAGES } from '../constants';

export const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-coffee-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[300px]">
          <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-3xl group">
            <img 
              src={GALLERY_IMAGES[0]} 
              alt="December Cafe Ambience" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-coffee-dark/20 group-hover:bg-transparent transition-colors" />
          </div>
          
          <div className="relative overflow-hidden rounded-3xl group">
            <img 
              src={GALLERY_IMAGES[1]} 
              alt="December Cafe Details" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>

          <div className="relative overflow-hidden rounded-3xl group">
            <img 
              src={GALLERY_IMAGES[2]} 
              alt="Coffee Presentation" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>

          <div className="lg:col-span-2 relative overflow-hidden rounded-3xl group">
            <img 
              src={GALLERY_IMAGES[3]} 
              alt="Quiet Space" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>

          <div className="relative overflow-hidden rounded-3xl group">
            <img 
              src={GALLERY_IMAGES[4]} 
              alt="Evening Vibes" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>

          <div className="relative overflow-hidden rounded-3xl group">
            <img 
              src={GALLERY_IMAGES[5]} 
              alt="Signature Spanish Latte" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>
        </div>

        <div className="mt-16 text-center">
          <motion.a
            whileHover={{ y: -5 }}
            href="https://instagram.com"
            className="inline-flex items-center gap-4 text-coffee-dark/40 hover:text-coffee-gold transition-colors"
          >
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase">Follow the aesthetic @december_cafe</span>
            <div className="w-12 h-px bg-coffee-gold/30" />
          </motion.a>
        </div>
      </div>
    </section>
  );
};
