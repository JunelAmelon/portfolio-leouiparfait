import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LoveAndLifeSection } from './components/LoveAndLifeSection';
import { AboutSection } from './components/AboutSection';
import { WeddingGuideBanner } from './components/WeddingGuideBanner';
import { ProcessSection } from './components/ProcessSection';
import { CategoriesArches } from './components/CategoriesArches';
import { CreativeProcessCollage } from './components/CreativeProcessCollage';
import { TestimonialsStampGrid } from './components/TestimonialsStampGrid';
import { FooterBanner } from './components/FooterBanner';
import { ContactModal } from './components/ContactModal';
import { GuideDownloadModal } from './components/GuideDownloadModal';
import { PhotoLightboxModal } from './components/PhotoLightboxModal';
import { StoryItem, ServiceCategory } from './types';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const [selectedStory, setSelectedStory] = useState<StoryItem | null>(null);

  const handleSelectCategory = (category: ServiceCategory) => {
    // Open contact form pre-filled or show story lightbox
    setIsContactOpen(true);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 font-sans-clean antialiased selection:bg-[#9aa891] selection:text-[#141311] ${
        isDarkMode
          ? 'bg-[#141311] text-[#e8e4dc] dark-mode'
          : 'bg-[#faf8f5] text-[#2c2b29]'
      }`}
    >
      {/* Navigation */}
      <Navbar
        isDarkMode={isDarkMode}
        onToggleDarkMode={() => setIsDarkMode(!isDarkMode)}
        onOpenContact={() => setIsContactOpen(true)}
        onOpenGuide={() => setIsGuideOpen(true)}
      />

      {/* Main Content Layouts (In exact order of design photos) */}
      <main>
        {/* 1. Hero Section */}
        <Hero
          isDarkMode={isDarkMode}
          onOpenContact={() => setIsContactOpen(true)}
          onOpenGuide={() => setIsGuideOpen(true)}
        />

        {/* 2. Love + Life Stories Slider */}
        <LoveAndLifeSection
          isDarkMode={isDarkMode}
          onSelectStory={(story) => setSelectedStory(story)}
        />

        {/* 3. About Me Section & Vendor Logos */}
        <AboutSection
          isDarkMode={isDarkMode}
          onOpenContact={() => setIsContactOpen(true)}
        />

        {/* 4. Feeling Overwhelmed / Wedding Guide Banner */}
        <WeddingGuideBanner
          isDarkMode={isDarkMode}
          onOpenGuide={() => setIsGuideOpen(true)}
        />

        {/* 5. Process "How we make magic together" */}
        <ProcessSection
          isDarkMode={isDarkMode}
          onOpenContact={() => setIsContactOpen(true)}
        />

        {/* 6. Service Categories Arches */}
        <CategoriesArches
          isDarkMode={isDarkMode}
          onSelectCategory={handleSelectCategory}
        />

        {/* 7. Creative Process Collage */}
        <CreativeProcessCollage isDarkMode={isDarkMode} />

        {/* 8. Testimonials Stamp Grid */}
        <TestimonialsStampGrid isDarkMode={isDarkMode} />

        {/* 9. Dark Floral Footer Banner */}
        <FooterBanner
          isDarkMode={isDarkMode}
          onOpenContact={() => setIsContactOpen(true)}
        />
      </main>

      {/* Interactive Modals */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        isDarkMode={isDarkMode}
      />

      <GuideDownloadModal
        isOpen={isGuideOpen}
        onClose={() => setIsGuideOpen(false)}
        isDarkMode={isDarkMode}
      />

      <PhotoLightboxModal
        story={selectedStory}
        onClose={() => setSelectedStory(null)}
        onOpenContact={() => setIsContactOpen(true)}
        isDarkMode={isDarkMode}
      />
    </div>
  );
}
