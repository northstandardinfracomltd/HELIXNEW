import { TranslationContent, BaseInfo, AircraftInfo, UseCase, Language } from './types';

export const translations: Record<string, TranslationContent> = {
  en: {
    navHome: "Home",
    navBases: "Destinations",
    navFleet: "Our Aircraft",
    navSafety: "Safety & Crew",
    navUseCases: "Activities",
    navOffice: "Meet Us",
    navAbout: "Our Legacy",
    navContact: "Inquire Now",
    
    heroTitle: "Private helicopter flights in the Balearic Islands",
    heroSubtitle: "Book your bespoke helicopter flight in Ibiza or private helicopter charter in Mallorca with HeliBaleares, direct air operator since 2003. We provide direct transfers between Ibiza (IBZ), Formentera, Palma de Mallorca (PMI), Menorca, Alicante, and Valencia with our twin-engine Airbus H135. Enjoy direct operator pricing with zero broker fees.",
    heroCta: "Book Your Flight",
    
    aboutTitle: "Direct Helicopter Flight & Charter Operator Since 2003",
    aboutBadge: "Direct Booking Advantage",
    aboutP1: "We own, control, and operate our Airbus H135 twin-engine helicopter. When you book a helicopter flight in Ibiza or a helicopter charter in Mallorca with HeliBaleares, you deal directly with the flight operator and crew, securing the best pricing without broker markups.",
    aboutP2: "For over two decades, we have maintained impeccable safety standards, providing seamless VIP transfers between airports, private villas, estates, and superyachts across the Balearic archipelago.",
    aboutLocationText: "HeliBaleares is based in Eivissa (Ibiza) and operates across the Balearic Islands as well as the Costa Blanca (from Alicante to Valencia).",
    aboutHighlightTitle: "Why Book Direct With Helibaleares?",
    aboutHighlightDesc: "By booking directly with Helibaleares, you skip middlemen, guarantee instant operational dispatch, and enjoy direct communication with our dedicated crew.",
    
    basesTitle: "Balearic Archipelago Destinations",
    basesSubtitle: "Connecting Ibiza, Formentera, Mallorca, Menorca, Alicante, and Valencia with bespoke helicopter flight and charter operations.",
    
    fleetTitle: "The Private Flight Experience in Airbus H135 in Ibiza, Palma de Mallorca, Menorca, Alicante & Valencia",
    fleetSubtitle: "The twin-engine Airbus H135 is the gold standard for luxury transfers, combining exceptional safety, high speed, quiet cabin comfort, and generous luggage capacity.",
    fleetSpecs: "Specifications",
    fleetPax: "Passengers",
    fleetSpeed: "Cruising Speed",
    fleetRange: "Range",
    fleetRequestBtn: "Request this aircraft",
    
    safetyTitle: "Safety First: Prohibited Items & Crew Standards",
    safetySubtitle: "Rigorous standards for a seamless flight experience. Please read our safety guidelines carefully.",
    safetyForbiddenTitle: "Strictly Prohibited on Board",
    safetyForbiddenDesc: "In accordance with international aviation security rules, the following items are strictly prohibited in carry-on and luggage on all flights:",
    safetyPilotsTitle: "Seasoned Pilots & Ultimate Safety",
    safetyPilotsDesc: "At Helibaleares, we maintain a flawless safety record. All of our pilots are veteran captains with thousands of logged hours in high-density European airspace.",
    safetyTwoPilots: "Dual-Pilot Crew: Available upon request for any of our helicopter transfers.",
    
    forbiddenItemsList: [
      "Explosives, fireworks, ammunition, and flares.",
      "Flammable liquids and solids (e.g., lighter fuels, matches, paints, solvents).",
      "Compressed gases (flammable, non-flammable, or poisonous camping gas, butane, propane).",
      "Corrosive materials (acids, alkalis, mercury, wet-cell batteries).",
      "Toxic, infectious, or hazardous bio-substances.",
      "Unlicensed weapons, firearms, or sharp objects of tactical nature."
    ],
    
    useCasesTitle: "Tailored Helicopter Services",
    useCasesSubtitle: "Whatever your flight request, Helibaleares executes with military-grade precision and absolute luxury.",
    
    contactTitle: "Inquire Flight Availability",
    contactSubtitle: "Helibaleares operates exclusively on a bespoke basis. Complete the form below to receive a direct quote within 15 minutes.",
    contactFormName: "Full Name",
    contactFormEmail: "Email Address",
    contactFormRoute: "Requested Route / Destination",
    contactFormAircraft: "Aircraft",
    contactFormDate: "Target Flight Date & Time",
    contactFormPassengers: "Number of Passengers",
    contactFormTwoPilots: "Request 2-Pilot Crew (On-demand configuration)",
    contactFormNotes: "Special Requirements & Flight Notes",
    contactFormSubmit: "Submit Flight Query",
    contactSuccessMessage: "Thank you for your request. Our direct flight coordinators will review your itinerary and reply within 15 minutes with a custom quotation.",
    contactDirectEmailText: "For urgent flight requests, contact our flight operations directly at:",
    
    legalMentionsTitle: "Legal Mentions, Regulations & Flight Prerequisites.",
    legalMentionsContent: "Eliance Civil HIS GROUP S.A. (AOC ES.AOC.131) is a licensed air carrier operating under EU aviation security protocols. Founded in 2003, we operate our Airbus H135 twin-engine helicopter. Flights are subject to weather conditions and air traffic control clearance.",
    legalGuaranteeDeposit: "— Guarantee Deposit: A credit card pre-authorization equivalent to 45% of the total amount is required to secure the reservation. On the day of the flight, this hold can either be canceled/refunded or deducted from the final amount paid. Full or remaining payment can be settled on-site by credit card, cash (up to €1,000 for tax residents in Spain and €10,000 for non-residents), or instant bank transfer.",
    legalDocumentation: "— Documentation: We will need one government-issued photo ID from one passenger to register all luggage under their name.",
    footerRights: "© 2026 Eliance Civil HIS GROUP S.A. (AOC) ES.AOC.131 — EC 135. All rights reserved.",
    footerOperatorDisclaimer: "Helicopter transfers in Ibiza, Formentera, Mallorca, Menorca, Alicante, and Valencia.",
    topAnnouncementBar: "Summer 2026: During high season, we kindly invite you to book your flight 4 to 6 days prior to your desired date to ensure the ultimate experience."
  },
  de: {
    navHome: "Startseite",
    navBases: "Destinationen",
    navFleet: "Unser Helikopter",
    navSafety: "Sicherheit & Crew",
    navUseCases: "Aktivitäten",
    navOffice: "Unser Büro",
    navAbout: "Unsere Tradition",
    navContact: "Flug anfragen",
    
    heroTitle: "Private Hubschrauberflüge auf den Balearen",
    heroSubtitle: "Buchen Sie Ihre maßgeschneiderten Helikopter-Charterflüge mit Helibaleares, gegründet 2003, in Ibiza, Formentera, Mallorca, Menorca, Alicante und Valencia. Genießen Sie persönlichen Service, Direktpreise ohne Zwischenhändler und die absolute Sicherheit unseres zweimotorigen Airbus H135.",
    heroCta: "Flug anfragen",
    
    aboutTitle: "Direkter Helikopter-Flugbetreiber seit 2003",
    aboutBadge: "Vorteil der Direktbuchung",
    aboutP1: "Wir besitzen, kontrollieren und betreiben unseren zweimotorigen Airbus H135 Helikopter. Wenn Sie bei Helibaleares buchen, sprechen Sie direkt mit der Crew und sichern sich den besten Preis ohne Vermittlergebühren.",
    aboutP2: "Seit über zwei Jahrzehnten halten wir höchste Sicherheitsstandards ein und bieten nahtlose VIP-Transfers zwischen Flughäfen, privaten Fincas, Anwesen und Yachten auf den Balearen.",
    aboutLocationText: "HeliBaleares ist ein Unternehmen mit Sitz in Eivissa (Ibiza) und ist auf den Balearen sowie an der Costa Blanca (von Alicante bis Valencia) tätig.",
    aboutHighlightTitle: "Warum direkt bei Helibaleares buchen?",
    aboutHighlightDesc: "Durch die Direktbuchung sparen Sie Zwischenhändlergebühren und erhalten sofortige betriebliche Updates von unserer Flugleitung.",
    
    basesTitle: "Destinationen auf den Balearen",
    basesSubtitle: "Verbindung von Ibiza, Formentera, Mallorca, Menorca, Alicante und Valencia mit direkten Helikopterflügen.",
    
    fleetTitle: "Das private Flugerlebnis im Airbus H135 in Ibiza, Palma de Mallorca, Menorca, Alicante & Valencia",
    fleetSubtitle: "Der zweimotorige Airbus H135 ist der Maßstab für Luxustransfers und vereint höchste Sicherheit, Reisegeschwindigkeit, leise Kabine und großzügiges Gepäckvolumen.",
    fleetSpecs: "Spezifikationen",
    fleetPax: "Passagiere",
    fleetSpeed: "Reisegeschwindigkeit",
    fleetRange: "Reichweite",
    fleetRequestBtn: "Diesen Helikopter anfragen",
    
    safetyTitle: "Sicherheit zuerst: Verbotene Gegenstände & Crew-Standards",
    safetySubtitle: "Strenge Standards für ein reibungsloses Flugerlebnis.",
    safetyForbiddenTitle: "An Bord strengstens verboten",
    safetyForbiddenDesc: "In Übereinstimmung mit den internationalen Luftsicherheitsvorschriften sind folgende Gegenstände an Bord verboten:",
    safetyPilotsTitle: "Erfahrene Piloten & Ultimative Sicherheit",
    safetyPilotsDesc: "Bei Helibaleares blicken wir auf eine makellose Sicherheitsbilanz zurück. Alle unsere Piloten sind erfahrene Kommandanten.",
    safetyTwoPilots: "Doppel-Pilot-Crew: Auf Anfrage für alle unsere Flüge verfügbar.",
    
    forbiddenItemsList: [
      "Sprengstoffe, Feuerwerkskörper, Munition und Leuchtraketen.",
      "Entflammbare Flüssigkeiten und Feststoffe (Feuerzeugbenzin, Streichhölzer, Farben).",
      "Komprimierte Gase (Campinggas, Butan, Propan).",
      "Ätzende Stoffe (Säuren, Laugen, Quecksilber).",
      "Toxische oder gefährliche biologische Substanzen.",
      "Nicht lizenzierte Waffen oder scharfe Gegenstände."
    ],
    
    useCasesTitle: "Maßgeschneiderte Helikopter-Flüge",
    useCasesSubtitle: "Was auch immer Ihr Anliegen ist, Helibaleares führt es mit höchster Präzision und Luxus aus.",
    
    contactTitle: "Flugverfügbarkeit anfragen",
    contactSubtitle: "Helibaleares arbeitet ausschließlich maßgeschneidert. Füllen Sie das Formular aus für ein Angebot innerhalb von 15 Minuten.",
    contactFormName: "Vollständiger Name",
    contactFormEmail: "E-Mail-Adresse",
    contactFormRoute: "Angeforderte Route / Zielort",
    contactFormAircraft: "Helikopter",
    contactFormDate: "Gewünschtes Flugdatum & Uhrzeit",
    contactFormPassengers: "Anzahl der Passagiere",
    contactFormTwoPilots: "2-Piloten-Crew anfragen",
    contactFormNotes: "Besondere Anforderungen & Flugnotizen",
    contactFormSubmit: "Fluganfrage senden",
    contactSuccessMessage: "Vielen Dank für Ihre Anfrage. Wir antworten Ihnen innerhalb von 15 Minuten mit einem maßgeschneiderten Angebot.",
    contactDirectEmailText: "Für dringende Anfragen wenden Sie sich direkt an:",
    
    legalMentionsTitle: "Rechtliche Hinweise, Vorschriften & Flugvoraussetzungen",
    legalMentionsContent: "Eliance Civil HIS GROUP S.A. (AOC ES.AOC.131) ist ein lizenziertes Luftfahrtunternehmen nach EU-Sicherheitsstandards. Gegründet 2003, betreiben wir unseren zweimotorigen Airbus H135 Helikopter. Flugbetriebe unterliegen Wetterbedingungen und der Freigabe der Flugverkehrskontrolle.",
    legalGuaranteeDeposit: "— Garantiekaution: Zur Sicherung der Reservierung ist eine Kreditkarten-Pre-Autorisierung in Höhe von 45 % des Gesamtbetrags erforderlich. Am Tag des Fluges kann dieser Einbehalt entweder storniert/erstattet oder vom zu zahlenden Endbetrag abgezogen werden. Die vollständige Zahlung oder Restzahlung kann vor Ort per Kreditkarte, bar (bis zu 1.000 € für in Spanien Steueransässige und 10.000 € für Nichtansässige) oder per Sofortüberweisung erfolgen.",
    legalDocumentation: "— Dokumentation: Wir benötigen einen behördlichen Lichtbildausweis von einem der Passagiere, um das gesamte Gepäck auf seinen Namen zu registrieren.",
    footerRights: "© 2026 Eliance Civil HIS GROUP S.A. (AOC) ES.AOC.131 — EC 135. All rights reserved.",
    footerOperatorDisclaimer: "Helikopter-Transfers in Ibiza, Formentera, Mallorca, Menorca, Alicante und Valencia.",
    topAnnouncementBar: "Sommer 2026: In der Hochsaison bitten wir Sie, Ihren Flug 4 bis 6 Tage vor dem gewünschten Datum zu buchen, um Ihnen das beste Erlebnis zu bieten."
  },
  nl: {
    navHome: "Home",
    navBases: "Bestemmingen",
    navFleet: "Onze Helikopter",
    navSafety: "Veiligheid & Crew",
    navUseCases: "Activiteiten",
    navOffice: "Ons Kantoor",
    navAbout: "Onze Erfenis",
    navContact: "Aanvraag indienen",
    
    heroTitle: "Privé helikoptervluchten op de Balearen",
    heroSubtitle: "Boek uw helikopter chartervluchten op maat bij Helibaleares, opgericht in 2003, actief in Ibiza, Formentera, Mallorca, Menorca, Alicante en Valencia. Geniet van persoonlijke service, directe operatortarieven zonder tussenpersonen en de absolute veiligheid van onze tweemotorige Airbus H135.",
    heroCta: "Boek uw vlucht",
    
    aboutTitle: "Directe Helikopter Vlucht Operator Sinds 2003",
    aboutBadge: "Voordeel van Direct Boeken",
    aboutP1: "Wij bezitten, controleren en exploiteren onze tweemotorige Airbus H135 helikopter. Wanneer u bij Helibaleares boekt, spreekt u rechtstreeks met de bemanning voor de scherpste tarieven.",
    aboutP2: "Al meer dan twee decennia handhaven we onberispelijke veiligheidsnormen en verzorgen we VIP-transfers tussen luchthavens, privé-fincas, villa's en jachten op de Balearen.",
    aboutLocationText: "HeliBaleares is gevestigd in Eivissa (Ibiza) en is actief op de Balearen en aan de Costa Blanca (van Alicante tot Valencia).",
    aboutHighlightTitle: "Waarom direct bij Helibaleares boeken?",
    aboutHighlightDesc: "Door rechtstreeks bij Helibaleares te boeken vermijdt u tussenpersoonkosten en ontvangt u directe operationele updates.",
    
    basesTitle: "Bestemmingen op de Balearen",
    basesSubtitle: "Directe helikopterverbindingen tussen Ibiza, Formentera, Mallorca, Menorca, Alicante en Valencia.",
    
    fleetTitle: "De privévlucht ervaring in Airbus H135 op Ibiza, Palma de Mallorca, Menorca, Alicante & Valencia",
    fleetSubtitle: "De tweemotorige Airbus H135 is de norm voor luxe helikoptertransfers en combineert optimale veiligheid, snelheid, een stille cabine en een ruime bagageruimte.",
    fleetSpecs: "Specificaties",
    fleetPax: "Passagiers",
    fleetSpeed: "Kruissnelheid",
    fleetRange: "Bereik",
    fleetRequestBtn: "Vraag deze helikopter aan",
    
    safetyTitle: "Veiligheid Eerst: Verboden Voorwerpen & Bemanningseisen",
    safetySubtitle: "Strenge normen voor een zorgeloze vlucht.",
    safetyForbiddenTitle: "Ten strengste verboden aan boord",
    safetyForbiddenDesc: "De volgende voorwerpen zijn strikt verboden aan boord op al onze vluchten:",
    safetyPilotsTitle: "Ervaren Piloten & Ultieme Veiligheid",
    safetyPilotsDesc: "Bij Helibaleares hanteren we een vlekkeloze veiligheidshistorie.",
    safetyTwoPilots: "Dubbele Piloot Bemanning: Op aanvraag beschikbaar.",
    
    forbiddenItemsList: [
      "Explosieven, vuurwerk, munitie en fakkels.",
      "Brandbare vloeistoffen en vaste stoffen (aanstekerbenzine, lucifers, verf).",
      "Samengeperste gassen (campinggas, butaan, propaan).",
      "Bijtende stoffen (zuren, kwik).",
      "Toxische of gevaarlijke biologische stoffen.",
      "Niet-gelicentieerde wapens of scherpe voorwerpen."
    ],
    
    useCasesTitle: "Helikopterdiensten op Maat",
    useCasesSubtitle: "Wat uw wens ook is, Helibaleares voert deze uit met precisie en luxe.",
    
    contactTitle: "Vraag Vluchtbeschikbaarheid aan",
    contactSubtitle: "Helibaleares werkt uitsluitend op maat. Vul het formulier in voor een offerte binnen 15 minuten.",
    contactFormName: "Volledige Naam",
    contactFormEmail: "E-mailadres",
    contactFormRoute: "Gevraagde Route / Bestemming",
    contactFormAircraft: "Helikopter",
    contactFormDate: "Gewenste Vliegdatum & Tijdstip",
    contactFormPassengers: "Aantal Passagiers",
    contactFormTwoPilots: "Vraag 2-koppige bemanning aan",
    contactFormNotes: "Speciale Wensen & Vluchtnotities",
    contactFormSubmit: "Vluchtaanvraag versturen",
    contactSuccessMessage: "Dank u voor uw aanvraag. Wij reageren binnen 15 minuten met een offerte op maat.",
    contactDirectEmailText: "Voor dringende verzoeken kunt u rechtstreeks mailen naar:",
    
    legalMentionsTitle: "Juridische Vermeldingen, Regelgeving & Vluchtvoorwaarden",
    legalMentionsContent: "Eliance Civil HIS GROUP S.A. (AOC ES.AOC.131) is een gelicentieerde luchtvaartmaatschappij volgens EU-veiligheidsprotocollen. Opgericht in 2003, exploiteren we onze tweemotorige Airbus H135 helikopter. Vluchten zijn onderhevig aan weersomstandigheden en luchtverkeersleiding.",
    legalGuaranteeDeposit: "— Garantieborg: Een creditcard pre-autorisatie van 45% van het totale bedrag is vereist om de reservering te bevestigen. Op de dag van de vlucht kan deze inhouding worden geannuleerd/terugbetaald of worden ingehouden op het definitieve te betalen bedrag. De volledige of resterende betaling kan ter plaatse worden voldaan per creditcard, contant geld (tot € 1.000 voor belastingplichtigen in Spanje en € 10.000 voor niet-inwoners) of directe bankoverschrijving.",
    legalDocumentation: "— Documentatie: We hebben een officieel identiteitsbewijs met foto van één van de passagiers nodig om alle bagage op diens naam te registreren.",
    footerRights: "© 2026 Eliance Civil HIS GROUP S.A. (AOC) ES.AOC.131 — EC 135. All rights reserved.",
    footerOperatorDisclaimer: "Helikoptertransfers in Ibiza, Formentera, Mallorca, Menorca, Alicante en Valencia.",
    topAnnouncementBar: "Zomer 2026: In het hoogseizoen raden we u aan uw vlucht 4 tot 6 dagen voor de gewenste datum te boeken voor de beste ervaring."
  },
  es: {
    navHome: "Inicio",
    navBases: "Destinos",
    navFleet: "Nuestra Aeronave",
    navSafety: "Seguridad y Tripulación",
    navUseCases: "Actividades",
    navOffice: "Nuestra Oficina",
    navAbout: "Nuestra Historia",
    navContact: "Solicitud de Vuelo",
    
    heroTitle: "Vuelos privados en helicóptero en las Islas Baleares",
    heroSubtitle: "Reserve sus vuelos chárter privados en helicóptero con Helibaleares, empresa fundada en 2003, operando en Ibiza, Formentera, Mallorca, Menorca, Alicante y Valencia. Disfrute de un servicio personalizado, precios directos de operador sin comisiones de intermediarios y la máxima seguridad de nuestro helicóptero bimotor Airbus H135.",
    heroCta: "Solicitar Vuelo",
    
    aboutTitle: "Operador Directo de Vuelos en Helicóptero desde 2003",
    aboutBadge: "Ventaja de Reserva Directa",
    aboutP1: "Somos propietarios y operadores de nuestro helicóptero bimotor Airbus H135. Al reservar con Helibaleares, trata directamente con la tripulación para obtener el mejor precio garantizado sin costes añadidos de agentes.",
    aboutP2: "Durante más de dos décadas, hemos mantenido estándares impecables de seguridad realizando traslados VIP entre aeropuertos, fincas privadas, villas y yates en el archipiélago balear.",
    aboutLocationText: "HeliBaleares es una empresa con sede en Eivissa (Ibiza) y opera en las Islas Baleares, así como en la Costa Blanca (de Alicante a Valencia).",
    aboutHighlightTitle: "¿Por qué reservar directamente con Helibaleares?",
    aboutHighlightDesc: "Al elegir Helibaleares en directo, evita intermediarios, asegura respuesta inmediata y comunicación fluida con nuestro equipo.",
    
    basesTitle: "Destinos en el Archipiélago Balear",
    basesSubtitle: "Conexiones directas en helicóptero entre Ibiza, Formentera, Mallorca, Menorca, Alicante y Valencia.",
    
    fleetTitle: "La experiencia de vuelo privado en Airbus H135 en Ibiza, Palma de Mallorca, Menorca, Alicante & Valencia",
    fleetSubtitle: "El Airbus H135 bimotor es la referencia en traslados de lujo en helicóptero, combinando máxima seguridad, velocidad, cabina insonorizada y amplio compartimento para equipaje.",
    fleetSpecs: "Especificaciones",
    fleetPax: "Pasajeros",
    fleetSpeed: "Velocidad de Crucero",
    fleetRange: "Autonomía",
    fleetRequestBtn: "Solicitar este helicóptero",
    
    safetyTitle: "La Seguridad es lo Primero: Artículos Prohibidos y Estándares",
    safetySubtitle: "Estándares rigurosos para un vuelo perfecto.",
    safetyForbiddenTitle: "Estrictamente Prohibido a Bordo",
    safetyForbiddenDesc: "Los siguientes artículos están estrictamente prohibidos a bordo en todos los vuelos:",
    safetyPilotsTitle: "Pilotos Experimentados y Máxima Seguridad",
    safetyPilotsDesc: "En Helibaleares mantenemos un historial de seguridad impecable.",
    safetyTwoPilots: "Tripulación de Doble Piloto: Disponible bajo demanda.",
    
    forbiddenItemsList: [
      "Explosivos, fuegos artificiales, municiones y bengalas.",
      "Líquidos y sólidos inflamables (combustibles, cerillas, pinturas).",
      "Gases comprimidos (gas de camping, butano, propano).",
      "Materiales corrosivos (ácidos, mercurio).",
      "Sustancias biológicas peligrosas.",
      "Armas sin licencia u objetos punzantes tácticos."
    ],
    
    useCasesTitle: "Servicios de Helicóptero a Medida",
    useCasesSubtitle: "Sea cual sea su necesidad, Helibaleares la ejecuta con precisión y elegancia.",
    
    contactTitle: "Consultar Disponibilidad de Vuelo",
    contactSubtitle: "Helibaleares opera exclusivamente a medida. Complete el formulario para recibir un presupuesto personalizado en menos de 15 minutos.",
    contactFormName: "Nombre Completo",
    contactFormEmail: "Correo Electrónico",
    contactFormRoute: "Ruta / Destino Solicitado",
    contactFormAircraft: "Aeronave",
    contactFormDate: "Fecha y Hora Previstas",
    contactFormPassengers: "Número de Pasajeros",
    contactFormTwoPilots: "Solicitar tripulación de 2 pilotos",
    contactFormNotes: "Requisitos Especiales y Notas",
    contactFormSubmit: "Enviar Solicitud de Vuelo",
    contactSuccessMessage: "Gracias por su solicitud. Le responderemos en menos de 15 minutos con un presupuesto a medida.",
    contactDirectEmailText: "Para solicitudes urgentes, contacte directamente con operaciones:",
    
    legalMentionsTitle: "Menciones Legales, Normativas y Requisitos del Vuelo",
    legalMentionsContent: "Eliance Civil HIS GROUP S.A. (AOC ES.AOC.131) es una compañía aérea de transporte autorizada bajo protocolos de seguridad de la UE. Fundada en 2003, operamos nuestro helicóptero bimotor Airbus H135. Las operaciones están sujetas a condiciones meteorológicas y autorización del control aéreo.",
    legalGuaranteeDeposit: "— Depósito de garantía: Se requiere una preautorización con tarjeta de crédito equivalente al 45% del importe total para asegurar la reserva. El día del vuelo, esta retención puede ser cancelada/reembolsada o deducida del importe final abonado. El pago total o restante se puede liquidar en el lugar con tarjeta de crédito, efectivo (hasta 1.000 € para residentes fiscales en España y 10.000 € para no residentes) o transferencia bancaria instantánea.",
    legalDocumentation: "— Documentación: Necesitaremos un documento de identidad oficial con foto de uno de los pasajeros para registrar todo el equipaje a su nombre.",
    footerRights: "© 2026 Eliance Civil HIS GROUP S.A. (AOC) ES.AOC.131 — EC 135. All rights reserved.",
    footerOperatorDisclaimer: "Traslados en helicóptero en Ibiza, Formentera, Mallorca, Menorca, Alicante y Valencia.",
    topAnnouncementBar: "Verano 2026: En temporada alta, le invitamos a reservar su vuelo de 4 a 6 días antes de la fecha deseada para ofrecerle la mejor experiencia."
  },
  fr: {
    navHome: "Accueil",
    navBases: "Nos Destinations",
    navFleet: "Notre Appareil",
    navSafety: "Sécurité & Équipage",
    navUseCases: "Activités",
    navOffice: "Notre Bureau",
    navAbout: "Notre Histoire",
    navContact: "Nous Contacter",
    
    heroTitle: "Vols privés en hélicoptère aux îles Baléares",
    heroSubtitle: "Réservez vos vols charter privés en hélicoptère avec Helibaleares, compagnie établie depuis 2003, opérant à Ibiza, Formentera, Majorque, Minorque, Alicante et Valence. Bénéficiez d'un service sur-mesure, de tarifs directs exploitant sans frais d'intermédiaire et de la sécurité absolue de notre hélicoptère bimoteur Airbus H135.",
    heroCta: "Demander un Vol",
    
    aboutTitle: "Opérateur Direct de Vols en Hélicoptère Depuis 2003",
    aboutBadge: "Avantage Réservation Directe",
    aboutP1: "Nous possédons, contrôlons et opérons directement notre hélicoptère bimoteur Airbus H135. En réservant directement auprès d'Helibaleares, vous échangez sans intermédiaire avec l'équipage au meilleur tarif garanti.",
    aboutP2: "Depuis plus de deux décennies, nous maintenons des standards de sécurité irréprochables pour vos transferts VIP entre aéroports, héliports privés, villas, domaines et yachts sur l'ensemble de l'archipel des Baléares.",
    aboutLocationText: "HeliBaleares est une entreprise basée à Eivissa (Ibiza) et opère aux Îles Baléares ainsi que sur la Costa Blanca (de Alicante à Valence).",
    aboutHighlightTitle: "Pourquoi Réserver en Direct chez Helibaleares ?",
    aboutHighlightDesc: "En choisissant Helibaleares en direct, vous évitez les commissions de courtage, garantissez un traitement prioritaire de votre manifeste et échangez directement avec nos pilotes.",
    
    basesTitle: "Destinations de l'Archipel des Baléares",
    basesSubtitle: "Desserte directe en hélicoptère d'Ibiza, Formentera, Majorque, Minorque, Alicante et Valence.",
    
    fleetTitle: "L’expérience de vol privé en Airbus H135 à Ibiza, Palma de Mallorca, Menorca, Alicante & Valencia",
    fleetSubtitle: "L'Airbus H135 bimoteur est la référence mondiale du transfert d'exception, alliant sécurité maximale, vitesse de croisière, cabine silencieuse et compartiment bagages dédié.",
    fleetSpecs: "Caractéristiques",
    fleetPax: "Passagers",
    fleetSpeed: "Vitesse de croisière",
    fleetRange: "Rayon d'action",
    fleetRequestBtn: "Sélectionner cet appareil",
    
    safetyTitle: "Sécurité : Matières Interdites & Équipages",
    safetySubtitle: "Des standards rigoureux pour votre sérénité.",
    safetyForbiddenTitle: "Strictement Interdit à Bord",
    safetyForbiddenDesc: "Conformément aux réglementations aériennes internationales, les matières suivantes sont strictement interdites à bord :",
    safetyPilotsTitle: "Pilotes Émérites & Sécurité Optimale",
    safetyPilotsDesc: "Helibaleares affiche un bilan de sécurité exemplaire depuis 2003. Tous nos pilotes sont des commandants de bord chevronnés.",
    safetyTwoPilots: "Double Équipage : Disponible sur simple demande pour l'ensemble de nos vols.",
    
    forbiddenItemsList: [
      "Explosifs, feux d'artifice, munitions et fusées de détresse.",
      "Liquides et solides inflammables (combustibles, allumettes, peintures).",
      "Gaz comprimés (gaz de camping, butane, propane).",
      "Matières corrosives (acides, mercure).",
      "Substances toxiques ou biologiques dangereuses.",
      "Armes sans licence ou objets tranchants tactiques."
    ],
    
    useCasesTitle: "Des Vols Adaptés à Vos Exigences",
    useCasesSubtitle: "Quelle que soit votre destination, Helibaleares orchestre votre vol avec rigueur et sécurité.",
    
    contactTitle: "Faire une Demande de Vol",
    contactSubtitle: "Helibaleares opère exclusivement sur-mesure. Complétez le formulaire ci-dessous pour recevoir un devis direct sous 15 minutes.",
    contactFormName: "Nom Complet",
    contactFormEmail: "Adresse E-mail",
    contactFormRoute: "Itinéraire / Destination Souhaitée",
    contactFormAircraft: "Appareil",
    contactFormDate: "Date & Heure Souhaitées du Vol",
    contactFormPassengers: "Nombre de Passagers",
    contactFormTwoPilots: "Demander un équipage à 2 pilotes (En option)",
    contactFormNotes: "Exigences Particulières / Consignes de Vol",
    contactFormSubmit: "Envoyer ma Demande de Vol",
    contactSuccessMessage: "Merci pour votre demande. Nos coordinateurs vous transmettront un devis sur-mesure sous 15 minutes.",
    contactDirectEmailText: "Pour toute demande urgente, contactez notre équipe opérationnelle directement sur :",
    
    legalMentionsTitle: "Mentions Légales, Réglementations & Prérequis du Vol",
    legalMentionsContent: "Eliance Civil HIS GROUP S.A. (AOC ES.AOC.131) est un transporteur aérien certifié selon les normes de sécurité de l'UE. Établie en 2003, la compagnie exploite son hélicoptère bimoteur Airbus H135. Les vols sont soumis aux conditions météorologiques et aux autorisations de la circulation aérienne.",
    legalGuaranteeDeposit: "— Dépôt de garantie : Une pré-autorisation bancaire (carte de crédit) équivalente à 45 % du montant total est requise pour sécuriser la réservation. Le jour du vol, cette empreinte peut soit être annulée/remboursée, soit être déduite du montant final réglé. Le règlement intégral ou du solde peut s'effectuer sur place par carte bancaire, espèces (jusqu'à 1 000 € pour les résidents fiscaux en Espagne et 10 000 € pour les non-résidents) ou virement bancaire instantané.",
    legalDocumentation: "— Documentation : Nous aurons besoin d'une pièce d'identité officielle avec photo d'un des passagers afin d'enregistrer l'ensemble des bagages à son nom.",
    footerRights: "© 2026 Eliance Civil HIS GROUP S.A. (AOC) ES.AOC.131 — EC 135. All rights reserved.",
    footerOperatorDisclaimer: "Transferts hélicoptère à Ibiza, Formentera, Majorque, Minorque, Alicante et Valence.",
    topAnnouncementBar: "Été 2026 : En haute saison, nous vous invitons à réserver votre vol 4 à 6 jours avant la date souhaitée pour vous offrir la meilleure expérience."
  }
};

