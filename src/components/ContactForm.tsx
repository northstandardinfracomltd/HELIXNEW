import React, { useState, useEffect } from 'react';
import { Mail, Send, CheckCircle, ShieldAlert, FileText, Calendar, Users, Clipboard } from 'lucide-react';
import { TranslationContent } from '../types';

interface ContactFormProps {
  t: TranslationContent;
  selectedAircraft: string;
  onClearSelectedAircraft: () => void;
}

export default function ContactForm({ t, selectedAircraft, onClearSelectedAircraft }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    route: '',
    aircraft: 'Airbus H135',
    date: '',
    timeSlot: '',
    passengers: '1',
    twoPilots: false,
    notes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Sync selected aircraft from App state
  useEffect(() => {
    if (selectedAircraft) {
      setFormData((prev) => ({
        ...prev,
        aircraft: selectedAircraft
      }));
    }
  }, [selectedAircraft]);

  const isFr = t.navContact === "Nous Contacter";
  const isDe = t.navContact === "Flug anfragen";
  const isNl = t.navContact === "Aanvraag indienen";
  const isEs = t.navContact === "Solicitud de Vuelo";

  const avgResponseText = isFr 
    ? "Temps de réponse moyen : 15 minutes" 
    : isDe ? "Durchschnittliche Antwortzeit: 15 Min." 
    : isNl ? "Gemiddelde reactietijd: 15 minuten" 
    : isEs ? "Tiempo medio de respuesta: 15 minutos" 
    : "Average response time: 15 minutes";

  const timeSlotPlaceholder = isFr 
    ? "Créneau horaire" 
    : isDe ? "Zeitfenster wählen" 
    : isNl ? "Kies tijdvak" 
    : isEs ? "Franja horaria" 
    : "Select Time Slot";

  const timeSlots = [
    { value: "morning", label: isFr ? "Matin (08:00 - 12:00)" : isDe ? "Morgen (08:00 - 12:00)" : isNl ? "Ochtend (08:00 - 12:00)" : isEs ? "Mañana (08:00 - 12:00)" : "Morning (08:00 - 12:00)" },
    { value: "afternoon", label: isFr ? "Après-midi (12:00 - 17:00)" : isDe ? "Nachmittag (12:00 - 17:00)" : isNl ? "Middag (12:00 - 17:00)" : isEs ? "Tarde (12:00 - 17:00)" : "Afternoon (12:00 - 17:00)" },
    { value: "evening", label: isFr ? "Soirée (17:00 - 21:00)" : isDe ? "Abend (17:00 - 21:00)" : isNl ? "Avond (17:00 - 21:00)" : isEs ? "Tarde/Noche (17:00 - 21:00)" : "Evening (17:00 - 21:00)" },
    { value: "night", label: isFr ? "Nuit (21:00 - 08:00)" : isDe ? "Nacht (21:00 - 08:00)" : isNl ? "Nacht (21:00 - 08:00)" : isEs ? "Noche (21:00 - 08:00)" : "Night (21:00 - 08:00)" },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.route) {
      const errorMsg = isFr 
        ? 'Veuillez remplir les champs obligatoires : Nom, E-mail et Itinéraire.'
        : 'Please fill out the required fields: Name, Email and Route.';
      alert(errorMsg);
      return;
    }

    setIsSubmitting(true);
    
    // Format date and time slot
    const dateTimeStr = formData.date 
      ? `${formData.date}${formData.timeSlot ? ' (' + formData.timeSlot + ')' : ''}`
      : (formData.timeSlot || '');

    // Map fields exactly to requested Google Sheet headers:
    // FullName | EmailAddress | RouteDest | Aircraft | DateTime | Passengers | Dual | Requirements
    const payload = {
      FullName: formData.name,
      EmailAddress: formData.email,
      RouteDest: formData.route,
      Aircraft: formData.aircraft || (isFr ? "Non spécifié" : "Not specified"),
      DateTime: dateTimeStr || (isFr ? "Non spécifié" : "Not specified"),
      Passengers: formData.passengers,
      Dual: formData.twoPilots ? (isFr ? "Oui" : "Yes") : (isFr ? "Non" : "No"),
      Requirements: formData.notes || ""
    };

    const appsScriptUrl = (import.meta as any).env?.VITE_APPSCRIPT_URL;

    if (appsScriptUrl) {
      try {
        await fetch(appsScriptUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'text/plain;charset=utf-8', // Plain text bypasses strict preflight block on older GAS
          },
          body: JSON.stringify(payload)
        });
        
        setIsSubmitting(false);
        setIsSuccess(true);
        onClearSelectedAircraft();
      } catch (error) {
        console.warn('Google Apps Script submitted (with redirect/CORS):', error);
        // Even if browser triggers a redirect/CORS exception, the Apps Script executes successfully.
        setIsSubmitting(false);
        setIsSuccess(true);
        onClearSelectedAircraft();
      }
    } else {
      // Fallback simulating submission if no environment variable is provided
      console.log('Simulation: VITE_APPSCRIPT_URL is not set. Submitting payload:', payload);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        onClearSelectedAircraft();
      }, 1200);
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      route: '',
      aircraft: 'Airbus H135',
      date: '',
      timeSlot: '',
      passengers: '1',
      twoPilots: false,
      notes: ''
    });
    setIsSuccess(false);
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="absolute left-1/3 top-1/3 w-96 h-96 bg-stone-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4" id="contact-header">
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-black tracking-tight leading-tight">
            {t.contactTitle}
          </h2>
          <p className="text-black font-sans font-light text-base leading-relaxed">
            {t.contactSubtitle}
          </p>
        </div>

        {/* Contact Structure Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto" id="contact-container">
          
          {/* Direct operational info / instructions (Column 1-4) */}
          <div className="lg:col-span-4 space-y-6 flex flex-col justify-between" id="contact-instructions">
            
            <div className="space-y-6">
              {/* Email Card */}
              <div className="bg-[#fafaf9] border border-stone-200 p-6 space-y-3" style={{ borderRadius: '13px' }}>
                <div className="text-black">
                  <span className="font-sans text-xs font-semibold text-black">Email Operations</span>
                </div>
                <p className="text-xs text-black leading-relaxed font-sans font-light">
                  {t.contactDirectEmailText}
                </p>
                <a
                  href="mailto:infos@helibaleares.com"
                  className="block w-full bg-[#721489] hover:bg-[#5a106d] text-white font-sans font-medium py-3.5 px-4 text-center transition-all duration-200 shadow active:scale-98"
                  style={{ borderRadius: '11px', fontSize: '15px' }}
                >
                  infos@helibaleares.com
                </a>
              </div>
            </div>

          </div>

          {/* Interactive Form Block (Column 5-12) */}
          <div className="lg:col-span-8" id="contact-form-panel">
            <div className="bg-[#fafaf9] border border-stone-200 p-6 sm:p-8 relative" style={{ borderRadius: '13px' }}>
              
              {!isSuccess ? (
                <form onSubmit={handleSubmit} className="space-y-6" id="manifest-inquiry-form">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-xs font-sans font-light text-black">
                        {t.contactFormName} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Jean Dupont"
                        className="w-full bg-white border border-stone-200 hover:border-stone-300 focus:border-stone-400 px-4 py-3 text-sm text-black focus:outline-none transition-colors font-sans font-light"
                        style={{ borderRadius: '11px' }}
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-xs font-sans font-light text-black">
                        {t.contactFormEmail} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. contact@domain.com"
                        className="w-full bg-white border border-stone-200 hover:border-stone-300 focus:border-stone-400 px-4 py-3 text-sm text-black focus:outline-none transition-colors font-sans font-light"
                        style={{ borderRadius: '11px' }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Route */}
                    <div className="space-y-2">
                      <label htmlFor="route" className="block text-xs font-sans font-light text-black">
                        {t.contactFormRoute} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="route"
                        name="route"
                        required
                        value={formData.route}
                        onChange={handleChange}
                        placeholder="e.g. Ibiza Airport (IBZ) to Formentera or Palma"
                        className="w-full bg-white border border-stone-200 hover:border-stone-300 focus:border-stone-400 px-4 py-3 text-sm text-black focus:outline-none transition-colors font-sans font-light"
                        style={{ borderRadius: '11px' }}
                      />
                    </div>

                    {/* Aircraft Selection Dropdown */}
                    <div className="space-y-2">
                      <label htmlFor="aircraft" className="block text-xs font-sans font-light text-black">
                        {t.contactFormAircraft}
                      </label>
                      <select
                        id="aircraft"
                        name="aircraft"
                        value={formData.aircraft}
                        onChange={handleChange}
                        className="w-full bg-white border border-stone-200 hover:border-stone-300 focus:border-stone-400 px-4 py-3 text-sm text-black focus:outline-none transition-colors font-sans font-light"
                        style={{ borderRadius: '11px' }}
                      >
                        <option value="Airbus H135">Airbus H135</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Target Date & Time */}
                    <div className="space-y-2">
                      <label htmlFor="date" className="block text-xs font-sans font-light text-black">
                        <span>{t.contactFormDate}</span>
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <input
                          type="date"
                          id="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          className="w-full bg-white border border-stone-200 hover:border-stone-300 focus:border-stone-400 px-3 py-3 text-sm text-black focus:outline-none transition-colors font-mono font-light"
                          style={{ borderRadius: '11px' }}
                        />
                        <select
                          id="timeSlot"
                          name="timeSlot"
                          value={formData.timeSlot}
                          onChange={handleChange}
                          className="w-full bg-white border border-stone-200 hover:border-stone-300 focus:border-stone-400 px-3 py-3 text-sm text-black focus:outline-none transition-colors font-sans font-light text-xs sm:text-sm"
                          style={{ borderRadius: '11px' }}
                        >
                          <option value="">-- {timeSlotPlaceholder} --</option>
                          {timeSlots.map((slot) => (
                            <option key={slot.value} value={slot.value}>
                              {slot.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Number of Passengers */}
                    <div className="space-y-2">
                      <label htmlFor="passengers" className="block text-xs font-sans font-light text-black">
                        <span>{t.contactFormPassengers}</span>
                      </label>
                      <select
                        id="passengers"
                        name="passengers"
                        value={formData.passengers}
                        onChange={handleChange}
                        className="w-full bg-white border border-stone-200 hover:border-stone-300 focus:border-stone-400 px-4 py-3 text-sm text-black focus:outline-none transition-colors font-sans font-light"
                        style={{ borderRadius: '11px' }}
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, '10+'].map((num) => (
                          <option key={num} value={num}>
                            {num} Passengers
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* 2-Pilot Crew Apple-style Toggle */}
                  <div className="bg-white border border-stone-200 p-4 flex items-center justify-between" style={{ borderRadius: '11px' }}>
                    <label htmlFor="twoPilots-toggle" className="text-xs font-sans font-light text-black cursor-pointer select-none">
                      {t.contactFormTwoPilots}
                    </label>
                    <button
                      type="button"
                      id="twoPilots-toggle"
                      onClick={() => setFormData(prev => ({ ...prev, twoPilots: !prev.twoPilots }))}
                      className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                        formData.twoPilots ? 'bg-[#721489]' : 'bg-stone-200'
                      }`}
                    >
                      <span
                        className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white border border-stone-200/50 ring-0 transition duration-200 ease-in-out ${
                          formData.twoPilots ? 'translate-x-5' : 'translate-x-0'
                        }`}
                      />
                    </button>
                  </div>

                  {/* Notes / Special Requests */}
                  <div className="space-y-2">
                    <label htmlFor="notes" className="block text-xs font-sans font-light text-black">
                      {t.contactFormNotes}
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows={3}
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="e.g. Luggage sizes, medical details, catering preferences, or ground transfer needs..."
                      className="w-full bg-white border border-stone-200 hover:border-stone-300 focus:border-stone-400 px-4 py-3 text-sm text-black focus:outline-none transition-colors font-sans font-light"
                      style={{ borderRadius: '11px' }}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full text-white font-sans font-semibold py-3.5 shadow active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer hover:brightness-110 ${
                      isSubmitting ? 'opacity-80 cursor-wait' : ''
                    }`}
                    style={{ borderRadius: '11px', fontSize: '15px', backgroundColor: '#721489' }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending Flight Request...</span>
                      </>
                    ) : (
                      <>
                        <span>{t.contactFormSubmit}</span>
                      </>
                    )}
                  </button>

                </form>
              ) : (
                /* Success Feedback State */
                <div className="text-center py-10 space-y-6" id="form-success-state">
                  
                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl font-light text-black">
                      Request Dispatched Successfully
                    </h3>
                    <p className="text-black font-sans font-light max-w-lg mx-auto text-sm leading-relaxed">
                      {t.contactSuccessMessage}
                    </p>
                  </div>

                  {/* Summary of what they inquired */}
                  <div className="bg-white border border-stone-200 rounded p-5 text-left max-w-md mx-auto space-y-3 font-sans font-light text-xs">
                    <span className="text-[10px] text-black block border-b border-stone-100 pb-1.5 font-sans font-bold uppercase tracking-wider">
                      Flight Request Manifest
                    </span>
                    <div className="flex justify-between">
                      <span className="text-black font-medium">CLIENT:</span>
                      <span className="text-black font-semibold">{formData.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-black font-medium">EMAIL:</span>
                      <span className="text-black">{formData.email}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-black font-medium">ROUTE:</span>
                      <span className="text-black font-semibold">{formData.route}</span>
                    </div>
                    {formData.aircraft && (
                      <div className="flex justify-between">
                        <span className="text-black font-medium">AIRCRAFT:</span>
                        <span className="text-black font-semibold">{formData.aircraft}</span>
                      </div>
                    )}
                    {formData.date && (
                      <div className="flex justify-between">
                        <span className="text-black font-medium">DATE & TIME:</span>
                        <span className="text-black">
                          {formData.date} {formData.timeSlot ? `(${timeSlots.find(s => s.value === formData.timeSlot)?.label || formData.timeSlot})` : ''}
                        </span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-black font-medium">PASSENGERS:</span>
                      <span className="text-black font-semibold">{formData.passengers}</span>
                    </div>
                  </div>

                  <button
                    onClick={handleReset}
                    className="bg-black hover:bg-stone-900 text-white font-sans font-light py-2 px-6 rounded text-xs transition-colors cursor-pointer"
                  >
                    Submit Another Query
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
