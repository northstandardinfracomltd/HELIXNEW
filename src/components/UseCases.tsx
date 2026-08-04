import { ComponentType } from 'react';
import { TranslationContent, UseCase } from '../types';
import { Briefcase, Compass, Heart, Sparkles } from 'lucide-react';

interface UseCasesProps {
  t: TranslationContent;
}

const iconMap: Record<string, ComponentType<any>> = {
  Briefcase,
  Compass,
  Heart,
  Sparkles
};

export default function UseCases({ t }: UseCasesProps) {
  const isFr = t.navContact === "Nous Contacter";
  const isDe = t.navContact === "Flug anfragen";
  const isNl = t.navContact === "Aanvraag indienen";
  const isEs = t.navContact === "Solicitud de Vuelo";

  const localizedUseCases = (() => {
    if (isFr) {
      return [
        {
          id: "business",
          title: "Voyages d'Affaires & Vols Corporate",
          description: "Optimisez votre temps précieux. Rejoignez vos réunions stratégiques, séminaires ou yachts sans attente ni correspondance. Confidentialité absolue et connectivité haut débit à bord.",
          iconName: "Briefcase"
        },
        {
          id: "leisure",
          title: "Vols de Loisirs, Hôtels & Domaines Privés",
          description: "Bénéficiez de transferts directs depuis votre aéroport d'arrivée vers votre hôtel de luxe, résidence privée, domaine ou yacht. Évitez les encombrements des transferts terrestres.",
          iconName: "Compass"
        },
        {
          id: "repatriation",
          title: "Vols Médicaux & Rapatriements",
          description: "Évacuation sanitaire d'urgence et systèmes de transport de soins intensifs haut de gamme. Équipages médicaux certifiés disponibles 24h/24 et 7j/7.",
          iconName: "Heart"
        },
        {
          id: "events",
          title: "Événements VIP & Mariages",
          description: "Vivez un moment inoubliable. Entrées spectaculaires pour des mariages d'exception, transferts pour les Grand Prix de Formule 1, concerts VIP et prises de vue aériennes sur-mesure.",
          iconName: "Sparkles"
        }
      ];
    }
    if (isDe) {
      return [
        {
          id: "business",
          title: "Geschäfts- & Executive-Transfer",
          description: "Ihre Zeit ist wertvoll. Erreichen Sie Geschäftstermine, Yacht-Charter oder Meetings ohne Verzögerungen. Absolute Privatsphäre und Highspeed-Satellitenverbindung an Bord.",
          iconName: "Briefcase"
        },
        {
          id: "leisure",
          title: "Freizeit, Hotels & Private Residenzen",
          description: "Erleben Sie direkte Transfers zu Ihrem Luxushotel, privaten Anwesen, Beach Club oder Ihrer Yacht. Umgehen Sie den Straßenverkehr vollständig.",
          iconName: "Compass"
        },
        {
          id: "repatriation",
          title: "Medizinische & Rückholflüge",
          description: "Sofortige medizinische Evakuierung und hochmoderne Intensivpflege-Flugsysteme. Hochkoordiniertes, schnelles und zertifiziertes medizinisches Personal rund um die Uhr verfügbar.",
          iconName: "Heart"
        },
        {
          id: "events",
          title: "VIP-Events & Hochzeiten",
          description: "Schaffen Sie unvergessliche Momente. Spektakuläre Auftritte bei Hochzeiten, Transfers zum Grand Prix, VIP-Konzerten und maßgeschneiderte Luftaufnahmen.",
          iconName: "Sparkles"
        }
      ];
    }
    if (isNl) {
      return [
        {
          id: "business",
          title: "Zakelijk & Executive Vervoer",
          description: "Tijd is uw kostbaarste bezit. Arriveer zonder vertraging bij belangrijke bijeenkomsten, jachten of zakelijke afspraken. Volledige privacy en snelle satellietverbinding aan boord.",
          iconName: "Briefcase"
        },
        {
          id: "leisure",
          title: "Recreatie, Hotels & Privé-landgoederen",
          description: "Geniet van directe transfers naar uw luxe hotel, privé-residentie, strandclub of jachtdek. Vermijd de stress van het wegverkeer.",
          iconName: "Compass"
        },
        {
          id: "repatriation",
          title: "Medische & Repatriëringsvluchten",
          description: "Onmiddellijke medische evacuatie uit de lucht en hoogwaardige systemen voor kritieke zorg aan boord. Gecertificeerde medische bemanningen staan 24/7 klaar.",
          iconName: "Heart"
        },
        {
          id: "events",
          title: "VIP-Evenementen & Bruiloften",
          description: "Creëer een onvergetelijke herinnering. Spectaculaire aankomsten voor bruiloften, transfers naar Grand Prix-races, VIP-concerten en luchtfotografie op maat.",
          iconName: "Sparkles"
        }
      ];
    }
    if (isEs) {
      return [
        {
          id: "business",
          title: "Traslados Ejecutivos & Corporativos",
          description: "Su tiempo es oro. Llegue a reuniones de negocios, charters de yates o conferencias sin demoras. Privacidad total y conectividad de alta velocidad a bordo.",
          iconName: "Briefcase"
        },
        {
          id: "leisure",
          title: "Ocio, Hoteles & Residencias Privadas",
          description: "Disfrute de conexiones directas a su hotel de lujo, residencia privada, club de playa o yate. Evite por completo la congestión del tráfico terrestre.",
          iconName: "Compass"
        },
        {
          id: "repatriation",
          title: "Vuelos Médicos & Repatriación",
          description: "Evacuación médica de emergencia inmediata y sistemas de vuelo para cuidados críticos de alta gama. Tripulaciones médicas certificadas disponibles 24/7.",
          iconName: "Heart"
        },
        {
          id: "events",
          title: "Eventos VIP & Bodas",
          description: "Cree un recuerdo de ensueño. Entradas espectaculares para bodas de lujo, traslados al Gran Premio, conciertos VIP y fotografía aérea personalizada.",
          iconName: "Sparkles"
        }
      ];
    }
    // Default English
    return [
      {
        id: "business",
        title: "Business & Executive Transfer",
        description: "Time is your most valuable asset. Arrive at critical summits, yacht charters, or offshore business meetings without delays. Complete privacy and high-speed satellite connectivity on board.",
        iconName: "Briefcase"
      },
      {
        id: "leisure",
        title: "Leisure, Hotel & Estate Shuttles",
        description: "Experience direct airport-to-resort transitions. We land you closer to your luxury hotel, private residence, estate, beach club, or yacht deck, dodging ground transit congestion entirely.",
        iconName: "Compass"
      },
      {
        id: "repatriation",
        title: "Medical & Repatriation Flights",
        description: "Immediate emergency air evacuation and high-end critical care flight systems. Highly coordinated, swift, and certified medical crews available 24/7.",
        iconName: "Heart"
      },
      {
        id: "events",
        title: "VIP Events & Weddings",
        description: "Create an unforgettable memory. Spectacular grand entries for luxury wedding manifests, Grand Prix racing transfers, VIP concerts, and bespoke aerial photography.",
        iconName: "Sparkles"
      }
    ];
  })();

  return (
    <section id="usecases" className="py-24 bg-[#fafaf9] border-b border-stone-200/60 relative">
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-stone-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4" id="usecases-header">
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-black tracking-tight leading-tight cursor-default">
            {t.useCasesTitle}
          </h2>
        </div>

        {/* Use Case Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="usecases-grid">
          {localizedUseCases.map((useCase: UseCase) => {
            const IconComponent = iconMap[useCase.iconName] || Compass;
            return (
              <div
                key={useCase.id}
                className="bg-white border border-stone-200 hover:border-[#721489] transition-all duration-300 p-6 sm:p-8 flex gap-6 items-start cursor-default shadow-2xs"
                style={{ borderRadius: '13px' }}
                id={`usecase-card-${useCase.id}`}
              >
                {/* Clean Lucide Icon in Primary Brand Circle */}
                <div className="p-3 bg-[#721489] rounded-full text-white shrink-0 cursor-default shadow-xs">
                  <IconComponent className="h-5 w-5 stroke-[2]" />
                </div>

                {/* Text Body */}
                <div className="space-y-2 cursor-default">
                  <h3 className="font-serif text-lg font-normal text-black cursor-default">
                    {useCase.title}
                  </h3>
                  <p className="text-xs text-black leading-relaxed font-sans font-light cursor-default">
                    {useCase.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