export const getBasesData = (lang: Language): BaseInfo[] => {
  const isFr = lang === 'fr';
  const isDe = lang === 'de';
  const isNl = lang === 'nl';
  const isEs = lang === 'es';

  return [
    {
      id: "ibiza-airport",
      name: isFr ? "Ibiza - Eivissa (Aéroport)" : isDe ? "Ibiza - Eivissa (Flughafen)" : isNl ? "Ibiza - Eivissa (Luchthaven)" : isEs ? "Ibiza - Eivissa (Aeropuerto)" : "Ibiza - Eivissa (Airport)",
      location: isFr ? "Aéroport d'Ibiza (IBZ)" : isDe ? "Flughafen Ibiza (IBZ)" : isNl ? "Luchthaven Ibiza (IBZ)" : isEs ? "Aeropuerto de Ibiza (IBZ)" : "Ibiza Airport (IBZ)",
      seoTag: "Helicopter Ibiza Airport Transfer",
      description: isFr
        ? "Transfert immédiat depuis le terminal exécutif d'Ibiza (IBZ) dès votre arrivée."
        : isDe
        ? "Direkter Transfer vom Exekutivterminal Ibiza (IBZ) sofort nach Ihrer Ankunft."
        : isNl
        ? "Directe transfer vanaf de executive terminal op Ibiza (IBZ) direct bij aankomst."
        : isEs
        ? "Traslado inmediato desde la terminal ejecutiva de Ibiza (IBZ) a su llegada."
        : "Immediate transfer from Ibiza executive terminal (IBZ) upon your arrival.",
      imageUrl: "https://civilprom.s3.eu-north-1.amazonaws.com/HeliBaleares+-+Ibiza+Airport.png"
    },
    {
      id: "ibiza-inland",
      name: isFr ? "Ibiza - Eivissa (Dans les terres)" : isDe ? "Ibiza - Eivissa (Im Landesinneren)" : isNl ? "Ibiza - Eivissa (Binnenland)" : isEs ? "Ibiza - Eivissa (En el interior)" : "Ibiza - Eivissa (Inland & Villas)",
      location: isFr ? "Héliports Privés & Villas, Ibiza" : isDe ? "Private Landeplätze & Fincas, Ibiza" : isNl ? "Privé Helipads & Fincas, Ibiza" : isEs ? "Helipuertos Privados y Fincas, Ibiza" : "Private Helipads & Villas, Ibiza",
      seoTag: "Helicopter Villa & Private Estate Ibiza",
      description: isFr
        ? "Atterrissage direct sur les héliports privés de villas, domaines et fincas d'Ibiza."
        : isDe
        ? "Direkte Landung auf privaten Hubschrauberlandeplätzen von Luxusvillas und Fincas auf Ibiza."
        : isNl
        ? "Directe landing op privé helipads van luxe villa's en landgoederen op Ibiza."
        : isEs
        ? "Aterrizaje directo en helipuertos privados de villas, fincas y propiedades en Ibiza."
        : "Direct landing on private helipads at luxury villas, estates and fincas in Ibiza.",
      imageUrl: "https://civilprom.s3.eu-north-1.amazonaws.com/HeliBaleares+-+Eivissa+Island.png"
    },
    {
      id: "formentera",
      name: isFr ? "Formentera" : isDe ? "Insel Formentera" : isNl ? "Eiland Formentera" : isEs ? "Isla de Formentera" : "Formentera Island",
      location: isFr ? "Île de Formentera" : isDe ? "Insel Formentera" : isNl ? "Eiland Formentera" : isEs ? "Isla de Formentera" : "Formentera Island",
      seoTag: "Direct Helicopter Shuttle Formentera",
      description: isFr
        ? "Reliez Ibiza à Formentera en seulement 12 minutes de vol panoramique sur mer turquoise."
        : isDe
        ? "Verbinden Sie Ibiza mit Formentera in nur 12 Minuten Panoramaflug über türkisblauem Meer."
        : isNl
        ? "Verbind Ibiza met Formentera in slechts 12 minuten panoramische vlucht over turquoise water."
        : isEs
        ? "Conecte Ibiza con Formentera en solo 12 minutos de vuelo panorámico sobre aguas turquesas."
        : "Connect Ibiza to Formentera in just 12 minutes of scenic flight over turquoise waters.",
      imageUrl: "https://civilprom.s3.eu-north-1.amazonaws.com/HeliBaleares+-+Formentera.png"
    },
    {
      id: "palma-airport",
      name: isFr ? "Palma de Majorque (Aéroport)" : isDe ? "Palma de Mallorca (Flughafen)" : isNl ? "Palma de Mallorca (Luchthaven)" : isEs ? "Palma de Mallorca (Aeropuerto)" : "Palma de Mallorca (Airport)",
      location: isFr ? "Aéroport de Palma (PMI)" : isDe ? "Flughafen Palma de Mallorca (PMI)" : isNl ? "Luchthaven Palma de Mallorca (PMI)" : isEs ? "Aeropuerto de Palma de Mallorca (PMI)" : "Palma de Mallorca Airport (PMI)",
      seoTag: "Palma Airport Helicopter Base",
      description: isFr
        ? "Liaison directe depuis l'aéroport international de Palma de Majorque (PMI)."
        : isDe
        ? "Direkte Hubschrauberverbindung vom internationalen Flughafen Palma de Mallorca (PMI)."
        : isNl
        ? "Directe helikopterverbinding vanaf de internationale luchthaven van Palma de Mallorca (PMI)."
        : isEs
        ? "Conexión directa en helicóptero desde el Aeropuerto Internacional de Palma de Mallorca (PMI)."
        : "Direct helicopter connection from Palma de Mallorca International Airport (PMI).",
      imageUrl: "https://civilprom.s3.eu-north-1.amazonaws.com/HeliBaleares+-+Palma+Mallorca.png"
    },
    {
      id: "palma-inland",
      name: isFr ? "Majorque (Dans les terres)" : isDe ? "Mallorca (Im Landesinneren)" : isNl ? "Mallorca (Binnenland)" : isEs ? "Mallorca (En el interior)" : "Mallorca (Inland & Estates)",
      location: isFr ? "Domaines & Fincas, Majorque" : isDe ? "Anwesen & Fincas, Mallorca" : isNl ? "Landgoederen & Fincas, Mallorca" : isEs ? "Propiedades y Fincas, Mallorca" : "Estates & Fincas, Mallorca",
      seoTag: "Mallorca Inland Helicopter Flight",
      description: isFr
        ? "Accès direct aux propriétés privées, hôtels d'exception et fincas du cœur de Majorque."
        : isDe
        ? "Direkter Zugang zu privaten Anwesen, Luxushotels und Fincas im Herzen Mallorcas."
        : isNl
        ? "Directe toegang tot privé landgoederen, boetiekhotels en fincas op Mallorca."
        : isEs
        ? "Acceso directo a propiedades privadas, hoteles con encanto y fincas en Mallorca."
        : "Direct access to private estates, luxury boutique hotels and fincas across Mallorca.",
      imageUrl: "https://civilprom.s3.eu-north-1.amazonaws.com/HeliBaleares+-+Mallorca+Island.png"
    },
    {
      id: "menorca-airport",
      name: isFr ? "Minorque (Aéroport)" : isDe ? "Menorca (Flughafen)" : isNl ? "Menorca (Luchthaven)" : isEs ? "Menorca (Aeropuerto)" : "Menorca (Airport)",
      location: isFr ? "Aéroport de Minorque (MAH)" : isDe ? "Flughafen Menorca (MAH)" : isNl ? "Luchthaven Menorca (MAH)" : isEs ? "Aeropuerto de Menorca (MAH)" : "Menorca Airport (MAH)",
      seoTag: "Menorca Airport Helicopter Shuttle",
      description: isFr
        ? "Navette rapide et directe desservant l'aéroport de Minorque (MAH)."
        : isDe
        ? "Schneller und direkter Shuttle-Service zum und vom Flughafen Menorca (MAH)."
        : isNl
        ? "Snelle en directe shuttledienst naar de luchthaven van Menorca (MAH)."
        : isEs
        ? "Lanzadera rápida y directa con servicio al Aeropuerto de Menorca (MAH)."
        : "Fast and direct helicopter shuttle serving Menorca Airport (MAH).",
      imageUrl: "https://civilprom.s3.eu-north-1.amazonaws.com/HeliBaleares+-+Menorca+Airport.png"
    },
    {
      id: "menorca-inland",
      name: isFr ? "Minorque (Dans les terres)" : isDe ? "Menorca (Im Landesinneren)" : isNl ? "Menorca (Binnenland)" : isEs ? "Menorca (En el interior)" : "Menorca (Inland & Estates)",
      location: isFr ? "Résidences & Calas, Minorque" : isDe ? "Residenzen & Buchten, Menorca" : isNl ? "Residenties & Baaien, Menorca" : isEs ? "Residencias y Calas, Menorca" : "Private Estates & Calas, Menorca",
      seoTag: "Menorca Private Estate Helicopter",
      description: isFr
        ? "Atterrissage en toute discrétion sur les domaines préservés et villas de Minorque."
        : isDe
        ? "Diskrete Landung auf geschützten privaten Anwesen und Luxusvillas auf Menorca."
        : isNl
        ? "Discrete landing op beschutte privé landgoederen en villa's op Menorca."
        : isEs
        ? "Aterrizaje con total discreción en fincas privadas y villas exclusivas en Menorca."
        : "Discreet landing at preserved private estates and villas in Menorca.",
      imageUrl: "https://civilprom.s3.eu-north-1.amazonaws.com/HeliBaleares+-+Menorca+Island.png"
    },
    {
      id: "alicante-airport",
      name: isFr ? "Alicante (Aéroport)" : isDe ? "Alicante (Flughafen)" : isNl ? "Alicante (Luchthaven)" : isEs ? "Alicante (Aeropuerto)" : "Alicante (Airport)",
      location: isFr ? "Aéroport d'Alicante-Elche (ALC)" : isDe ? "Flughafen Alicante-Elche (ALC)" : isNl ? "Luchthaven Alicante-Elche (ALC)" : isEs ? "Aeropuerto de Alicante-Elche (ALC)" : "Alicante-Elche Airport (ALC)",
      seoTag: "Alicante Airport Helicopter Charter",
      description: isFr
        ? "Connexion directe reliant la côte continentale espagnole à l'archipel des Baléares."
        : isDe
        ? "Direkte Verbindung zwischen dem spanischen Festland und den Balearen."
        : isNl
        ? "Directe verbinding tussen de Spaanse kust en de Balearen."
        : isEs
        ? "Conexión directa que une la costa peninsular española con el archipiélago balear."
        : "Direct connection linking the mainland Spanish coast to the Balearic Archipelago.",
      imageUrl: "https://civilprom.s3.eu-north-1.amazonaws.com/HeliBaleares+-+Alicante+Airport.png"
    },
    {
      id: "valencia-airport",
      name: isFr ? "Valence (Aéroport)" : isDe ? "Valencia (Flughafen)" : isNl ? "Valencia (Luchthaven)" : isEs ? "Valencia (Aeropuerto)" : "Valencia (Airport)",
      location: isFr ? "Aéroport de Valence (VLC)" : isDe ? "Flughafen Valencia (VLC)" : isNl ? "Luchthaven Valencia (VLC)" : isEs ? "Aeropuerto de Valencia (VLC)" : "Valencia Airport (VLC)",
      seoTag: "Valencia Airport Helicopter Flight",
      description: isFr
        ? "Vol chárter rapide reliant l'aéroport de Valence directement à Ibiza et Majorque."
        : isDe
        ? "Schneller Charterflug, der den Flughafen Valencia direkt mit Ibiza und Mallorca verbindet."
        : isNl
        ? "Snelle chartervlucht die de luchthaven van Valencia rechtstreeks verbindt met Ibiza en Mallorca."
        : isEs
        ? "Vuelo chárter rápido que conecta el Aeropuerto de Valencia directamente con Ibiza y Mallorca."
        : "Rapid helicopter charter linking Valencia Airport directly to Ibiza and Mallorca.",
      imageUrl: "https://civilprom.s3.eu-north-1.amazonaws.com/HeliBaleares+-+Valencia+Airport.png"
    }
  ];
};

