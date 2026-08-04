import { ShieldAlert, UserCheck, AlertTriangle, BadgeAlert } from 'lucide-react';
import { TranslationContent } from '../types';

interface SafetyProps {
  t: TranslationContent;
}

export default function Safety({ t }: SafetyProps) {
  const isFr = t.navContact === "Nous Contacter";
  const isDe = t.navContact === "Flug anfragen";
  const isNl = t.navContact === "Aanvraag indienen";
  const isEs = t.navContact === "Solicitud de Vuelo";

  const onDemandSuffix = isFr ? "À la demande" : isDe ? "Auf Anfrage" : isNl ? "Op aanvraag" : isEs ? "Bajo demanda" : "On demand";
  const titlePart = t.safetyTwoPilots.split(':')[0].trim();
  const descPart = t.safetyTwoPilots.substring(t.safetyTwoPilots.indexOf(':') + 1).trim();

  const crewFeatures = (() => {
    if (isFr) {
      return [
        {
          title: "Minimum 3 000 Heures de Vol",
          desc: "Nos pilotes sont des commandants vétérans chevronnés, spécialisés dans les vols privés et transferts d'affaires haut de gamme."
        },
        {
          title: "Évaluations régulières sur simulateur",
          desc: "Contrôles récurrents sur simulateur multi-moteurs et par météo difficile deux fois par an."
        },
        {
          title: "Experts des espaces aériens locaux",
          desc: "Connaissance approfondie des vecteurs d'approche spécifiques pour l'héliport de Monaco Fontvieille, Malte, Gozo et les Baléares."
        },
        {
          title: "Maintenance d'Élite & Exigence Zéro Risque",
          desc: "Helibaleares S.A. applique les plus grands soins et les exigences de maintenance les plus strictes. Aucun risque n'est pris : la redondance et l'anticipation passent d'abord."
        }
      ];
    }
    if (isDe) {
      return [
        {
          title: "Mindestens 3.000 Flugstunden",
          desc: "Unsere Piloten sind erfahrene Kapitäne mit umfassender Erfahrung bei erstklassigen Executive-Transfers."
        },
        {
          title: "Regelmäßige Simulatorprüfungen",
          desc: "Wiederkehrende Prüfungen auf mehrmotorigen Simulatoren und bei schlechtem Wetter zweimal pro Jahr."
        },
        {
          title: "Experten für den lokalen Luftraum",
          desc: "Umfassende Kenntnis der spezifischen Anflugvektoren für Monaco Helipad Fontvieille, Malta, Gozo und die Balearen."
        },
        {
          title: "Erstklassige Wartung & Null-Risiko-Politik",
          desc: "Helibaleares S.A. wendet größte Sorgfalt und strengste Wartungsanforderungen an. Es werden keine Risiken eingegangen – Redundanz und Antizipation stehen an erster Stelle."
        }
      ];
    }
    if (isNl) {
      return [
        {
          title: "Minimaal 3.000 Vlieguren",
          desc: "Onze piloten zijn ervaren gezagvoerders met uitgebreide ervaring in luxe zakelijke transfers."
        },
        {
          title: "Regelmatige evaluaties in simulatoren",
          desc: "Tweejaarlijkse check-ups op simulatoren voor meermotorige vluchten en slechte weersomstandigheden."
        },
        {
          title: "Experten in lokale luchtruimen",
          desc: "Uitgebreide kennis van specifieke naderingsvectoren voor Monaco Helipad Fontvieille, Malta, Gozo en de Balearen."
        },
        {
          title: "Uiterste Onderhoudszorg & Geen Risico",
          desc: "Helibaleares S.A. hanteert de grootste zorg en strengste onderhoudseisen. Er worden geen risico's genomen – redundantie en anticipatie zijn onze absolute prioriteit."
        }
      ];
    }
    if (isEs) {
      return [
        {
          title: "Mínimo 3.000 Horas de Vuelo",
          desc: "Nuestros pilotos son capitanes veteranos con amplia experiencia en traslados corporativos de alta gama."
        },
        {
          title: "Evaluaciones frecuentes en simulador",
          desc: "Controles recurrentes en simulador de vuelo multimotor y con clima adverso dos veces al año."
        },
        {
          title: "Expertos en espacio aéreo local",
          desc: "Conocimiento profundo de vectores de aproximación específicos para el helipuerto de Mónaco Fontvieille, Malta, Gozo y las Baleares."
        },
        {
          title: "Mantenimiento de Élite y Riesgo Cero",
          desc: "Helibaleares S.A. aplica el máximo cuidado y las exigencias de mantenimiento más estrictas. No se corre ningún riesgo: la redundancia y la anticipación son nuestra prioridad absoluta."
        }
      ];
    }
    // Default English
    return [
      {
        title: "Minimum 3,000 Flight Hours",
        desc: "Our pilots are veteran captains with deep experience flying high-end corporate transfers."
      },
      {
        title: "Frequent Simulator Assessments",
        desc: "Recurrent multi-engine and bad-weather flight simulator checkups twice per year."
      },
      {
        title: "Localized Airspace Experts",
        desc: "Extensive knowledge of specific approach vectors for Monaco Helipad Fontvieille, Malta and Gozo, and Balearic islands."
      },
      {
        title: "Elite Maintenance & Zero-Risk Policy",
        desc: "Helibaleares applies the utmost care and rigorous maintenance standards. No risks are taken—redundancy and anticipation are our absolute priority."
      }
    ];
  })();

  const alertText = (() => {
    if (isFr) {
      return {
        title: "Information de paiement & Protection",
        desc: "Helibaleares ne vous demandera jamais de paiement ou de transfert d'argent avant notre rencontre sur le site de départ. Vous pourrez régler votre vol par carte bancaire, espèces (maximum 1 000 € pour les résidents fiscaux en Espagne et 10 000 € pour les non-résidents) ou virement instantané uniquement en direct lors de notre rencontre. Nous demandons simplement une empreinte bancaire sécurisée pour confirmer votre réservation ; en cas d'absence non signalée (no-show), des frais seront prélevés."
      };
    }
    if (isDe) {
      return {
        title: "Zahlungsinformationen & Sicherheit",
        desc: "Helibaleares wird Sie niemals vor unserem persönlichen Treffen vor Ort um eine Zahlung oder Geldüberweisung bitten. Sie können Ihren Flug per Kreditkarte, bar (maximal 1.000 € für steuerlich in Spanien Ansässige und 10.000 € für Nichtansässige) oder per Sofortüberweisung ausschließlich direkt vor Ort bezahlen, wenn wir uns treffen. Zur Sicherung Ihrer Buchung benötigen wir lediglich eine sichere Kreditkarten-Präautorisierung; im Falle eines unentschuldigten Nichterscheinens (No-Show) wird eine Gebühr erhoben."
      };
    }
    if (isNl) {
      return {
        title: "Betalingsinformatie & Beveiliging",
        desc: "Helibaleares zal u nooit om een betaling of geldovermaking vragen voordat we elkaar persoonlijk ontmoeten op de locatie. U kunt uw vlucht betalen met creditcard, contant geld (maximaal € 1.000 voor belastingplichtigen in Spanje en € 10.000 voor niet-inwoners) of directe bankoverschrijving uitsluitend direct ter plaatse wanneer we elkaar ontmoeten. Om uw reservering te garanderen, vragen we alleen om een beveiligde creditcard-pre-autorisatie; in het geval van een no-show zonder voorafgaande kennisgeving, worden er no-show kosten in rekening gebracht."
      };
    }
    if (isEs) {
      return {
        title: "Información de Pago y Seguridad",
        desc: "Helibaleares nunca le solicitará ningún pago o transferencia de dinero antes de conocernos en persona en el lugar. Podrá pagar por su vuelo con tarjeta de crédito, efectivo (máximo 1.000 € para residentes fiscales en España y 10.000 € para no residentes) o transferencia bancaria instantánea únicamente en directo cuando nos encontremos. Simplemente solicitamos una preautorización segura de tarjeta de crédito para confirmar su reserva; en caso de no presentarse sin previo aviso (no-show), se aplicará un cargo por incomparecencia."
      };
    }
    // Default English
    return {
      title: "Payment Information & Protection",
      desc: "Helibaleares will never ask for any payment or money transfer before meeting you in person on-site. You can pay for your flight by credit card, cash (maximum €1,000 for tax residents in Spain and €10,000 for non-residents), or instant bank transfer exclusively in person when we meet. We simply require a secure credit card pre-authorization to confirm your booking; in the event of a no-show without prior notice, a no-show fee will be charged."
    };
  })();

  return (
    <section id="safety" className="pt-24 pb-0 bg-white border-b border-stone-200/60 relative overflow-hidden">
      {/* Visual background accents */}
      <div className="absolute left-0 bottom-0 w-80 h-80 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4" id="safety-header">
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-black tracking-tight leading-tight cursor-default">
            {t.safetyTitle}
          </h2>
        </div>

        {/* Content columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12" id="safety-content">
          
          {/* Forbidden Items (Column 1-6) */}
          <div
            className="lg:col-span-6 bg-white p-6 sm:p-8 space-y-6"
            style={{ borderRadius: '13px', border: '1px solid #00000024' }}
            id="safety-forbidden-panel"
          >
            <div>
              <h3 className="font-serif text-lg font-normal text-black cursor-default">
                {t.safetyForbiddenTitle}
              </h3>
              <p className="text-[10px] text-red-600 font-sans font-light mt-0.5 cursor-default">Regulatory Compliance</p>
            </div>

            <p className="text-black font-sans font-light text-sm leading-relaxed cursor-default">
              {t.safetyForbiddenDesc}
            </p>

            {/* List with red dots */}
            <ul className="space-y-3 font-sans font-light text-sm text-black cursor-default" id="forbidden-items-list">
              {t.forbiddenItemsList.map((item, index) => (
                <li key={index} className="flex items-start gap-2.5 cursor-default">
                  <span className="text-red-500 mt-2 shrink-0 w-1 h-1 rounded-full bg-red-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pilot and Crew Standard (Column 7-12) */}
          <div
            className="lg:col-span-6 bg-white p-6 sm:p-8 space-y-6 flex flex-col justify-between"
            style={{ borderRadius: '13px', border: '1px solid #00000024' }}
            id="safety-crew-panel"
          >
            <div className="space-y-6">
              <div>
                <h3 className="font-serif text-lg font-normal text-black cursor-default">
                  {t.safetyPilotsTitle}
                </h3>
                <p className="text-[10px] text-black font-sans font-light mt-0.5 cursor-default">Professional Crew Standards</p>
              </div>

              {/* Two pilots notice */}
              <div className="text-white p-5 cursor-default" style={{ background: '#721489', borderRadius: '13px' }}>
                <p className="text-xs text-purple-100 font-sans font-light leading-relaxed cursor-default">
                  <strong className="text-white font-semibold flex items-center gap-2 mb-1.5 cursor-default">
                    <span>{titlePart} ({onDemandSuffix}).</span>
                  </strong>
                  {descPart}
                </p>
              </div>

              <p className="text-black font-sans font-light text-sm leading-relaxed cursor-default">
                {t.safetyPilotsDesc}
              </p>

              <div className="space-y-5 cursor-default" id="crew-features-list">
                {crewFeatures.map((feat, index) => (
                  <div key={index} className="flex gap-3 items-start cursor-default">
                    <div className="w-1.5 h-1.5 bg-black rounded-full mt-1.5 shrink-0" />
                    <div className="cursor-default">
                      <strong className="text-black font-sans font-semibold text-sm block cursor-default">{feat.title}</strong>
                      <span className="text-xs text-black block font-sans font-light mt-0.5 leading-relaxed cursor-default">{feat.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Primary Color Warning Alert Banner */}
      <div className="w-full text-white py-12 mt-16 cursor-default" id="safety-payment-warning">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 cursor-default">
          <div
            className="text-white cursor-default"
            style={{ background: '#721489', borderRadius: '13px', border: 'none', padding: '0px' }}
          >
            <div className="p-6 sm:p-8 space-y-2 cursor-default">
              <h4 className="font-serif text-lg font-normal text-white cursor-default">
                {alertText.title}
              </h4>
              <p className="text-sm font-light text-purple-100 leading-relaxed max-w-4xl cursor-default">
                {alertText.desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
