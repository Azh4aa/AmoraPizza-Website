import React from 'react';
import { MapPin, Phone, Instagram, ExternalLink } from 'lucide-react';
import { APP_LINKS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t, dir } = useLanguage();

  return (
    <footer id="location" className="bg-amora-dark text-amora-cream pt-20 pb-10" dir={dir}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          
          {/* Info Side */}
          <div className="space-y-10">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">{t.footer.headline}</h2>
              <p className="text-white/60 max-w-md text-lg font-light">
                {t.footer.subhead}
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-amora-pink shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-white mb-1">{t.footer.visit}</h4>
                  <p className="text-white/70">112, Lusail 5583, Doha, Qatar</p>
                  <a href={APP_LINKS.maps} target="_blank" rel="noreferrer" className="text-xs text-amora-pink uppercase tracking-widest mt-2 inline-flex items-center gap-1 hover:text-white">
                    {t.footer.directions} <ExternalLink size={12} className={dir === 'rtl' ? 'mr-1' : 'ml-1'} />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="text-amora-pink shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-white mb-1">{t.footer.contact}</h4>
                  <p className="text-white/70">{t.footer.callText}</p>
                  <a href={`tel:${APP_LINKS.phone}`} className="text-white/90 hover:text-amora-pink transition-colors font-mono mt-1 block">
                    +974 0000 0000
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Instagram className="text-amora-pink shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-white mb-1">{t.footer.follow}</h4>
                  <a href={APP_LINKS.instagram} target="_blank" rel="noreferrer" className="text-white/70 hover:text-amora-pink transition-colors">
                    @amorapizzaqatar
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map Side (Visual representation) */}
          <div className="w-full h-[400px] bg-amora-green/20 rounded-2xl overflow-hidden relative group">
             {/* Use an image that looks like a map or the exterior if real map not available */}
             <img 
               src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000&auto=format&fit=crop" 
               alt="Restaurant Exterior" 
               className="w-full h-full object-cover filter brightness-75 group-hover:brightness-100 transition-all duration-500"
             />
             <div className="absolute inset-0 flex items-center justify-center">
                <a 
                  href={APP_LINKS.maps} 
                  target="_blank" 
                  rel="noreferrer"
                  className="bg-white text-amora-dark px-6 py-3 rounded-full font-bold shadow-xl hover:scale-105 transition-transform flex items-center gap-2"
                >
                  <MapPin size={18} className="text-amora-green" /> {t.footer.mapBtn}
                </a>
             </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/40">
          <p>&copy; {new Date().getFullYear()} {t.footer.rights}</p>
          <div className="flex gap-6 mt-4 md:mt-0">
             <span>{t.footer.dine}</span>
             <span>{t.footer.takeaway}</span>
             <span>{t.footer.delivery}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;