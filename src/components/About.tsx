import { TranslationContent } from '../types';

interface AboutProps {
  t: TranslationContent;
}

export default function About({ t }: AboutProps) {
  const isFr = t.navContact === "Nous Contacter";
  const isDe = t.navContact === "Flug anfragen";
  const isNl = t.navContact === "Aanvraag indienen";
  const isEs = t.navContact === "Solicitud de Vuelo";

  const routesSectionTitle = isFr 
    ? "Liaisons Populaires à la Demande" 
    : isDe ? "Beliebte Strecken auf Abruf" 
    : isNl ? "Populaire verbindingen op aanvraag" 
    : isEs ? "Rutas Populares Bajo Demanda" 
    : "Popular On-Demand Routes";

  const routeTypes = {
    helicopter: isFr ? "Hélicoptère" : isDe ? "Hubschrauber" : isNl ? "Helikopter" : isEs ? "Helicóptero" : "Helicopter",
    jet: isFr ? "Jet Privé" : isDe ? "Privatjet" : isNl ? "Privéjet" : isEs ? "Jet Privado" : "Private Jet",
    hybrid: isFr ? "Hélicoptère & Jet" : isDe ? "Hubschrauber & Jet" : isNl ? "Helikopter & Jet" : isEs ? "Helicóptero y Jet" : "Helicopter & Jet"
  };

  const getPriceText = (amount: number) => {
    if (isFr) return `Dès ${amount}€/siège`;
    if (isDe) return `Ab ${amount}€/Sitz`;
    if (isNl) return `Vanaf ${amount}€/stoel`;
    if (isEs) return `Desde ${amount}€/asiento`;
    return `From ${amount}€/seat`;
  };

  const routes = [
    { from: "Ibiza", fromIata: "IBZ", to: "Formentera", toIata: "FOR", duration: isFr ? "12 min" : "12 mins", type: routeTypes.helicopter, price: getPriceText(220) },
    { from: "Mallorca", fromIata: "PMI", to: "Ibiza", toIata: "IBZ", duration: isFr ? "35 min" : "35 mins", type: routeTypes.helicopter, price: getPriceText(390) },
    { from: "Palma", fromIata: "PMI", to: "Menorca", toIata: "MAH", duration: isFr ? "30 min" : "30 mins", type: routeTypes.helicopter, price: getPriceText(340) },
    { from: "Alicante", fromIata: "ALC", to: "Ibiza", toIata: "IBZ", duration: isFr ? "45 min" : "45 mins", type: routeTypes.helicopter, price: getPriceText(420) },
    { from: "Valencia", fromIata: "VLC", to: "Ibiza", toIata: "IBZ", duration: isFr ? "45 min" : "45 mins", type: routeTypes.helicopter, price: getPriceText(430) },
    { from: "Ibiza", fromIata: "IBZ", to: isFr ? "Finca / Villa" : "Villa / Estate", toIata: "HELI", duration: isFr ? "10 min" : "10 mins", type: routeTypes.helicopter, price: getPriceText(190) },
  ];

  return (
    <section id="about" className="py-20 bg-white border-b border-stone-200/60 relative overflow-hidden select-none">
      {/* Background decoration */}
      <div className="absolute right-0 top-0 w-80 h-80 bg-stone-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-start w-full">
          
          {/* Text content (40% desktop) */}
          <div className="w-full lg:w-[40%] lg:shrink-0 space-y-6" id="about-text-content">
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-black tracking-tight leading-tight">
              {t.aboutTitle}
            </h2>
            
            <div className="space-y-4 text-black font-sans font-light text-base leading-relaxed">
              <p>{t.aboutP1}</p>
              <p>{t.aboutP2}</p>

              {/* Balearic Flag & Operating Region */}
              <div className="pt-2 flex items-start sm:items-center gap-3 border border-stone-200/80 p-3.5 rounded-xl">
                <img 
                  src="https://civilprom.s3.eu-north-1.amazonaws.com/Flag+Baleares.svg" 
                  alt="Drapeau Baléares" 
                  className="h-8 sm:h-10 w-auto object-contain shrink-0 rounded-2xs mt-0.5 sm:mt-0 shadow-2xs"
                />
                <p className="text-xs sm:text-sm text-stone-900 font-sans font-normal leading-relaxed">
                  {t.aboutLocationText}
                </p>
              </div>
            </div>
          </div>

          {/* Popular Routes list (60% desktop) */}
          <div className="w-full lg:w-[60%] lg:shrink-0 space-y-4 cursor-default" id="about-popular-routes">
            <span className="font-serif text-lg text-black block font-medium cursor-default">
              {routesSectionTitle}
            </span>

            {/* Hidden SEO Schema & Text for Search Engines like Google */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "OfferCatalog",
                  "name": "Prix & Tarifs Vols Hélicoptère Baléares Direct Opérateur",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Vol Hélicoptère Ibiza Formentera (IBZ - FOR)",
                        "description": "Vol direct hélicoptère Ibiza Formentera. Durée 12 minutes.",
                        "provider": { "@type": "Organization", "name": "Helibaleares S.A." }
                      },
                      "price": "220.00",
                      "priceCurrency": "EUR"
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Vol Hélicoptère Mallorca Ibiza (PMI - IBZ)",
                        "description": "Prix vol hélicoptère Mallorca Ibiza sur-mesure direct opérateur sans frais d'intermédiaire. Durée 35 minutes.",
                        "provider": { "@type": "Organization", "name": "Helibaleares S.A." }
                      },
                      "price": "390.00",
                      "priceCurrency": "EUR"
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Vol Hélicoptère Palma Menorca (PMI - MAH)",
                        "description": "Navette hélicoptère directe Palma de Majorque à Minorque. Durée 30 minutes.",
                        "provider": { "@type": "Organization", "name": "Helibaleares S.A." }
                      },
                      "price": "340.00",
                      "priceCurrency": "EUR"
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Vol Hélicoptère Ibiza Alicante (IBZ - ALC)",
                        "description": "Prix vol hélicoptère Ibiza Alicante direct opérateur.",
                        "provider": { "@type": "Organization", "name": "Helibaleares S.A." }
                      },
                      "price": "420.00",
                      "priceCurrency": "EUR"
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Vol Hélicoptère Valencia Ibiza (VLC - IBZ)",
                        "description": "Chárter direct hélicoptère Valence Ibiza.",
                        "provider": { "@type": "Organization", "name": "Helibaleares S.A." }
                      },
                      "price": "430.00",
                      "priceCurrency": "EUR"
                    }
                  ]
                })
              }}
            />

            <div className="sr-only" aria-hidden="true">
              <h3>Prix vol hélicoptère Mallorca Ibiza, Formentera et Alicante</h3>
              <p>Découvrez les tarifs de nos vols en hélicoptère direct opérateur. Prix vol hélicoptère Ibiza Formentera dès 220€ par siège, Mallorca Ibiza dès 390€, Ibiza Alicante dès 420€, Valence Ibiza dès 430€.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 cursor-default">
              {routes.map((route, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3.5 transition-all duration-200 cursor-default"
                  style={{
                    border: '1px solid #eaecef',
                    borderRadius: '13px',
                    background: '#f2f4f6',
                    boxShadow: 'none'
                  }}
                >
                  <div className="space-y-1 cursor-default">
                    <div className="flex items-center gap-1.5 text-[14px] font-sans font-medium text-black cursor-default">
                      <span>{route.from} ({route.fromIata})</span>
                      <span>→</span>
                      <span>{route.to} ({route.toIata})</span>
                    </div>
                    <div className="text-[11px] font-sans font-light text-black cursor-default">
                      {route.type}
                    </div>
                  </div>
                  <div className="text-right flex flex-col items-end gap-1.5 shrink-0 ml-2 cursor-default">
                    {/* Duration pill in Secondary 1 (#f2131e) */}
                    <span
                      className="font-sans px-3 py-1 rounded-full inline-block cursor-default font-medium whitespace-nowrap text-white text-[12px]"
                      style={{ border: 'none', background: '#f2131e' }}
                    >
                      {route.duration}
                    </span>
                    {/* Price pill in Primary (#721489) */}
                    <span
                      className="font-sans px-3.5 py-1 rounded-full inline-block whitespace-nowrap cursor-default font-medium text-white text-[12px]"
                      style={{ border: 'none', background: '#721489' }}
                    >
                      {route.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

