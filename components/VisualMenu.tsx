import React from 'react';
import { ArrowUpRight, ArrowUpLeft } from 'lucide-react';
import { APP_LINKS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

const VisualMenu: React.FC = () => {
  const { t, dir } = useLanguage();
  const ArrowIcon = dir === 'rtl' ? ArrowUpLeft : ArrowUpRight;

  const categories = [
    {
      ...t.menu.classics,
      img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=1000&auto=format&fit=crop"
    },
    {
      ...t.menu.keto,
      img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1000&auto=format&fit=crop"
    },
    {
      ...t.menu.vegan,
      img: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-24 bg-white" dir={dir}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
           <div className="max-w-xl">
             <span className="text-amora-green font-bold tracking-widest uppercase text-sm mb-2 block">{t.menu.kitchen}</span>
             <h2 className="font-serif text-4xl md:text-5xl font-bold text-amora-dark">{t.menu.title}</h2>
           </div>
           <a 
            href={APP_LINKS.menu} 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 text-amora-green font-bold border-b-2 border-amora-green pb-1 hover:text-amora-lightGreen transition-colors"
           >
             {t.menu.fullMenu} <ArrowIcon size={18} />
           </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {categories.map((cat, idx) => (
             <a 
               key={idx}
               href={APP_LINKS.menu}
               target="_blank"
               rel="noopener noreferrer"
               className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer"
             >
               <img 
                 src={cat.img} 
                 alt={cat.name} 
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
               <div className="absolute bottom-0 left-0 p-8 text-white w-full">
                 <h3 className="font-serif text-2xl font-bold mb-2">{cat.name}</h3>
                 <p className="text-white/80 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                    {cat.desc}
                 </p>
                 <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest border border-white/50 px-4 py-2 rounded-full hover:bg-white hover:text-black transition-colors">
                    {t.menu.view}
                 </span>
               </div>
             </a>
           ))}
        </div>

        <div className="mt-8 text-center md:hidden">
            <a 
            href={APP_LINKS.menu} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-amora-green font-bold border-b-2 border-amora-green pb-1"
           >
             {t.menu.fullMenu} <ArrowIcon size={18} />
           </a>
        </div>
      </div>
    </section>
  );
};

export default VisualMenu;