import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Star, Quote } from 'lucide-react';

export const About = () => {
  return (
    <section id="experience" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Text background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none whitespace-nowrap">
        <span className="text-[20rem] font-serif italic text-coffee-dark">December</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl"
            >
              <img 
                src="https://picsum.photos/seed/philosophy/1200/1500" 
                className="w-full h-full object-cover"
                alt="Cafe Philosophy"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            
            {/* Overlay Status Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute -bottom-10 -right-6 md:-right-10 glass p-8 rounded-3xl max-w-xs shadow-2xl"
            >
              <div className="flex gap-1 text-coffee-gold mb-3">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="text-coffee-dark font-serif italic text-lg leading-relaxed mb-4">
                "The quietest, most aesthetic spot in Doha for coffee lovers."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-coffee-gold/20 flex items-center justify-center text-coffee-gold">
                  <Quote size={12} fill="currentColor" />
                </div>
                <span className="text-[10px] font-bold tracking-widest uppercase text-coffee-dark/40">Local Artisan</span>
              </div>
            </motion.div>
          </div>

          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-coffee-gold font-bold tracking-[0.4em] uppercase text-[10px] mb-4"
            >
              Our Philosophy
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-serif text-coffee-dark mb-8 leading-tight"
            >
              A Symphony of <br />
              <span className="italic font-light text-coffee-dark/40">Calm & Craft.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6 text-coffee-dark/60 text-lg font-light leading-relaxed mb-12"
            >
              <p>
                Named after the month of warmth and gathering, December Cafe was born from a simple desire: to create a space where time feels different. Located within the Iconic 2022 Building, we offer more than just specialty coffee.
              </p>
              <p>
                We offer an environment. A sanctuary of minimalist design, soft light, and the aroma of freshly roasted beans. Whether you're here to focus, meet, or simply disappear into a good book, December is your home in Doha.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-8">
              {[
                { title: 'Quiet Workspace', desc: 'Plug into creativity' },
                { title: 'Scenic Views', desc: 'Iconic 2022 aesthetics' },
                { title: 'Specialty Beans', desc: 'Sustainably sourced' },
                { title: 'Indoor & Outdoor', desc: 'Seasons of comfort' }
              ].map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col gap-2"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-coffee-gold" />
                    <h4 className="font-bold tracking-widest uppercase text-[10px] text-coffee-dark">{feature.title}</h4>
                  </div>
                  <p className="text-xs text-coffee-dark/40 font-light">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
