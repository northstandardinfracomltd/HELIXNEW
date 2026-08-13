import { useState, useEffect } from 'react';
import { Language, TranslationContent } from '../types';

interface HeaderProps {
  currentLang: Language;
  onLangChange: (lang: Language) => void;
  t: TranslationContent;
}

export default function Header({ currentLang, onLangChange, t }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = window.innerWidth >= 768 ? 170 : 42; // adjust scroll offset: desktop full header, mobile top announcement bar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const langNames: Record<Language, string> = {
    en: 'English',
    de: 'Deutsch',
    nl: 'Nederlands',
    es: 'Español',
    fr: 'Français'
  };

  const languages: { code: Language }[] = [
    { code: 'en' },
    { code: 'fr' },
    { code: 'de' },
    { code: 'nl' },
    { code: 'es' }
  ];

  return (
    <header
      id="header-navigation"
      className={`relative w-full bg-white transition-all duration-300 md:fixed md:top-0 md:left-0 md:right-0 md:z-50 ${
        isScrolled
          ? 'border-b border-stone-200/90 md:shadow-sm'
          : 'border-b border-stone-200/60'
      }`}
      style={{ padding: '0px', backgroundColor: '#ffffff' }}
    >
      {/* Top Announcement Sticky Bar in Primary Brand Background Color */}
      <div 
        id="top-announcement-bar"
        className="fixed top-0 left-0 right-0 z-50 md:relative md:top-auto md:left-auto md:right-auto md:z-auto w-full py-2 px-3 sm:px-6 text-center text-white text-[11px] sm:text-xs md:text-sm font-medium tracking-normal flex items-center justify-center gap-2 border-b border-purple-900/30 shadow-xs"
        style={{ backgroundColor: '#721489' }}
      >
        <span className="max-w-7xl leading-snug">
          {t.topAnnouncementBar || "Été 2026 : En haute saison, nous vous invitons à réserver votre vol 4 à 6 jours avant la date souhaitée pour vous offrir la meilleure expérience."}
        </span>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 pt-[64px] sm:pt-[48px] md:pt-0">
        {/* Desktop Layout (hidden on mobile) */}
        <div className="hidden md:flex items-center justify-between h-[110px]">
          {/* Logo */}
          <div 
            onClick={() => scrollToSection('hero')} 
            className="flex flex-col justify-center cursor-pointer h-[110px]"
            id="logo-container"
          >
            <img 
              src="https://civilprom.s3.eu-north-1.amazonaws.com/HeliBaleares+Logo+Neo.svg" 
              alt="Helibaleares" 
              className="h-9 sm:h-11 object-contain hover:opacity-95 transition-opacity self-start"
            />
            <span className="text-[11px] text-stone-500 font-sans tracking-normal font-normal mt-0.5">
              A branch of Eliance Civil Spain ES.AOC.131 EC 135
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="flex items-center gap-6 xl:gap-8" id="desktop-nav">
            <button
              onClick={() => scrollToSection('bases')}
              className="font-sans cursor-pointer hover:opacity-75 transition-opacity font-medium"
              style={{ color: '#000000', fontSize: '18px', letterSpacing: '0px' }}
            >
              {t.navBases}
            </button>
            <button
              onClick={() => scrollToSection('fleet')}
              className="font-sans cursor-pointer hover:opacity-75 transition-opacity font-medium"
              style={{ color: '#000000', fontSize: '18px', letterSpacing: '0px' }}
            >
              {t.navFleet}
            </button>
            <button
              onClick={() => scrollToSection('usecases')}
              className="font-sans cursor-pointer hover:opacity-75 transition-opacity font-medium"
              style={{ color: '#000000', fontSize: '18px', letterSpacing: '0px' }}
            >
              {t.navUseCases}
            </button>
            <button
              onClick={() => scrollToSection('ibiza-operations')}
              className="font-sans cursor-pointer hover:opacity-75 transition-opacity font-medium"
              style={{ color: '#000000', fontSize: '18px', letterSpacing: '0px' }}
            >
              {t.navOffice || 'Meet Us'}
            </button>
            
            {/* Single CTA & Language selector */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => scrollToSection('contact')}
                className="font-sans transition-all active:scale-95 cursor-pointer flex items-center justify-center whitespace-nowrap shadow-xs"
                style={{ 
                  fontSize: '18px', 
                  padding: '12px 18px', 
                  fontWeight: 500, 
                  letterSpacing: '0px', 
                  borderRadius: '13px', 
                  border: '1px solid #000000',
                  background: '#000000', 
                  color: '#ffffff' 
                }}
              >
                {t.navContact}
              </button>

              <div className="relative">
                <select
                  value={currentLang}
                  onChange={(e) => onLangChange(e.target.value as Language)}
                  className="font-sans transition-all active:scale-95 cursor-pointer appearance-none text-center font-medium block border-none outline-none"
                  style={{ 
                    fontSize: '18px', 
                    padding: '12px 16px', 
                    fontWeight: 500, 
                    letterSpacing: '0px', 
                    borderRadius: '13px', 
                    border: '1px solid rgba(0, 0, 0, 0.15)',
                    background: '#f5f5f4', 
                    color: '#000000',
                    textAlignLast: 'center',
                    WebkitAppearance: 'none',
                    MozAppearance: 'none',
                  }}
                >
                  {languages.map((lang) => (
                    <option key={lang.code} value={lang.code} style={{ background: '#ffffff', color: '#000000' }}>
                      {langNames[lang.code]}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </nav>
        </div>

        {/* Mobile Layout (hidden on desktop) */}
        <div className="flex md:hidden flex-col items-center pt-3 pb-4 gap-4">
          {/* Centered Logo Row */}
          <div 
            onClick={() => scrollToSection('hero')} 
            className="cursor-pointer flex flex-col justify-center items-center w-full"
            id="logo-container-mobile"
          >
            <img 
              src="https://civilprom.s3.eu-north-1.amazonaws.com/HeliBaleares+Logo+Neo.svg" 
              alt="Helibaleares" 
              className="h-9 object-contain"
            />
            <span className="text-[10px] text-stone-500 font-sans tracking-normal font-normal mt-0.5">
              A branch of Eliance Civil Spain ES.AOC.131 EC 135
            </span>
          </div>

          {/* Bottom row: Inquire Now & Lang dropdown */}
          <div className="flex items-center gap-2.5 w-full px-2">
            <button
              onClick={() => scrollToSection('contact')}
              className="font-sans transition-all active:scale-95 cursor-pointer flex items-center justify-center whitespace-nowrap shadow-xs text-center"
              style={{ 
                fontSize: '16px', 
                padding: '12px 16px', 
                fontWeight: 500, 
                letterSpacing: '0px', 
                borderRadius: '13px', 
                border: '1px solid #000000',
                background: '#000000', 
                color: '#ffffff',
                flex: '1 1 50%',
                width: '50%'
              }}
            >
              {t.navContact}
            </button>

            <div className="relative" style={{ flex: '1 1 50%', width: '50%' }}>
              <select
                value={currentLang}
                onChange={(e) => onLangChange(e.target.value as Language)}
                className="font-sans transition-all active:scale-95 cursor-pointer appearance-none text-center font-medium block border-none outline-none"
                style={{ 
                  fontSize: '16px', 
                  padding: '12px 16px', 
                  fontWeight: 500, 
                  letterSpacing: '0px', 
                  borderRadius: '13px', 
                  border: '1px solid rgba(0, 0, 0, 0.15)',
                  background: '#f5f5f4', 
                  color: '#000000',
                  textAlignLast: 'center',
                  WebkitAppearance: 'none',
                  MozAppearance: 'none',
                  width: '100%'
                }}
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code} style={{ background: '#ffffff', color: '#000000' }}>
                    {langNames[lang.code]}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
