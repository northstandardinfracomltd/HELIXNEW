import { useState, useEffect } from 'react';
import { Language } from './types';
import { translations } from './translations';
import Header from './components/Header';
import Hero, { cityNames } from './components/Hero';
import About from './components/About';
import Bases from './components/Bases';
import PopularRoutes from './components/PopularRoutes';
import Fleet from './components/Fleet';
import Safety from './components/Safety';
import UseCases from './components/UseCases';
import ContactForm from './components/ContactForm';
import IbizaOperations from './components/IbizaOperations';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import SuccessPage from './components/SuccessPage';
import DepositPage from './components/DepositPage';

const getSeoCity = (): string => {
  try {
    const cleanPath = window.location.pathname.toLowerCase().replace(/\/$/, "");
    if (cleanPath.endsWith("/ibiza")) return "ibiza";
    if (cleanPath.endsWith("/mallorca")) return "mallorca";
    if (cleanPath.endsWith("/menorca")) return "menorca";
    if (cleanPath.endsWith("/valencia")) return "valencia";
    if (cleanPath.endsWith("/alicante")) return "alicante";
    if (cleanPath.endsWith("/formentera")) return "formentera";
    if (cleanPath.endsWith("/balearic")) return "balearic";

    const params = new URLSearchParams(window.location.search);
    const pParam = params.get('p')?.toLowerCase() || params.get('city')?.toLowerCase() || '';
    if (pParam.endsWith('/ibiza') || pParam === 'ibiza') return "ibiza";
    if (pParam.endsWith('/mallorca') || pParam === 'mallorca') return "mallorca";
    if (pParam.endsWith('/menorca') || pParam === 'menorca') return "menorca";
    if (pParam.endsWith('/valencia') || pParam === 'valencia') return "valencia";
    if (pParam.endsWith('/alicante') || pParam === 'alicante') return "alicante";
    if (pParam.endsWith('/formentera') || pParam === 'formentera') return "formentera";
    if (pParam.endsWith('/balearic') || pParam === 'balearic') return "balearic";
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

const getIsDepositPage = (): boolean => {
  try {
    const cleanPath = window.location.pathname.toLowerCase().replace(/\/$/, "");
    if (cleanPath.endsWith("/deposit")) return true;
    const params = new URLSearchParams(window.location.search);
    const pParam = params.get('p')?.toLowerCase() || '';
    if (pParam.endsWith('/deposit') || pParam === 'deposit') return true;
  } catch (e) {
    console.warn("Failed to parse pathname for deposit page:", e);
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
  const [isDepositPage, setIsDepositPage] = useState<boolean>(getIsDepositPage);

  useEffect(() => {
    const handleLocationChange = () => {
      setSeoCity(getSeoCity());
      setIsSuccessPage(getIsSuccessPage());
      setIsDepositPage(getIsDepositPage());
    };
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  useEffect(() => {
    try {
      // Dynamically update page language for Google crawler
      document.documentElement.lang = currentLang;

      // Ultra-optimized localized SEO Meta definitions targeting high-intent routes & exact target queries
      const seoMeta: Record<Language, { title: string; description: string; keywords: string }> = {
        en: {
          title: "HeliBaleares | Helicopter Flight & Charter Ibiza, Mallorca - Direct Operator",
          description: "Book direct helicopter flights & helicopter charters in Ibiza and Mallorca with HeliBaleares S.A., direct air operator since 2003. Fly between Ibiza (IBZ), Mallorca (PMI), Formentera & Menorca with our twin-engine Airbus H135.",
          keywords: "helicopter flight ibiza, helicopter charter ibiza, helicopter flight mallorca, helicopter charter mallorca, helicopter flight mallorca to ibiza, helicopter charter mallorca ibiza, private helicopter ibiza, private helicopter mallorca, helicopter transfer ibiza, helicopter transfer mallorca, Airbus H135 helicopter"
        },
        fr: {
          title: "HeliBaleares | Vol & Location Hélicoptère Ibiza, Majorque (Direct Exploitant)",
          description: "Réservez votre vol en hélicoptère ou charter privé à Ibiza et Majorque avec HeliBaleares S.A., opérateur direct depuis 2003 avec Airbus H135 bimoteur.",
          keywords: "vol helicoptere ibiza, charter helicoptere ibiza, vol helicoptere majorque, charter helicoptere majorque, vol helicoptere majorque ibiza, transfert helicoptere ibiza, helicoptere majorque, airbus h135"
        },
        de: {
          title: "HeliBaleares | Hubschrauberflug & Charter Ibiza, Mallorca - Direktbetreiber",
          description: "Buchen Sie direkte Hubschrauberflüge und Hubschrauber-Charter in Ibiza und Mallorca mit HeliBaleares S.A., Direktbetreiber seit 2003 mit zweimotorigem Airbus H135.",
          keywords: "hubschrauberflug ibiza, hubschrauber charter ibiza, hubschrauberflug mallorca, hubschrauber charter mallorca, hubschrauberflug mallorca ibiza, hubschrauber ibiza, hubschrauber mallorca"
        },
        nl: {
          title: "HeliBaleares | Helikoptervlucht & Charter Ibiza, Mallorca - Directe Operator",
          description: "Boek een rechtstreekse helikoptervlucht of helikopter charter op Ibiza en Mallorca bij HeliBaleares S.A., directe operator sinds 2003 met Airbus H135.",
          keywords: "helikoptervlucht ibiza, helikopter charter ibiza, helikoptervlucht mallorca, helikopter charter mallorca, helikoptervlucht mallorca ibiza, helikopter ibiza, helikopter mallorca"
        },
        es: {
          title: "HeliBaleares | Vuelo y Chárter en Helicóptero Ibiza, Mallorca - Operador Directo",
          description: "Reserve sus vuelos en helicóptero y chárter privado en Ibiza y Mallorca con HeliBaleares S.A., operador directo desde 2003 con Airbus H135 bimotor.",
          keywords: "vuelo helicoptero ibiza, charter helicoptero ibiza, vuelo helicoptero mallorca, charter helicoptero mallorca, vuelo helicoptero mallorca ibiza, traslado helicoptero ibiza, helicoptero mallorca"
        }
      };

      const currentMeta = seoMeta[currentLang] || seoMeta.en;
      let finalTitle = currentMeta.title;
      let finalDescription = currentMeta.description;
      let finalKeywords = currentMeta.keywords;

      if (seoCity) {
        const cityUpper = seoCity.toUpperCase();
        finalTitle = `HeliBaleares | HELICOPTER CHARTER FLIGHTS ${cityUpper}`;
        finalDescription = `Book direct helicopter charter flights in ${cityUpper} with HeliBaleares S.A., direct air operator since 2003. Fly with our twin-engine Airbus H135 helicopter.`;
        finalKeywords = `helicopter charter flights ${seoCity}, helicopter flight ${seoCity}, helicopter charter ${seoCity}, private helicopter ${seoCity}, helibaleares ${seoCity}`;
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

      // 5. Compute dynamic Canonical link for Google Search Console (Resolves "Page avec redirection")
      let targetCanonical = 'https://helibaleares.com/';
      if (seoCity) {
        targetCanonical = `https://helibaleares.com/${seoCity}`;
      } else if (isSuccessPage) {
        targetCanonical = 'https://helibaleares.com/success';
      }

      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', targetCanonical);

      let ogUrlMeta = document.querySelector('meta[property="og:url"]');
      if (!ogUrlMeta) {
        ogUrlMeta = document.createElement('meta');
        ogUrlMeta.setAttribute('property', 'og:url');
        document.head.appendChild(ogUrlMeta);
      }
      ogUrlMeta.setAttribute('content', targetCanonical);
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

  if (isDepositPage) {
    return (
      <DepositPage 
        onGoHome={() => {
          setIsDepositPage(false);
          window.history.pushState({}, '', '/');
          window.dispatchEvent(new Event('popstate'));
        }} 
      />
    );
  }

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

        {/* Popular Inter-Island Routes (Mallorca to Ibiza, Ibiza to Formentera) */}
        <PopularRoutes currentLang={currentLang} />

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
