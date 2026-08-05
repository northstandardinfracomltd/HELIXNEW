import { useState, useEffect } from 'react';
import { Language } from './types';
import { translations } from './translations';
import Header from './components/Header';
import Hero, { cityNames } from './components/Hero';
import About from './components/About';
import Bases from './components/Bases';
import Fleet from './components/Fleet';
import Safety from './components/Safety';
import UseCases from './components/UseCases';
import ContactForm from './components/ContactForm';
import IbizaOperations from './components/IbizaOperations';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import SuccessPage from './components/SuccessPage';

const getSeoCity = (): string => {
  try {
    const cleanPath = window.location.pathname.toLowerCase().replace(/\/$/, "");
    if (cleanPath.endsWith("/ibiza")) return "ibiza";
    if (cleanPath.endsWith("/mallorca")) return "mallorca";
    if (cleanPath.endsWith("/monaco")) return "monaco";
    if (cleanPath.endsWith("/malta")) return "malta";
    if (cleanPath.endsWith("/zurich")) return "zurich";
    if (cleanPath.endsWith("/london")) return "london";
    if (cleanPath.endsWith("/megeve")) return "megeve";
  } catch (e) {
    console.warn("Failed to parse pathname:", e);
  }
  return "";
};

const getIsSuccessPage = (): boolean => {
  try {
    const cleanPath = window.location.pathname.toLowerCase().replace(/\/$/, "");
    if (cleanPath.endsWith("/success")) return true;
    const params = new URLSearchParams(window.location.search);
    const pParam = params.get('p')?.toLowerCase() || '';
    if (pParam.endsWith('/success') || pParam === 'success') return true;
  } catch (e) {
    console.warn("Failed to parse pathname for success page:", e);
  }
  return false;
};

