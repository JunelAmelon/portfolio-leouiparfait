import React from 'react';
import { PROCESS_STEPS } from '../data/weddingData';
import { Sparkles, MessageCircle, CalendarHeart, HeartHandshake } from 'lucide-react';

interface ProcessSectionProps {
  onOpenContact: () => void;
  isDarkMode?: boolean;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({
  onOpenContact,
  isDarkMode = true,
}) => {
  const stepIcons = [MessageCircle, CalendarHeart, HeartHandshake];

  return (
    <section
      id="process"
      className={`py-16 sm:py-24 px-4 sm:px-6 border-t transition-colors duration-300 ${
        isDarkMode ? 'bg-[#141311] border-[#2e2a24]' : 'bg-[#faf8f5] border-[#e8e4dc]'
      }`}
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Title */}
        <div
          className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-sans-clean font-medium mb-4 ${
            isDarkMode
              ? 'bg-[#9aa891]/15 text-[#b5c4ab]'
              : 'bg-[#8b9a82]/15 text-[#5c6954]'
          }`}
        >
          <Sparkles className={`w-3.5 h-3.5 ${isDarkMode ? 'text-[#9aa891]' : 'text-[#78876e]'}`} />
          <span>Accompagnement Sur-Mesure</span>
        </div>

        <h2
          className={`font-serif-main text-3xl sm:text-5xl font-normal leading-tight ${
            isDarkMode ? 'text-[#f4f0e8]' : 'text-[#2c2b29]'
          }`}
        >
          Comment nous créons la{' '}
          <span
            className={`font-script text-4xl sm:text-6xl italic font-normal ${
              isDarkMode ? 'text-[#9aa891]' : 'text-[#78876e]'
            }`}
          >
            magie
          </span>{' '}
          ensemble
        </h2>

        {/* Process Steps Line */}
        <div className="mt-16 relative">
          {/* Horizontal Connecting Line on desktop */}
          <div
            className={`hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 z-0 ${
              isDarkMode ? 'bg-[#2e2a24]' : 'bg-[#e8e4dc]'
            }`}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {PROCESS_STEPS.map((step, idx) => {
              const Icon = stepIcons[idx % stepIcons.length];
              return (
                <div
                  key={step.number}
                  className={`p-6 rounded-xs border editorial-shadow text-center flex flex-col items-center transition-colors ${
                    isDarkMode
                      ? 'bg-[#1c1a17] border-[#332f28] hover:border-[#9aa891]'
                      : 'bg-white border-[#e8e4dc] hover:border-[#8b9a82]'
                  }`}
                >
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 shadow-xs border ${
                      isDarkMode
                        ? 'bg-[#9aa891]/15 border-[#9aa891]/30 text-[#b5c4ab]'
                        : 'bg-[#8b9a82]/15 border-[#8b9a82]/30 text-[#5c6954]'
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <span
                    className={`text-xs font-sans-clean uppercase tracking-widest mb-1 ${
                      isDarkMode ? 'text-[#9aa891]' : 'text-[#78876e]'
                    }`}
                  >
                    Étape {step.number}
                  </span>
                  <h3
                    className={`font-serif-main text-2xl mb-1 ${
                      isDarkMode ? 'text-[#f4f0e8]' : 'text-[#2c2b29]'
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={`text-xs font-sans-clean font-semibold mb-3 ${
                      isDarkMode ? 'text-[#9aa891]' : 'text-[#8b9a82]'
                    }`}
                  >
                    {step.subtitle}
                  </p>
                  <p
                    className={`text-xs sm:text-sm font-sans-clean leading-relaxed ${
                      isDarkMode ? 'text-[#b5b0a5]' : 'text-[#5a5750]'
                    }`}
                  >
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA button */}
        <div className="mt-12">
          <button
            onClick={onOpenContact}
            className={`px-8 py-3.5 rounded-full font-sans-clean font-medium text-sm transition-all shadow-md hover:shadow-lg ${
              isDarkMode
                ? 'bg-[#9aa891] text-[#141311] hover:bg-[#b5c4ab]'
                : 'bg-[#8b9a82] text-white hover:bg-[#74836b]'
            }`}
          >
            Prendre contact
          </button>
        </div>
      </div>
    </section>
  );
};
