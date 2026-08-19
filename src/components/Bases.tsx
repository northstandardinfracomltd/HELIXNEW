import { TranslationContent, BaseInfo, Language } from '../types';
import { getBasesData } from '../translations';

interface BasesProps {
  t: TranslationContent;
  currentLang?: Language;
}

export default function Bases({ t, currentLang }: BasesProps) {
  const isFr = t.navContact === "Nous Contacter";
  const isDe = t.navContact === "Flug anfragen";
  const isNl = t.navContact === "Aanvraag indienen";
  const isEs = t.navContact === "Solicitud de Vuelo";

  const resolvedLang: Language = currentLang || (isFr ? 'fr' : isDe ? 'de' : isNl ? 'nl' : isEs ? 'es' : 'en');
  const bases = getBasesData(resolvedLang);

  const contactText = isFr 
    ? "Contactez-nous" 
    : isDe ? "Kontaktieren Sie uns" 
    : isNl ? "Neem contact op" 
    : isEs ? "Contáctenos" 
    : "Contact Us";

  const mapUrls: Record<string, string> = {
    'ibiza-airport': 'https://maps.app.goo.gl/8ZWPZMRm3C8qGjw99',
    'ibiza-inland': 'https://maps.app.goo.gl/8ZWPZMRm3C8qGjw99',
    'formentera': 'https://maps.app.goo.gl/gfSSWwqnAG1M5qEe8',
    'palma-airport': 'https://maps.app.goo.gl/7uh7VC1waT7hbF756',
    'palma-inland': 'https://maps.app.goo.gl/7uh7VC1waT7hbF756',
    'menorca-airport': 'https://www.airbus.com/en/products-services/helicopters/civil-helicopters/h135',
    'menorca-inland': 'https://www.airbus.com/en/products-services/helicopters/civil-helicopters/h135',
    'alicante-airport': 'https://maps.app.goo.gl/Dq1UaohW7KfQSVXB7',
    'valencia-airport': 'https://maps.app.goo.gl/1BeSDgP7HHKXkyZ38',
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offset = 80;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="bases" className="py-24 bg-[#fafaf9] border-b border-stone-200/60 relative">
      <div className="absolute left-1/4 bottom-0 w-96 h-96 bg-stone-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4" id="bases-header">
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-black tracking-tight leading-tight cursor-default">
            {t.basesTitle}
          </h2>
          <p className="text-sm sm:text-base text-stone-600 font-sans font-light leading-relaxed">
            {t.basesSubtitle}
          </p>
        </div>

        {/* Bases Card Grid - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="bases-grid">
          {bases.map((base: BaseInfo) => (
            <div
              key={base.id}
              className="bg-white border border-stone-200 overflow-hidden group hover:border-[rgb(147_41_74)] transition-all duration-300 flex flex-col h-full cursor-default shadow-xs"
              style={{ borderRadius: '13px' }}
              id={`base-card-${base.id}`}
            >
              {/* Image Frame */}
              <div className="relative h-48 overflow-hidden bg-stone-100">
                <img
                  src={base.imageUrl}
                  alt={`${base.name} - ${base.seoTag}`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-[0.98] contrast-[1.02]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
              </div>

              {/* Text Body */}
              <div className="p-6 flex flex-col flex-grow space-y-4 cursor-default">
                <div className="space-y-1 cursor-default">
                  <div className="text-[rgb(147_41_74)] text-xs font-sans font-medium cursor-default">
                    {base.location}
                  </div>
                  <h3 className="font-serif text-lg font-normal text-black transition-colors cursor-default">
                    {base.name}
                  </h3>
                </div>

                <p className="text-xs text-black leading-relaxed font-sans font-light flex-grow cursor-default">
                  {base.description}
                </p>

                {/* Buttons Stack */}
                <div className="flex flex-col space-y-2 mt-auto">
                  <button
                    onClick={scrollToContact}
                    className="w-full text-white font-sans font-medium transition-colors cursor-pointer shadow-xs active:scale-98 flex items-center justify-center"
                    style={{ fontSize: '15px', background: 'black', borderRadius: '13px', height: '50px' }}
                    id={`base-contact-btn-${base.id}`}
                  >
                    {contactText}
                  </button>
                  
                  {mapUrls[base.id] && (
                    <a
                      href={mapUrls[base.id]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full font-sans font-medium transition-colors cursor-pointer flex items-center justify-center active:scale-98"
                      style={{ border: 'none', background: 'rgb(147 41 74)', fontSize: '15px', borderRadius: '13px', height: '50px', color: 'white' }}
                      id={`base-map-btn-${base.id}`}
                    >
                      <span>Maps Meeting Point</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
