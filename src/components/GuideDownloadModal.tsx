import React, { useState } from 'react';
import { X, Download, CheckCircle, BookOpen, Sparkles, Printer } from 'lucide-react';
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
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    setDownloaded(true);
    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.5 },
      colors: isDarkMode
        ? ['#9aa891', '#b5c4ab', '#ffffff']
        : ['#8b9a82', '#78876e', '#ffffff'],
    });

    // Simulate printing / downloading
    window.print();
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
              ? 'bg-[#9aa891]/15 text-[#b5c4ab] hover:bg-[#9aa891] hover:text-[#141311]'
              : 'bg-[#8b9a82]/15 text-[#5c6954] hover:bg-[#8b9a82] hover:text-white'
          }`}
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <div
            className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-sans-clean mb-2 ${
              isDarkMode
                ? 'bg-[#9aa891]/15 text-[#b5c4ab]'
                : 'bg-[#8b9a82]/15 text-[#5c6954]'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Guide Exclusif Offert — Édition 2026/2027</span>
          </div>
          <h2
            className={`font-serif-main text-3xl sm:text-4xl ${
              isDarkMode ? 'text-[#f4f0e8]' : 'text-[#2c2b29]'
            }`}
          >
            Le Guide d'Organisation du Mariage Serein
          </h2>
          <p
            className={`text-xs sm:text-sm font-sans-clean mt-1 ${
              isDarkMode ? 'text-[#9aa891]' : 'text-[#78876e]'
            }`}
          >
            Par Maria Hoffmann — Wedding Planner & Photographe
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
              isDarkMode ? 'text-[#f4f0e8]' : 'text-[#2c2b29]'
            }`}
          >
            <Sparkles className={`w-4 h-4 ${isDarkMode ? 'text-[#9aa891]' : 'text-[#8b9a82]'}`} />
            Sommaire du Guide Téléchargeable :
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="flex items-start gap-2">
              <CheckCircle
                className={`w-4 h-4 shrink-0 mt-0.5 ${
                  isDarkMode ? 'text-[#9aa891]' : 'text-[#8b9a82]'
                }`}
              />
              <div>
                <strong className={isDarkMode ? 'text-[#f4f0e8]' : 'text-[#2c2b29]'}>
                  J-12 à J-6 mois :
                </strong>{' '}
                Définition du concept, sélection du domaine et des prestataires clés.
              </div>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle
                className={`w-4 h-4 shrink-0 mt-0.5 ${
                  isDarkMode ? 'text-[#9aa891]' : 'text-[#8b9a82]'
                }`}
              />
              <div>
                <strong className={isDarkMode ? 'text-[#f4f0e8]' : 'text-[#2c2b29]'}>
                  J-3 mois :
                </strong>{' '}
                Essayages de tenues, scénographie florale et menu traiteur.
              </div>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle
                className={`w-4 h-4 shrink-0 mt-0.5 ${
                  isDarkMode ? 'text-[#9aa891]' : 'text-[#8b9a82]'
                }`}
              />
              <div>
                <strong className={isDarkMode ? 'text-[#f4f0e8]' : 'text-[#2c2b29]'}>
                  J-1 mois :
                </strong>{' '}
                Planning heure par heure du jour J et dossier photographe.
              </div>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle
                className={`w-4 h-4 shrink-0 mt-0.5 ${
                  isDarkMode ? 'text-[#9aa891]' : 'text-[#8b9a82]'
                }`}
              />
              <div>
                <strong className={isDarkMode ? 'text-[#f4f0e8]' : 'text-[#2c2b29]'}>
                  Kit d'Urgence Jour J :
                </strong>{' '}
                15 indispensables secrets pour la mariée.
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={handleDownload}
            className={`w-full sm:w-auto px-8 py-3.5 rounded-full font-sans-clean font-medium text-sm transition-all shadow-md flex items-center justify-center gap-2 ${
              isDarkMode
                ? 'bg-[#9aa891] text-[#141311] hover:bg-[#b5c4ab]'
                : 'bg-[#8b9a82] text-white hover:bg-[#74836b]'
            }`}
          >
            <Download className="w-4 h-4" />
            <span>{downloaded ? 'Téléchargé ! Ré-imprimer' : 'Télécharger le PDF / Imprimer'}</span>
          </button>
          <button
            onClick={onClose}
            className={`w-full sm:w-auto px-6 py-3.5 rounded-full border font-sans-clean font-medium text-sm transition-all ${
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