export const basesData: BaseInfo[] = getBasesData('fr');

export const getAircraftData = (lang: Language): AircraftInfo[] => {
  const isFr = lang === 'fr';
  const isDe = lang === 'de';
  const isNl = lang === 'nl';
  const isEs = lang === 'es';

  return [
    {
      id: "h135",
      name: "Airbus H135",
      type: "helicopter",
      passengers: 6,
      speed: "254 km/h",
      range: "635 km",
      seoText: isFr
        ? "L'Airbus H135 est un hélicoptère bimoteur léger d'exception, spécialement conçu pour assurer le plus haut niveau de sécurité, de confort et de réactivité sur l'ensemble de vos trajets inter-îles et continentaux."
        : isDe
        ? "Der Airbus H135 ist ein außergewöhnlicher zweimotoriger Leichthubschrauber, der speziell für höchste Sicherheit, Komfort und Flexibilität auf all Ihren Insel- und Festlandflügen entwickelt wurde."
        : isNl
        ? "De Airbus H135 is een uitzonderlijke tweemotorige lichte helikopter, speciaal ontworpen voor het hoogste niveau van veiligheid, comfort en flexibiliteit op al uw eiland- en vastelandsvluchten."
        : isEs
        ? "El Airbus H135 es un helicóptero bimoteur ligero excepcional, diseñado especialmente para garantizar el más alto nivel de seguridad, confort y capacidad de respuesta en todos sus trayectos interinsulares y continentales."
        : "The Airbus H135 is an exceptional light twin-engine helicopter, specially designed to deliver the highest level of safety, comfort, and responsiveness across all your inter-island and mainland journeys.",
      imageUrl: "https://civilprom.s3.eu-north-1.amazonaws.com/HELIBALEARES++H135+FlightView.jpeg",
      insideImageUrl: "https://civilprom.s3.eu-north-1.amazonaws.com/HELIBALEARES++H135+Inside.jpg",
      fretBoxImageUrl: "https://civilprom.s3.eu-north-1.amazonaws.com/HELIBALEARES+H135+FretBox.jpg"
    }
  ];
};

export const aircraftData: AircraftInfo[] = getAircraftData('fr');

export const useCasesData: UseCase[] = [
  {
    id: "business",
    title: "Voyages d'Affaires & Vols Corporate",
    description: "Optimisez votre temps précieux. Rejoignez vos réunions stratégiques ou yachts sans attente ni correspondance terrestre.",
    iconName: "Briefcase"
  },
  {
    id: "leisure",
    title: "Vols de Loisirs, Hôtels & Villas",
    description: "Bénéficiez de transferts directs depuis votre aéroport d'arrivée vers votre villa privée, domaine ou yacht.",
    iconName: "Compass"
  },
  {
    id: "repatriation",
    title: "Vols Médicaux & Rapatriements",
    description: "Évacuation sanitaire rapide et transport médical d'urgence sur-mesure 24h/24 et 7j/7.",
    iconName: "Heart"
  },
  {
    id: "events",
    title: "Événements VIP & Vol Panoramique",
    description: "Entrées remarquables pour événements d'exception, transferts VIP et vols d'observation au-dessus des eaux turquoise des Baléares.",
    iconName: "Sparkles"
  }
];