export default function App() {
  // Default to English ('en') while offering premium instant translations for FR, DE, NL, ES.
  // Checks URL query parameter ?lang=... for search crawler optimization.
  const [currentLang, setCurrentLang] = useState<Language>(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const urlLang = params.get('lang')?.toLowerCase();
      if (urlLang && ['en', 'fr', 'de', 'nl', 'es'].includes(urlLang)) {
        return urlLang as Language;
      }
    } catch (e) {
      console.warn("Failed to parse lang parameter:", e);
    }
    return 'en';
  });
  const [selectedAircraft, setSelectedAircraft] = useState<string>('');
  const [seoCity, setSeoCity] = useState<string>(getSeoCity);
  const [isSuccessPage, setIsSuccessPage] = useState<boolean>(getIsSuccessPage);

  useEffect(() => {
    const handleLocationChange = () => {
      setSeoCity(getSeoCity());
      setIsSuccessPage(getIsSuccessPage());
    };
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  useEffect(() => {
    try {
      // Dynamically update page language for Google crawler
      document.documentElement.lang = currentLang;

      // Ultra-optimized localized SEO Meta definitions
      const seoMeta: Record<Language, { title: string; description: string; keywords: string }> = {
        en: {
          title: "Helibaleares | Helicopter Charter Balearics - Ibiza, Mallorca, Menorca",
          description: "Direct operator of private helicopter flights in Ibiza, Formentera, Mallorca, Menorca, Alicante, and Valencia since 2003 with our Airbus H135 twin-engine helicopter.",
          keywords: "helicopter ibiza, helicopter charter balearics, helicopter formentera, helicopter transfer mallorca, helicopter menorca, Airbus H135 helicopter"
        },
        fr: {
          title: "Helibaleares | Hélicoptère Ibiza, Majorque, Minorque, Formentera",
          description: "Opérateur direct de vols hélicoptère aux Baléares depuis 2003. Réservez vos vols en hélicoptère à Ibiza, Formentera, Majorque et Minorque en direct exploitant.",
          keywords: "helicoptere ibiza, helicoptere baléares, helicoptere formentera, helicoptere majorque, helicoptere minorque, airbus h135"
        },
        de: {
          title: "Helibaleares | Hubschrauber Charter Balearen - Ibiza, Mallorca, Menorca",
          description: "Direkter Betreiber von Privatflügen seit 2003 auf den Balearen mit zweimotorigem Airbus H135 Hubschrauber.",
          keywords: "hubschrauber ibiza, hubschrauber balearen, hubschrauber formentera, hubschrauber mallorca, airbus h135"
        },
        nl: {
          title: "Helibaleares | Helikopter Charter Balearen - Ibiza, Mallorca, Menorca",
          description: "Directe operator van privé helikoptervluchten op de Balearen sinds 2003. Airbus H135 helikopter.",
          keywords: "helikopter ibiza, helikopter balearen, helikopter formentera, helikopter mallorca, airbus h135"
        },
        es: {
          title: "Helibaleares | Chárter de Helicópteros Baleares - Ibiza, Mallorca, Menorca",
          description: "Operador directo de vuelos en helicóptero en Ibiza, Formentera, Mallorca, Menorca, Alicante y Valencia desde 2003 con Airbus H135.",
          keywords: "helicoptero ibiza, helicoptero baleares, helicoptero formentera, helicoptero mallorca, airbus h135"
        }
      };

      const currentMeta = seoMeta[currentLang] || seoMeta.en;
      let finalTitle = currentMeta.title;
      let finalDescription = currentMeta.description;
      let finalKeywords = currentMeta.keywords;

      if (seoCity) {
        const cityName = cityNames[seoCity]?.[currentLang] || cityNames[seoCity]?.en || seoCity;
        const upperCity = cityName.toUpperCase();

        if (currentLang === 'fr') {
          finalTitle = `Helibaleares | ${upperCity} - VOLS EN HÉLICOPTÈRE BALÉARES`;
          finalDescription = `Réservez votre vol en hélicoptère à ${cityName} avec Helibaleares. Opérateur direct depuis 2003.`;
          finalKeywords = `helicoptere ${cityName.toLowerCase()}, charter ${cityName.toLowerCase()}, vol prive ${cityName.toLowerCase()}`;
        } else if (currentLang === 'de') {
          finalTitle = `Helibaleares | ${upperCity} HUBSCHRAUBER CHARTER BALEAREN`;
          finalDescription = `Buchen Sie Ihren Hubschrauberflug in ${cityName} mit Helibaleares. Direkter Betreiber seit 2003.`;
          finalKeywords = `hubschrauber ${cityName.toLowerCase()}, charter ${cityName.toLowerCase()}, flug ${cityName.toLowerCase()}`;
        } else if (currentLang === 'nl') {
          finalTitle = `Helibaleares | ${upperCity} HELIKOPTER CHARTER BALEAREN`;
          finalDescription = `Boek uw helikoptervlucht naar of van ${cityName} bij Helibaleares. Directe operator sinds 2003.`;
          finalKeywords = `helikopter ${cityName.toLowerCase()}, charter ${cityName.toLowerCase()}`;
        } else if (currentLang === 'es') {
          finalTitle = `Helibaleares | ${upperCity} CHÁRTER DE HELICÓPTEROS BALEARES`;
          finalDescription = `Reserve su helicóptero en ${cityName} con Helibaleares. Operador directo desde 2003.`;
          finalKeywords = `helicoptero ${cityName.toLowerCase()}, charter ${cityName.toLowerCase()}, vuelo ${cityName.toLowerCase()}`;
        } else {
          finalTitle = `Helibaleares | ${upperCity} HELICOPTER CHARTER BALEARICS`;
          finalDescription = `Book your bespoke helicopter charter flight in ${cityName} with Helibaleares. Direct operator since 2003.`;
          finalKeywords = `helicopter ${cityName.toLowerCase()}, helicopter charter ${cityName.toLowerCase()}`;
        }
      }

      // 1. Set document title
      document.title = finalTitle;

      // 2. Set meta description
      let descMeta = document.querySelector('meta[name="description"]');
      if (!descMeta) {
        descMeta = document.createElement('meta');
        descMeta.setAttribute('name', 'description');
        document.head.appendChild(descMeta);
      }
      descMeta.setAttribute('content', finalDescription);

      // 3. Set meta keywords
      let keywordsMeta = document.querySelector('meta[name="keywords"]');
      if (!keywordsMeta) {
        keywordsMeta = document.createElement('meta');
        keywordsMeta.setAttribute('name', 'keywords');
        document.head.appendChild(keywordsMeta);
      }
      keywordsMeta.setAttribute('content', finalKeywords);

      // 4. Update Open Graph titles for social / messenger snippet crawlers
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute('content', finalTitle);

      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute('content', finalDescription);

      // 5. Update Canonical link for Google Search Console
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', 'https://helibaleares.com/');

      let ogUrlMeta = document.querySelector('meta[property="og:url"]');
      if (!ogUrlMeta) {
        ogUrlMeta = document.createElement('meta');
        ogUrlMeta.setAttribute('property', 'og:url');
        document.head.appendChild(ogUrlMeta);
      }
      ogUrlMeta.setAttribute('content', 'https://helibaleares.com/');
    } catch (error) {
      console.warn("SEO head updates deferred:", error);
    }
  }, [currentLang, seoCity]);

  const t = translations[currentLang] || translations.fr;

  const handleSelectAircraft = (aircraftName: string) => {
    setSelectedAircraft(aircraftName);
    
    // Smoothly scroll to contact form section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offset = 80; // height of fixed header
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleClearSelectedAircraft = () => {
    setSelectedAircraft('');
  };

  const handleLangChange = (lang: Language) => {
    setCurrentLang(lang);
    try {
      const url = new URL(window.location.href);
      url.searchParams.set('lang', lang);
      window.history.replaceState({}, '', url.toString());
    } catch (e) {
      console.warn("Failed to update lang URL parameter:", e);
    }
  };

  if (isSuccessPage) {
    return (
      <SuccessPage 
        currentLang={currentLang} 
        onGoHome={() => {
          setIsSuccessPage(false);
          window.history.pushState({}, '', '/');
          window.dispatchEvent(new Event('popstate'));
        }} 
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#fafaf9] text-black selection:bg-black selection:text-white overflow-x-hidden antialiased font-sans">
      
      {/* Structural Header Navigation */}
      <Header 
        currentLang={currentLang} 
        onLangChange={handleLangChange} 
        t={t} 
      />

      {/* Main Sections */}
      <main id="main-content">
        
        {/* Hero Banner with target SEO keywords */}
        <Hero t={t} seoCity={seoCity} currentLang={currentLang} />

        {/* Company legacy since 2003 & Direct operator pricing benefit */}
        <About t={t} />

        {/* Premium Airport Bases served (Ibiza, Mallorca, Monaco, Malta) */}
        <Bases t={t} currentLang={currentLang} />

        {/* Fleet listing (Helicopters & Business Jets) */}
        <Fleet 
          t={t} 
          currentLang={currentLang}
          onSelectAircraft={handleSelectAircraft} 
        />

        {/* Office & Operations Center in Ibiza with Google Maps & Specs */}
        <IbizaOperations currentLang={currentLang} />

        {/* Custom use cases (Business, Pleasure, Repatriation, VIP Events) */}
        <UseCases t={t} />

        {/* Dispatch Form & Direct operator email contact@helibaleares.com */}
        <ContactForm 
          t={t} 
          selectedAircraft={selectedAircraft}
          onClearSelectedAircraft={handleClearSelectedAircraft}
        />

        {/* Prohibited items & seasoned pilot standards */}
        <Safety t={t} />

      </main>

      {/* Footer with Legal mentions & Search Index lists */}
      <Footer t={t} />

      {/* Floating Interactive Charter Chat Widget */}
      <ChatWidget 
        currentLang={currentLang}
        selectedAircraft={selectedAircraft}
        onClearSelectedAircraft={handleClearSelectedAircraft}
      />

    </div>
  );
}
