import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Facebook, Twitter, Coffee } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="pt-24 pb-12 bg-white text-coffee-dark border-t border-coffee-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <Coffee className="text-coffee-gold" strokeWidth={1.5} />
              <span className="font-serif text-2xl tracking-wider">DECEMBER</span>
            </div>
            <p className="text-coffee-dark/50 font-light leading-relaxed pr-8">
              A philosophy of calm. Inspired by the warmth of winter, we bring the finest coffee experience to the heart of Doha.
            </p>
          </div>

          <div>
            <h4 className="font-bold tracking-[0.3em] uppercase text-[10px] text-coffee-gold mb-8">Explore</h4>
            <ul className="space-y-4 font-light text-sm text-coffee-dark/60">
              <li><a href="#experience" className="hover:text-coffee-gold transition-colors">Experience</a></li>
              <li><a href="#menu" className="hover:text-coffee-gold transition-colors">Our Menu</a></li>
              <li><a href="#gallery" className="hover:text-coffee-gold transition-colors">Gallery</a></li>
              <li><a href="#location" className="hover:text-coffee-gold transition-colors">Find Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold tracking-[0.3em] uppercase text-[10px] text-coffee-gold mb-8">Support</h4>
            <ul className="space-y-4 font-light text-sm text-coffee-dark/60">
              <li><a href="#" className="hover:text-coffee-gold transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-coffee-gold transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-coffee-gold transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-coffee-gold transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold tracking-[0.3em] uppercase text-[10px] text-coffee-gold mb-8">Follow</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-coffee-cream flex items-center justify-center text-coffee-dark/40 hover:bg-coffee-gold hover:text-white transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-coffee-cream flex items-center justify-center text-coffee-dark/40 hover:bg-coffee-gold hover:text-white transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-coffee-cream flex items-center justify-center text-coffee-dark/40 hover:bg-coffee-gold hover:text-white transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-coffee-cream flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold tracking-widest uppercase text-coffee-dark/30">
            © 2026 December Cafe. Designed for Calm.
          </p>
          <div className="flex gap-8 text-[10px] font-bold tracking-widest uppercase text-coffee-dark/30">
            <span>Doha, Qatar</span>
            <span>Iconic 2022</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
