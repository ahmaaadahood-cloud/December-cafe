import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Clock, Phone, Navigation } from 'lucide-react';

export const Location = () => {
  return (
    <section id="location" className="py-24 bg-coffee-dark text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-8 flex flex-col">
              <span className="text-coffee-gold italic text-2xl mb-2">Visit Us</span>
              <span>Our Heart in Doha</span>
            </h2>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 text-coffee-gold">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold tracking-widest uppercase text-xs mb-2 text-coffee-gold">Location</h4>
                  <p className="text-xl font-light text-white/70">
                    Iconic 2022 Building,<br />
                    Al Buwairda St, Doha, Qatar
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 text-coffee-gold">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold tracking-widest uppercase text-xs mb-2 text-coffee-gold">Hours</h4>
                  <p className="text-xl font-light text-white/70">
                    Open Daily<br />
                    08:00 AM — 12:00 AM
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 text-coffee-gold">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold tracking-widest uppercase text-xs mb-2 text-coffee-gold">Contact</h4>
                  <p className="text-xl font-light text-white/70">
                    +974 5040 6666
                  </p>
                </div>
              </div>
            </div>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://maps.google.com/?q=December+Cafe+Doha"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-12 inline-flex items-center gap-3 px-8 py-4 bg-white text-coffee-dark rounded-full font-bold tracking-widest uppercase text-xs"
            >
              Get Directions <Navigation size={16} />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative h-[500px] rounded-3xl overflow-hidden border border-white/10"
          >
            {/* Simulation of a luxury map */}
            <div className="absolute inset-0 bg-[#0f0f0f]">
              <img 
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1200&auto=format&fit=crop" 
                className="w-full h-full object-cover opacity-50 grayscale"
                alt="Map Background"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <motion.div
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 w-8 h-8 -left-1 -top-1 bg-coffee-gold rounded-full"
                  />
                  <div className="w-6 h-6 bg-coffee-gold rounded-full border-4 border-coffee-dark z-10 relative shadow-2xl shadow-coffee-gold" />
                  <div className="absolute top-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white text-coffee-dark px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-tighter">
                    December Cafe
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
