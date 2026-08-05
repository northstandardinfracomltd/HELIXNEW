import React, { useEffect } from 'react';
import { CheckCircle2, ArrowLeft } from 'lucide-react';
import { Language } from '../types';

interface SuccessPageProps {
  currentLang?: Language;
  onGoHome?: () => void;
}

export default function SuccessPage({ currentLang = 'fr', onGoHome }: SuccessPageProps) {
  useEffect(() => {
    // Set document title and noindex, nofollow robot tags for strict SEO privacy
    document.title = "HeliBaleares | Confirmation de Paiement";

    let robotsMeta = document.querySelector('meta[name="robots"]');
    const originalRobots = robotsMeta?.getAttribute('content') || 'index, follow';
    
    if (!robotsMeta) {
      robotsMeta = document.createElement('meta');
      robotsMeta.setAttribute('name', 'robots');
      document.head.appendChild(robotsMeta);
    }
    robotsMeta.setAttribute('content', 'noindex, nofollow');

    let googlebotMeta = document.querySelector('meta[name="googlebot"]');
    const originalGooglebot = googlebotMeta?.getAttribute('content') || 'index, follow';
    if (!googlebotMeta) {
      googlebotMeta = document.createElement('meta');
      googlebotMeta.setAttribute('name', 'googlebot');
      document.head.appendChild(googlebotMeta);
    }
    googlebotMeta.setAttribute('content', 'noindex, nofollow');

    return () => {
      if (robotsMeta) robotsMeta.setAttribute('content', originalRobots);
      if (googlebotMeta) googlebotMeta.setAttribute('content', originalGooglebot);
    };
  }, []);

  const isFr = currentLang === 'fr';
  const isDe = currentLang === 'de';
  const isNl = currentLang === 'nl';
  const isEs = currentLang === 'es';

  const title = isFr
    ? "Paiement Confirmé"
    : isDe
    ? "Zahlung Bestätigt"
    : isNl
    ? "Betaling Bevestigd"
    : isEs
    ? "Pago Confirmado"
    : "Payment Confirmed";

  const message = isFr
    ? "Merci pour votre confiance. Votre paiement a été traité avec succès et votre réservation de vol est confirmée. Notre équipe Concierge & Dispatch va prendre contact avec vous dans les plus brefs délais pour finaliser les détails de votre itinéraire."
    : isDe
    ? "Vielen Dank für Ihr Vertrauen. Ihre Zahlung wurde erfolgreich verarbeitet und Ihre Flugbuchung ist bestätigt. Unser Concierge- & Dispatch-Team wird sich in Kürze mit Ihnen in Verbindung setzen, um die Details Ihrer Flugroute zu finalisieren."
    : isNl
    ? "Hartelijk dank voor uw vertrouwen. Uw betaling is succesvol verwerkt en uw vluchtreservering is bevestigd. Ons Concierge & Dispatch team neemt zo snel mogelijk contact met u op om de details van uw vlucht af te ronden."
    : isEs
    ? "Gracias por su confianza. Su pago ha sido procesado con éxito y su reserva de vuelo está confirmada. Nuestro equipo de Concierge & Despacho se pondrá en contacto con usted a la mayor brevedad para finalizar los detalles de su vuelo."
    : "Thank you for your trust. Your payment has been successfully processed and your flight booking is confirmed. Our Concierge & Dispatch team will get in touch with you shortly to finalize your flight details.";

  const buttonText = isFr
    ? "Retour à l'accueil"
    : isDe
    ? "Zurück zur Startseite"
    : isNl
    ? "Terug naar Home"
    : isEs
    ? "Volver al inicio"
    : "Back to Home";

  const handleHomeClick = () => {
    if (onGoHome) {
      onGoHome();
    } else {
      window.history.pushState({}, '', '/');
      window.dispatchEvent(new Event('popstate'));
    }
  };

  return (
    <div id="success-page" className="min-h-screen bg-white text-slate-900 flex flex-col items-center justify-center p-6 sm:p-12 selection:bg-black selection:text-white">
      <div className="max-w-md w-full mx-auto flex flex-col items-center text-center space-y-8">
        
        {/* Centered Logo */}
        <a href="/" onClick={(e) => { e.preventDefault(); handleHomeClick(); }} className="inline-block transition-transform hover:scale-105">
          <img 
            src="https://civilprom.s3.eu-north-1.amazonaws.com/HeliBaleares+Logo+Neo.svg" 
            alt="HeliBaleares" 
            className="h-12 sm:h-14 object-contain mx-auto"
          />
        </a>

        {/* Minimalist Confirmation Checkmark */}
        <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100 shadow-xs">
          <CheckCircle2 className="w-9 h-9 stroke-[1.75]" />
        </div>

        {/* Confirmation Heading & Thank You Message */}
        <div className="space-y-3">
          <h1 className="text-2xl sm:text-3xl font-serif tracking-wide uppercase font-semibold text-slate-900">
            {title}
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
            {message}
          </p>
        </div>

        {/* Subtle Horizontal Divider */}
        <div className="w-12 h-px bg-slate-200"></div>

        {/* Return to Home Button */}
        <button
          onClick={handleHomeClick}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#721489] hover:bg-[#861ca1] text-white text-xs sm:text-sm font-medium tracking-wider uppercase rounded-full shadow-sm hover:shadow-md transition-all cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>{buttonText}</span>
        </button>

      </div>
    </div>
  );
}
