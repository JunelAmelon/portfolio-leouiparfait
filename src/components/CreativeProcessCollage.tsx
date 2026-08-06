import React from 'react';
import { CREATIVE_COLLAGE_DATA, HERO_IMAGES } from '../data/weddingData';
import { Film, Heart, Sparkles } from 'lucide-react';

interface CreativeProcessCollageProps {
  isDarkMode?: boolean;
}

export const CreativeProcessCollage: React.FC<CreativeProcessCollageProps> = ({
  isDarkMode = true,
}) => {
  return (
    <section
      className={`py-16 sm:py-24 px-4 sm:px-6 overflow-hidden relative transition-colors duration-300 ${
        isDarkMode ? 'bg-[#181714]' : 'bg-[#f4f0e8]/40'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className={`font-serif-main text-3xl sm:text-5xl lg:text-6xl font-normal ${
              isDarkMode ? 'text-[#f4f0e8]' : 'text-[#2c2b29]'
            }`}
          >
            {CREATIVE_COLLAGE_DATA.heading}
          </h2>
          <p
            className={`font-script text-2xl sm:text-3xl mt-1 ${
              isDarkMode ? 'text-[#9aa891]' : 'text-[#78876e]'
            }`}
          >
            {CREATIVE_COLLAGE_DATA.subheading}
          </p>
        </div>

        {/* Collage Layout Container */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* SVG Background Path Line */}
          <svg
            className={`absolute inset-0 w-full h-full pointer-events-none hidden lg:block ${
              isDarkMode ? 'text-[#9aa891]/20' : 'text-[#8b9a82]/30'
            }`}
            fill="none"
            viewBox="0 0 1000 600"
          >
            <path
              d="M 150 200 Q 400 100, 650 250 T 850 500"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />
          </svg>

          {/* Left Column: Large Preparation Photo + Text */}
          <div className="lg:col-span-5 space-y-6 relative z-10">
            <div
              className={`relative p-3 sm:p-4 rounded-xs border polaroid-shadow ${
                isDarkMode ? 'bg-[#1c1a17] border-[#332f28]' : 'bg-white border-[#e8e4dc]'
              }`}
            >
              <div
                className={`aspect-[3/4] overflow-hidden ${
                  isDarkMode ? 'bg-[#282521]' : 'bg-[#e8e4dc]'
                }`}
              >
                <img
                  src={CREATIVE_COLLAGE_DATA.mainImage}
                  alt="Préparation de la mariée"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Floating Flower Overlay */}
              <div
                className={`absolute -bottom-4 -right-4 w-14 h-14 rounded-full p-1 shadow-md border ${
                  isDarkMode ? 'bg-[#25221d] border-[#3a352d]' : 'bg-white border-[#e8e4dc]'
                }`}
              >
                <img
                  src={HERO_IMAGES.flowerOverlay1}
                  alt="Décoration florale"
                  className="w-full h-full object-cover rounded-full"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <p
              className={`text-xs sm:text-sm font-sans-clean leading-relaxed max-w-md ${
                isDarkMode ? 'text-[#b5b0a5]' : 'text-[#5a5750]'
              }`}
            >
              {CREATIVE_COLLAGE_DATA.point1}
            </p>
          </div>

          {/* Film Strip Divider Graphic (Middle) */}
          <div className="hidden lg:flex lg:col-span-1 justify-center items-center">
            <div
              className={`w-10 p-1 rounded-xs flex flex-col items-center space-y-2 opacity-80 shadow-md ${
                isDarkMode ? 'bg-[#2d2924] text-[#e8e4dc]' : 'bg-[#2c2b29] text-white'
              }`}
            >
              <Film className="w-4 h-4 opacity-60" />
              <div className="w-6 h-1 bg-white/30 rounded-xs" />
              <div className="w-6 h-1 bg-white/30 rounded-xs" />
              <div className="w-6 h-1 bg-white/30 rounded-xs" />
              <div className="w-6 h-1 bg-white/30 rounded-xs" />
              <Film className="w-4 h-4 opacity-60" />
            </div>
          </div>

          {/* Right Column: Running Couple + Polaroid */}
          <div className="lg:col-span-6 space-y-8 relative z-10">
            {/* Top Right Photo */}
            <div
              className={`p-3 rounded-xs border polaroid-shadow max-w-md ml-auto ${
                isDarkMode ? 'bg-[#1c1a17] border-[#332f28]' : 'bg-white border-[#e8e4dc]'
              }`}
            >
              <div
                className={`aspect-[16/10] overflow-hidden ${
                  isDarkMode ? 'bg-[#282521]' : 'bg-[#e8e4dc]'
                }`}
              >
                <img
                  src={CREATIVE_COLLAGE_DATA.secondaryImage}
                  alt="Couple en mouvement"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p
                className={`mt-2 text-xs font-sans-clean leading-relaxed ${
                  isDarkMode ? 'text-[#b5b0a5]' : 'text-[#5a5750]'
                }`}
              >
                {CREATIVE_COLLAGE_DATA.point2}
              </p>
            </div>

            {/* Bottom Right Polaroid Shot */}
            <div
              className={`relative p-4 pb-8 rounded-xs border polaroid-shadow max-w-xs transform rotate-2 hover:rotate-0 transition-transform ${
                isDarkMode ? 'bg-[#1c1a17] border-[#332f28]' : 'bg-white border-[#e8e4dc]'
              }`}
            >
              <div
                className={`aspect-square overflow-hidden ${
                  isDarkMode ? 'bg-[#282521]' : 'bg-[#e8e4dc]'
                }`}
              >
                <img
                  src={CREATIVE_COLLAGE_DATA.polaroidImage}
                  alt="Sourire spontané"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="mt-3 flex items-center gap-2">
                <Heart className={`w-4 h-4 ${isDarkMode ? 'text-[#9aa891]' : 'text-[#8b9a82]'}`} />
                <p
                  className={`text-xs font-serif-main italic ${
                    isDarkMode ? 'text-[#e8e4dc]' : 'text-[#2c2b29]'
                  }`}
                >
                  {CREATIVE_COLLAGE_DATA.point3}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
