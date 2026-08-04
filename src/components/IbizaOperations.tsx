import { Language } from '../types';
import { motion } from 'motion/react';

interface IbizaOperationsProps {
  currentLang: Language;
}

export default function IbizaOperations({ currentLang }: IbizaOperationsProps) {
  const isFr = currentLang === 'fr';
  const isDe = currentLang === 'de';
  const isNl = currentLang === 'nl';
  const isEs = currentLang === 'es';

  const sectionTitle = isFr
    ? "Notre Bureau & Centre des Opérations à Ibiza"
    : isDe
    ? "Unser Büro & Operations Center in Ibiza"
    : isNl
    ? "Ons Kantoor & Operatiecentrum in Ibiza"
    : isEs
    ? "Nuestra Oficina y Centro de Operaciones en Ibiza"
    : "Our Office & Operations Center in Ibiza";

  const addressLabel = isFr ? "Adresse du Bureau" : isDe ? "Büroadresse" : isNl ? "Kantooradres" : isEs ? "Dirección de la Oficina" : "Office Address";

  const airportDescription = isFr
    ? "L'aéroport d'Ibiza (IATA : IBZ, OACI : LEIB) est l'aéroport international desservant les îles Baléares d'Ibiza et Formentera en Espagne, situé à 7 km au sud-ouest de la ville d'Ibiza. En tant que destination touristique majeure, il propose des liaisons domestiques annuelles et des dizaines de routes saisonnières. Les installations servent Ibiza et Formentera et accueillent 95 % des voyageurs de l'île. Au sein du terminal exécutif, l'équipe Helibaleares assure un accueil VIP sur mesure, un niveau maximal de sécurité et une gestion réactive de vos vols en hélicoptère."
    : isDe
    ? "Der Flughafen Ibiza (IATA: IBZ, ICAO: LEIB) ist der internationale Flughafen für die Baleareninseln Ibiza und Formentera in Spanien, 7 km südwestlich von Ibiza-Stadt. Als führende europäische Destination bietet er ganzjährige Inlandsverbindungen sowie Dutzende saisonale Strecken. Die Einrichtungen bedienen 95 % der Besucher der Inseln. Im Exekutivterminal bietet das Team von Helibaleares erstklassigen Kundenservice, Sicherheit und höchste Flexibilität für Ihre Helikopterflüge."
    : isNl
    ? "Luchthaven Ibiza (IATA: IBZ, ICAO: LEIB) is de internationale luchthaven van Ibiza en Formentera op de Balearen, 7 km ten zuidwesten van Ibiza-stad. Het bedient 95% van de bezoekers aan de eilanden. Binnen de VIP-terminal staat het Helibaleares-team klaar om u te voorzien van het hoogste niveau van service, veiligheid en discretie voor al uw helikoptervluchten."
    : isEs
    ? "El Aeropuerto de Ibiza (IATA: IBZ, ICAO: LEIB) es el aeropuerto internacional que da servicio a las Islas Baleares de Ibiza y Formentera en España, ubicado a 7 km al suroeste de la ciudad de Ibiza. Las instalaciones dan servicio tanto a Ibiza como a Formentera y son utilizadas por el 95% de los turistas que visitan estas islas. En la terminal ejecutiva, el equipo de Helibaleares ofrece la máxima atención personalizada, seguridad y rapidez para sus vuelos en helicóptero."
    : "Ibiza Airport (IATA: IBZ, ICAO: LEIB) is the international airport serving the Balearic Islands of Ibiza and Formentera in Spain located 7 km (4.3 miles) southwest of Ibiza Town. As the island is a major European holiday destination, it features both year-round domestic services and several dozen seasonal routes to cities across Europe. The airport facilities serve both Ibiza and Formentera, and are used by 95% of the tourists visiting these islands. At the executive terminal, the Helibaleares team provides bespoke VIP reception, maximum safety and security, and responsive management for your helicopter flights.";

  return (
    <section id="ibiza-operations" className="py-20 bg-black text-stone-100 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title without tagline and subtext */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-tight"
          >
            {sectionTitle}
          </motion.h2>
        </div>

        {/* Office Address & Overview (Left)  +  Google Maps (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Office Address & Overview Box */}
          <div className="bg-neutral-900/90 border border-neutral-800 rounded-2xl p-6 sm:p-8 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="mb-6">
                <h3 className="text-xs uppercase tracking-wider text-white font-sans font-semibold mb-1">
                  {addressLabel}
                </h3>
                <p className="font-serif text-xl text-white font-medium leading-snug">
                  Aeropuerto de Ibiza Terminal Privada
                </p>
                <p className="text-stone-300 text-sm font-sans mt-1">
                  Bloque Técnico / Skyvalet, 07821 Ibiza, Spain
                </p>
              </div>

              <p className="text-white text-xs sm:text-sm leading-relaxed font-light mt-4">
                {airportDescription}
              </p>
            </div>
          </div>

          {/* Interactive Google Map Box */}
          <div className="bg-neutral-900/90 border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl h-[400px] lg:h-auto min-h-[380px]">
            <div className="w-full h-full bg-black">
              <iframe
                title="Ibiza Airport Executive Terminal Map"
                src="https://maps.google.com/maps?q=Aeropuerto%20de%20Ibiza%20Terminal%20Privada%20Bloque%20T%C3%A9cnico%20Skyvalet%2007821%20Ibiza%20Spain&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(0.15) contrast(1.1)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
