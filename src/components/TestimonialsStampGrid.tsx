import React from 'react';
import { TESTIMONIALS, HERO_IMAGES } from '../data/weddingData';
import { Quote, Star, Sparkles } from 'lucide-react';

interface TestimonialsStampGridProps {
  isDarkMode?: boolean;
}

export const TestimonialsStampGrid: React.FC<TestimonialsStampGridProps> = ({
  isDarkMode = true,
}) => {
  const featured = TESTIMONIALS[0];
  const stampReviews = TESTIMONIALS.slice(1);

  return (
    <section id="testimonials" className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Title */}
      <div className="text-center mb-12">
        <div
          className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-sans-clean font-medium mb-3 ${
            isDarkMode
              ? 'bg-[#9aa891]/15 text-[#b5c4ab]'
              : 'bg-[#8b9a82]/15 text-[#5c6954]'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Témoignages & Émotions</span>
        </div>
        <h2
          className={`font-serif-main text-3xl sm:text-5xl font-normal ${
            isDarkMode ? 'text-[#f4f0e8]' : 'text-[#2c2b29]'
          }`}
        >
          Mots doux de nos mariés
        </h2>
        <p
          className={`font-script text-2xl sm:text-3xl mt-1 ${
            isDarkMode ? 'text-[#9aa891]' : 'text-[#78876e]'
          }`}
        >
          Notre travail brille à travers leurs mots
        </p>
      </div>

      {/* Featured Main Testimonial Card */}
      <div
        className={`rounded-xs p-6 sm:p-10 border editorial-shadow mb-12 max-w-4xl mx-auto ${
          isDarkMode ? 'bg-[#1c1a17] border-[#332f28]' : 'bg-white border-[#e8e4dc]'
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 space-y-4">
            <Quote
              className={`w-8 h-8 ${isDarkMode ? 'text-[#9aa891]/50' : 'text-[#8b9a82]/50'}`}
            />
            <h3
              className={`font-serif-main text-2xl sm:text-3xl font-normal ${
                isDarkMode ? 'text-[#f4f0e8]' : 'text-[#2c2b29]'
              }`}
            >
              {featured.author}
            </h3>
            <p
              className={`text-xs font-sans-clean uppercase tracking-widest ${
                isDarkMode ? 'text-[#9aa891]' : 'text-[#78876e]'
              }`}
            >
              {featured.role}
            </p>
            <p
              className={`text-sm sm:text-base font-sans-clean leading-relaxed italic ${
                isDarkMode ? 'text-[#b5b0a5]' : 'text-[#5a5750]'
              }`}
            >
              « {featured.quote} »
            </p>
            <div
              className={`flex items-center gap-1 pt-2 ${
                isDarkMode ? 'text-[#e0ca97]' : 'text-[#8b9a82]'
              }`}
            >
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
          </div>

          <div className="md:col-span-5 flex justify-center">
            <div
              className={`relative max-w-[240px] w-full rounded-xs overflow-hidden border polaroid-shadow ${
                isDarkMode ? 'border-[#332f28]' : 'border-[#e8e4dc]'
              }`}
            >
              <img
                src={featured.image}
                alt={featured.author}
                className="w-full aspect-[4/5] object-cover"
                referrerPolicy="no-referrer"
              />
              <div
                className={`absolute top-2 right-2 w-10 h-10 rounded-full p-0.5 shadow-md border ${
                  isDarkMode ? 'bg-[#22201d] border-[#38332c]' : 'bg-white border-[#e8e4dc]'
                }`}
              >
                <img
                  src={HERO_IMAGES.flowerOverlay1}
                  alt="Fleur"
                  className="w-full h-full object-cover rounded-full"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid of Stamp-Edged Review Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stampReviews.map((item, index) => {
          const isOlive = index === 0;
          return (
            <div
              key={item.id}
              className={`p-6 rounded-xs transition-all duration-300 hover:-translate-y-1 ${
                isOlive
                  ? 'stamp-border-olive shadow-md'
                  : isDarkMode
                  ? 'stamp-border shadow-xs hover:border-[#9aa891]'
                  : 'stamp-border-light shadow-xs hover:border-[#8b9a82]'
              }`}
            >
              <div className="space-y-3">
                <h4
                  className={`font-serif-main text-xl font-medium ${
                    isOlive
                      ? 'text-white'
                      : isDarkMode
                      ? 'text-[#f4f0e8]'
                      : 'text-[#2c2b29]'
                  }`}
                >
                  {item.author}
                </h4>
                <p
                  className={`text-[10px] font-sans-clean uppercase tracking-wider ${
                    isOlive
                      ? 'text-white/80'
                      : isDarkMode
                      ? 'text-[#9aa891]'
                      : 'text-[#78876e]'
                  }`}
                >
                  {item.role}
                </p>
                <p
                  className={`text-xs font-sans-clean leading-relaxed italic ${
                    isOlive
                      ? 'text-white/95'
                      : isDarkMode
                      ? 'text-[#b5b0a5]'
                      : 'text-[#5a5750]'
                  }`}
                >
                  « {item.quote} »
                </p>
                <div
                  className={`flex items-center gap-1 pt-1 ${
                    isOlive
                      ? 'text-amber-200'
                      : isDarkMode
                      ? 'text-[#e0ca97]'
                      : 'text-[#8b9a82]'
                  }`}
                >
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
