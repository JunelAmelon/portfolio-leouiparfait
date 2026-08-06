import React, { useState, useEffect, useRef } from 'react';
import { Instagram, Facebook, Heart, Menu as MenuIcon, X, Send, Moon, Sun } from 'lucide-react';
import gsap from 'gsap';

interface NavbarProps {
  onOpenContact: () => void;
  onOpenGuide: () => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenContact,
  onOpenGuide,
  isDarkMode,
  onToggleDarkMode,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isMenuOpen && menuRef.current) {
      gsap.fromTo(
        menuRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }
      );
      if (linksRef.current) {
        gsap.fromTo(
          linksRef.current.children,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.3, stagger: 0.08, ease: 'power2.out', delay: 0.1 }
        );
      }
    }
  }, [isMenuOpen]);

  const navLinks = [
    { label: 'Accueil', href: '#hero' },
    { label: 'Histoires & Mariages', href: '#stories' },
    { label: 'À Propos', href: '#about' },
    { label: 'Services & Arches', href: '#services' },
    { label: 'Notre Processus', href: '#process' },
    { label: 'Avis des Mariés', href: '#testimonials' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 backdrop-blur-md border-b transition-colors duration-300 ${
          isDarkMode
            ? 'bg-[#181714]/90 border-[#2e2a24]'
            : 'bg-[#faf8f5]/90 border-[#e8e4dc]/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Social Icons & Theme Switcher Left */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-all transform hover:scale-105 ${
                isDarkMode
                  ? 'bg-[#9aa891]/15 text-[#b5c4ab] hover:bg-[#9aa891] hover:text-[#141311]'
                  : 'bg-[#8b9a82]/15 text-[#5c6954] hover:bg-[#8b9a82] hover:text-white'
              }`}
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-all transform hover:scale-105 ${
                isDarkMode
                  ? 'bg-[#9aa891]/15 text-[#b5c4ab] hover:bg-[#9aa891] hover:text-[#141311]'
                  : 'bg-[#8b9a82]/15 text-[#5c6954] hover:bg-[#8b9a82] hover:text-white'
              }`}
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pinterest"
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-all transform hover:scale-105 ${
                isDarkMode
                  ? 'bg-[#9aa891]/15 text-[#b5c4ab] hover:bg-[#9aa891] hover:text-[#141311]'
                  : 'bg-[#8b9a82]/15 text-[#5c6954] hover:bg-[#8b9a82] hover:text-white'
              }`}
            >
              <Heart className="w-4 h-4" />
            </a>

            {/* Dark/Light Theme Switch Button */}
            <button
              onClick={onToggleDarkMode}
              aria-label="Changer de thème"
              title={isDarkMode ? 'Passer en Mode Clair' : 'Passer en Mode Sombre'}
              className={`px-3 py-1.5 rounded-full text-xs font-sans-clean flex items-center gap-1.5 transition-all ml-1 border ${
                isDarkMode
                  ? 'bg-[#282520] border-[#3e3931] text-[#e8e4dc] hover:border-[#9aa891]'
                  : 'bg-[#eee9df] border-[#dcd6ca] text-[#2c2b29] hover:border-[#8b9a82]'
              }`}
            >
              {isDarkMode ? (
                <>
                  <Sun className="w-3.5 h-3.5 text-[#e0ca97]" />
                  <span className="hidden sm:inline">Clair</span>
                </>
              ) : (
                <>
                  <Moon className="w-3.5 h-3.5 text-[#5c6954]" />
                  <span className="hidden sm:inline">Sombre</span>
                </>
              )}
            </button>
          </div>

          {/* Central Logo */}
          <a href="#hero" className="text-center group">
            <h1
              className={`font-serif-main text-2xl sm:text-3xl lg:text-4xl tracking-tight font-medium transition-colors ${
                isDarkMode
                  ? 'text-[#f4f0e8] group-hover:text-[#9aa891]'
                  : 'text-[#2c2b29] group-hover:text-[#8b9a82]'
              }`}
            >
              Maria
            </h1>
            <div
              className={`font-script text-lg sm:text-xl -mt-2 tracking-widest ${
                isDarkMode ? 'text-[#9aa891]' : 'text-[#78876e]'
              }`}
            >
              Hoffmann
            </div>
          </a>

          {/* Right Action Buttons */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <button
              onClick={onOpenContact}
              className={`hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-sans-clean font-medium active:scale-95 transition-all shadow-sm ${
                isDarkMode
                  ? 'bg-[#9aa891] text-[#141311] hover:bg-[#b5c4ab]'
                  : 'bg-[#8b9a82] text-white hover:bg-[#74836b]'
              }`}
            >
              <Send className="w-3.5 h-3.5" />
              <span>Prendre contact</span>
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`px-4 py-2 rounded-full border text-xs sm:text-sm font-sans-clean font-medium transition-all flex items-center gap-1.5 ${
                isDarkMode
                  ? 'border-[#9aa891]/40 text-[#e8e4dc] hover:bg-[#9aa891]/15'
                  : 'border-[#8b9a82]/40 text-[#2c2b29] hover:bg-[#8b9a82]/10'
              }`}
            >
              {isMenuOpen ? <X className="w-4 h-4" /> : <MenuIcon className="w-4 h-4" />}
              <span>{isMenuOpen ? 'Fermer' : 'Menu'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Overlay Menu */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className={`fixed inset-0 z-30 pt-28 px-6 pb-12 flex flex-col justify-between overflow-y-auto ${
            isDarkMode ? 'bg-[#141311]/98 text-[#e8e4dc]' : 'bg-[#faf8f5]/98 text-[#2c2b29]'
          }`}
        >
          <div className="max-w-3xl mx-auto w-full text-center my-auto">
            <p
              className={`text-xs font-sans-clean uppercase tracking-widest mb-6 ${
                isDarkMode ? 'text-[#9aa891]' : 'text-[#78876e]'
              }`}
            >
              Navigation & Services
            </p>
            <nav ref={linksRef} className="flex flex-col space-y-4 sm:space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-serif-main text-3xl sm:text-4xl transition-colors hover:italic ${
                    isDarkMode
                      ? 'text-[#e8e4dc] hover:text-[#9aa891]'
                      : 'text-[#2c2b29] hover:text-[#8b9a82]'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div
              className={`mt-10 pt-8 border-t flex flex-wrap justify-center gap-4 ${
                isDarkMode ? 'border-[#2e2a24]' : 'border-[#e8e4dc]'
              }`}
            >
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  onOpenContact();
                }}
                className={`px-8 py-3 rounded-full font-sans-clean text-sm font-medium transition-all shadow-md ${
                  isDarkMode
                    ? 'bg-[#9aa891] text-[#141311] hover:bg-[#b5c4ab]'
                    : 'bg-[#8b9a82] text-white hover:bg-[#74836b]'
                }`}
              >
                Demander un devis sur-mesure
              </button>
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  onOpenGuide();
                }}
                className={`px-8 py-3 rounded-full border font-sans-clean text-sm font-medium transition-all ${
                  isDarkMode
                    ? 'border-[#9aa891] text-[#9aa891] hover:bg-[#9aa891]/15'
                    : 'border-[#8b9a82] text-[#5c6954] hover:bg-[#8b9a82]/10'
                }`}
              >
                Guide Mariage Offert
              </button>
            </div>
          </div>

          <div
            className={`text-center text-xs font-sans-clean mt-8 ${
              isDarkMode ? 'text-[#807b71]' : 'text-[#8a8780]'
            }`}
          >
            © 2026 Maria Hoffmann. Wedding Planning & Photographie d'Exception.
          </div>
        </div>
      )}
    </>
  );
};

