import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Coffee, Instagram, Phone } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Experience', href: '#experience' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Location', href: '#location' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-500 py-6 px-6 md:px-12',
        isScrolled ? 'py-4' : 'py-8'
      )}
    >
      <div className={cn(
        'max-w-7xl mx-auto flex items-center justify-between transition-all duration-500 rounded-full py-3 px-6 md:px-10',
        isScrolled ? 'glass-dark bg-coffee-charcoal/80' : 'bg-transparent'
      )}>
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <div className="text-coffee-gold">
            <Coffee size={28} strokeWidth={1.5} />
          </div>
          <div className="flex flex-col -space-y-1">
            <span className="font-serif text-xl tracking-wider text-white">DECEMBER</span>
            <span className="text-[10px] tracking-[0.3em] text-coffee-gold font-sans font-medium uppercase text-center">Cafe • ديسمبر</span>
          </div>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-sans tracking-[0.15em] uppercase text-white/80 hover:text-white transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.a
            href="#menu"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-6 py-2 bg-coffee-gold text-white text-xs font-sans font-bold tracking-widest uppercase rounded-full hover:bg-white hover:text-coffee-dark transition-all duration-300"
          >
            Digital Menu
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="fixed inset-0 bg-coffee-dark z-40 flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-3xl font-serif text-white hover:text-coffee-gold transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="flex gap-6 mt-12">
              <a href="https://instagram.com" className="text-white/60 hover:text-coffee-gold"><Instagram /></a>
              <a href="tel:50406666" className="text-white/60 hover:text-coffee-gold"><Phone /></a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
