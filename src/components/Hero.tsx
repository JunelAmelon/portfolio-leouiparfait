import React, { useEffect, useRef } from 'react';
import { HERO_IMAGES } from '../data/weddingData';
import { Sparkles, ArrowRight, Download } from 'lucide-react';
import gsap from 'gsap';

interface HeroProps {
  onOpenContact: () => void;
  onOpenGuide: () => void;
  isDarkMode?: boolean;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact, onOpenGuide, isDarkMode = true }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const leftCardRef = useRef<HTMLDivElement>(null);
  const rightCardRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const flower1Ref = useRef<HTMLDivElement>(null);
  const flower2Ref = useRef<HTMLDivElement>(null);
  const flower3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current, {
        y: 40,
        opacity: 0,
        duration: 1.1,
        ease: 'power3.out',
        delay: 0.2,
      });

      // Cards float in with tilt
      gsap.from(leftCardRef.current, {
        x: -80,
        y: 30,
        rotation: -12,
        opacity: 0,
        duration: 1.3,
        ease: 'power3.out',
        delay: 0.4,
      });

      gsap.from(rightCardRef.current, {
        x: 80,
        y: 30,
        rotation: 12,
        opacity: 0,
        duration: 1.3,
        ease: 'power3.out',
        delay: 0.5,
      });

      // Floating gentle animation for flowers
      gsap.to([flower1Ref.current, flower2Ref.current, flower3Ref.current], {
        y: '-=12',
        rotation: '+=5',
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.easeInOut',
        stagger: 0.4,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className={`relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center pt-8 pb-16 px-4 sm:px-6 overflow-hidden transition-colors duration-300 ${
        isDarkMode ? 'bg-[#141311]' : 'bg-[#faf8f5]'
      }`}
    >
      {/* Background Decorative Gradient Radial */}
      <div
        className={`absolute inset-0 opacity-70 pointer-events-none ${
          isDarkMode
            ? 'bg-radial from-[#1e1c18] via-[#141311] to-[#0c0c0b]'
            : 'bg-radial from-white/80 via-[#faf8f5] to-[#f4f0e8]'
        }`}
      />

      {/* Floating White Botanical Flowers */}
      <div
        ref={flower1Ref}
        className="absolute top-12 left-1/2 -translate-x-12 sm:top-16 sm:left-[55%] z-20 pointer-events-none drop-shadow-md"
      >
        <div
          className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full p-1 shadow-sm border ${
            isDarkMode ? 'bg-[#22201d] border-[#38332c]' : 'bg-white/90 border-[#e8e4dc]'
          }`}
        >
          <img
            src={HERO_IMAGES.flowerOverlay1}
            alt="Fleur d'anémone"
            className="w-full h-full object-cover rounded-full"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      <div
        ref={flower2Ref}
        className="absolute bottom-16 left-[20%] sm:left-[35%] z-20 pointer-events-none drop-shadow-md"
      >
        <div
          className={`w-14 h-14 sm:w-20 sm:h-20 rounded-full p-1 shadow-md border ${
            isDarkMode ? 'bg-[#22201d] border-[#38332c]' : 'bg-white/90 border-[#e8e4dc]'
          }`}
        >
          <img
            src={HERO_IMAGES.flowerOverlay2}
            alt="Jasmine blanche"
            className="w-full h-full object-cover rounded-full"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      <div
        ref={flower3Ref}
        className="absolute top-24 right-[10%] sm:right-[22%] z-20 pointer-events-none drop-shadow-md"
      >
        <div
          className={`w-10 h-10 sm:w-14 sm:h-14 rounded-full p-1 shadow-sm border ${
            isDarkMode ? 'bg-[#22201d] border-[#38332c]' : 'bg-white/90 border-[#e8e4dc]'
          }`}
        >
          <img
            src={HERO_IMAGES.flowerOverlay1}
            alt="Pétale de fleur"
            className="w-full h-full object-cover rounded-full opacity-90"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        {/* Left Photo Card (Tilted Couple Photo) */}
        <div className="lg:col-span-3 flex justify-center lg:justify-start order-2 lg:order-1">
          <div
            ref={leftCardRef}
            className={`relative p-3 sm:p-4 pb-8 sm:pb-12 rounded-xs polaroid-shadow border transform -rotate-6 hover:rotate-0 transition-transform duration-500 max-w-[260px] sm:max-w-[300px] w-full ${
              isDarkMode ? 'bg-[#1c1a17] border-[#332f28]' : 'bg-white border-[#e8e4dc]'
            }`}
          >
            <div
              className={`relative aspect-[3/4] overflow-hidden ${
                isDarkMode ? 'bg-[#282521]' : 'bg-[#e8e4dc]/40'
              }`}
            >
              <img
                src={HERO_IMAGES.coupleHero}
                alt="Mariés intimistes"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              {/* Corner White Flower Overlay */}
              <div
                className={`absolute -top-3 -right-3 w-10 h-10 sm:w-12 sm:h-12 rounded-full p-0.5 shadow-md border ${
                  isDarkMode ? 'bg-[#25221d] border-[#3a352d]' : 'bg-white border-[#e8e4dc]'
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
              className={`mt-3 text-center font-serif-main text-xs sm:text-sm italic ${
                isDarkMode ? 'text-[#b5c4ab]' : 'text-[#5c6954]'
              }`}
            >
              « L'émotion capturée au vol »
            </p>
          </div>
        </div>

        {/* Center Text Block */}
        <div className="lg:col-span-6 text-center order-1 lg:order-2 my-4 sm:my-0 px-2 sm:px-6">
          <div
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-sans-clean font-medium mb-6 ${
              isDarkMode
                ? 'bg-[#9aa891]/15 border-[#9aa891]/30 text-[#b5c4ab]'
                : 'bg-[#8b9a82]/10 border-[#8b9a82]/30 text-[#5c6954]'
            }`}
          >
            <Sparkles className={`w-3.5 h-3.5 ${isDarkMode ? 'text-[#9aa891]' : 'text-[#78876e]'}`} />
            <span>Wedding Planning & Photographie Éditoriale</span>
          </div>

          <h2
            ref={titleRef}
            className={`font-serif-main text-3xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] font-normal tracking-tight ${
              isDarkMode ? 'text-[#f4f0e8]' : 'text-[#2c2b29]'
            }`}
          >
            Je capture des{' '}
            <span
              className={`font-script text-4xl sm:text-6xl lg:text-7xl px-1 font-normal inline-block ${
                isDarkMode ? 'text-[#9aa891]' : 'text-[#78876e]'
              }`}
            >
              moments
            </span>{' '}
            vrais et des{' '}
            <span
              className={`font-script text-4xl sm:text-6xl lg:text-7xl px-1 font-normal inline-block ${
                isDarkMode ? 'text-[#9aa891]' : 'text-[#78876e]'
              }`}
            >
              histoires
            </span>{' '}
            sincères
          </h2>

          <p
            className={`mt-6 text-sm sm:text-base lg:text-lg font-sans-clean max-w-xl mx-auto leading-relaxed ${
              isDarkMode ? 'text-[#b5b0a5]' : 'text-[#5a5750]'
            }`}
          >
            De l'organisation sur-mesure de votre mariage à la photographie de votre jour J, je vous
            aide à vous sentir sereins, naturels et vous-mêmes face à l'objectif.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenContact}
              className={`w-full sm:w-auto px-8 py-3.5 rounded-full font-sans-clean font-medium text-sm transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 group ${
                isDarkMode
                  ? 'bg-[#9aa891] text-[#141311] hover:bg-[#b5c4ab]'
                  : 'bg-[#8b9a82] text-white hover:bg-[#74836b]'
              }`}
            >
              <span>Réserver votre date</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={onOpenGuide}
              className={`w-full sm:w-auto px-7 py-3.5 rounded-full border font-sans-clean font-medium text-sm transition-all flex items-center justify-center gap-2 ${
                isDarkMode
                  ? 'border-[#9aa891]/50 text-[#b5c4ab] hover:bg-[#9aa891]/15'
                  : 'border-[#8b9a82]/50 text-[#5c6954] hover:bg-[#8b9a82]/10'
              }`}
            >
              <Download className={`w-4 h-4 ${isDarkMode ? 'text-[#9aa891]' : 'text-[#78876e]'}`} />
              <span>Guide Mariage Offert</span>
            </button>
          </div>
        </div>

        {/* Right Photo Card (Tilted Dress Hanging Photo) */}
        <div className="lg:col-span-3 flex justify-center lg:justify-end order-3">
          <div
            ref={rightCardRef}
            className={`relative p-3 sm:p-4 pb-8 sm:pb-12 rounded-xs polaroid-shadow border transform rotate-6 hover:rotate-0 transition-transform duration-500 max-w-[260px] sm:max-w-[300px] w-full ${
              isDarkMode ? 'bg-[#1c1a17] border-[#332f28]' : 'bg-white border-[#e8e4dc]'
            }`}
          >
            <div
              className={`relative aspect-[3/4] overflow-hidden ${
                isDarkMode ? 'bg-[#282521]' : 'bg-[#e8e4dc]/40'
              }`}
            >
              <img
                src={HERO_IMAGES.dressHero}
                alt="Robe de mariée suspendue"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              {/* Top Flower Overlay */}
              <div
                className={`absolute top-2 left-2 w-10 h-10 sm:w-12 sm:h-12 rounded-full p-0.5 shadow-md border ${
                  isDarkMode ? 'bg-[#25221d] border-[#3a352d]' : 'bg-white border-[#e8e4dc]'
                }`}
              >
                <img
                  src={HERO_IMAGES.flowerOverlay2}
                  alt="Pétale"
                  className="w-full h-full object-cover rounded-full"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <p
              className={`mt-3 text-center font-serif-main text-xs sm:text-sm italic ${
                isDarkMode ? 'text-[#b5c4ab]' : 'text-[#5c6954]'
              }`}
            >
              « Scénographie & Élégance »
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
