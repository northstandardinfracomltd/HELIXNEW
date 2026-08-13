import React, { useState, useEffect } from 'react';
import { Upload, FileCheck, ArrowLeft, X, Lock, Info, Briefcase } from 'lucide-react';

interface DepositPageProps {
  onGoHome?: () => void;
}

export default function DepositPage({ onGoHome }: DepositPageProps) {
  const [selectedDeposit, setSelectedDeposit] = useState<string>('1000');
  
  // Passenger Check-in form state
  const [formData, setFormData] = useState(() => {
    try {
      const saved = localStorage.getItem('helibaleares_passenger_info');
      return saved ? JSON.parse(saved) : {
        fullName: '',
        dateOfBirth: '',
        nationality: '',
        email: '',
        phone: '',
        docType: 'Passport',
        saveFuture: false,
      };
    } catch {
      return {
        fullName: '',
        dateOfBirth: '',
        nationality: '',
        email: '',
        phone: '',
        docType: 'Passport',
        saveFuture: false,
      };
    }
  });

  const [uploadedFile, setUploadedFile] = useState<{ name: string; size: string } | null>(() => {
    try {
      const saved = localStorage.getItem('helibaleares_uploaded_id');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    // Set document title
    document.title = "HeliBaleares | Booking Prerequisites & Deposit";

    // Enforce strict noindex, nofollow, noarchive tags
    let robotsMeta = document.querySelector('meta[name="robots"]');
    const originalRobots = robotsMeta?.getAttribute('content') || 'index, follow';
    if (!robotsMeta) {
      robotsMeta = document.createElement('meta');
      robotsMeta.setAttribute('name', 'robots');
      document.head.appendChild(robotsMeta);
    }
    robotsMeta.setAttribute('content', 'noindex, nofollow, noarchive');

    let googlebotMeta = document.querySelector('meta[name="googlebot"]');
    const originalGooglebot = googlebotMeta?.getAttribute('content') || 'index, follow';
    if (!googlebotMeta) {
      googlebotMeta = document.createElement('meta');
      googlebotMeta.setAttribute('name', 'googlebot');
      document.head.appendChild(googlebotMeta);
    }
    googlebotMeta.setAttribute('content', 'noindex, nofollow, noarchive');

    return () => {
      if (robotsMeta) robotsMeta.setAttribute('content', originalRobots);
      if (googlebotMeta) googlebotMeta.setAttribute('content', originalGooglebot);
    };
  }, []);

  // Save passenger info state to localStorage
  const handleInputChange = (field: string, value: string | boolean) => {
    const updated = { ...formData, [field]: value };
    setFormData(updated);
    try {
      localStorage.setItem('helibaleares_passenger_info', JSON.stringify(updated));
    } catch (err) {
      console.warn('Failed to save passenger info to localStorage', err);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const sizeMb = (file.size / (1024 * 1024)).toFixed(2);
      const fileData = { name: file.name, size: `${sizeMb} MB` };
      setUploadedFile(fileData);
      try {
        localStorage.setItem('helibaleares_uploaded_id', JSON.stringify(fileData));
      } catch (err) {
        console.warn('Failed to save file metadata to localStorage', err);
      }
    }
  };

  const handleRemoveFile = () => {
    setUploadedFile(null);
    try {
      localStorage.removeItem('helibaleares_uploaded_id');
    } catch (err) {
      console.warn('Failed to remove file metadata from localStorage', err);
    }
  };

  const stripeLinks: Record<string, string> = {
    '600': 'https://book.stripe.com/14AeVdgOd0tbdx3e6IdUY06',
    '1000': 'https://book.stripe.com/14A6oH8hH1xf8cJ2o0dUY01',
    '1500': 'https://book.stripe.com/dRm7sLdC17VD3WtgeQdUY02',
    '2000': 'https://book.stripe.com/3cI00jeG53Fn0Kh0fSdUY03',
    '2500': 'https://book.stripe.com/00w9AT2Xn5NvgJf6EgdUY04',
    '3000': 'https://book.stripe.com/28EeVd41rdfX8cJ8ModUY05',
  };

  const depositOptions = [
    { id: '600', label: 'Deposit : €600.' },
    { id: '1000', label: 'Deposit : €1,000.' },
    { id: '1500', label: 'Deposit : €1,500.' },
    { id: '2000', label: 'Deposit : €2,000.' },
    { id: '2500', label: 'Deposit : €2,500.' },
    { id: '3000', label: 'Deposit : €3,000.' },
  ];

  const handleDepositSubmit = () => {
    const targetUrl = stripeLinks[selectedDeposit] || stripeLinks['1000'];
    window.location.href = targetUrl;
  };

  return (
    <div className="min-h-screen bg-white text-stone-900 font-sans antialiased flex flex-col justify-between">
      {/* Top Header */}
      <header className="w-full border-b border-stone-200 py-4 px-4 sm:px-8 bg-white sticky top-0 z-30">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div 
            onClick={() => onGoHome ? onGoHome() : (window.location.href = '/')} 
            className="flex flex-col cursor-pointer"
          >
            <img 
              src="https://civilprom.s3.eu-north-1.amazonaws.com/HeliBaleares+Logo+Neo.svg" 
              alt="HeliBaleares" 
              className="h-9 sm:h-11 object-contain self-start"
            />
            <span className="text-[11px] text-stone-500 font-sans mt-0.5">
              A branch of Eliance Civil Spain ES.AOC.131 EC 135
            </span>
          </div>

          <button
            onClick={() => onGoHome ? onGoHome() : (window.location.href = '/')}
            className="hidden sm:flex items-center gap-2 text-stone-600 hover:text-black text-sm font-medium transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to website</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl w-full mx-auto px-4 py-8 sm:py-12 flex-grow">
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-serif font-normal text-stone-900 tracking-tight">
            Booking Prerequisites:
          </h1>
        </div>

        {/* Section 1 */}
        <section className="mb-10 p-6 sm:p-8 rounded-2xl border border-stone-200 bg-stone-50/50">
          <h2 className="text-lg sm:text-xl font-semibold text-stone-900 mb-3 flex items-center gap-2">
            <span>1. Check-in and luggage registration</span>
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-6 font-light">
            Please upload one government-issued photo ID. The document must be valid on the date of the flight.
          </p>

          {/* Form Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {/* Full Name */}
            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="e.g. John Doe"
                value={formData.fullName}
                onChange={(e) => handleInputChange('fullName', e.target.value)}
                className="w-full bg-white border border-stone-300 rounded-xl px-4 py-2.5 text-sm text-stone-900 focus:outline-none focus:border-stone-900 transition-colors"
              />
            </div>

            {/* Date of Birth */}
            <div>
              <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                Date of Birth
              </label>
              <input
                type="date"
                value={formData.dateOfBirth}
                onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                className="w-full bg-white border border-stone-300 rounded-xl px-4 py-2.5 text-sm text-stone-900 focus:outline-none focus:border-stone-900 transition-colors"
              />
            </div>

            {/* Nationality */}
            <div>
              <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                Nationality
              </label>
              <input
                type="text"
                placeholder="e.g. French, British, Spanish"
                value={formData.nationality}
                onChange={(e) => handleInputChange('nationality', e.target.value)}
                className="w-full bg-white border border-stone-300 rounded-xl px-4 py-2.5 text-sm text-stone-900 focus:outline-none focus:border-stone-900 transition-colors"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full bg-white border border-stone-300 rounded-xl px-4 py-2.5 text-sm text-stone-900 focus:outline-none focus:border-stone-900 transition-colors"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                Phone Number with Country Code
              </label>
              <input
                type="tel"
                placeholder="+34 600 000 000"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="w-full bg-white border border-stone-300 rounded-xl px-4 py-2.5 text-sm text-stone-900 focus:outline-none focus:border-stone-900 transition-colors"
              />
            </div>

            {/* Document Type */}
            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                Document Type
              </label>
              <select
                value={formData.docType}
                onChange={(e) => handleInputChange('docType', e.target.value)}
                className="w-full bg-white border border-stone-300 rounded-xl px-4 py-2.5 text-sm text-stone-900 focus:outline-none focus:border-stone-900 transition-colors cursor-pointer"
              >
                <option value="Passport">Passport</option>
                <option value="Driver's License">Driver's License</option>
                <option value="Other">Other National ID</option>
              </select>
            </div>
          </div>

          {/* File Upload Box */}
          <div className="mb-6">
            <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-2">
              Upload ID Document
            </label>
            {!uploadedFile ? (
              <label className="border-2 border-dashed border-stone-300 hover:border-stone-900 bg-white transition-all rounded-xl p-6 sm:p-8 flex flex-col items-center justify-center cursor-pointer group text-center">
                <Upload className="w-8 h-8 text-stone-400 group-hover:text-stone-900 transition-colors mb-3" />
                <span className="text-sm font-medium text-stone-900 mb-1">
                  Click or drag & drop to upload Government ID
                </span>
                <span className="text-xs text-stone-500">
                  PDF, JPG, PNG or WEBP (Max 10MB)
                </span>
                <input 
                  type="file" 
                  accept="image/*,application/pdf"
                  onChange={handleFileUpload} 
                  className="hidden" 
                />
              </label>
            ) : (
              <div className="bg-white border border-stone-200 rounded-xl p-4 flex items-center justify-between shadow-xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <FileCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-stone-900 truncate max-w-[220px] sm:max-w-md">
                      {uploadedFile.name}
                    </p>
                    <p className="text-xs text-stone-500">{uploadedFile.size} • Document attached</p>
                  </div>
                </div>
                <button
                  onClick={handleRemoveFile}
                  className="text-stone-400 hover:text-stone-700 p-2 rounded-lg hover:bg-stone-100 transition-colors cursor-pointer"
                  title="Remove file"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>

          {/* Save Information Checkbox */}
          <div className="pt-2 pb-4">
            <label className="flex items-center gap-3 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={formData.saveFuture}
                onChange={(e) => handleInputChange('saveFuture', e.target.checked)}
                className="w-4 h-4 rounded text-black accent-black cursor-pointer"
              />
              <span className="text-sm font-medium text-stone-800">
                Save my information for future flights
              </span>
            </label>
          </div>

          {/* Data Privacy Box */}
          <div className="mt-4 p-4 rounded-xl bg-white border border-stone-200/80 flex items-start gap-3">
            <Lock className="w-4 h-4 text-stone-500 shrink-0 mt-0.5" />
            <p className="text-xs text-stone-600 leading-relaxed">
              Your personal data will be completely deleted 48 hours after your flight, unless you choose to save your information for future flights.
            </p>
          </div>

          {/* Luggage Information Box */}
          <div className="mt-3 p-4 rounded-xl bg-white border border-stone-200/80 flex items-start gap-3">
            <Briefcase className="w-4 h-4 text-stone-500 shrink-0 mt-0.5" />
            <p className="text-xs text-stone-600 leading-relaxed">
              As a reminder, for private flights, you may bring up to 1 m³ of luggage. We recommend cabin-sized suitcases or large soft duffel bags to optimize space, up to a maximum total weight of approximately 1,000 kg. For further details, please contact your HeliBaleares representative.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section className="mb-10 p-6 sm:p-8 rounded-2xl border border-stone-200 bg-stone-50/50">
          <h2 className="text-lg sm:text-xl font-semibold text-stone-900 mb-3">
            2. Guarantee Deposit
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-6 font-light">
            We require a pre-authorization—typically representing 45% to 60% of the total flight cost—processed in increments of €1,000, €1,500, or €2,500, etc. You may choose to have this amount either canceled/refunded or applied as a deduction from the total during your final payment. The final payment is made in person (at the time of the flight) via bank card, cash, or instant transfer. If you are departing from Ibiza, the process takes place at our physical office; otherwise, it happens directly at the helicopter. The security deposit also allows us to protect ourselves against the risk of no-shows. The flight can be canceled free of charge up to 48 hours before the scheduled flight time.
          </p>

          {/* Section Subtitle above radio list */}
          <div className="mb-4">
            <h3 className="text-sm font-semibold text-stone-900">
              Select the amount requested by your HeliBaleares representative:
            </h3>
          </div>

          {/* Radio Options */}
          <div className="space-y-3 mb-8">
            {depositOptions.map((option) => {
              const isSelected = selectedDeposit === option.id;
              return (
                <label
                  key={option.id}
                  onClick={() => setSelectedDeposit(option.id)}
                  className={`flex items-center justify-between p-4 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'border-stone-900 bg-white shadow-xs font-semibold'
                      : 'border-stone-200 bg-white/70 hover:border-stone-400 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="deposit-amount"
                      value={option.id}
                      checked={isSelected}
                      onChange={() => setSelectedDeposit(option.id)}
                      className="w-4 h-4 text-black accent-black cursor-pointer"
                    />
                    <span className="text-sm sm:text-base text-stone-900">
                      {option.label}
                    </span>
                  </div>
                </label>
              );
            })}
          </div>

          {/* Action Button */}
          <button
            onClick={handleDepositSubmit}
            className="w-full bg-black hover:bg-stone-800 text-white font-sans font-medium transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 shadow-sm active:scale-98"
            style={{ borderRadius: '13px', height: '50px', fontSize: '15px' }}
          >
            <span>Pay Guarantee Deposit (€{Number(selectedDeposit).toLocaleString('en-US')})</span>
          </button>

          {/* Stripe Security Note */}
          <p className="mt-3 text-center text-xs text-stone-500 font-normal">
            The system is powered and secured by Stripe, the global leader in online payments.
          </p>
        </section>
      </main>

      {/* Simple Footer */}
      <footer className="w-full border-t border-stone-200 py-6 px-4 text-center text-xs text-stone-500 bg-white">
        <p>© 2026 Eliance Civil HIS GROUP S.A. (AOC) ES.AOC.131 — EC 135. All rights reserved.</p>
      </footer>
    </div>
  );
}

