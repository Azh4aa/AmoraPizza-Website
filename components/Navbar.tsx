import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Phone, Globe } from 'lucide-react';
import { APP_LINKS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, toggleLanguage, language } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.story, href: '#story' },
    { name: t.nav.menu, href: APP_LINKS.menu, external: true },
    { name: t.nav.features, href: '#features' },
    { name: t.nav.findUs, href: '#location' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-amora-cream/90 backdrop-blur-md py-4 shadow-sm text-amora-green'
          : 'bg-transparent py-6 text-white'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo Area */}
        <a href="#" className="flex items-center gap-3 group">
          <img 
            src="image.png" 
            alt="Amora Pizza" 
            className="w-12 h-12 object-contain"
          />
          <span className={`font-serif text-2xl font-bold tracking-wider ${isScrolled ? 'text-amora-green' : 'text-white'}`}>
            AMORA
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.external ? '_blank' : '_self'}
              rel={link.external ? 'noopener noreferrer' : ''}
              className={`text-sm font-medium uppercase tracking-widest hover:text-amora-pink transition-colors ${
                isScrolled ? 'text-amora-dark' : 'text-white/90'
              }`}
            >
              {link.name}
            </a>
          ))}
          
          <button 
            onClick={toggleLanguage}
            className={`flex items-center gap-1 text-sm font-bold uppercase ${isScrolled ? 'text-amora-dark' : 'text-white'} hover:text-amora-pink transition-colors`}
          >
            <Globe size={16} />
            {language === 'en' ? 'AR' : 'EN'}
          </button>

          <a
            href={APP_LINKS.menu}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-6 py-2 rounded-full font-bold text-sm transition-transform hover:scale-105 ${
              isScrolled
                ? 'bg-amora-green text-white'
                : 'bg-amora-pink text-amora-dark'
            }`}
          >
            {t.nav.order}
          </a>
        </div>

        {/* Mobile Toggle & Language */}
        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={toggleLanguage}
            className={`text-sm font-bold uppercase flex items-center gap-1 ${isScrolled ? 'text-amora-dark' : 'text-white'}`}
          >
             {language === 'en' ? 'AR' : 'EN'}
          </button>
          <button
            className={isScrolled ? 'text-amora-dark' : 'text-white'}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-amora-cream text-amora-dark shadow-xl py-8 px-6 flex flex-col gap-6 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-xl font-serif font-medium border-b border-amora-green/10 pb-2"
            >
              {link.name}
            </a>
          ))}
           <div className="flex gap-4 mt-4">
              <a href={APP_LINKS.instagram} target="_blank" rel="noreferrer" className="p-2 bg-amora-pink/20 rounded-full text-amora-green">
                <Instagram size={24} />
              </a>
              <a href={`tel:${APP_LINKS.phone}`} className="p-2 bg-amora-pink/20 rounded-full text-amora-green">
                <Phone size={24} />
              </a>
           </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
