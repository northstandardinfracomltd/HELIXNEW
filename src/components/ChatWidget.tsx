import React, { useState, useEffect, useRef } from 'react';
import { 
  MessageSquare, 
  X, 
  Send, 
  CheckCircle2, 
  ChevronRight,
  Mail
} from 'lucide-react';
import { Language } from '../types';

interface ChatWidgetProps {
  currentLang: Language;
  selectedAircraft?: string;
  onClearSelectedAircraft?: () => void;
}

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  options?: { label: string; value: string }[];
  isRecap?: boolean;
}

// Helper to generate date + time slot proposals starting at 4-5 days out
const getSuggestedDateSlotOptions = (lang: Language) => {
  const options: { label: string; value: string }[] = [];
  const now = new Date();
  
  const slotsByLang: Record<string, string[]> = {
    fr: ["Matin (08:00 - 12:00)", "Après-midi (12:00 - 17:00)", "Soirée (17:00 - 21:00)", "Matin (08:00 - 12:00)"],
    en: ["Morning (08:00 - 12:00)", "Afternoon (12:00 - 17:00)", "Evening (17:00 - 21:00)", "Morning (08:00 - 12:00)"],
    de: ["Morgen (08:00 - 12:00)", "Nachmittag (12:00 - 17:00)", "Abend (17:00 - 21:00)", "Morgen (08:00 - 12:00)"],
    nl: ["Ochtend (08:00 - 12:00)", "Middag (12:00 - 17:00)", "Avond (17:00 - 21:00)", "Ochtend (08:00 - 12:00)"],
    es: ["Mañana (08:00 - 12:00)", "Tarde (12:00 - 17:00)", "Tarde/Noche (17:00 - 21:00)", "Mañana (08:00 - 12:00)"]
  };

  const localeMap: Record<string, string> = {
    fr: 'fr-FR',
    en: 'en-US',
    de: 'de-DE',
    nl: 'nl-NL',
    es: 'es-ES'
  };

  const currentSlots = slotsByLang[lang] || slotsByLang.en;
  const locale = localeMap[lang] || 'fr-FR';

  // Propose date options starting at +4 and +5 days out (+4, +5, +6, +7 days)
  const dayOffsets = [4, 5, 6, 7];

  dayOffsets.forEach((daysAhead, index) => {
    const targetDate = new Date();
    targetDate.setDate(now.getDate() + daysAhead);

    const dayName = targetDate.toLocaleDateString(locale, { weekday: 'short' });
    const dayNum = targetDate.getDate();
    const monthName = targetDate.toLocaleDateString(locale, { month: 'short' });

    const formattedDate = `${dayName.charAt(0).toUpperCase() + dayName.slice(1)} ${dayNum} ${monthName}`;
    const slotText = currentSlots[index % currentSlots.length];
    const fullLabel = `${formattedDate} - ${slotText}`;

    options.push({
      label: fullLabel,
      value: fullLabel
    });
  });

  return options;
};

// Helper function to render bold formatted text from markdown **bold**
const renderFormattedText = (text: string) => {
  if (!text || !text.includes('**')) return text;
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={index} className="font-semibold text-slate-900 block mt-1">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
};

