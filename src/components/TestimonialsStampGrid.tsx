import React, { useState, useEffect } from 'react';
import { TESTIMONIALS } from '../data/weddingData';
import { Star, Sparkles, X, ExternalLink } from 'lucide-react';
import { Reveal } from './Reveal';

interface TestimonialsStampGridProps {
  isDarkMode?: boolean;
}

const shorten = (text: string, max: number) => {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  const lastSpace = cut.lastIndexOf(' ');
  return (lastSpace > 0 ? cut.slice(0, lastSpace) : cut) + '…';
};

export const TestimonialsStampGrid: React.FC<TestimonialsStampGridProps> = ({
  isDarkMode = true,
}) => {
  const [active, setActive] = useState<typeof TESTIMONIALS[0] | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActive(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const featured = TESTIMONIALS[0];
  const others = TESTIMONIALS.slice(1);

  const Card: React.FC<{
    author: string;
    role: string;
    quote: string;
    maxLength?: number;
    olive?: boolean;
  }> = ({ author, role, quote, maxLength = 130, olive = false }) => {
    const short = shorten(quote, maxLength);
    const isLong = quote.length > maxLength;

    return (
      <div
        onClick={() => isLong && setActive({ author, role, quote, id: '', highlight: false })}
        className={`p-5 rounded-sm h-full flex flex-col justify-center gap-2 ${
          isLong ? 'cursor-pointer' : ''
        } ${
          olive
            ? 'bg-[#465342] text-white shadow-md'
            : isDarkMode
            ? 'stamp-border shadow-xs'
            : 'stamp-border-light shadow-xs'
        }`}
      >
        <h4
          className={`font-serif-main text-lg font-medium ${
            olive ? 'text-white' : isDarkMode ? 'text-[#c8c0f5]' : 'text-[#2c2b29]'
          }`}
        >
          {author}
        </h4>
        <p
          className={`text-[10px] font-sans-clean uppercase tracking-wider ${
            olive ? 'text-white/80' : isDarkMode ? 'text-[#c8c0f5]' : 'text-[#78876e]'
          }`}
        >
          {role}
        </p>
        <p
          className={`text-xs font-sans-clean leading-relaxed italic ${
            olive ? 'text-white/95' : isDarkMode ? 'text-[#b5b0a5]' : 'text-[#5a5750]'
          }`}
        >
          « {short} {isLong && '…'} »
        </p>
        {isLong && (
          <span
            className={`text-[10px] font-sans-clean underline tracking-wider mt-0.5 ${
              olive ? 'text-amber-200' : 'text-[#e0ca97]'
            }`}
          >
            Lire la suite
          </span>
        )}
        <div className={`flex items-center gap-1 pt-1 ${olive ? 'text-amber-200' : 'text-[#e0ca97]'}`}>
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3 h-3 fill-current" />
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="testimonials" className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Title */}
      <Reveal variant="fade" className="text-center mb-12">
        <div
          className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-sans-clean font-medium mb-3 ${
            isDarkMode
              ? 'bg-[#c8c0f5]/15 text-[#e8e4dc]'
              : 'bg-[#8b9a82]/15 text-[#5c6954]'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Avis des Couples</span>
        </div>
        <h2
          className={`font-serif-main text-3xl sm:text-5xl font-normal ${
            isDarkMode ? 'text-[#c8c0f5]' : 'text-[#2c2b29]'
          }`}
        >
          Ce que nos couples heureux disent de nous
        </h2>
        <p
          className={`font-script text-2xl sm:text-3xl mt-1 ${
            isDarkMode ? 'text-[#c8c0f5]' : 'text-[#78876e]'
          }`}
        >
          L'amour et la gratitude inspirent tout ce que nous faisons
        </p>
      </Reveal>

      {/* Asymmetric Testimonial Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-4 sm:gap-5 lg:auto-rows-[180px]">
        <Reveal variant="zoom" className="lg:row-span-2 rounded-sm overflow-hidden h-[220px] lg:h-auto">
          <img
            src={featured.image}
            alt={featured.author}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
        </Reveal>

        <Reveal variant="up" delay={80}>
          <Card author={others[0].author} role={others[0].role} quote={others[0].quote} />
        </Reveal>

        <Reveal variant="zoom" delay={120} className="lg:row-span-2">
          <Card
            author={featured.author}
            role={featured.role}
            quote={featured.quote}
            maxLength={260}
            olive
          />
        </Reveal>

        <Reveal variant="up" delay={160}>
          <Card author={others[1].author} role={others[1].role} quote={others[1].quote} />
        </Reveal>

        <Reveal variant="left" delay={200}>
          <Card author={others[2].author} role={others[2].role} quote={others[2].quote} />
        </Reveal>

        <Reveal variant="right" delay={240}>
          <Card author={others[3].author} role={others[3].role} quote={others[3].quote} />
        </Reveal>
      </div>

      {/* More reviews link */}
      <Reveal variant="up" className="mt-10 text-center">
        <a
          href="https://www.mariages.net/organisation-mariage/le-oui-parfait--e422129#reviews"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#c8c0f5] text-[#141311] text-xs sm:text-sm font-sans-clean font-medium hover:bg-[#e8e4dc] transition-colors"
        >
          <span>Voir plus d'avis</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </Reveal>

      {/* Read more modal */}
      {active && (
        <div
          className="fixed inset-0 z-50 bg-[#141311]/95 flex items-center justify-center p-4 sm:p-8"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            onClick={() => setActive(null)}
            aria-label="Fermer"
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#c8c0f5] text-[#141311] flex items-center justify-center shadow-lg hover:bg-[#e8e4dc] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div
            className="max-w-2xl w-full max-h-[85vh] overflow-y-auto rounded-sm bg-[#1c1a17] border border-[#332f28] p-6 sm:p-10 text-[#e8e4dc]"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="font-serif-main text-2xl sm:text-3xl text-[#c8c0f5]">{active.author}</h3>
            <p className="text-xs font-sans-clean uppercase tracking-wider text-[#b5b0a5] mt-1">
              {active.role}
            </p>
            <div className="flex items-center gap-1 mt-3 text-[#e0ca97]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <p className="mt-6 text-sm sm:text-base font-sans-clean leading-relaxed italic text-[#b5b0a5]">
              « {active.quote} »
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
