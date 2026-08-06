import React, { useState, useEffect } from 'react';
import { ExternalLink, Plus, X } from 'lucide-react';
import { VENUES } from '../data/venuesData';

const bentoCss = `
  .bento-lieux {
    width: 100%;
    max-width: 1300px;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 20px;
    margin: 0 auto;
  }

  .bento-lieux .card {
    border-radius: 24px;
    overflow: hidden;
    position: relative;
    background-color: #ffffff;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
  }

  .bento-lieux .card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);
  }

  .bento-lieux .card-logo {
    grid-column: span 7;
    min-height: 280px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    cursor: default;
  }

  .bento-lieux .card-tshirt {
    grid-column: span 5;
    grid-row: span 2;
    min-height: 600px;
    background-color: #e2e8f0;
  }

  .bento-lieux .card-dashboard {
    grid-column: span 4;
    height: 300px;
    background-color: #ffffff;
  }

  .bento-lieux .card-phone {
    grid-column: span 3;
    height: 300px;
    background-color: #000000;
  }

  .bento-lieux .card-connect {
    grid-column: span 4;
    height: 300px;
    background-color: #ffffff;
  }

  .bento-lieux .card-icon-3d {
    grid-column: span 3;
    height: 300px;
    background: #18181b;
  }

  .bento-lieux .card-testimonial {
    grid-column: span 5;
    height: 300px;
    background-color: #ffffff;
  }

  .bento-lieux .brand-logo-full {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    text-align: center;
    padding: 32px;
  }

  .bento-lieux .synlyify-text {
    font-size: 40px;
    font-weight: 700;
    color: #0a0e1a;
    letter-spacing: -2px;
    line-height: 1.1;
  }

  .bento-lieux .tshirt-img-container {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .bento-lieux .tshirt-img-container img,
  .bento-lieux .card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 992px) {
    .bento-lieux {
      display: flex;
      flex-direction: column;
    }
    .bento-lieux .card {
      width: 100%;
      height: auto !important;
      min-height: 250px;
    }
    .bento-lieux .synlyify-text {
      font-size: 28px;
    }
  }
`;

export const NosLieux: React.FC = () => {
  const [active, setActive] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const [lightbox, setLightbox] = useState<string | null>(null);

  useEffect(() => {
    setShowAll(false);
    setLightbox(null);
  }, [active]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const venue = VENUES[active];
  const extraCount = venue.images.length - 6;
  const hasMore = venue.images.length > 6;

  const bentoCards = [
    { key: 'tshirt', idx: 0, className: 'card card-tshirt' },
    { key: 'dashboard', idx: 1, className: 'card card-dashboard' },
    { key: 'phone', idx: 2, className: 'card card-phone' },
    { key: 'connect', idx: 3, className: 'card card-connect' },
    { key: 'icon', idx: 4, className: 'card card-icon-3d' },
    { key: 'testimonial', idx: 5, className: 'card card-testimonial' },
  ];

  return (
    <section id="lieux" className="bg-[#141311] py-16 sm:py-24 px-4 sm:px-6 overflow-hidden">
      <style dangerouslySetInnerHTML={{ __html: bentoCss }} />

      <div className="max-w-7xl mx-auto text-center mb-8">
        <h2 className="font-serif-main text-3xl sm:text-5xl lg:text-6xl font-normal text-[#c8c0f5] tracking-wide uppercase">
          Nos Lieux
        </h2>
        <div className="w-16 h-0.5 mx-auto mt-3 rounded-full bg-[#c8c0f5]" />
      </div>

      {/* Filter */}
      <div className="max-w-7xl mx-auto mb-10 flex flex-wrap justify-center gap-2 sm:gap-3">
        {VENUES.map((v, idx) => (
          <button
            key={v.name}
            type="button"
            onClick={() => setActive(idx)}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-sans-clean font-medium transition-all ${
              idx === active
                ? 'bg-[#c8c0f5] text-[#141311]'
                : 'bg-[#1c1a17] text-[#e8e4dc] border border-[#332f28] hover:border-[#c8c0f5]'
            }`}
          >
            {v.name}
          </button>
        ))}
      </div>

      <div className="max-w-[1300px] mx-auto relative mb-4">
        <div className="bento-lieux">
          {/* 1. Intro */}
          <div className="card card-logo">
            <div className="brand-logo-full">
              <h3 className="font-serif-main font-normal text-[#141311] synlyify-text">
                {venue.name}
              </h3>
              <p className="font-sans-clean text-sm sm:text-base text-[#5a5750] leading-relaxed">
                {venue.description}
              </p>
              <a
                href={venue.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#c8c0f5] text-[#141311] text-xs sm:text-sm font-sans-clean font-medium hover:bg-[#e8e4dc] transition-colors"
              >
                <span>Voir le site</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Bento image cards - only render if image exists */}
          {bentoCards.map((card) => {
            const src = venue.images[card.idx];
            if (!src) return null;

            const isPlusCard = hasMore && card.idx === 5;

            return (
              <div
                key={card.key}
                className={card.className}
                onClick={() => !isPlusCard && setLightbox(src)}
              >
                {card.key === 'tshirt' ? (
                  <div className="tshirt-img-container">
                    <img src={src} alt={venue.name} referrerPolicy="no-referrer" />
                  </div>
                ) : (
                  <img src={src} alt={venue.name} referrerPolicy="no-referrer" />
                )}
                {isPlusCard && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowAll((s) => !s);
                    }}
                    className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 hover:bg-black/50 transition-colors text-[#e8e4dc]"
                  >
                    <Plus className="w-8 h-8 sm:w-10 sm:h-10" />
                    <span className="font-sans-clean text-xs sm:text-sm mt-1">
                      {extraCount} photo{extraCount > 1 ? 's' : ''}
                    </span>
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Extra images grid */}
      {showAll && (
        <div className="max-w-[1300px] mx-auto mt-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
            {venue.images.slice(6).map((src, idx) => (
              <div
                key={`${venue.name}-extra-${idx}`}
                onClick={() => setLightbox(src)}
                className="cursor-pointer rounded-sm overflow-hidden border border-[#2e2a24] shadow-xl aspect-square"
              >
                <img
                  src={src}
                  alt={`${venue.name} ${idx + 7}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Lightbox modal */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-[#141311]/95 flex items-center justify-center p-4 sm:p-8"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            aria-label="Fermer"
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#c8c0f5] text-[#141311] flex items-center justify-center shadow-lg hover:bg-[#e8e4dc] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <img
            src={lightbox}
            alt={venue.name}
            className="max-w-full max-h-[85vh] object-contain rounded-sm"
            onClick={(e) => e.stopPropagation()}
            referrerPolicy="no-referrer"
          />
        </div>
      )}
    </section>
  );
};
