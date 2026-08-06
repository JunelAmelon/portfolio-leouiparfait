import React from 'react';
import { SERVICE_CATEGORIES } from '../data/weddingData';
import { ServiceCategory } from '../types';
import { Sparkles } from 'lucide-react';
import { Reveal } from './Reveal';

interface CategoriesArchesProps {
  onSelectCategory: (category: ServiceCategory) => void;
  isDarkMode?: boolean;
}

const cardVariants: Array<'zoom' | 'up' | 'rotate'> = ['zoom', 'up', 'rotate'];

export const CategoriesArches: React.FC<CategoriesArchesProps> = ({
  onSelectCategory,
  isDarkMode = true,
}) => {
  return (
    <section id="services" className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      <Reveal variant="fade" className="text-center mb-12">
        <div
          className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-sans-clean font-medium mb-3 ${
            isDarkMode
              ? 'bg-[#c8c0f5]/15 text-[#e8e4dc]'
              : 'bg-[#8b9a82]/15 text-[#5c6954]'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Une Offre Pour Chaque Projet de Mariage</span>
        </div>
        <h2
          className={`font-serif-main text-3xl sm:text-5xl font-normal ${
            isDarkMode ? 'text-[#c8c0f5]' : 'text-[#2c2b29]'
          }`}
        >
          Nos Offres & Tarifs
        </h2>
        <p
          className={`mt-3 text-sm sm:text-base font-sans-clean max-w-xl mx-auto ${
            isDarkMode ? 'text-[#b5b0a5]' : 'text-[#5a5750]'
          }`}
        >
          De l'organisation clé en main à la coordination du jour J, une offre adaptée à chaque niveau
          d'accompagnement. Paiement possible en 2X, 3X ou 4X sans frais.
        </p>
      </Reveal>

      {/* 3 Envelope Cards Container */}
      <div className="flex flex-col sm:flex-row justify-center gap-10 sm:gap-8">
        {SERVICE_CATEGORIES.map((cat, index) => (
          <Reveal
            key={cat.id}
            variant={cardVariants[index % cardVariants.length]}
            delay={index * 120}
            className="w-full sm:max-w-[290px]"
          >
            <div
              className="group flex flex-col items-center text-center"
            >
              {/* Envelope Shape */}
              <div
                className={`relative w-full h-[250px] sm:h-[290px] rounded-b-2xl transition-transform duration-500 group-hover:-translate-y-2 shadow-md flex items-end justify-center pb-20 sm:pb-24 overflow-visible ${
                  isDarkMode ? 'bg-[#3b4737]' : 'bg-[#8b9a82]/90'
                }`}
              >
                {/* Envelope Flap */}
                <div
                  className={`absolute -top-px left-0 w-full h-[110px] sm:h-[130px] ${
                    isDarkMode ? 'bg-[#3b4737]' : 'bg-[#8b9a82]/90'
                  }`}
                  style={{ clipPath: 'polygon(0 0, 50% 78%, 100% 0)' }}
                />
                <img
                  src={cat.image}
                  alt={cat.title}
                  referrerPolicy="no-referrer"
                  className="relative z-[3] h-[170px] sm:h-[195px] aspect-[3/4] object-cover border-4 sm:border-[6px] border-white shadow-lg -rotate-3 group-hover:rotate-0 transition-transform duration-500 mb-8 sm:mb-10"
                />
                <div className="absolute bottom-5 left-3 right-3 text-white z-[3] font-serif-main text-lg sm:text-xl leading-tight">
                  {cat.title}
                </div>
              </div>

              <p
                className={`mt-4 text-xs sm:text-sm font-sans-clean font-medium ${
                  isDarkMode ? 'text-[#c8c0f5]' : 'text-[#78876e]'
                }`}
              >
                {cat.subtitle}
              </p>
              <p
                className={`mt-2 text-xs sm:text-sm font-sans-clean leading-relaxed max-w-xs ${
                  isDarkMode ? 'text-[#b5b0a5]' : 'text-[#5a5750]'
                }`}
              >
                {cat.description}
              </p>

            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};
