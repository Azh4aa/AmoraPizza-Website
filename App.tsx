import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import PromoStrip from './components/PromoStrip';
import VisualMenu from './components/VisualMenu';
import Footer from './components/Footer';
import { useLanguage } from './contexts/LanguageContext';

const App: React.FC = () => {
  const { t, dir } = useLanguage();

  return (
    <div className={`min-h-screen font-sans selection:bg-amora-pink selection:text-amora-dark ${dir === 'rtl' ? 'font-arabic' : ''}`} dir={dir}>
      <Navbar />
      
      <main>
        <Hero />
        <Features />
        <PromoStrip />
        
        {/* About Section */}
        <section id="story" className="py-24 bg-amora-green text-amora-cream">
           <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                 <div className="absolute -top-4 -left-4 rtl:-right-4 rtl:left-auto w-full h-full border-2 border-amora-pink rounded-2xl"></div>
                 <img 
                   src="https://images.unsplash.com/photo-1579751626657-72bc17010498?q=80&w=1000&auto=format&fit=crop" 
                   alt="Making Pizza" 
                   className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[4/5]"
                 />
              </div>
              <div className="md:pl-10 rtl:md:pr-10 rtl:md:pl-0">
                 <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">{t.story.title}</h2>
                 <p className="text-lg opacity-90 mb-6 leading-relaxed">
                   {t.story.p1}
                 </p>
                 <p className="text-lg opacity-90 mb-8 leading-relaxed">
                   {t.story.p2}
                 </p>
                 <div className="grid grid-cols-2 gap-6">
                    <div className="border-l-2 rtl:border-l-0 rtl:border-r-2 border-amora-pink pl-4 rtl:pr-4">
                       <span className="block font-bold text-3xl font-serif">48h</span>
                       <span className="text-sm opacity-70 uppercase tracking-widest">{t.story.stat1}</span>
                    </div>
                    <div className="border-l-2 rtl:border-l-0 rtl:border-r-2 border-amora-pink pl-4 rtl:pr-4">
                       <span className="block font-bold text-3xl font-serif">100%</span>
                       <span className="text-sm opacity-70 uppercase tracking-widest">{t.story.stat2}</span>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        <VisualMenu />
      </main>

      <Footer />
    </div>
  );
};

export default App;