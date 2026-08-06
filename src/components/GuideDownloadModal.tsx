import React, { useState } from 'react';
import { X, Send, CheckCircle, Camera, Sparkles, Car } from 'lucide-react';
import confetti from 'canvas-confetti';

interface GuideDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  isDarkMode?: boolean;
}

export const GuideDownloadModal: React.FC<GuideDownloadModalProps> = ({
  isOpen,
  onClose,
  isDarkMode = true,
}) => {
  const [reserved, setReserved] = useState(false);

  if (!isOpen) return null;

  const handleReserve = () => {
    setReserved(true);
    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.5 },
      colors: isDarkMode
        ? ['#c8c0f5', '#e8e4dc', '#ffffff']
        : ['#8b9a82', '#78876e', '#ffffff'],
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div
        className={`relative w-full max-w-2xl rounded-xs border p-6 sm:p-10 polaroid-shadow my-8 transition-colors ${
          isDarkMode
            ? 'bg-[#181614] border-[#332f28] text-[#e8e4dc]'
            : 'bg-[#faf8f5] border-[#e8e4dc] text-[#2c2b29]'
        }`}
      >
        <button
          onClick={onClose}
          className={`absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
            isDarkMode
              ? 'bg-[#c8c0f5]/15 text-[#e8e4dc] hover:bg-[#c8c0f5] hover:text-[#141311]'
              : 'bg-[#8b9a82]/15 text-[#5c6954] hover:bg-[#8b9a82] hover:text-white'
          }`}
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <div
            className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-sans-clean mb-2 ${
              isDarkMode
                ? 'bg-[#c8c0f5]/15 text-[#e8e4dc]'
                : 'bg-[#8b9a82]/15 text-[#5c6954]'
            }`}
          >
            <Camera className="w-3.5 h-3.5" />
            <span>Animation & Séance Photo</span>
          </div>
          <h2
            className={`font-serif-main text-3xl sm:text-4xl ${
              isDarkMode ? 'text-[#c8c0f5]' : 'text-[#2c2b29]'
            }`}
          >
            Le Oui Parfait Shooting Tour
          </h2>
          <p
            className={`text-xs sm:text-sm font-sans-clean mt-1 ${
              isDarkMode ? 'text-[#c8c0f5]' : 'text-[#78876e]'
            }`}
          >
            L'EVJF / EVG nouvelle génération à Paris
          </p>
        </div>

        {/* Preview Checklist Summary */}
        <div
          className={`p-5 rounded-xs border space-y-4 mb-6 text-xs sm:text-sm font-sans-clean ${
            isDarkMode
              ? 'bg-[#22201d] border-[#38332c] text-[#b5b0a5]'
              : 'bg-white border-[#e8e4dc] text-[#5a5750]'
          }`}
        >
          <h3
            className={`font-serif-main text-lg flex items-center gap-2 ${
              isDarkMode ? 'text-[#c8c0f5]' : 'text-[#2c2b29]'
            }`}
          >
            <Sparkles className={`w-4 h-4 ${isDarkMode ? 'text-[#c8c0f5]' : 'text-[#8b9a82]'}`} />
            Ce qui est inclus dans votre journée :
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="flex items-start gap-2">
              <Car
                className={`w-4 h-4 shrink-0 mt-0.5 ${
                  isDarkMode ? 'text-[#c8c0f5]' : 'text-[#8b9a82]'
                }`}
              />
              <div>
                <strong className={isDarkMode ? 'text-[#c8c0f5]' : 'text-[#2c2b29]'}>
                  Transport :
                </strong>{' '}
                Navette avec chauffeur ou berline de luxe pour vous et vos proches.
              </div>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle
                className={`w-4 h-4 shrink-0 mt-0.5 ${
                  isDarkMode ? 'text-[#c8c0f5]' : 'text-[#8b9a82]'
                }`}
              />
              <div>
                <strong className={isDarkMode ? 'text-[#c8c0f5]' : 'text-[#2c2b29]'}>
                  Shooting :
                </strong>{' '}
                Séance photo & vidéo en extérieur et/ou en studio.
              </div>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle
                className={`w-4 h-4 shrink-0 mt-0.5 ${
                  isDarkMode ? 'text-[#c8c0f5]' : 'text-[#8b9a82]'
                }`}
              />
              <div>
                <strong className={isDarkMode ? 'text-[#c8c0f5]' : 'text-[#2c2b29]'}>
                  Mise en beauté :
                </strong>{' '}
                Un accompagnement soigné pour être sublime devant l'objectif.
              </div>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle
                className={`w-4 h-4 shrink-0 mt-0.5 ${
                  isDarkMode ? 'text-[#c8c0f5]' : 'text-[#8b9a82]'
                }`}
              />
              <div>
                <strong className={isDarkMode ? 'text-[#c8c0f5]' : 'text-[#2c2b29]'}>
                  Souvenirs :
                </strong>{' '}
                Des souvenirs inoubliables à partager entre proches.
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={handleReserve}
            className={`w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3.5 rounded-full font-sans-clean font-medium text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-2 active:scale-95 ${
              isDarkMode
                ? 'bg-[#c8c0f5] text-[#141311] hover:bg-[#e8e4dc]'
                : 'bg-[#8b9a82] text-white hover:bg-[#74836b]'
            }`}
          >
            <Send className="w-4 h-4" />
            <span>{reserved ? 'Demande envoyée !' : 'Réserver mon Shooting Tour'}</span>
          </button>
          <button
            onClick={onClose}
            className={`w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3.5 rounded-full border font-sans-clean font-medium text-xs sm:text-sm transition-all active:scale-95 ${
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
  );
};
