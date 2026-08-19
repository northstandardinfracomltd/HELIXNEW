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
  menorca: { en: "Menorca", fr: "Menorca", de: "Menorca", nl: "Menorca", es: "Menorca" },
  valencia: { en: "Valencia", fr: "Valence", de: "Valencia", nl: "Valencia", es: "Valencia" },
  alicante: { en: "Alicante", fr: "Alicante", de: "Alicante", nl: "Alicante", es: "Alicante" },
  formentera: { en: "Formentera", fr: "Formentera", de: "Formentera", nl: "Formentera", es: "Formentera" },
  balearic: { en: "Balearic", fr: "Baléares", de: "Balearen", nl: "Balearen", es: "Baleares" }
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
    if (seoCity) {
      const city = cityNames[seoCity.toLowerCase()]?.[currentLang] || seoCity;
      if (currentLang === 'fr') return `VOLS PRIVÉS EN HÉLICOPTÈRE À ${city.toUpperCase()}`;
      if (currentLang === 'de') return `PRIVATE HUBSCHRAUBERFLÜGE IN ${city.toUpperCase()}`;
      if (currentLang === 'nl') return `PRIVÉ HELIKOPTERVLUCHTEN IN ${city.toUpperCase()}`;
      if (currentLang === 'es') return `VUELOS PRIVADOS EN HELICÓPTERO EN ${city.toUpperCase()}`;
      return `PRIVATE HELICOPTER FLIGHTS IN ${city.toUpperCase()}`;
    }
    return t.heroTitle.toUpperCase();
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-[80vh] sm:min-h-[85vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-[#faf8f5] pt-2 sm:pt-6 md:pt-36"
    >
      {/* Background Image with Semi-Opaque Light Luxury Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={bgImage}
          alt="Helibaleares Airbus H135 Helicopter Flight"
          fetchPriority="high"
          className="w-full h-full object-cover filter brightness-[1.0] contrast-[1.02]"
          referrerPolicy="no-referrer"
        />
        {/* Semi-opaque light overlay layers with well-balanced opacity */}
        <div className="absolute inset-0 z-10 bg-[#faf8f5]/52 backdrop-blur-[1px]" />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#faf8f5]/90 via-[#faf8f5]/72 to-[#faf8f5]/28" />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#faf8f5]/85 via-transparent to-[#faf8f5]/25" />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-14 sm:py-16 md:py-20 text-left w-full">
        <div className="max-w-3xl">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-black tracking-tight leading-[1.1]"
            id="hero-heading"
          >
            {getHeroTitle()}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg text-stone-700 leading-relaxed font-sans font-light max-w-2xl"
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
              className="inline-flex items-center gap-2 text-sm sm:text-base font-sans font-medium text-stone-900 bg-white/90 border border-stone-300 px-4.5 py-2.5 rounded-full backdrop-blur-md shadow-xs hover:bg-white transition-colors cursor-pointer"
              id="hero-instagram-badge"
            >
              <Instagram className="h-5 w-5 text-stone-900" />
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
              className="font-sans font-medium transition-all flex items-center justify-center cursor-pointer hover:brightness-110 shadow-md active:scale-98"
              style={{
                fontSize: '18px',
                padding: '12px 26px',
                fontWeight: 600,
                borderRadius: '13px',
                border: '1px solid rgb(147 41 74)',
                background: 'rgb(147 41 74)',
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
              className="font-sans font-medium transition-all text-center block cursor-pointer hover:bg-white hover:border-stone-400 shadow-xs"
              style={{
                fontSize: '18px',
                padding: '12px 24px',
                fontWeight: 500,
                borderRadius: '13px',
                border: '1px solid #d6d3d1',
                background: 'rgba(255, 255, 255, 0.85)',
                color: '#1c1917',
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
