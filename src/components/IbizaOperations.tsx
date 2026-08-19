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

  const airportDescription = isFr
    ? "L'aéroport d'Ibiza (IATA : IBZ, OACI : LEIB) est l'aéroport international desservant les îles Baléares d'Ibiza et Formentera en Espagne, situé à 7 km au sud-ouest de la ville d'Ibiza. En tant que destination touristique majeure, il propose des liaisons domestiques annuelles et des dizaines de routes saisonnières. Les installations servent Ibiza et Formentera et accueillent 95 % des voyageurs de l'île. Au sein du terminal exécutif, l'équipe Helibaleares assure un accueil VIP sur mesure, un niveau maximal de sécurité et une gestion réactive de vos vols en hélicoptère."
    : isDe
    ? "Der Flughafen Ibiza (IATA: IBZ, ICAO: LEIB) ist der internationale Flughafen für die Baleareninseln Ibiza und Formentera in Spanien, 7 km südwestlich von Ibiza-Stadt. Als führende europäische Destination bietet er ganzjährige Inlandsverbindungen sowie Dutzende saisonale Strecken. Die Einrichtungen bedienen 95 % der Besucher der Inseln. Im Exekutivterminal bietet das Team von Helibaleares erstklassigen Kundenservice, Sicherheit und höchste Flexibilität für Ihre Helikopterflüge."
    : isNl
    ? "Luchthaven Ibiza (IATA: IBZ, ICAO: LEIB) is de internationale luchthaven van Ibiza en Formentera op de Balearen, 7 km ten zuidwesten van Ibiza-stad. Het bedient 95% van de bezoekers aan de eilanden. Binnen de VIP-terminal staat het Helibaleares-team klaar om u te voorzien van het hoogste niveau van service, veiligheid en discretie voor al uw helikoptervluchten."
    : isEs
    ? "El Aeropuerto de Ibiza (IATA: IBZ, ICAO: LEIB) es el aeropuerto internacional que da servicio a las Islas Baleares de Ibiza y Formentera en España, ubicado a 7 km al suroeste de la ciudad de Ibiza. Las instalaciones dan servicio tanto a Ibiza como a Formentera y son utilizadas por el 95% de los turistas que visitan estas islas. En la terminal ejecutiva, el equipo de Helibaleares ofrece la máxima atención personalizada, seguridad y rapidez para sus vuelos en helicóptero."
    : "Ibiza Airport (IATA: IBZ, ICAO: LEIB) is the international airport serving the Balearic Islands of Ibiza and Formentera in Spain located 7 km (4.3 miles) southwest of Ibiza Town. As the island is a major European holiday destination, it features both year-round domestic services and several dozen seasonal routes to cities across Europe. The airport facilities serve both Ibiza and Formentera, and are used by 95% of the tourists visiting these islands. At the executive terminal, the Helibaleares team provides bespoke VIP reception, maximum safety and security, and responsive management for your helicopter flights.";

  const teamSectionTitle = isFr
    ? "Notre Équipe Locale à Ibiza"
    : isDe
    ? "Unser lokales Team in Ibiza"
    : isNl
    ? "Ons Lokale Team in Ibiza"
    : isEs
    ? "Nuestro Equipo Local en Ibiza"
    : "Our Ibiza Local Team";

  const teamMembers = [
    {
      name: "Devon",
      role: "Booking Assistant & Concierge",
      image: "https://civilprom.s3.eu-north-1.amazonaws.com/helibaleares+Devon.jpg"
    },
    {
      name: "Ricardo",
      role: isFr
        ? "Pilote d'Hélicoptère Senior"
        : isDe
        ? "Senior Helikopterpilot"
        : isNl
        ? "Senior Helikopterpiloot"
        : isEs
        ? "Piloto Senior de Helicóptero"
        : "Senior Helicopter Pilot",
      image: "https://civilprom.s3.eu-north-1.amazonaws.com/helibaleares+ricardo.jpg"
    },
    {
      name: "Igor",
      role: isFr
        ? "Pilote d'Hélicoptère Senior (Ancien Instructeur Airbus)"
        : isDe
        ? "Senior Helikopterpilot (Ehemaliger Airbus-Instruktor)"
        : isNl
        ? "Senior Helikopterpiloot (Voormalig Airbus-Instructeur)"
        : isEs
        ? "Piloto Senior de Helicóptero (Ex Instructor de Airbus)"
        : "Senior Helicopter Pilot (Former Airbus Instructor)",
      image: "https://civilprom.s3.eu-north-1.amazonaws.com/helibaleares+igor.jpg"
    },
    {
      name: "Dana",
      role: isFr
        ? "Coordinatrice Sécurité & Maintenance"
        : isDe
        ? "Sicherheits- & Wartungskoordinatorin"
        : isNl
        ? "Veiligheids- & Onderhoudscoördinator"
        : isEs
        ? "Coordinadora de Seguridad y Mantenimiento"
        : "Safety and Maintenance Coordinator",
      image: "https://civilprom.s3.eu-north-1.amazonaws.com/helibaleares+dana.jpg"
    }
  ];

  return (
    <section 
      id="ibiza-operations" 
      className="py-20 text-white"
      style={{
        background: 'linear-gradient(45deg, #b24163, #721d37)',
        border: 'none'
      }}
    >
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-16">
          
          {/* Office Address & Overview Box */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="mb-6">
                <p className="font-serif text-xl sm:text-2xl text-white font-light leading-snug">
                  Aeropuerto de Ibiza Terminal Privada
                </p>
              </div>

              <p 
                className="leading-relaxed font-light mt-4 font-sans"
                style={{ color: '#ffffff', fontSize: '16px' }}
              >
                {airportDescription}
              </p>
            </div>
          </div>

          {/* Interactive Google Map Box (White bg, no border) */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl h-[400px] lg:h-auto min-h-[380px]" style={{ border: 'none' }}>
            <div className="w-full h-full bg-white">
              <iframe
                title="Ibiza Airport Executive Terminal Map"
                src="https://maps.google.com/maps?q=Aeropuerto%20de%20Ibiza%20Terminal%20Privada%20Bloque%20T%C3%A9cnico%20Skyvalet%2007821%20Ibiza%20Spain&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>

        {/* Ibiza Team Section */}
        <div className="pt-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="font-serif text-2xl sm:text-3xl font-light text-white tracking-tight">
              {teamSectionTitle}
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-32 h-32 sm:w-36 sm:h-36 mb-4 rounded-full overflow-hidden bg-white shadow-md" style={{ border: 'none' }}>
                  <img
                    src={member.image}
                    alt={member.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover filter grayscale contrast-[1.05] brightness-[1.14]"
                  />
                </div>
                <h4 className="font-serif text-xl font-light text-white mb-1">
                  {member.name}
                </h4>
                <p 
                  className="font-sans font-light leading-snug"
                  style={{ color: '#ffffff', fontSize: '16px' }}
                >
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
