import { Users, Gauge, Compass } from 'lucide-react';
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
                    <Users className="h-4 w-4 text-[#721489]" />
                    <span>{t.fleetPax}</span>
                  </span>
                  <span className="font-semibold text-black">{h135.passengers} Passengers</span>
                </div>
                <div className="flex items-center justify-between text-xs sm:text-sm font-sans text-stone-700">
                  <span className="flex items-center gap-2">
                    <Gauge className="h-4 w-4 text-[#721489]" />
                    <span>{t.fleetSpeed}</span>
                  </span>
                  <span className="font-semibold text-black">{h135.speed}</span>
                </div>
                <div className="flex items-center justify-between text-xs sm:text-sm font-sans text-stone-700">
                  <span className="flex items-center gap-2">
                    <Compass className="h-4 w-4 text-[#721489]" />
                    <span>{t.fleetRange}</span>
                  </span>
                  <span className="font-semibold text-black">{h135.range}</span>
                </div>
              </div>

              <button
                onClick={() => onSelectAircraft(h135.name)}
                className="w-full bg-[#721489] hover:bg-[#5b106e] text-white font-sans font-medium py-3.5 px-6 rounded-xl transition-all duration-200 cursor-pointer text-base active:scale-98 shadow-sm"
              >
                {t.fleetRequestBtn}
              </button>
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
