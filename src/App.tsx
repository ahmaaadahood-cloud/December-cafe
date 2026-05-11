/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { SmoothScrollWrapper } from './components/SmoothScrollWrapper';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Menu } from './components/Menu';
import { Experience } from './components/Experience';
import { Gallery } from './components/Gallery';
import { Location } from './components/Location';
import { Footer } from './components/Footer';
import { motion } from 'motion/react';

export default function App() {
  return (
    <SmoothScrollWrapper>
      <main className="relative">
        <Navbar />
        
        {/* Cinematic Loading Overlay (Optional but premium) */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
          onAnimationComplete={() => document.body.style.overflow = 'auto'}
          className="fixed inset-0 z-[100] bg-coffee-dark flex items-center justify-center pointer-events-none"
        >
          <div className="flex flex-col items-center gap-4">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-coffee-gold"
            >
              <div className="w-12 h-12 border-2 border-coffee-gold border-t-transparent rounded-full animate-spin" />
            </motion.div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-white font-serif italic text-2xl tracking-widest"
            >
              December
            </motion.span>
          </div>
        </motion.div>

        <Hero />
        
        <div className="relative z-10 bg-white">
          <About />
          <Experience />
          <Menu />
          
          {/* Immersive Strip */}
          <section className="py-32 relative overflow-hidden bg-coffee-dark">
            <div className="absolute inset-0">
              <img 
                src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=3000&auto=format&fit=crop" 
                className="w-full h-full object-cover opacity-30 fixed scale-110"
                alt="Parallax background"
              />
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
              <motion.h2 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="text-4xl md:text-7xl font-serif text-white mb-8"
              >
                Every Great Conversation <br />
                <span className="italic text-coffee-gold">Starts Here.</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-white/60 font-light tracking-widest uppercase text-xs"
              >
                Experience the calm of December in Doha
              </motion.p>
            </div>
          </section>

          <Gallery />
          <Location />
        </div>

        <Footer />
      </main>
    </SmoothScrollWrapper>
  );
}
