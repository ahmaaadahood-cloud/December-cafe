import React from 'react';
import { motion } from 'motion/react';
import { MENU_ITEMS, MENU_CATEGORIES } from '../constants';
import { Sparkles } from 'lucide-react';

export const Menu = () => {
  const [activeCategory, setActiveCategory] = React.useState('All');

  const filteredItems = activeCategory === 'All' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-[#FAFAFA] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-coffee-gold/10 rounded-full mb-6"
          >
            <Sparkles size={12} className="text-coffee-gold" />
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-coffee-gold">Digital Hospitality</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif text-coffee-dark mb-8"
          >
            A Selection of Refinement
          </motion.h2>
          
          <div className="flex flex-wrap justify-center gap-2 mt-10 px-4 max-w-5xl mx-auto pb-4 overflow-x-auto no-scrollbar">
            {MENU_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-3 rounded-full text-[9px] font-bold tracking-[0.2em] uppercase transition-all duration-500 whitespace-nowrap ${
                  activeCategory === cat 
                  ? 'bg-coffee-dark text-white shadow-2xl scale-105 border-coffee-dark' 
                  : 'bg-white text-coffee-dark/40 border border-coffee-cream hover:border-coffee-gold/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16 mt-20">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.03 }}
                viewport={{ once: true }}
                className="group flex flex-col h-full bg-white p-4 rounded-[2.5rem] hover:shadow-2xl hover:shadow-coffee-dark/5 transition-all duration-700"
              >
                <div className="relative aspect-[4/5] mb-8 overflow-hidden rounded-[2rem] bg-coffee-cream shadow-inner">
                  {item.image ? (
                    <img 
                      src={item.image} 
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-coffee-cream/50">
                      <span className="text-[10px] font-bold tracking-widest uppercase text-coffee-gold/20 italic">Curating Visuals</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="absolute top-6 right-6 px-3 py-1 bg-white/80 backdrop-blur-md rounded-full">
                    <span className="text-[8px] font-bold tracking-widest uppercase text-coffee-dark">{item.category}</span>
                  </div>
                </div>
                
                <div className="px-4 pb-4 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-serif text-coffee-dark group-hover:text-coffee-gold transition-colors duration-500">{item.name}</h3>
                    <span className="text-lg font-serif italic text-coffee-gold ml-4">{item.price}</span>
                  </div>
                  
                  <p className="text-coffee-dark/50 text-sm font-light leading-relaxed mb-8 line-clamp-2">
                    {item.description}
                  </p>
                  
                  <div className="mt-auto flex items-center justify-between border-t border-coffee-cream pt-6">
                    <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-coffee-dark/20 italic">Original December Blend</span>
                    <div className="w-2 h-2 rounded-full bg-coffee-gold opacity-30" />
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <p className="text-coffee-dark/20 font-serif italic text-2xl">This selection is currently being refined.</p>
            </div>
          )}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-32 p-16 rounded-[4rem] bg-coffee-dark text-center relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-coffee-gold/5 rounded-full -mr-48 -mt-48 blur-[100px] animate-pulse" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-coffee-gold/5 rounded-full -ml-48 -mb-48 blur-[100px] animate-pulse" />
          
          <h3 className="text-4xl md:text-5xl font-serif text-white mb-6">Experience the Craft</h3>
          <p className="text-coffee-beige/60 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
            Our digital menu is designed for seamless exploration. Please invite our team to your table whenever you're ready to order. We're here to make your visit unforgettable.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <div className="flex items-center gap-4 px-10 py-5 bg-white/5 rounded-full border border-white/10">
              <div className="w-2 h-2 rounded-full bg-coffee-gold animate-ping" />
              <span className="text-white/60 text-[10px] font-bold tracking-[0.2em] uppercase">Table Service Active</span>
            </div>
            <div className="flex items-center gap-4 px-10 py-5 bg-white/5 rounded-full border border-white/10">
              <span className="text-white/60 text-[10px] font-bold tracking-[0.2em] uppercase">Premium Fiber Wifi: DECEMBER_CAFE</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
