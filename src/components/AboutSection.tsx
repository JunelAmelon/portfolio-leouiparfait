import React from 'react';
import { ABOUT_DATA, LOGO_BRANDS } from '../data/weddingData';
import { Camera, Sparkles, Award } from 'lucide-react';

interface AboutSectionProps {
  onOpenContact: () => void;
  isDarkMode?: boolean;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onOpenContact,
  isDarkMode = true,
}) => {
  return (
    <section
      id="about"
      className={`py-16 sm:py-24 px-4 sm:px-6 border-y transition-colors duration-300 ${
        isDarkMode
          ? 'bg-[#181714] border-[#2e2a24]'
          : 'bg-[#f4f0e8]/50 border-[#e8e4dc]'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Block */}
          <div className="lg:col-span-6 space-y-6">
            <div
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-sans-clean uppercase tracking-widest ${
                isDarkMode
                  ? 'bg-[#9aa891]/15 text-[#b5c4ab]'
                  : 'bg-[#8b9a82]/15 text-[#5c6954]'
              }`}
            >
              <Camera className={`w-3.5 h-3.5 ${isDarkMode ? 'text-[#9aa891]' : 'text-[#78876e]'}`} />
              <span>{ABOUT_DATA.title}</span>
            </div>

            <h2
              className={`font-serif-main text-3xl sm:text-4xl lg:text-5xl leading-tight font-normal ${
                isDarkMode ? 'text-[#f4f0e8]' : 'text-[#2c2b29]'
              }`}
            >
              {ABOUT_DATA.heading}
            </h2>

            <div
              className={`space-y-4 text-sm sm:text-base font-sans-clean leading-relaxed ${
                isDarkMode ? 'text-[#b5b0a5]' : 'text-[#5a5750]'
              }`}
            >
              <p>{ABOUT_DATA.textParagraph1}</p>
              <p>{ABOUT_DATA.textParagraph2}</p>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenContact}
                className={`px-7 py-3 rounded-full border font-sans-clean font-medium text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-xs ${
                  isDarkMode
                    ? 'border-[#9aa891] text-[#b5c4ab] hover:bg-[#9aa891] hover:text-[#141311]'
                    : 'border-[#8b9a82] text-[#5c6954] hover:bg-[#8b9a82] hover:text-white'
                }`}
              >
                Discuter de votre projet
              </button>
            </div>
          </div>

          {/* Right Self-Portrait Image Block */}
          <div className="lg:col-span-6 flex justify-center">
            <div
              className={`relative max-w-md w-full p-3 sm:p-4 rounded-xs editorial-shadow border ${
                isDarkMode ? 'bg-[#1c1a17] border-[#332f28]' : 'bg-white border-[#e8e4dc]'
              }`}
            >
              <div
                className={`relative aspect-[3/4] overflow-hidden ${
                  isDarkMode ? 'bg-[#282521]' : 'bg-[#e8e4dc]/50'
                }`}
              >
                <img
                  src={ABOUT_DATA.image}
                  alt="Maria Hoffmann - Wedding Planner & Photographe"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div
                className={`mt-3 flex items-center justify-between text-xs font-sans-clean px-1 ${
                  isDarkMode ? 'text-[#9aa891]' : 'text-[#78876e]'
                }`}
              >
                <span className="flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  Maria Hoffmann
                </span>
                <span className="italic">Photographe & Organisation</span>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Vendor Logo Ticker Bar at Bottom */}
        <div
          className={`mt-16 pt-10 border-t ${
            isDarkMode ? 'border-[#2e2a24]' : 'border-[#e8e4dc]'
          }`}
        >
          <p
            className={`text-center text-xs font-sans-clean uppercase tracking-widest mb-8 ${
              isDarkMode ? 'text-[#807b71]' : 'text-[#8a8780]'
            }`}
          >
            ILS PARLENT DE NOS CRÉATIONS & ÉVÉNEMENTS D'EXCEPTION
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center text-center">
            {LOGO_BRANDS.map((brand) => (
              <div
                key={brand.name}
                className={`p-4 rounded-xs border transition-all cursor-default group ${
                  isDarkMode
                    ? 'border-[#2e2a24] bg-[#1c1a17]/80 hover:bg-[#25221d] hover:border-[#9aa891]/40'
                    : 'border-[#e8e4dc]/60 bg-white/60 hover:bg-white hover:border-[#8b9a82]/40'
                }`}
              >
                <div
                  className={`font-serif-main text-xl sm:text-2xl transition-colors ${
                    isDarkMode
                      ? 'text-[#f4f0e8] group-hover:text-[#9aa891]'
                      : 'text-[#2c2b29] group-hover:text-[#8b9a82]'
                  }`}
                >
                  {brand.name}
                </div>
                <div
                  className={`text-[10px] font-sans-clean tracking-widest uppercase mt-0.5 ${
                    isDarkMode ? 'text-[#807b71]' : 'text-[#8a8780]'
                  }`}
                >
                  {brand.subtitle}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
