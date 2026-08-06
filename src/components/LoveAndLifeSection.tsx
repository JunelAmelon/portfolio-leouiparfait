import React, { useState } from 'react';
import { STORIES } from '../data/weddingData';
import { StoryItem } from '../types';
import { ChevronLeft, ChevronRight, MapPin, Calendar, Eye } from 'lucide-react';

interface LoveAndLifeProps {
  onSelectStory: (story: StoryItem) => void;
  isDarkMode?: boolean;
}

export const LoveAndLifeSection: React.FC<LoveAndLifeProps> = ({
  onSelectStory,
  isDarkMode = true,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % STORIES.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + STORIES.length) % STORIES.length);
  };

  // Display 2 items at a time
  const visibleStories = [
    STORIES[currentIndex],
    STORIES[(currentIndex + 1) % STORIES.length],
  ];

  return (
    <section id="stories" className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Top Main Section Header */}
      <div className="text-center mb-10">
        <h2
          className={`font-serif-main text-3xl sm:text-5xl lg:text-6xl font-normal tracking-wide uppercase ${
            isDarkMode ? 'text-[#f4f0e8]' : 'text-[#2c2b29]'
          }`}
        >
          LOVE + LIFE
        </h2>
        <div
          className={`w-16 h-0.5 mx-auto mt-3 rounded-full ${
            isDarkMode ? 'bg-[#9aa891]' : 'bg-[#8b9a82]'
          }`}
        />
      </div>

      {/* Sub Header Bar */}
      <div
        className={`flex items-center justify-between border-b pb-3 mb-8 text-xs sm:text-sm font-sans-clean uppercase tracking-widest ${
          isDarkMode ? 'border-[#2e2a24] text-[#9aa891]' : 'border-[#e8e4dc] text-[#78876e]'
        }`}
      >
        <span>DERNIÈRES HISTOIRES</span>
        <button
          onClick={() => onSelectStory(visibleStories[0])}
          className={`underline underline-offset-4 transition-colors ${
            isDarkMode ? 'hover:text-[#f4f0e8]' : 'hover:text-[#2c2b29]'
          }`}
        >
          VOIR TOUTES LES HISTOIRES
        </button>
      </div>

      {/* Slider Carousel Container */}
      <div className="relative">
        {/* Carousel Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {visibleStories.map((story) => (
            <div
              key={story.id}
              onClick={() => onSelectStory(story)}
              className={`group cursor-pointer rounded-xs p-3 border editorial-shadow transition-all duration-300 ${
                isDarkMode
                  ? 'bg-[#1c1a17] border-[#332f28] hover:border-[#9aa891]'
                  : 'bg-white border-[#e8e4dc] hover:border-[#8b9a82]'
              }`}
            >
              <div
                className={`relative aspect-[4/3] overflow-hidden ${
                  isDarkMode ? 'bg-[#282521]' : 'bg-[#e8e4dc]/30'
                }`}
              >
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span
                    className={`px-4 py-2 rounded-full text-xs font-sans-clean font-medium flex items-center gap-2 shadow-md ${
                      isDarkMode
                        ? 'bg-[#25221d] text-[#e8e4dc] border border-[#3e3931]'
                        : 'bg-white/90 text-[#2c2b29]'
                    }`}
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Découvrir l'histoire</span>
                  </span>
                </div>
              </div>

              <div className="p-4 text-center">
                <p
                  className={`text-xs font-sans-clean uppercase tracking-widest flex items-center justify-center gap-1.5 mb-1 ${
                    isDarkMode ? 'text-[#9aa891]' : 'text-[#78876e]'
                  }`}
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{story.date}</span>
                </p>
                <h3
                  className={`font-serif-main text-xl sm:text-2xl transition-colors ${
                    isDarkMode
                      ? 'text-[#f4f0e8] group-hover:text-[#9aa891]'
                      : 'text-[#2c2b29] group-hover:text-[#8b9a82]'
                  }`}
                >
                  {story.title}
                </h3>
                <p
                  className={`text-xs font-sans-clean mt-1 flex items-center justify-center gap-1 ${
                    isDarkMode ? 'text-[#8c867a]' : 'text-[#8a8780]'
                  }`}
                >
                  <MapPin
                    className={`w-3 h-3 ${isDarkMode ? 'text-[#9aa891]' : 'text-[#8b9a82]'}`}
                  />
                  <span>{story.location}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Arrow Controls */}
        <button
          onClick={handlePrev}
          aria-label="Histoire précédente"
          className={`absolute -left-3 sm:-left-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full border flex items-center justify-center transition-all shadow-md z-10 ${
            isDarkMode
              ? 'bg-[#22201d] border-[#38332c] text-[#e8e4dc] hover:bg-[#9aa891] hover:text-[#141311]'
              : 'bg-white/90 border-[#e8e4dc] text-[#2c2b29] hover:bg-[#8b9a82] hover:text-white'
          }`}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={handleNext}
          aria-label="Histoire suivante"
          className={`absolute -right-3 sm:-right-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full border flex items-center justify-center transition-all shadow-md z-10 ${
            isDarkMode
              ? 'bg-[#22201d] border-[#38332c] text-[#e8e4dc] hover:bg-[#9aa891] hover:text-[#141311]'
              : 'bg-white/90 border-[#e8e4dc] text-[#2c2b29] hover:bg-[#8b9a82] hover:text-white'
          }`}
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};
