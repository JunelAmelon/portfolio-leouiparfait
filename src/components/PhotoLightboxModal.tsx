import React from 'react';
import { X, Calendar, MapPin, Sparkles } from 'lucide-react';
import { StoryItem } from '../types';

interface PhotoLightboxModalProps {
  story: StoryItem | null;
  onClose: () => void;
  onOpenContact: () => void;
  isDarkMode?: boolean;
}

export const PhotoLightboxModal: React.FC<PhotoLightboxModalProps> = ({
  story,
  onClose,
  onOpenContact,
  isDarkMode = true,
}) => {
  if (!story) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div
        className={`relative w-full max-w-4xl rounded-xs border p-6 sm:p-10 polaroid-shadow my-8 transition-colors ${
          isDarkMode
            ? 'bg-[#181614] border-[#332f28] text-[#e8e4dc]'
            : 'bg-[#faf8f5] border-[#e8e4dc] text-[#2c2b29]'
        }`}
      >
        <button
          onClick={onClose}
          className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
            isDarkMode
              ? 'bg-white/10 text-[#e8e4dc] hover:bg-[#9aa891] hover:text-[#141311]'
              : 'bg-black/10 text-[#2c2b29] hover:bg-[#8b9a82] hover:text-white'
          }`}
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <div
              className={`aspect-[4/3] rounded-xs overflow-hidden border ${
                isDarkMode ? 'border-[#38332c] bg-black/40' : 'border-[#e8e4dc] bg-black/5'
              }`}
            >
              <img
                src={story.image}
                alt={story.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4 font-sans-clean">
            <div
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs ${
                isDarkMode
                  ? 'bg-[#9aa891]/15 text-[#b5c4ab]'
                  : 'bg-[#8b9a82]/15 text-[#5c6954]'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span className="capitalize">{story.category}</span>
            </div>

            <h2
              className={`font-serif-main text-2xl sm:text-3xl leading-tight ${
                isDarkMode ? 'text-[#f4f0e8]' : 'text-[#2c2b29]'
              }`}
            >
              {story.title}
            </h2>

            <div
              className={`text-xs space-y-1 ${
                isDarkMode ? 'text-[#9aa891]' : 'text-[#78876e]'
              }`}
            >
              <p className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                <span>{story.date}</span>
              </p>
              <p className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                <span>{story.location}</span>
              </p>
            </div>

            <p
              className={`text-xs sm:text-sm leading-relaxed pt-2 ${
                isDarkMode ? 'text-[#b5b0a5]' : 'text-[#5a5750]'
              }`}
            >
              {story.description}
            </p>

            <div
              className={`pt-4 border-t flex gap-3 ${
                isDarkMode ? 'border-[#38332c]' : 'border-[#e8e4dc]'
              }`}
            >
              <button
                onClick={() => {
                  onClose();
                  onOpenContact();
                }}
                className={`px-6 py-2.5 rounded-full text-xs font-medium transition-all shadow-xs ${
                  isDarkMode
                    ? 'bg-[#9aa891] text-[#141311] hover:bg-[#b5c4ab]'
                    : 'bg-[#8b9a82] text-white hover:bg-[#74836b]'
                }`}
              >
                Réserver une date similaire
              </button>
              <button
                onClick={onClose}
                className={`px-5 py-2.5 rounded-full border text-xs transition-colors ${
                  isDarkMode
                    ? 'border-[#38332c] text-[#b5b0a5] hover:bg-[#22201d]'
                    : 'border-[#e8e4dc] text-[#5a5750] hover:bg-white'
                }`}
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
