import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight, ArrowLeft } from 'lucide-react';
import { APP_LINKS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t, dir } = useLanguage();
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;

  return (
    <section className="relative h-screen w-full overflow-hidden" dir={dir}>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=2070&auto=format&fit=crop"
          alt="Artisan Pizza"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-amora-green/80 via-transparent to-transparent opacity-60" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-white/90 text-xs md:text-sm tracking-[0.2em] uppercase mb-6 backdrop-blur-sm">
            {t.hero.est}
          </span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-bold leading-tight mb-6">
            {t.hero.titleLine1} <br />
            <span className="text-amora-pink italic">{t.hero.titleLine2}</span>
          </h1>
          <p className="text-white/90 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto mb-10">
            {t.hero.description}
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <a
              href={APP_LINKS.menu}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amora-pink text-amora-dark px-8 py-4 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-white transition-all hover:scale-105 flex items-center gap-2"
            >
              {t.hero.viewMenu} <ArrowIcon size={16} />
            </a>
            <a
              href="#location"
              className="px-8 py-4 rounded-full font-bold text-sm tracking-widest uppercase text-white border border-white hover:bg-white/10 transition-all"
            >
              {t.hero.bookTable}
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;