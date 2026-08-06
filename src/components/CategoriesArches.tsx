import React from 'react';
import { SERVICE_CATEGORIES } from '../data/weddingData';
import { ServiceCategory } from '../types';
import { ArrowUpRight, Sparkles } from 'lucide-react';

interface CategoriesArchesProps {
  onSelectCategory: (category: ServiceCategory) => void;
  isDarkMode?: boolean;
}

export const CategoriesArches: React.FC<CategoriesArchesProps> = ({
  onSelectCategory,
  isDarkMode = true,
}) => {
  return (
    <section id="services" className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <div
          className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-sans-clean font-medium mb-3 ${
            isDarkMode
              ? 'bg-[#9aa891]/15 text-[#b5c4ab]'
              : 'bg-[#8b9a82]/15 text-[#5c6954]'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Formules & Prestations</span>
        </div>
        <h2
          className={`font-serif-main text-3xl sm:text-5xl font-normal ${
            isDarkMode ? 'text-[#f4f0e8]' : 'text-[#2c2b29]'
          }`}
        >
          Nos domaines d'expertise
        </h2>
        <p
          className={`mt-3 text-sm sm:text-base font-sans-clean max-w-xl mx-auto ${
            isDarkMode ? 'text-[#b5b0a5]' : 'text-[#5a5750]'
          }`}
        >
          De l'ambiance intimiste d'une séance famille à l'envergure d'un grand mariage d'exception.
        </p>
      </div>

      {/* 3 Arch Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
        {SERVICE_CATEGORIES.map((cat) => (
          <div
            key={cat.id}
            onClick={() => onSelectCategory(cat)}
            className="group cursor-pointer flex flex-col items-center"
          >
            {/* Olive Green Backdrop Badge Frame */}
            <div
              className={`w-full p-4 pb-6 arch-card transition-transform duration-500 group-hover:-translate-y-2 shadow-md ${
                isDarkMode ? 'bg-[#3b4737]' : 'bg-[#8b9a82]/85'
              }`}
            >
              <div className="arch-card overflow-hidden aspect-[3/4] relative bg-[#1c1a17]">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />

                <div className="absolute bottom-4 left-4 right-4 text-white text-center">
                  <h3 className="font-serif-main text-xl sm:text-2xl font-light">{cat.title}</h3>
                  <p className="text-[11px] font-sans-clean opacity-90">{cat.subtitle}</p>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="mt-4 flex items-center justify-between text-white px-2">
                <span className="text-xs font-sans-clean uppercase tracking-wider">
                  En savoir plus
                </span>
                <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-[#3b4737] transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
