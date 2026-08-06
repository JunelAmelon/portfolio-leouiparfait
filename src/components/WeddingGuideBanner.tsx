import React from 'react';
import { Download, BookOpen, CheckCircle2 } from 'lucide-react';
import { HERO_IMAGES } from '../data/weddingData';

interface WeddingGuideBannerProps {
  onOpenGuide: () => void;
  isDarkMode?: boolean;
}

export const WeddingGuideBanner: React.FC<WeddingGuideBannerProps> = ({
  onOpenGuide,
  isDarkMode = true,
}) => {
  return (
    <section
      className={`py-16 sm:py-20 px-4 sm:px-6 transition-colors duration-300 max-w-7xl mx-auto ${
        isDarkMode ? 'bg-[#141311]' : 'bg-[#faf8f5]'
      }`}
    >
      <div
        className={`rounded-xs p-6 sm:p-12 border polaroid-shadow relative overflow-hidden ${
          isDarkMode ? 'bg-[#1c1a17] border-[#332f28]' : 'bg-white border-[#e8e4dc]'
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          {/* Left Floating Tilted Photo Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div
              className={`relative p-3 rounded-xs border transform -rotate-3 hover:rotate-0 transition-transform duration-500 max-w-[280px] w-full shadow-md ${
                isDarkMode ? 'bg-[#25221d] border-[#3e3931]' : 'bg-[#faf8f5] border-[#e8e4dc]'
              }`}
            >
              <div
                className={`relative aspect-[3/4] overflow-hidden ${
                  isDarkMode ? 'bg-[#282521]' : 'bg-[#e8e4dc]'
                }`}
              >
                <img
                  src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=85"
                  alt="Couple au bord de mer"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div
                  className={`absolute top-2 right-2 w-10 h-10 rounded-full p-0.5 shadow-sm border ${
                    isDarkMode ? 'bg-[#22201d] border-[#38332c]' : 'bg-white border-[#e8e4dc]'
                  }`}
                >
                  <img
                    src={HERO_IMAGES.flowerOverlay1}
                    alt="Décor floral"
                    className="w-full h-full object-cover rounded-full"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <p
                className={`mt-2 text-center font-serif-main text-xs italic ${
                  isDarkMode ? 'text-[#9aa891]' : 'text-[#78876e]'
                }`}
              >
                Guide exclusif 2026 / 2027
              </p>
            </div>
          </div>

          {/* Right Text Content */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
            <div
              className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-sans-clean font-medium ${
                isDarkMode
                  ? 'bg-[#9aa891]/15 text-[#b5c4ab]'
                  : 'bg-[#8b9a82]/15 text-[#5c6954]'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Guide d'Organisation Offert</span>
            </div>

            <h2
              className={`font-serif-main text-3xl sm:text-4xl lg:text-5xl leading-tight ${
                isDarkMode ? 'text-[#f4f0e8]' : 'text-[#2c2b29]'
              }`}
            >
              Anxieux ou dépassés par l'organisation de votre{' '}
              <span
                className={`font-script text-4xl sm:text-5xl italic font-normal ${
                  isDarkMode ? 'text-[#9aa891]' : 'text-[#78876e]'
                }`}
              >
                mariage ?
              </span>
            </h2>

            <p
              className={`text-sm sm:text-base font-sans-clean leading-relaxed ${
                isDarkMode ? 'text-[#b5b0a5]' : 'text-[#5a5750]'
              }`}
            >
              Obtenez notre guide de mariage complet – rempli de plannings pas-à-pas, de conseils avisés
              pour votre budget, de checklists pour le jour J et d'astuces pour des photos naturelles.
            </p>

            <ul
              className={`grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm font-sans-clean pt-1 ${
                isDarkMode ? 'text-[#b5b0a5]' : 'text-[#5a5750]'
              }`}
            >
              <li className="flex items-center gap-2">
                <CheckCircle2
                  className={`w-4 h-4 ${isDarkMode ? 'text-[#9aa891]' : 'text-[#8b9a82]'}`}
                />
                <span>Rétroplanning mois par mois</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2
                  className={`w-4 h-4 ${isDarkMode ? 'text-[#9aa891]' : 'text-[#8b9a82]'}`}
                />
                <span>Calculateur de budget indicatif</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2
                  className={`w-4 h-4 ${isDarkMode ? 'text-[#9aa891]' : 'text-[#8b9a82]'}`}
                />
                <span>Liste de kit d'urgence jour J</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2
                  className={`w-4 h-4 ${isDarkMode ? 'text-[#9aa891]' : 'text-[#8b9a82]'}`}
                />
                <span>Guide des meilleures heures photo</span>
              </li>
            </ul>

            <div className="pt-3">
              <button
                onClick={onOpenGuide}
                className={`inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-sans-clean font-medium text-sm transition-all shadow-md hover:shadow-lg ${
                  isDarkMode
                    ? 'bg-[#9aa891] text-[#141311] hover:bg-[#b5c4ab]'
                    : 'bg-[#8b9a82] text-white hover:bg-[#74836b]'
                }`}
              >
                <Download className="w-4 h-4" />
                <span>Télécharger le guide immédiatement</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
