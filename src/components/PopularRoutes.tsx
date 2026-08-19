import { Language } from '../types';
import { motion } from 'motion/react';

interface PopularRoutesProps {
  currentLang: Language;
}

export default function PopularRoutes({ currentLang }: PopularRoutesProps) {
  const isFr = currentLang === 'fr';
  const isDe = currentLang === 'de';
  const isNl = currentLang === 'nl';
  const isEs = currentLang === 'es';

  const sectionTitle = isFr
    ? "Liaisons & Trajets Inter-Îles Principaux"
    : isDe
    ? "Beliebteste Insel-zu-Insel Helikopter-Routen"
    : isNl
    ? "Populaire Inter-Eiland Helikopterroutes"
    : isEs
    ? "Rutas e Itinerarios Principales entre Islas"
    : "Popular Inter-Island Helicopter Routes";

  const sectionSubtitle = isFr
    ? "Vols directs en hélicoptère entre Majorque, Ibiza, Formentera et Minorque avec notre Airbus H135 bimoteur."
    : isDe
    ? "Direkte Hubschrauberflüge zwischen Mallorca, Ibiza, Formentera und Menorca mit unserem zweimotorigen Airbus H135."
    : isNl
    ? "Directe helikoptervluchten tussen Mallorca, Ibiza, Formentera en Menorca met onze Airbus H135."
    : isEs
    ? "Vuelos directos en helicóptero entre Mallorca, Ibiza, Formentera y Menorca con nuestro Airbus H135 bimotor."
    : "Direct helicopter flights connecting Mallorca, Ibiza, Formentera, and Menorca with our twin-engine Airbus H135.";

  const routes = [
    {
      id: "mallorca-ibiza",
      origin: isFr ? "Majorque (Palma - PMI)" : isDe ? "Mallorca (Palma - PMI)" : isNl ? "Mallorca (Palma - PMI)" : isEs ? "Mallorca (Palma - PMI)" : "Mallorca (Palma - PMI)",
      destination: "Ibiza (IBZ / Private Helipads)",
      title: isFr
        ? "Vol Hélicoptère Majorque - Ibiza"
        : isDe
        ? "Hubschrauberflug Mallorca nach Ibiza"
        : isNl
        ? "Helikoptervlucht Mallorca naar Ibiza"
        : isEs
        ? "Vuelo en Helicóptero Mallorca a Ibiza"
        : "Helicopter Flight & Charter Mallorca to Ibiza",
      duration: "35 MIN",
      seoBadge: "Popular Route #1",
      description: isFr
        ? "Survolez la mer Méditerranée en seulement 35 minutes de vol direct entre l'aéroport exécutif de Palma de Majorque (PMI) et le terminal VIP d'Ibiza (IBZ) ou votre villa privée. Évitez les contraintes de ferrys et d'aéroports grâce à notre hélicoptère bimoteur Airbus H135."
        : isDe
        ? "Überfliegen Sie das Mittelmeer in nur 35 Minuten Direktflug zwischen dem Exekutivterminal Palma de Mallorca (PMI) und Ibiza (IBZ) oder Ihrer privaten Villa. Vermeiden Sie Fähren und Wartezeiten mit unserem zweimotorigen Airbus H135."
        : isNl
        ? "Vlieg over de Middellandse Zee in slechts 35 minuten rechtstreekse vlucht tussen de executive terminal op Palma de Mallorca (PMI) en Ibiza (IBZ) of uw privé villa. Vermijd de veerboot en luchthavendrukte."
        : isEs
        ? "Cruce el mar Mediterráneo en solo 35 minutos de vuelo directo entre la terminal ejecutiva de Palma de Mallorca (PMI) y el terminal VIP de Ibiza (IBZ) o su villa privada. Evite ferrys y esperas con nuestro helicóptero bimotor Airbus H135."
        : "Cross the Mediterranean Sea in a 35-minute direct flight between Palma de Mallorca Executive Terminal (PMI) and Ibiza VIP Terminal (IBZ) or your private villa. Premier helicopter flight and helicopter charter connection between Mallorca and Ibiza with our Airbus H135 twin-engine helicopter.",
      image: "https://civilprom.s3.eu-north-1.amazonaws.com/Helibaleares+Image+Mallorca.jpg",
      tag: "PMI ➔ IBZ"
    },
    {
      id: "ibiza-formentera",
      origin: "Ibiza (IBZ Airport)",
      destination: "Formentera (Private Landings)",
      title: isFr
        ? "Navette Hélicoptère Ibiza - Formentera"
        : isDe
        ? "Helikopter-Shuttle Ibiza nach Formentera"
        : isNl
        ? "Helikopter Shuttle Ibiza naar Formentera"
        : isEs
        ? "Lanzadera en Helicóptero Ibiza a Formentera"
        : "Helicopter Shuttle Ibiza to Formentera",
      duration: "12 MIN",
      seoBadge: "Fastest Transfer",
      description: isFr
        ? "Le transfert le plus rapide et le plus confortable pour rejoindre Formentera depuis l'aéroport d'Ibiza. Seul 12 minutes de vol panoramique au-dessus des eaux turquoise d'Es Freus."
        : isDe
        ? "Der schnellste und komfortabelste Transfer nach Formentera direkt vom Flughafen Ibiza. Nur 12 Minuten Panoramaflug über das türkisblaue Meer von Es Freus."
        : isNl
        ? "De snelste en meest comfortabele transfer naar Formentera rechtstreeks vanaf de luchthaven van Ibiza. Slechts 12 minuten panoramische vlucht over turquoise wateren."
        : isEs
        ? "El traslado más rápido y cómodo a Formentera directamente desde el aeropuerto de Ibiza. Solo 12 minutos de vuelo panorámico sobre las aguas turquesas de Es Freus."
        : "The fastest and most comfortable transfer to Formentera directly from Ibiza Airport. Just 12 scenic minutes flying over the turquoise waters of Es Freus.",
      image: "https://civilprom.s3.eu-north-1.amazonaws.com/Helibaleares+Image+Ibiza.jpg",
      tag: "IBZ ➔ FORMENTERA"
    },
    {
      id: "mallorca-menorca",
      origin: isFr ? "Majorque (PMI)" : "Mallorca (PMI)",
      destination: isFr ? "Minorque (MAH / Domaines)" : "Menorca (MAH / Private Estates)",
      title: isFr
        ? "Vol Hélicoptère Majorque - Minorque"
        : isDe
        ? "Hubschrauberflug Mallorca nach Menorca"
        : isNl
        ? "Helikoptervlucht Mallorca naar Menorca"
        : isEs
        ? "Vuelo en Helicóptero Mallorca a Menorca"
        : "Helicopter Flight Mallorca to Menorca",
      duration: "25 MIN",
      seoBadge: "Direct Inter-Island",
      description: isFr
        ? "Reliez Majorque à Minorque en 25 minutes de vol sur-mesure. Accès direct aux domaines préservés et héliports privés de Minorque."
        : isDe
        ? "Verbinden Sie Mallorca mit Menorca in 25 Minuten maßgeschneidertem Flug. Direkter Zugang zu privaten Anwesen auf Menorca."
        : isNl
        ? "Verbind Mallorca met Menorca in 25 minuten vliegen op maat. Directe toegang tot privé landgoederen op Menorca."
        : isEs
        ? "Conecte Mallorca con Menorca en 25 minutos de vuelo a medida. Acceso directo a propiedades privadas en Menorca."
        : "Connect Mallorca to Menorca in a 25-minute tailored flight. Direct access to preserved private estates and helipads in Menorca.",
      image: "https://civilprom.s3.eu-north-1.amazonaws.com/Helibaleares+Image+Menorca.jpg",
      tag: "PMI ➔ MAH"
    },
    {
      id: "mainland-balearics",
      origin: "Mainland Spain (Alicante ALC / Valencia VLC)",
      destination: "Ibiza & Mallorca",
      title: isFr
        ? "Liaison Continent - Îles Baléares"
        : isDe
        ? "Verbindung Festland - Balearen"
        : isNl
        ? "Verbinding Vasteland - Balearen"
        : isEs
        ? "Conexión Península - Islas Baleares"
        : "Mainland Coast to Balearic Islands Flight",
      duration: "45-55 MIN",
      seoBadge: "Mainland Connection",
      description: isFr
        ? "Vol direct en hélicoptère reliant la côte continentale espagnole (Alicante / Valence) directement aux îles d'Ibiza et de Majorque."
        : isDe
        ? "Direkter Hubschrauberflug vom spanischen Festland (Alicante / Valencia) direkt nach Ibiza und Mallorca."
        : isNl
        ? "Directe helikoptervlucht die de Spaanse kust (Alicante / Valencia) rechtstreeks verbindt met Ibiza en Mallorca."
        : isEs
        ? "Vuelo directo en helicóptero que conecta la costa peninsular (Alicante / Valencia) directamente con Ibiza y Mallorca."
        : "Direct helicopter charter connecting mainland coastal airports (Alicante / Valencia) directly to Ibiza and Mallorca.",
      image: "https://civilprom.s3.eu-north-1.amazonaws.com/Helibaleares+image+Costa+Blanca.jpg",
      tag: "MAINLAND ➔ BALEARICS"
    }
  ];

  const scrollToContact = (routeName: string) => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offset = 80;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // Optionally update route field in form
      const routeInput = document.getElementById('contact-route-input') as HTMLInputElement;
      if (routeInput) {
        routeInput.value = routeName;
      }
    }
  };

  const btnText = isFr
    ? "Réserver ce vol"
    : isDe
    ? "Flug anfragen"
    : isNl
    ? "Boek deze vlucht"
    : isEs
    ? "Reservar este vuelo"
    : "Book this Flight";

  return (
    <section 
      id="popular-routes" 
      className="py-20 text-white relative overflow-hidden"
      style={{
        background: 'linear-gradient(45deg, #b24163, #721d37)',
        border: 'none'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-tight"
          >
            {sectionTitle}
          </motion.h2>
        </div>

        {/* Routes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {routes.map((route) => (
            <div
              key={route.id}
              className="overflow-hidden flex flex-col justify-between shadow-xl"
              style={{ 
                borderRadius: '16px',
                border: 'none',
                background: '#ffffff',
              }}
            >
              <div className="relative h-56 overflow-hidden bg-stone-100">
                <img
                  src={route.image}
                  alt={route.title}
                  loading="lazy"
                  className="w-full h-full object-cover brightness-[0.95] contrast-[1.05]"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-serif text-xl sm:text-2xl text-black font-normal">
                    {route.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-sans font-light pt-1">
                    {route.description}
                  </p>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => scrollToContact(`${route.title} (${route.duration})`)}
                    className="w-full bg-black hover:bg-stone-800 text-white border-none py-3.5 px-4 font-sans font-medium transition-all duration-200 flex items-center justify-center shadow-md cursor-pointer active:scale-98"
                    style={{ borderRadius: '11px', fontSize: '15px' }}
                  >
                    <span>{btnText}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