export default function ChatWidget({ currentLang, selectedAircraft, onClearSelectedAircraft }: ChatWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<number>(0);
  const [inputVal, setInputVal] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Form State
  const [answers, setAnswers] = useState({
    name: '',
    email: '',
    phone: '',
    route: '',
    aircraft: selectedAircraft || 'Airbus H135',
    date: '',
    timeSlot: 'Morning (08:00 - 12:00)',
    passengers: '2',
    twoPilots: false,
    notes: ''
  });

  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Sync selected aircraft
  useEffect(() => {
    if (selectedAircraft) {
      setAnswers(prev => ({ ...prev, aircraft: selectedAircraft }));
    }
  }, [selectedAircraft]);

  const isFr = currentLang === 'fr';
  const isDe = currentLang === 'de';
  const isNl = currentLang === 'nl';
  const isEs = currentLang === 'es';

  // Helper text dictionaries (Luxurious, clean, light tone)
  const texts = {
    headerTitle: isFr ? "Service Concierge HeliBaleares" : isDe ? "HeliBaleares Concierge-Service" : isNl ? "HeliBaleares Concierge Service" : isEs ? "Servicio Concierge HeliBaleares" : "HeliBaleares Concierge Service",
    headerStatus: isFr ? "● En ligne • Aviation Privée" : isDe ? "● Online • Privatluftfahrt" : isNl ? "● Online • Prive Luchtvaart" : isEs ? "● En línea • Aviación Privada" : "● Online • Private Aviation",
    inputPlaceholder: isFr ? "Saisissez votre réponse..." : isDe ? "Antwort eingeben..." : isNl ? "Typ uw antwoord..." : isEs ? "Escriba su respuesta..." : "Type your answer...",
    restart: isFr ? "Recommencer" : isDe ? "Neustart" : isNl ? "Herstarten" : isEs ? "Reiniciar" : "Restart",
    skip: isFr ? "Passer cette étape ➔" : isDe ? "Schritt überspringen ➔" : isNl ? "Stap overslaan ➔" : isEs ? "Omitir este paso ➔" : "Skip this step ➔",
    submitCharterBtn: isFr ? "Transmettre ma demande" : isDe ? "Anfrage übermitteln" : isNl ? "Aanvraag versturen" : isEs ? "Transmitir mi solicitud" : "Submit Charter Request",
    submitting: isFr ? "Transmission en cours..." : isDe ? "Wird übermittelt..." : isNl ? "Verzenden..." : isEs ? "Enviando..." : "Transmitting inquiry..."
  };

  // Scroll to bottom when messages change
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, step, isOpen]);

  // Initial greeting message when opened or language changes
  useEffect(() => {
    if (messages.length === 0) {
      initChat();
    }
  }, [currentLang]);

  const initChat = () => {
    setStep(0);
    setIsSuccess(false);
    setIsSubmitting(false);
    
    const initialGreeting: ChatMessage = {
      id: 'msg-0',
      sender: 'bot',
      text: isFr 
        ? `Bienvenue. Je suis votre assistant Concierge HeliBaleares. Je vous accompagne pour concevoir votre vol privé sur mesure.\n\nPour débuter, quel est votre Nom et Prénom ?`
        : isDe
        ? `Willkommen. Ich bin Ihr HeliBaleares Concierge-Assistent. Ich begleite Sie bei der Planung Ihres privaten Charterfluges.\n\nWie lautet Ihr Vollständiger Name?`
        : isNl
        ? `Welkom. Ik ben uw HeliBaleares Concierge assistent. Ik help u bij het samenstellen van uw privé vlucht.\n\nWat is uw Volledige Naam?`
        : isEs
        ? `Bienvenido. Soy su asistente Concierge HeliBaleares. Le acompaño en la organización de su vuelo privado a medida.\n\nPara comenzar, ¿cuál es su Nombre y Apellidos?`
        : `Welcome. I am your HeliBaleares Concierge assistant. I am at your service to curate your bespoke private flight.\n\nTo begin, what is your Full Name?`
    };

    setMessages([initialGreeting]);
  };

  const handleOpenToggle = () => {
    setIsOpen(!isOpen);
  };

  // Advance step logic
  const advanceStep = (userText: string, updatedField?: Partial<typeof answers>) => {
    const newAnswers = { ...answers, ...updatedField };
    setAnswers(newAnswers);

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: userText
    };

    let nextStep = step + 1;
    setStep(nextStep);

    let botMsg: ChatMessage | null = null;

    if (nextStep === 1) {
      botMsg = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: isFr 
          ? `Ravi de vous accueillir, ${newAnswers.name}. Quelle est votre adresse e-mail afin de vous transmettre notre proposition d'itinérance ?`
          : isDe
          ? `Willkommen, ${newAnswers.name}. Wie lautet Ihre E-Mail-Adresse für unser Angebot?`
          : isNl
          ? `Welkom, ${newAnswers.name}. Wat is uw E-mailadres?`
          : isEs
          ? `Un placer, ${newAnswers.name}. ¿Cuál es su Correo electrónico para enviarle la propuesta?`
          : `Welcome, ${newAnswers.name}. What is your Email Address where we can send your charter proposal?`
      };
    } else if (nextStep === 2) {
      botMsg = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: isFr 
          ? `Merci. Quel est votre Numéro de téléphone ? (Optionnel, utile pour la coordination de votre vol)`
          : isDe
          ? `Vielen Dank. Wie lautet Ihre Telefonnummer? (Optional)`
          : isNl
          ? `Dank u. Wat is uw Telefoonnummer? (Optioneel)`
          : isEs
          ? `Gracias. ¿Cuál es su Número de teléfono? (Opcional)`
          : `Thank you. What is your Phone Number? (Optional, for direct flight dispatch coordination)`,
        options: [
          { label: texts.skip, value: isFr ? "Non spécifié" : "Not specified" }
        ]
      };
    } else if (nextStep === 3) {
      botMsg = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: isFr 
          ? `Quel est l'Itinéraire ou la Destination souhaitée pour votre vol ?`
          : isDe
          ? `Welche Flugroute oder welches Ziel wünschen Sie?`
          : isNl
          ? `Welke Route of Bestemming wenst u?`
          : isEs
          ? `¿Cuál es la Ruta o Destino deseado para su vuelo?`
          : `What is your desired Flight Route or Destination?`
        // Route proposal chips removed per request - manual entry only
      };
    } else if (nextStep === 4) {
      botMsg = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: isFr 
          ? `Nous opérons notre flotte exclusive. Veuillez confirmer l'appareil sélectionné :`
          : isDe
          ? `Wir betreiben unsere exklusive Flotte. Bitte bestätigen Sie das gewählte Fluggerät:`
          : isNl
          ? `Wij vliegen met onze exclusieve vloot. Bevestig de gekozen helikopter:`
          : isEs
          ? `Operamos nuestra flota exclusiva. Por favor confirme la aeronave seleccionada:`
          : `We operate our exclusive fleet. Please confirm the selected aircraft:`,
        options: [
          { label: "Airbus H135", value: "Airbus H135" }
        ]
      };
    } else if (nextStep === 5) {
      botMsg = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: isFr 
          ? `Quelle est la Date de vol et le Créneau horaire envisagé ?\n\n**Sélectionnez ci-dessous parmi les options ou saisissez manuellement dans le champ votre demande de date/créneau.**`
          : isDe
          ? `Wann ist Ihr gewünschtes Flugdatum und Zeitfenster?\n\n**Wählen Sie unten eine der Optionen oder geben Sie Ihre Datum/Zeit-Anfrage manuell im Feld ein.**`
          : isNl
          ? `Wat is uw gewenste Vluchtdatum en tijdstip?\n\n**Kies hieronder uit de opties of voer uw datum/tijd-aanvraag handmatig in het veld in.**`
          : isEs
          ? `¿Cuál es la Fecha de vuelo y franja horaria deseada?\n\n**Seleccione a continuación entre las opciones o escriba manualmente en el campo su solicitud de fecha/horario.**`
          : `What is your preferred Flight Date and Time Slot?\n\n**Select from the options below or manually enter your date/slot request in the input field.**`,
        options: getSuggestedDateSlotOptions(currentLang)
      };
    } else if (nextStep === 6) {
      botMsg = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: isFr 
          ? `Combien de Passagers seront accueillis à bord ?`
          : isDe
          ? `Wie viele Passagiere reisen mit?`
          : isNl
          ? `Hoeveel Passagiers reizen er mee?`
          : isEs
          ? `¿Cuántos Pasajeros viajarán a bordo?`
          : `How many Passengers will be traveling on board?`,
        options: [
          { label: isFr ? "1-2 Passagers" : "1-2 Passengers", value: "2" },
          { label: isFr ? "3-4 Passagers" : "3-4 Passengers", value: "4" },
          { label: isFr ? "5-6 Passagers (Max H135)" : "5-6 Passengers (Max H135)", value: "6" }
        ]
      };
    } else if (nextStep === 7) {
      botMsg = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: isFr 
          ? `Souhaitez-vous ajouter des Précisions sur vos Bagages ou des Exigences particulières ?`
          : isDe
          ? `Haben Sie besondere Gepäckangaben oder Wünsche?`
          : isNl
          ? `Heeft u specifieke Bagagedetails of wensen?`
          : isEs
          ? `¿Tiene alguna Especificación de Equipaje o Solicitud particular?`
          : `Do you have any specific Luggage Details or Special Requirements?`,
        options: [
          { label: isFr ? "Bagages standards" : "Standard Luggage", value: isFr ? "Bagages standards" : "Standard Luggage" },
          { label: isFr ? "Valises lourdes / volumineuses" : "Heavy Luggage", value: isFr ? "Valises lourdes" : "Heavy Luggage" },
          { label: isFr ? "Aucun besoin spécifique" : "No Special Requirements", value: isFr ? "Aucun besoin spécifique" : "No Special Requirements" }
        ]
      };
    } else if (nextStep >= 8) {
      botMsg = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: isFr 
          ? `Voici le récapitulatif de votre demande de vol privé :`
          : isDe
          ? `Hier ist Ihre Fluganfrage-Zusammenfassung:`
          : isNl
          ? `Hier is het overzicht van uw vluchtaanvraag:`
          : isEs
          ? `Aquí tiene el resumen de su solicitud:`
          : `Here is your private flight inquiry summary:`,
        isRecap: true
      };
    }

    if (botMsg) {
      setMessages(prev => [...prev, userMsg, botMsg!]);
    } else {
      setMessages(prev => [...prev, userMsg]);
    }

    setInputVal('');
  };

  const handleSendInput = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (step === 4) return; // Aircraft step is select-only
    if (!inputVal.trim() && step !== 2 && step !== 7) return;

    const val = inputVal.trim() || (isFr ? "Non spécifié" : "Not specified");

    if (step === 0) advanceStep(val, { name: val });
    else if (step === 1) advanceStep(val, { email: val });
    else if (step === 2) advanceStep(val, { phone: val });
    else if (step === 3) advanceStep(val, { route: val });
    else if (step === 5) advanceStep(val, { date: val, timeSlot: isFr ? "Saisie manuelle" : "Manual entry" });
    else if (step === 6) advanceStep(val, { passengers: val });
    else if (step === 7) advanceStep(val, { notes: val });
  };

  const handleOptionClick = (opt: { label: string; value: string }) => {
    if (step === 2) advanceStep(opt.label, { phone: opt.value });
    else if (step === 4) advanceStep(opt.label, { aircraft: opt.value });
    else if (step === 5) advanceStep(opt.label, { date: opt.label, timeSlot: opt.value });
    else if (step === 6) advanceStep(opt.label, { passengers: opt.value });
    else if (step === 7) advanceStep(opt.label, { notes: opt.value });
  };

  const handleSubmitFinal = async () => {
    setIsSubmitting(true);

    const dateTimeStr = answers.date 
      ? (answers.timeSlot && answers.timeSlot !== "Saisie manuelle" && answers.timeSlot !== "Manual entry" && !answers.date.includes(answers.timeSlot) 
          ? `${answers.date} (${answers.timeSlot})` 
          : answers.date)
      : answers.timeSlot;

    const payload = {
      FullName: answers.name || (isFr ? "Client Chat" : "Chat Client"),
      EmailAddress: answers.email || (isFr ? "Non renseigné" : "Not provided"),
      PhoneWhatsApp: answers.phone || (isFr ? "Non renseigné" : "Not provided"),
      RouteDest: answers.route || (isFr ? "Sur mesure" : "Custom route"),
      Aircraft: answers.aircraft || "Airbus H135",
      DateTime: dateTimeStr || (isFr ? "À convenir" : "To be scheduled"),
      Passengers: answers.passengers || "2",
      Dual: answers.twoPilots ? (isFr ? "Oui (2 Pilotes)" : "Yes (2 Pilots)") : (isFr ? "Non (1 Pilote)" : "No (1 Pilot)"),
      Requirements: answers.notes ? `[Chatbot Inquiry] ${answers.notes}` : "[Submitted via Live Chat Widget]"
    };

    // Automatic background server dispatch
    try {
      await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });
    } catch (err) {
      console.warn('Backend email dispatch error:', err);
    }

    // Direct client fetch to Google Apps Script Web App (inserts directly into Google Sheet)
    const appsScriptUrl = (import.meta as any).env?.VITE_APPSCRIPT_URL || "https://script.google.com/macros/s/AKfycbwNuoIaRCoMdr2MVdzgIC5S2CygPwOSu-Z8_ecSoiDm_PgYar354okAaUQElAGkRdKZWw/exec";
    if (appsScriptUrl) {
      try {
        await fetch(appsScriptUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'text/plain;charset=utf-8'
          },
          body: JSON.stringify(payload)
        });
      } catch (err) {
        console.warn('Direct Apps Script submit error:', err);
      }
    }

    setIsSubmitting(false);
    setIsSuccess(true);
    if (onClearSelectedAircraft) onClearSelectedAircraft();

    // Single clear localized confirmation message indicating infos@helibaleares.com recipient
    const confirmationText = isFr 
      ? "✅ Votre demande a bien été transmise à notre équipe dispatch (infos@helibaleares.com). Notre département Concierge prendra contact avec vous dans les plus brefs délais."
      : isDe
      ? "✅ Ihre Anfrage wurde an unser Flugbetriebsteam (infos@helibaleares.com) übermittelt. Unser Concierge-Service wird sich in Kürze mit Ihnen in Verbindung setzen."
      : isNl
      ? "✅ Uw aanvraag is doorgestuurd naar ons team (infos@helibaleares.com). Onze Concierge service neemt zo snel mogelijk contact met u op."
      : isEs
      ? "✅ Su solicitud ha sido registrada correctamente en nuestro departamento de operaciones (infos@helibaleares.com). Nos pondremos en contacto con usted a la mayor brevedad."
      : "✅ Your charter inquiry has been transmitted to our dispatch team (infos@helibaleares.com). Our Concierge desk will be in touch with you shortly.";

    const finalMsg: ChatMessage = {
      id: `bot-final-${Date.now()}`,
      sender: 'bot',
      text: confirmationText
    };

    setMessages(prev => [...prev, finalMsg]);
  };

  return (
    <>
      {/* Floating Launcher Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          id="chat-widget-trigger-button"
          onClick={handleOpenToggle}
          aria-label="Open HeliBaleares Concierge Chat"
          className={`relative p-4 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center border ${
            isOpen 
              ? 'bg-black border-black text-white' 
              : 'bg-[#721489] hover:bg-[#861ca1] border-purple-400/30 text-white shadow-purple-950/30'
          }`}
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <>
              <MessageSquare className="w-6 h-6 fill-white stroke-white" />
              {/* Online pulsing green indicator */}
              <span className="absolute top-1 right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border-2 border-white"></span>
              </span>
            </>
          )}
        </button>
      </div>

      {/* Floating Chat Box Window (LIGHT Theme) */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 sm:right-6 w-[calc(100vw-2rem)] sm:w-96 h-[560px] max-h-[calc(100vh-8rem)] bg-white border border-slate-200 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden text-slate-900 animate-in fade-in slide-in-from-bottom-5 duration-200">
          
          {/* Messages Scroll Body (Light Background) */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 text-xs sm:text-sm bg-slate-50 custom-scrollbar">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  msg.sender === 'user' ? 'items-end' : 'items-start'
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-xl px-3.5 py-2.5 shadow-xs leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-[#721489] text-white font-normal rounded-br-none'
                      : 'bg-white border border-slate-200 text-slate-800 rounded-bl-none shadow-xs'
                  }`}
                >
                  <p className="whitespace-pre-line text-xs sm:text-sm font-normal tracking-tight">{renderFormattedText(msg.text)}</p>

                  {/* Recap Card rendering inside bot bubble */}
                  {msg.isRecap && (
                    <div className="mt-3 p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-2 text-xs">
                      <div className="flex items-center gap-2 text-slate-900 font-semibold border-b border-slate-200 pb-1.5 uppercase text-[10px] tracking-wider">
                        <span>HeliBaleares Charter Summary</span>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-700">
                        <div>
                          <span className="text-slate-500 block">Name:</span>
                          <span className="font-semibold text-slate-900">{answers.name || '-'}</span>
                        </div>
                        <div>
                          <span className="text-slate-500 block">Email:</span>
                          <span className="font-semibold text-slate-900">{answers.email || '-'}</span>
                        </div>
                        <div>
                          <span className="text-slate-500 block">Route:</span>
                          <span className="font-semibold text-[#721489]">{answers.route || '-'}</span>
                        </div>
                        <div>
                          <span className="text-slate-500 block">Aircraft:</span>
                          <span className="font-semibold text-slate-900">{answers.aircraft || '-'}</span>
                        </div>
                        <div>
                          <span className="text-slate-500 block">Date / Time:</span>
                          <span className="font-semibold text-slate-900">{answers.date || 'To be defined'} ({answers.timeSlot})</span>
                        </div>
                        <div>
                          <span className="text-slate-500 block">Passengers:</span>
                          <span className="font-semibold text-slate-900">{answers.passengers} Pax</span>
                        </div>
                      </div>

                      {answers.notes && (
                        <div className="text-[11px] pt-1.5 border-t border-slate-200 text-slate-700">
                          <span className="text-slate-500 block">Notes:</span>
                          <span>{answers.notes}</span>
                        </div>
                      )}

                      {!isSuccess ? (
                        <button
                          onClick={handleSubmitFinal}
                          disabled={isSubmitting}
                          className="w-full mt-2 py-2.5 px-3 bg-[#721489] hover:bg-[#861ca1] text-white font-medium rounded-md shadow-xs transition-all flex items-center justify-center gap-2 disabled:opacity-50 text-xs"
                        >
                          {isSubmitting ? (
                            <span>{texts.submitting}</span>
                          ) : (
                            <>
                              <Send className="w-3.5 h-3.5" />
                              <span>{texts.submitCharterBtn}</span>
                            </>
                          )}
                        </button>
                      ) : (
                        <div className="w-full mt-2 py-2 px-3 bg-emerald-50 border border-emerald-200 text-emerald-800 font-medium rounded-md text-center text-xs">
                          {isFr ? "✅ Demande transmise à infos@helibaleares.com" : "✅ Request sent to infos@helibaleares.com"}
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Option quick-chips if attached to bot message */}
                {msg.options && !isSuccess && msg.sender === 'bot' && (
                  <div className="mt-2.5 flex flex-wrap gap-1.5 max-w-[90%]">
                    {msg.options.map((opt, i) => (
                      <button
                        key={i}
                        onClick={() => handleOptionClick(opt)}
                        className="text-xs bg-white hover:bg-purple-50 border border-slate-200 hover:border-[#721489] text-slate-800 hover:text-[#721489] px-3 py-1.5 rounded-md transition-all duration-150 flex items-center gap-1 active:scale-95 text-left font-medium shadow-2xs"
                      >
                        <span>{opt.label}</span>
                        <ChevronRight className="w-3 h-3 text-slate-400" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Footer Area */}
          {!isSuccess && step < 8 && (
            <form
              onSubmit={handleSendInput}
              className="p-3 bg-white border-t border-slate-200 flex items-center gap-2"
            >
              <input
                type={step === 1 ? 'email' : 'text'}
                value={inputVal}
                disabled={step === 4}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder={
                  step === 4 
                    ? (isFr ? "Veuillez choisir ci-dessus" : "Please select above") 
                    : step === 5
                    ? (isFr ? "Sélectionnez ci-dessus ou saisissez vos dates..." : "Select above or type custom date...")
                    : texts.inputPlaceholder
                }
                className="flex-1 bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm rounded-lg px-3.5 py-2.5 focus:outline-none focus:border-[#721489] placeholder-slate-400 disabled:bg-slate-100 disabled:cursor-not-allowed"
              />

              <button
                type="submit"
                disabled={step === 4 || (!inputVal.trim() && step !== 2 && step !== 7)}
                className="p-2.5 bg-[#721489] hover:bg-[#861ca1] disabled:opacity-30 text-white font-medium rounded-lg transition-all flex items-center justify-center shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      )}
    </>
  );
}
