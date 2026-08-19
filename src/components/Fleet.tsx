import { Users, Gauge, Compass, ExternalLink } from 'lucide-react';
import { TranslationContent, AircraftInfo, Language } from '../types';
import { getAircraftData } from '../translations';

interface FleetProps {
  t: TranslationContent;
  currentLang?: Language;
  onSelectAircraft: (aircraftName: string) => void;
}

export default function Fleet({ t, currentLang, onSelectAircraft }: FleetProps) {
  const isFr = t.navContact === "Nous Contacter";
  const isDe = t.navContact === "Flug anfragen";
  const isNl = t.navContact === "Aanvraag indienen";
  const isEs = t.navContact === "Solicitud de Vuelo";

  const resolvedLang: Language = currentLang || (isFr ? 'fr' : isDe ? 'de' : isNl ? 'nl' : isEs ? 'es' : 'en');
  const aircraftList = getAircraftData(resolvedLang);
  const h135 = aircraftList[0];

  const interiorPhoto = h135?.insideImageUrl || "https://civilprom.s3.eu-north-1.amazonaws.com/HELIBALEARES++H135+Inside.jpg";
  const fretBoxPhoto = h135?.fretBoxImageUrl || "https://civilprom.s3.eu-north-1.amazonaws.com/HELIBALEARES+H135+FretBox.jpg";

  return (
    <section id="fleet" className="py-24 bg-stone-50 border-b border-stone-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4" id="fleet-header">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-black tracking-tight leading-tight">
            {t.fleetTitle}
          </h2>
          <p className="text-sm sm:text-base text-stone-600 font-sans font-light leading-relaxed">
            {t.fleetSubtitle}
          </p>
        </div>

        {/* Aircraft Showcase Card */}
        <div className="bg-white border border-stone-200 rounded-2xl overflow-hidden shadow-sm" id="fleet-showcase">
          {/* Main Hero View */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Image Column */}
            <div className="lg:col-span-7 relative min-h-[320px] sm:min-h-[400px] overflow-hidden bg-stone-900">
              <img
                src={h135.imageUrl}
                alt={`${h135.name} - Helibaleares Twin Engine Helicopter`}
                loading="lazy"
                className="w-full h-full object-cover filter brightness-[0.95]"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Information Column */}
            <div className="lg:col-span-5 p-6 sm:p-8 md:p-10 flex flex-col justify-between space-y-6">
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-black">
                  {h135.name}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 font-sans font-light mt-3 leading-relaxed">
                  {h135.seoText}
                </p>
              </div>

              {/* Specs Box */}
              <div className="bg-stone-50 border border-stone-200 rounded-xl p-5 space-y-3.5">
                <div className="flex items-center justify-between text-xs sm:text-sm font-sans text-stone-700">
                  <span className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-[rgb(147_41_74)]" />
                    <span>{t.fleetPax}</span>
                  </span>
                  <span className="font-semibold text-black">{h135.passengers} Passengers</span>
                </div>
                <div className="flex items-center justify-between text-xs sm:text-sm font-sans text-stone-700">
                  <span className="flex items-center gap-2">
                    <Gauge className="h-4 w-4 text-[rgb(147_41_74)]" />
                    <span>{t.fleetSpeed}</span>
                  </span>
                  <span className="font-semibold text-black">{h135.speed}</span>
                </div>
                <div className="flex items-center justify-between text-xs sm:text-sm font-sans text-stone-700">
                  <span className="flex items-center gap-2">
                    <Compass className="h-4 w-4 text-[rgb(147_41_74)]" />
                    <span>{t.fleetRange}</span>
                  </span>
                  <span className="font-semibold text-black">{h135.range}</span>
                </div>
              </div>

              <div className="flex flex-col space-y-2.5">
                <button
                  onClick={() => onSelectAircraft(h135.name)}
                  className="w-full bg-[rgb(147_41_74)] hover:bg-[rgb(122_34_61)] text-white font-sans font-medium py-3.5 px-6 rounded-xl transition-all duration-200 cursor-pointer text-base active:scale-98 shadow-sm"
                >
                  {t.fleetRequestBtn}
                </button>
                <a
                  href="https://www.airbus.com/en/products-services/helicopters/civil-helicopters/h135"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-stone-100 hover:bg-stone-200 text-stone-800 border border-stone-300 font-sans font-medium py-3 px-6 rounded-xl transition-all duration-200 cursor-pointer text-sm active:scale-98 text-center flex items-center justify-center gap-2"
                  id="airbus-h135-info-btn"
                >
                  <ExternalLink className="h-4 w-4 text-[rgb(147_41_74)]" />
                  <span>Airbus H135 Infos</span>
                </a>
              </div>
            </div>
          </div>

          {/* Popular On-Demand Routes (6 Sub-Divs) */}
          <div className="border-t border-stone-200 p-6 sm:p-8 md:p-10 bg-white" id="fleet-popular-routes">
            <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
              <h4 className="text-lg sm:text-xl font-serif text-black font-normal tracking-wide">
                {isFr ? "Liaisons Populaires à la Demande" : isDe ? "Beliebte Strecken auf Abruf" : isNl ? "Populaire Verbindingen op Aanvraag" : isEs ? "Rutas Populares Bajo Demanda" : "Popular On-Demand Routes"}
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 font-sans font-light">
                {isFr ? "Tarifs directs opérateur sans frais d'intermédiaire pour nos liaisons régulières en Airbus H135." : isDe ? "Direkte Betreiberpreise ohne Zwischenhändler für unsere regulären Airbus H135-Verbindungen." : isNl ? "Directe operatortarieven zonder tussenpersonen voor onze vaste Airbus H135-routes." : isEs ? "Precios directos de operador sin intermediarios para nuestras rutas habituales en Airbus H135." : "Direct operator pricing without broker markups for our regular Airbus H135 connections."}
              </p>
            </div>

            {/* Hidden SEO Schema for Search Engines */}
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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {[
                { from: "Ibiza", fromIata: "IBZ", to: "Formentera", toIata: "FOR", duration: isFr ? "12 min" : "12 mins", type: isFr ? "Hélicoptère" : "Helicopter", price: isFr ? "Dès 220€/siège" : isDe ? "Ab 220€/Sitz" : isNl ? "Vanaf 220€/stoel" : isEs ? "Desde 220€/asiento" : "From 220€/seat", routeKey: "Ibiza (IBZ) → Formentera (FOR)" },
                { from: "Mallorca", fromIata: "PMI", to: "Ibiza", toIata: "IBZ", duration: isFr ? "35 min" : "35 mins", type: isFr ? "Hélicoptère" : "Helicopter", price: isFr ? "Dès 390€/siège" : isDe ? "Ab 390€/Sitz" : isNl ? "Vanaf 390€/stoel" : isEs ? "Desde 390€/asiento" : "From 390€/seat", routeKey: "Mallorca (PMI) → Ibiza (IBZ)" },
                { from: "Palma", fromIata: "PMI", to: "Menorca", toIata: "MAH", duration: isFr ? "30 min" : "30 mins", type: isFr ? "Hélicoptère" : "Helicopter", price: isFr ? "Dès 340€/siège" : isDe ? "Ab 340€/Sitz" : isNl ? "Vanaf 340€/stoel" : isEs ? "Desde 340€/asiento" : "From 340€/seat", routeKey: "Palma (PMI) → Menorca (MAH)" },
                { from: "Alicante", fromIata: "ALC", to: "Ibiza", toIata: "IBZ", duration: isFr ? "45 min" : "45 mins", type: isFr ? "Hélicoptère" : "Helicopter", price: isFr ? "Dès 420€/siège" : isDe ? "Ab 420€/Sitz" : isNl ? "Vanaf 420€/stoel" : isEs ? "Desde 420€/asiento" : "From 420€/seat", routeKey: "Alicante (ALC) → Ibiza (IBZ)" },
                { from: "Valencia", fromIata: "VLC", to: "Ibiza", toIata: "IBZ", duration: isFr ? "45 min" : "45 mins", type: isFr ? "Hélicoptère" : "Helicopter", price: isFr ? "Dès 430€/siège" : isDe ? "Ab 430€/Sitz" : isNl ? "Vanaf 430€/stoel" : isEs ? "Desde 430€/asiento" : "From 430€/seat", routeKey: "Valencia (VLC) → Ibiza (IBZ)" },
                { from: "Ibiza", fromIata: "IBZ", to: isFr ? "Finca / Villa" : "Villa / Estate", toIata: "HELI", duration: isFr ? "10 min" : "10 mins", type: isFr ? "Hélicoptère" : "Helicopter", price: isFr ? "Dès 190€/siège" : isDe ? "Ab 190€/Sitz" : isNl ? "Vanaf 190€/stoel" : isEs ? "Desde 190€/asiento" : "From 190€/seat", routeKey: "Ibiza (IBZ) → Villa / Helipad" },
              ].map((route, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      const offset = 80;
                      const elementPosition = contactSection.getBoundingClientRect().top;
                      const offsetPosition = elementPosition + window.pageYOffset - offset;
                      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                      const routeInput = document.getElementById('contact-route-input') as HTMLInputElement;
                      if (routeInput) {
                        routeInput.value = `${route.routeKey} (${route.duration})`;
                      }
                    }
                  }}
                  className="flex items-center justify-between p-3.5 transition-all duration-200 cursor-pointer hover:border-stone-400 hover:shadow-xs active:scale-98"
                  style={{
                    border: '1px solid #eaecef',
                    borderRadius: '13px',
                    background: '#f8fafc',
                  }}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5 text-[14px] font-sans font-medium text-black">
                      <span>{route.from} ({route.fromIata})</span>
                      <span>→</span>
                      <span>{route.to} ({route.toIata})</span>
                    </div>
                    <div className="text-[11px] font-sans font-light text-stone-500">
                      {route.type}
                    </div>
                  </div>
                  <div className="text-right flex flex-col items-end gap-1.5 shrink-0 ml-2">
                    {/* Duration pill */}
                    <span
                      className="font-sans px-2.5 py-0.5 rounded-full inline-block font-medium whitespace-nowrap text-white text-[11px]"
                      style={{ border: 'none', background: '#000000' }}
                    >
                      {route.duration}
                    </span>
                    {/* Price pill */}
                    <span
                      className="font-sans px-3 py-0.5 rounded-full inline-block whitespace-nowrap font-medium text-white text-[11px]"
                      style={{ border: 'none', background: 'rgb(147 41 74)' }}
                    >
                      {route.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Two-Photo Presentation: Cabin Interior & Luggage Box */}
          <div className="border-t border-stone-200 p-6 sm:p-8 bg-stone-50/50">
            <h4 className="text-sm font-sans font-semibold text-stone-900 uppercase tracking-wider mb-6 text-center">
              Onboard Experience & Amenities
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Photo 1: Interior */}
              <div className="bg-white border border-stone-200 rounded-xl overflow-hidden shadow-2xs group">
                <div className="relative h-64 sm:h-72 overflow-hidden bg-stone-100">
                  <img
                    src={interiorPhoto}
                    alt="Airbus H135 Luxury VIP Leather Interior"
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-4 sm:p-5">
                  <div className="flex items-center gap-2 text-black font-serif text-lg font-normal mb-1">
                    <h5>VIP Cabin Interior</h5>
                  </div>
                  <p className="text-xs text-stone-600 font-sans font-light leading-relaxed">
                    Spacious air-conditioned leather seating configuration with direct acoustic dampening and panoramic sea view windows.
                  </p>
                </div>
              </div>

              {/* Photo 2: Cargo Box */}
              <div className="bg-white border border-stone-200 rounded-xl overflow-hidden shadow-2xs group">
                <div className="relative h-64 sm:h-72 overflow-hidden bg-stone-100">
                  <img
                    src={fretBoxPhoto}
                    alt="Airbus H135 Dedicated Luggage Compartment"
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-4 sm:p-5">
                  <div className="flex items-center gap-2 text-black font-serif text-lg font-normal mb-1">
                    <h5>Luggage Compartment & Cargo Box</h5>
                  </div>
                  <p className="text-xs text-stone-600 font-sans font-light leading-relaxed">
                    Generous rear baggage compartment specifically designed to accommodate luxury suitcases, golf bags, and carry-on luggage securely.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
