import React, { useState } from 'react';
import { X, Send, Calendar, MapPin, Sparkles, CheckCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  isDarkMode?: boolean;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  isDarkMode = true,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    weddingDate: '',
    location: '',
    serviceType: 'Organisation Complète & Photo',
    budget: '15000',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Launch celebratory confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: isDarkMode
        ? ['#9aa891', '#b5c4ab', '#2e2a24', '#ffffff']
        : ['#8b9a82', '#78876e', '#e8e4dc', '#ffffff'],
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
        {/* Close Button */}
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

        {submitted ? (
          <div className="text-center py-12 space-y-4">
            <div
              className={`w-16 h-16 rounded-full mx-auto flex items-center justify-center ${
                isDarkMode
                  ? 'bg-[#9aa891]/20 text-[#b5c4ab]'
                  : 'bg-[#8b9a82]/20 text-[#5c6954]'
              }`}
            >
              <CheckCircle className="w-10 h-10" />
            </div>
            <h3
              className={`font-serif-main text-3xl sm:text-4xl ${
                isDarkMode ? 'text-[#f4f0e8]' : 'text-[#2c2b29]'
              }`}
            >
              Merci {formData.name || 'chers mariés'} !
            </h3>
            <p
              className={`text-sm font-sans-clean max-w-md mx-auto ${
                isDarkMode ? 'text-[#b5b0a5]' : 'text-[#5a5750]'
              }`}
            >
              Votre demande a bien été reçue. Maria étudiera votre projet et vous recontactera sous 24h
              avec une proposition sur-mesure.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className={`mt-6 px-8 py-3 rounded-full text-sm font-sans-clean font-medium transition-all ${
                isDarkMode
                  ? 'bg-[#9aa891] text-[#141311] hover:bg-[#b5c4ab]'
                  : 'bg-[#8b9a82] text-white hover:bg-[#74836b]'
              }`}
            >
              Fermer
            </button>
          </div>
        ) : (
          <div>
            <div className="text-center mb-6">
              <div
                className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-sans-clean mb-2 ${
                  isDarkMode
                    ? 'bg-[#9aa891]/15 text-[#b5c4ab]'
                    : 'bg-[#8b9a82]/15 text-[#5c6954]'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Premier Échange Conseil</span>
              </div>
              <h2
                className={`font-serif-main text-3xl sm:text-4xl ${
                  isDarkMode ? 'text-[#f4f0e8]' : 'text-[#2c2b29]'
                }`}
              >
                Racontez-moi votre projet
              </h2>
              <p
                className={`text-xs sm:text-sm font-sans-clean mt-1 ${
                  isDarkMode ? 'text-[#9aa891]' : 'text-[#78876e]'
                }`}
              >
                Discutons ensemble de vos rêves, de votre lieu et de vos envies.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm font-sans-clean">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    className={`block font-medium mb-1 ${
                      isDarkMode ? 'text-[#b5b0a5]' : 'text-[#5a5750]'
                    }`}
                  >
                    Vos Prénoms & Noms *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Camille & Antoine"
                    className={`w-full px-3.5 py-2.5 rounded-xs border focus:outline-none ${
                      isDarkMode
                        ? 'bg-[#22201d] border-[#38332c] text-[#f4f0e8] focus:border-[#9aa891]'
                        : 'bg-white border-[#e8e4dc] text-[#2c2b29] focus:border-[#8b9a82]'
                    }`}
                  />
                </div>
                <div>
                  <label
                    className={`block font-medium mb-1 ${
                      isDarkMode ? 'text-[#b5b0a5]' : 'text-[#5a5750]'
                    }`}
                  >
                    Adresse Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="exemple@email.com"
                    className={`w-full px-3.5 py-2.5 rounded-xs border focus:outline-none ${
                      isDarkMode
                        ? 'bg-[#22201d] border-[#38332c] text-[#f4f0e8] focus:border-[#9aa891]'
                        : 'bg-white border-[#e8e4dc] text-[#2c2b29] focus:border-[#8b9a82]'
                    }`}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    className={`block font-medium mb-1 flex items-center gap-1 ${
                      isDarkMode ? 'text-[#b5b0a5]' : 'text-[#5a5750]'
                    }`}
                  >
                    <Calendar
                      className={`w-3.5 h-3.5 ${
                        isDarkMode ? 'text-[#9aa891]' : 'text-[#8b9a82]'
                      }`}
                    />
                    <span>Date pressentie du Mariage</span>
                  </label>
                  <input
                    type="date"
                    value={formData.weddingDate}
                    onChange={(e) => setFormData({ ...formData, weddingDate: e.target.value })}
                    className={`w-full px-3.5 py-2.5 rounded-xs border focus:outline-none ${
                      isDarkMode
                        ? 'bg-[#22201d] border-[#38332c] text-[#f4f0e8] focus:border-[#9aa891]'
                        : 'bg-white border-[#e8e4dc] text-[#2c2b29] focus:border-[#8b9a82]'
                    }`}
                  />
                </div>
                <div>
                  <label
                    className={`block font-medium mb-1 flex items-center gap-1 ${
                      isDarkMode ? 'text-[#b5b0a5]' : 'text-[#5a5750]'
                    }`}
                  >
                    <MapPin
                      className={`w-3.5 h-3.5 ${
                        isDarkMode ? 'text-[#9aa891]' : 'text-[#8b9a82]'
                      }`}
                    />
                    <span>Lieu ou Région du Mariage</span>
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="ex: Provence, Paris, Château de..."
                    className={`w-full px-3.5 py-2.5 rounded-xs border focus:outline-none ${
                      isDarkMode
                        ? 'bg-[#22201d] border-[#38332c] text-[#f4f0e8] focus:border-[#9aa891]'
                        : 'bg-white border-[#e8e4dc] text-[#2c2b29] focus:border-[#8b9a82]'
                    }`}
                  />
                </div>
              </div>

              <div>
                <label
                  className={`block font-medium mb-1 ${
                    isDarkMode ? 'text-[#b5b0a5]' : 'text-[#5a5750]'
                  }`}
                >
                  Prestation souhaitée
                </label>
                <select
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  className={`w-full px-3.5 py-2.5 rounded-xs border focus:outline-none ${
                    isDarkMode
                      ? 'bg-[#22201d] border-[#38332c] text-[#f4f0e8] focus:border-[#9aa891]'
                      : 'bg-white border-[#e8e4dc] text-[#2c2b29] focus:border-[#8b9a82]'
                  }`}
                >
                  <option>Organisation Complète & Photographie</option>
                  <option>Photographie de Mariage Uniquement</option>
                  <option>Organisation & Scénographie Jour J</option>
                  <option>Elopement / Séance Engagement</option>
                </select>
              </div>

              <div>
                <div
                  className={`flex justify-between text-xs mb-1 ${
                    isDarkMode ? 'text-[#b5b0a5]' : 'text-[#5a5750]'
                  }`}
                >
                  <span>Budget estimé pour la prestation</span>
                  <span
                    className={`font-semibold ${
                      isDarkMode ? 'text-[#9aa891]' : 'text-[#8b9a82]'
                    }`}
                  >
                    {formData.budget} €
                  </span>
                </div>
                <input
                  type="range"
                  min="3000"
                  max="40000"
                  step="1000"
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className={`w-full ${isDarkMode ? 'accent-[#9aa891]' : 'accent-[#8b9a82]'}`}
                />
              </div>

              <div>
                <label
                  className={`block font-medium mb-1 ${
                    isDarkMode ? 'text-[#b5b0a5]' : 'text-[#5a5750]'
                  }`}
                >
                  Parlez-moi de votre vision & vos envies
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Décrivez l'ambiance, le nombre d'invités, ce qui vous tient particulièrement à cœur..."
                  className={`w-full px-3.5 py-2.5 rounded-xs border focus:outline-none ${
                    isDarkMode
                      ? 'bg-[#22201d] border-[#38332c] text-[#f4f0e8] focus:border-[#9aa891]'
                      : 'bg-white border-[#e8e4dc] text-[#2c2b29] focus:border-[#8b9a82]'
                  }`}
                />
              </div>

              <div className="pt-2 text-center">
                <button
                  type="submit"
                  className={`w-full py-3.5 rounded-full font-medium text-sm transition-all shadow-md flex items-center justify-center gap-2 ${
                    isDarkMode
                      ? 'bg-[#9aa891] text-[#141311] hover:bg-[#b5c4ab]'
                      : 'bg-[#8b9a82] text-white hover:bg-[#74836b]'
                  }`}
                >
                  <Send className="w-4 h-4" />
                  <span>Envoyer ma demande de renseignements</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
