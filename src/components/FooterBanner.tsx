import React from 'react';
import { HERO_IMAGES } from '../data/weddingData';
import { Send, ArrowUp, Instagram, Facebook, Heart } from 'lucide-react';
import gsap from 'gsap';

interface FooterBannerProps {
  onOpenContact: () => void;
  isDarkMode?: boolean;
}

export const FooterBanner: React.FC<FooterBannerProps> = ({
  onOpenContact,
  isDarkMode = true,
}) => {
  const scrollToTop = () => {
    gsap.to(window, { duration: 1, scrollTo: 0, ease: 'power2.inOut' });
  };

  return (
    <footer
      className={`relative pt-20 pb-12 overflow-hidden transition-colors duration-300 ${
        isDarkMode ? 'bg-[#0f0e0c] text-[#e8e4dc]' : 'bg-[#1c1b18] text-white'
      }`}
    >
      {/* Dark Floral Background Image */}
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-luminosity">
        <img
          src={HERO_IMAGES.flowerFooterDark}
          alt="Arrière-plan floral sombre"
          className="w-full h-full object-cover scale-105"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Centered Beige/Dark Tag Card */}
        <div
          className={`max-w-xl mx-auto p-8 sm:p-12 rounded-xs border text-center polaroid-shadow relative ${
            isDarkMode
              ? 'bg-[#181614] text-[#e8e4dc] border-[#332f28]'
              : 'bg-[#faf8f5] text-[#2c2b29] border-[#e8e4dc]'
          }`}
        >
          {/* Ribbon Tag Attachment Accent */}
          <div
            className={`absolute -top-4 left-1/2 -translate-x-1/2 w-6 h-8 rounded-t-xs shadow-sm flex items-center justify-center ${
              isDarkMode ? 'bg-[#9aa891]' : 'bg-[#8b9a82]'
            }`}
          >
            <div className="w-2 h-2 rounded-full bg-white/80" />
          </div>

          <h2 className="font-serif-main text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight mt-2">
            Prêts à{' '}
            <span
              className={`font-script text-4xl sm:text-5xl italic font-normal ${
                isDarkMode ? 'text-[#9aa891]' : 'text-[#78876e]'
              }`}
            >
              commencer
            </span>{' '}
            votre histoire ?
          </h2>

          <p
            className={`mt-4 text-xs sm:text-sm font-sans-clean leading-relaxed max-w-md mx-auto ${
              isDarkMode ? 'text-[#b5b0a5]' : 'text-[#5a5750]'
            }`}
          >
            Échangeons autour de votre vision, de votre lieu d'exception, de vos tenues et de tout ce qui
            rendra votre jour J inoubliable.
          </p>

          <div className="mt-8">
            <button
              onClick={onOpenContact}
              className={`inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-sans-clean font-medium text-sm transition-all shadow-md hover:shadow-lg ${
                isDarkMode
                  ? 'bg-[#9aa891] text-[#141311] hover:bg-[#b5c4ab]'
                  : 'bg-[#8b9a82] text-white hover:bg-[#74836b]'
              }`}
            >
              <Send className="w-4 h-4" />
              <span>Prendre contact</span>
            </button>
          </div>
        </div>

        {/* Footer Navigation & Socials */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-sans-clean text-white/70">
          {/* Brand & Tagline */}
          <div className="text-center md:text-left space-y-1">
            <h3 className="font-serif-main text-2xl text-white">Maria Hoffmann</h3>
            <p className="text-[11px] text-white/60">
              Wedding Planner & Photographe d'Exception — Paris, Provence, Europe
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-[#9aa891] hover:text-[#141311] transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-[#9aa891] hover:text-[#141311] transition-colors"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pinterest"
              className="w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-[#9aa891] hover:text-[#141311] transition-colors"
            >
              <Heart className="w-4 h-4" />
            </a>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 hover:bg-white/10 text-white transition-all"
          >
            <span>Haut de page</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="mt-6 text-center text-[10px] text-white/40 font-sans-clean">
          © 2026 Maria Hoffmann. Tous droits réservés. Design Éditorial Mariage & Photographie.
        </div>
      </div>
    </footer>
  );
};
