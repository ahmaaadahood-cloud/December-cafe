import React from 'react';
import { motion } from 'motion/react';
import { MousePointer2, ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-coffee-dark">
      {/* Background Graphic/Video Simulation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-coffee-dark/60 via-transparent to-coffee-dark z-10" />
        <img 
          src="https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=2000&auto=format&fit=crop" 
          alt="December Cafe Ambience" 
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-70 scale-105"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full"
        >
          <span className="text-[10px] tracking-[0.4em] uppercase text-coffee-gold font-bold">
            Doha • Iconic 2022
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-6xl md:text-8xl lg:text-9xl font-serif text-white mb-8 tracking-tight leading-[0.9]"
        >
          <span className="block italic font-light text-coffee-beige/40">Where Doha</span>
          <span className="block mt-2">Slows Down.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="max-w-2xl mx-auto text-coffee-beige/70 text-lg md:text-xl font-light mb-12 leading-relaxed"
        >
          Experience coffee as art. A minimalist escape in the heart of Doha, crafted for deep conversations and quiet moments of reflection.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="#menu"
            className="group relative px-10 py-5 bg-coffee-gold overflow-hidden rounded-full transition-transform active:scale-95"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            <span className="relative text-white font-bold tracking-[0.2em] uppercase text-xs flex items-center gap-2">
              View Digital Menu <ArrowRight size={14} />
            </span>
          </a>
          <a
            href="#location"
            className="px-10 py-5 border border-white/20 rounded-full text-white/80 font-bold tracking-[0.2em] uppercase text-xs hover:bg-white hover:text-coffee-dark transition-all"
          >
            Visit Us
          </a>
        </motion.div>
      </div>

      {/* Floating UI Elements */}
      <motion.div
        animate={{ 
          y: [0, -10, 0],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/30 flex flex-col items-center gap-2"
      >
        <span className="text-[9px] tracking-widest uppercase font-bold">Scroll to discover</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </section>
  );
};
