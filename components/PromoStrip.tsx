import React from 'react';
import { Coffee } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const PromoStrip: React.FC = () => {
  const { t, dir } = useLanguage();

  return (
    <div className="bg-amora-pink py-12 overflow-hidden relative" dir={dir}>
       {/* Background pattern */}
       <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#4A6741 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
       
       <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-center md:text-start">
          <div className="p-4 bg-white rounded-full shadow-lg">
             <Coffee size={40} className="text-amora-green" />
          </div>
          <div>
             <h3 className="font-serif text-3xl md:text-4xl font-bold text-amora-dark mb-2">
                {t.promo.title}
             </h3>
             <p className="text-amora-dark/80 text-lg">
                {t.promo.descPart1} <span className="font-bold underline decoration-amora-green decoration-2">{t.promo.descHighlight}</span>{t.promo.descPart2}
             </p>
          </div>
          <div className="hidden md:block h-16 w-px bg-amora-dark/10"></div>
          <div className="text-amora-green font-bold font-serif text-5xl">
             10<span className="text-2xl align-top px-1">{t.promo.currency}</span>
          </div>
       </div>
    </div>
  );
};

export default PromoStrip;