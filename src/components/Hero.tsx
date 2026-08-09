import { useState, useEffect } from 'react';
import { ArrowRight, Plane, Shield, Instagram } from 'lucide-react';
import { TranslationContent, Language } from '../types';
import { motion } from 'motion/react';

interface HeroProps {
  t: TranslationContent;
  seoCity?: string;
  currentLang: Language;
}

export const cityNames: Record<string, Record<Language, string>> = {
  ibiza: { en: "Ibiza", fr: "Ibiza", de: "Ibiza", nl: "Ibiza", es: "Ibiza" },
  mallorca: { en: "Mallorca", fr: "Majorque", de: "Mallorca", nl: "Mallorca", es: "Mallorca" },
  monaco: { en: "Monaco", fr: "Monaco", de: "Monaco", nl: "Monaco", es: "Mónaco" },
  malta: { en: "Malta", fr: "Malte", de: "Malta", nl: "Malta", es: "Malta" },
  zurich: { en: "Zurich", fr: "Zurich", de: "Zürich", nl: "Zürich", es: "Zúrich" },
  london: { en: "London", fr: "Londres", de: "London", nl: "Londen", es: "Londres" },
  megeve: { en: "Megeve", fr: "Megève", de: "Megève", nl: "Megève", es: "Megève" }
};

export default function Hero({ t, seoCity, currentLang }: HeroProps) {
  const bgImage = "https://civilprom.s3.eu-north-1.amazonaws.com/Charter+HeliBaleares+-+Hero+Helico.png";

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offset = 80;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const getHeroTitle = () => {
    if (!seoCity) return t.heroTitle;
    const cityName = cityNames[seoCity]?.[currentLang] || cityNames[seoCity]?.en || seoCity;
    const upperCity = cityName.toUpperCase();
    
    if (currentLang === 'fr') {
      return `${upperCity} - HELICOPTER CHARTER FLIGHTS BALEARIC`;
    } else if (currentLang === 'de') {
      return `${upperCity} - HELICOPTER CHARTER FLIGHTS BALEARIC`;
    } else if (currentLang === 'nl') {
      return `${upperCity} - HELICOPTER CHARTER FLIGHTS BALEARIC`;
    } else if (currentLang === 'es') {
      return `${upperCity} - HELICOPTER CHARTER FLIGHTS BALEARIC`;
    }
    return `${upperCity} - HELICOPTER CHARTER FLIGHTS BALEARIC`;
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-32 sm:pt-28 md:pt-36"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={bgImage}
          alt="Helibaleares Airbus H135 Helicopter Flight"
          fetchPriority="high"
          className="w-full h-full object-cover filter brightness-[0.85] contrast-[1.05]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-transparent to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 sm:py-20 text-left w-full">
        <div className="max-w-3xl">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-tight leading-[1.1]"
            id="hero-heading"
          >
            {getHeroTitle()}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg text-stone-200 leading-relaxed font-sans font-light max-w-2xl"
            id="hero-paragraph"
          >
            {t.heroSubtitle}
          </motion.p>

          {/* Instagram handle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6"
          >
            <a 
              href="https://www.instagram.com/helibaleares" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 text-sm sm:text-base font-sans font-medium text-white bg-black/60 border border-white/20 px-4.5 py-2.5 rounded-full backdrop-blur-md shadow-sm cursor-pointer"
              id="hero-instagram-badge"
            >
              <Instagram className="h-5 w-5 text-white" />
              <span>@helibaleares</span>
            </a>
          </motion.div>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 flex flex-col sm:flex-row gap-4"
            id="hero-cta-buttons"
          >
            <button
              onClick={scrollToContact}
              className="font-sans font-medium transition-all flex items-center justify-center cursor-pointer hover:brightness-110 shadow-lg active:scale-98"
              style={{
                fontSize: '18px',
                padding: '12px 26px',
                fontWeight: 600,
                borderRadius: '13px',
                border: '1px solid #721489',
                background: '#721489',
                color: '#ffffff',
              }}
            >
              <span>{t.heroCta}</span>
            </button>
            <a
              href="#fleet"
              onClick={(e) => {
                e.preventDefault();
                const fleetSec = document.getElementById('fleet');
                if (fleetSec) {
                  const offset = 80;
                  const elementPosition = fleetSec.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - offset;
                  window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
              }}
              className="font-sans font-medium transition-all text-center block cursor-pointer hover:opacity-80"
              style={{
                fontSize: '18px',
                padding: '12px 24px',
                fontWeight: 500,
                borderRadius: '13px',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                background: 'rgba(0, 0, 0, 0.4)',
                color: '#ffffff',
                backdropFilter: 'blur(8px)'
              }}
            >
              {t.navFleet}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
