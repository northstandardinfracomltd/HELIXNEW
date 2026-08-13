export type Language = 'en' | 'de' | 'nl' | 'es' | 'fr';

export interface BaseInfo {
  id: string;
  name: string;
  location: string;
  seoTag: string;
  description: string;
  imageUrl: string;
}

export interface AircraftInfo {
  id: string;
  name: string;
  type: 'helicopter' | 'jet';
  passengers: number;
  speed: string;
  range: string;
  seoText: string;
  imageUrl: string;
  insideImageUrl?: string;
  fretBoxImageUrl?: string;
}

export interface UseCase {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface TranslationContent {
  navHome: string;
  navBases: string;
  navFleet: string;
  navSafety: string;
  navUseCases: string;
  navAbout: string;
  navOffice?: string;
  navContact: string;
  
  heroTitle: string;
  heroSubtitle: string;
  heroCta: string;
  
  aboutTitle: string;
  aboutBadge: string;
  aboutP1: string;
  aboutP2: string;
  aboutLocationText: string;
  aboutHighlightTitle: string;
  aboutHighlightDesc: string;
  
  basesTitle: string;
  basesSubtitle: string;
  
  fleetTitle: string;
  fleetSubtitle: string;
  fleetSpecs: string;
  fleetPax: string;
  fleetSpeed: string;
  fleetRange: string;
  fleetRequestBtn: string;
  
  safetyTitle: string;
  safetySubtitle: string;
  safetyForbiddenTitle: string;
  safetyForbiddenDesc: string;
  safetyPilotsTitle: string;
  safetyPilotsDesc: string;
  safetyTwoPilots: string;
  
  useCasesTitle: string;
  useCasesSubtitle: string;
  
  contactTitle: string;
  contactSubtitle: string;
  contactFormName: string;
  contactFormEmail: string;
  contactFormRoute: string;
  contactFormAircraft: string;
  contactFormDate: string;
  contactFormPassengers: string;
  contactFormTwoPilots: string;
  contactFormNotes: string;
  contactFormSubmit: string;
  contactSuccessMessage: string;
  contactDirectEmailText: string;
  
  forbiddenItemsList: string[];
  
  legalMentionsTitle: string;
  legalMentionsContent: string;
  footerRights: string;
  footerOperatorDisclaimer: string;
  topAnnouncementBar?: string;
  experiencesTitle?: string;
  experiencesSubtitle?: string;
}
