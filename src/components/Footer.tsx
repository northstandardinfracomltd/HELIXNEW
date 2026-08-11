import { useState } from 'react';
import { Plane, ChevronDown, ChevronUp, ShieldAlert, Globe, Instagram } from 'lucide-react';
import { TranslationContent } from '../types';

interface FooterProps {
  t: TranslationContent;
}

export default function Footer({ t }: FooterProps) {
  const [showLegal, setShowLegal] = useState(false);

  const searchTerms = [
    "Helicopter Flight Ibiza",
    "Helicopter Charter Ibiza",
    "Helicopter Flight Mallorca",
    "Helicopter Charter Mallorca",
    "Helicopter Flight Ibiza Formentera",
    "Helicopter Charter Ibiza Airport",
    "Helicopter Flight Mallorca to Ibiza",
    "Helicopter Charter Mallorca to Ibiza",
    "Private Helicopter Flight Ibiza",
    "Private Helicopter Charter Mallorca",
    "Helicopter Transfer Ibiza Palma Mallorca",
    "Private Helicopter Palma Menorca",
    "Helicopter Charter Ibiza Alicante",
    "Helicopter Transfer Ibiza Valencia",
    "Helicopter Shuttle Ibiza Villa Finca",
    "Airbus H135 Helicopter Balearics",
    "VIP Helicopter Charter Ibiza",
    "Private Helicopter Transfer Mallorca",
    "Helicopter Shuttle Menorca Airport",
    "Direct Helicopter Flight Formentera",
    "Helicopter Transfer Ibiza Superyacht",
    "Helicopter Charter Dalt Vila Ibiza",
    "Helicopter Flight Ibiza San Antonio",
    "Helicopter Transfer Santa Eulalia Ibiza",
    "Helicopter Charter Pollença Mallorca",
    "Helicopter Flight Andratx Mallorca",
    "Helicopter Transfer Denia Ibiza",
    "Helicopter Shuttle Ibiza Coast"
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#fafaf9] text-black py-16 border-t border-stone-200 font-sans text-sm" id="footer-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top brand grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pb-12" id="footer-brand-grid">
          
          {/* Brand col (Column 1-5) */}
          <div className="md:col-span-5 space-y-4">
            <div className="inline-flex items-center">
              <img 
                src="https://civilprom.s3.eu-north-1.amazonaws.com/HeliBaleares+Logo+Neo.svg" 
                alt="Helibaleares" 
                className="h-10 sm:h-12 object-contain"
              />
            </div>
            <p className="text-xs text-black max-w-sm leading-relaxed font-sans font-light">
              Operating premium on-demand helicopter transfers across the Balearic Archipelago and mainland Spain since 2003. Direct flight operator featuring our Airbus H135 twin-engine helicopter.
            </p>
            <div className="pt-1">
              <a 
                href="https://www.instagram.com/helibaleares" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 bg-[#721489] text-white text-xs font-sans font-medium py-2.5 px-4 rounded-full shadow-xs active:scale-98"
                id="footer-instagram-link"
              >
                <Instagram className="h-4 w-4 text-white" />
                <span>@helibaleares</span>
              </a>
            </div>
          </div>

          {/* Quick links / Bases (Column 6-8) */}
          <div className="md:col-span-3 space-y-3">
            <span className="font-sans text-xs font-semibold text-black block">
              Destinations & Bases
            </span>
            <ul className="space-y-1.5 text-xs text-black font-sans font-light">
              <li>Ibiza Airport (IBZ) & Inland Fincas</li>
              <li>Formentera Direct Shuttle</li>
              <li>Palma de Mallorca Airport (PMI) & Inland</li>
              <li>Menorca Airport (MAH) & Inland</li>
              <li>Alicante Airport (ALC)</li>
              <li>Valencia Airport (VLC)</li>
            </ul>
          </div>

          {/* Contact references (Column 9-12) */}
          <div className="md:col-span-4 space-y-3">
            <span className="font-sans text-xs font-semibold text-black block">
              Direct Flight Dispatch
            </span>
            <p className="text-xs text-black leading-relaxed font-sans font-light">
              For security, discretion, and instant flight scheduling, all transfers are operated directly by our flight crew. To reach our dispatch desk, email:
            </p>
            <a
              href="mailto:infos@helibaleares.com"
              className="text-xs font-sans text-black font-medium hover:underline transition-colors block"
            >
              infos@helibaleares.com
            </a>
          </div>

        </div>

        {/* Legal collapsible toggle */}
        <div className="bg-white border border-stone-200 rounded p-6" id="footer-legal-box">
          <button
            onClick={() => setShowLegal(!showLegal)}
            className="w-full flex items-center justify-between text-left text-xs font-sans font-light text-black transition-colors cursor-pointer"
          >
            <span>{t.legalMentionsTitle}</span>
            {showLegal ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </button>

          {showLegal && (
            <div className="mt-4 pt-4 border-t border-stone-100 text-xs text-black leading-relaxed font-sans font-light space-y-3" id="legal-content">
              <p>{t.legalMentionsContent}</p>
              <p>
                <strong>Operator Compliance:</strong> All aircraft operated by Eliance Civil HIS GROUP S.A. (AOC ES.AOC.131), including our Airbus H135 twin-engine helicopter, are fully certified under European Union Aviation Safety Agency (EASA) and Spanish AESA standards. Flight crew members undergo continuous simulator training and safety audits.
              </p>
            </div>
          )}
        </div>

        {/* Natural SEO Keywords Row */}
        <div className="text-center space-y-4 pt-8" id="footer-seo-terms-section">
          <p className="text-xs text-black max-w-2xl mx-auto leading-relaxed font-sans font-light">
            Providing bespoke, direct operator helicopter flights across the Balearic Archipelago and mainland Spain. Our direct dispatches specialize in <span className="text-black font-semibold">helicopter flight Ibiza</span>, <span className="text-black font-semibold">helicopter charter Ibiza</span>, <span className="text-black font-semibold">helicopter flight Mallorca</span>, and <span className="text-black font-semibold">helicopter charter Mallorca</span> transfers, with direct connections to Formentera, Menorca, Alicante, and Valencia.
          </p>
          <div className="pt-2 text-[11px] text-black font-sans font-light max-w-4xl mx-auto leading-relaxed text-center" id="footer-search-keywords">
            <div className="flex flex-wrap justify-center gap-x-2 gap-y-1">
              {searchTerms.map((term, index) => (
                <span key={index} className="inline-flex items-center gap-2">
                  <span className="hover:font-medium transition-all">{term}</span>
                  {index < searchTerms.length - 1 && <span className="text-stone-300 font-bold">•</span>}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-black pt-4" id="footer-copyright-bar">
          <div className="flex items-center gap-1.5 text-black font-sans">
            <Globe className="h-3.5 w-3.5 text-black" />
            <span className="font-sans font-medium">Eliance Civil HIS GROUP S.A — Since 2003!</span>
          </div>
          <span className="font-sans text-xs text-black tracking-normal">
            {t.footerRights.replace('2026', currentYear.toString())}
          </span>
        </div>

      </div>
    </footer>
  );
}
