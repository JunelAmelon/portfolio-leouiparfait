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
    subject: '',
    weddingDate: '',
    eventType: 'Offre Signature — Mariage clé en main',
    message: '',
    consent: false,
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
        ? ['#c8c0f5', '#e8e4dc', '#2e2a24', '#ffffff']
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
              ? 'bg-[#c8c0f5]/15 text-[#e8e4dc] hover:bg-[#c8c0f5] hover:text-[#141311]'
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
                  ? 'bg-[#c8c0f5]/20 text-[#e8e4dc]'
                  : 'bg-[#8b9a82]/20 text-[#5c6954]'
              }`}
            >
              <CheckCircle className="w-10 h-10" />
            </div>
            <h3
              className={`font-serif-main text-3xl sm:text-4xl ${
                isDarkMode ? 'text-[#c8c0f5]' : 'text-[#2c2b29]'
              }`}
            >
              Merci {formData.name || 'chers mariés'} !
            </h3>
            <p
              className={`text-sm font-sans-clean max-w-md mx-auto ${
                isDarkMode ? 'text-[#b5b0a5]' : 'text-[#5a5750]'
              }`}
            >
              Votre demande a bien été reçue. Notre équipe étudie votre projet et vous recontactera en
              moins de 30 minutes avec une proposition sur-mesure.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className={`mt-6 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-sans-clean font-medium transition-all active:scale-95 ${
                isDarkMode
                  ? 'bg-[#c8c0f5] text-[#141311] hover:bg-[#e8e4dc]'
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
                    ? 'bg-[#c8c0f5]/15 text-[#e8e4dc]'
                    : 'bg-[#8b9a82]/15 text-[#5c6954]'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Premier Échange Conseil</span>
              </div>
              <h2
                className={`font-serif-main text-3xl sm:text-4xl ${
                  isDarkMode ? 'text-[#c8c0f5]' : 'text-[#2c2b29]'
                }`}
              >
                Racontez-moi votre projet
              </h2>
              <p
                className={`text-xs sm:text-sm font-sans-clean mt-1 ${
                  isDarkMode ? 'text-[#c8c0f5]' : 'text-[#78876e]'
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
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Camille & Antoine"
                    className={`w-full px-3.5 py-2.5 rounded-xs border focus:outline-none ${
                      isDarkMode
                        ? 'bg-[#22201d] border-[#38332c] text-[#c8c0f5] focus:border-[#c8c0f5]'
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
                        ? 'bg-[#22201d] border-[#38332c] text-[#c8c0f5] focus:border-[#c8c0f5]'
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
                  Téléphone
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="06 00 00 00 00"
                  className={`w-full px-3.5 py-2.5 rounded-xs border focus:outline-none ${
                    isDarkMode
                      ? 'bg-[#22201d] border-[#38332c] text-[#c8c0f5] focus:border-[#c8c0f5]'
                      : 'bg-white border-[#e8e4dc] text-[#2c2b29] focus:border-[#8b9a82]'
                  }`}
                />
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
                        isDarkMode ? 'text-[#c8c0f5]' : 'text-[#8b9a82]'
                      }`}
                    />
                    <span>Choisir une date</span>
                  </label>
                  <input
                    type="date"
                    value={formData.weddingDate}
                    onChange={(e) => setFormData({ ...formData, weddingDate: e.target.value })}
                    className={`w-full px-3.5 py-2.5 rounded-xs border focus:outline-none ${
                      isDarkMode
                        ? 'bg-[#22201d] border-[#38332c] text-[#c8c0f5] focus:border-[#c8c0f5]'
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
                        isDarkMode ? 'text-[#c8c0f5]' : 'text-[#8b9a82]'
                      }`}
                    />
                    <span>Sujet</span>
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="ex: Demande de devis, Renseignements..."
                    className={`w-full px-3.5 py-2.5 rounded-xs border focus:outline-none ${
                      isDarkMode
                        ? 'bg-[#22201d] border-[#38332c] text-[#c8c0f5] focus:border-[#c8c0f5]'
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
                  Type d'événement
                </label>
                <select
                  value={formData.eventType}
                  onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                  className={`w-full px-3.5 py-2.5 rounded-xs border focus:outline-none ${
                    isDarkMode
                      ? 'bg-[#22201d] border-[#38332c] text-[#c8c0f5] focus:border-[#c8c0f5]'
                      : 'bg-white border-[#e8e4dc] text-[#2c2b29] focus:border-[#8b9a82]'
                  }`}
                >
                  <option>Offre Signature — Mariage clé en main</option>
                  <option>Offre Élégance — Organisation partielle</option>
                  <option>Offre Harmonie — Coordination du jour J</option>
                  <option>EVJF / EVG Shooting Tour à Paris</option>
                  <option>Demande en mariage</option>
                  <option>Autre demande</option>
                </select>
              </div>

              <div>
                <label
                  className={`block font-medium mb-1 ${
                    isDarkMode ? 'text-[#b5b0a5]' : 'text-[#5a5750]'
                  }`}
                >
                  Votre message
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Décrivez votre projet, le nombre d'invités, ce qui vous tient particulièrement à cœur..."
                  className={`w-full px-3.5 py-2.5 rounded-xs border focus:outline-none ${
                    isDarkMode
                      ? 'bg-[#22201d] border-[#38332c] text-[#c8c0f5] focus:border-[#c8c0f5]'
                      : 'bg-white border-[#e8e4dc] text-[#2c2b29] focus:border-[#8b9a82]'
                  }`}
                />
              </div>

              <label
                className={`flex items-start gap-2 text-xs ${
                  isDarkMode ? 'text-[#b5b0a5]' : 'text-[#5a5750]'
                }`}
              >
                <input
                  type="checkbox"
                  required
                  checked={formData.consent}
                  onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                  className={`mt-0.5 ${isDarkMode ? 'accent-[#c8c0f5]' : 'accent-[#8b9a82]'}`}
                />
                <span>J'ai lu et accepté les conditions générales</span>
              </label>

              <div className="pt-2 text-center">
                <button
                  type="submit"
                  className={`w-full py-2.5 sm:py-3.5 rounded-full font-medium text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-2 active:scale-95 ${
                    isDarkMode
                      ? 'bg-[#c8c0f5] text-[#141311] hover:bg-[#e8e4dc]'
                      : 'bg-[#8b9a82] text-white hover:bg-[#74836b]'
                  }`}
                >
                  <Send className="w-4 h-4" />
                  <span>Envoyer</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
