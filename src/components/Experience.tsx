import React from 'react';
import { motion } from 'motion/react';
import { Wifi, Users, Coffee, Moon, Sun } from 'lucide-react';

const experiences = [
  {
    title: 'Calm Workspace',
    desc: 'High-speed connectivity in a hushed, inspiring environment designed for focus.',
    icon: <Wifi size={24} />,
    image: 'https://picsum.photos/seed/workspace/800/600'
  },
  {
    title: 'Meetings & Conversations',
    desc: 'Intimate seating arrangements that foster meaningful dialogue and connection.',
    icon: <Users size={24} />,
    image: 'https://picsum.photos/seed/meetings/800/600'
  },
  {
    title: 'Outdoor Seating',
    desc: 'Enjoy the Doha breeze in our thoughtfully designed exterior lounge.',
    icon: <Sun size={24} />,
    image: 'https://picsum.photos/seed/outdoor/800/600'
  },
  {
    title: 'Night Ambience',
    desc: 'As the sun sets, December transforms into a softly lit haven of luxury.',
    icon: <Moon size={24} />,
    image: 'https://picsum.photos/seed/night/800/600'
  }
];

export const Experience = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-coffee-dark mb-4">Every Moment, Refined</h2>
          <p className="text-coffee-dark/40 font-light tracking-[0.2em] uppercase text-[10px]">Tailored for your rhythm</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-[400px] rounded-3xl overflow-hidden"
            >
              <img 
                src={exp.image} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                alt={exp.title}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark via-coffee-dark/20 to-transparent p-12 flex flex-col justify-end">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-coffee-gold/20 backdrop-blur-md flex items-center justify-center text-coffee-gold">
                    {exp.icon}
                  </div>
                  <h3 className="text-2xl font-serif text-white">{exp.title}</h3>
                </div>
                <p className="text-white/60 font-light leading-relaxed max-w-sm">
                  {exp.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
