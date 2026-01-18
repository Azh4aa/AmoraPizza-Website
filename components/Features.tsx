import React from 'react';
import { motion } from 'framer-motion';
import { FEATURES } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

const Features: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="features" className="py-24 bg-amora-cream relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-amora-pink/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amora-green/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-amora-green font-serif text-4xl md:text-5xl font-bold mb-4">
            {t.features.title}
          </h2>
          <p className="text-amora-dark/70 max-w-xl mx-auto">
            {t.features.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, index) => {
             // @ts-ignore - dynamic access to translations based on ID
             const featTrans = t.features[feature.id];
             return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-amora-wood/10 flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 bg-amora-green/10 text-amora-green rounded-full flex items-center justify-center mb-6 group-hover:bg-amora-green group-hover:text-white transition-colors duration-300">
                  <feature.icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl font-bold text-amora-dark mb-3">
                  {featTrans?.title || feature.title}
                </h3>
                <p className="text-sm text-amora-dark/60 leading-relaxed">
                  {featTrans?.desc || feature.description}
                </p>
              </motion.div>
             );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;