import './PortfolioPopup.css';
import React, { useState, useMemo, useContext } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { LanguageContext } from '../../context/LanguageContext';
import en from '../../lang/en.json';
import ar from '../../lang/ar.json';

const translations = { en, ar };

const PortfolioPopup = ({ isOpen, onClose }) => {
  const { lang } = useContext(LanguageContext);
  const t = (key) => translations[lang][key] || key;

  const portfolioImages = [
    {
      id: 1,
      platform: "WordPress",
      title:'REWORK',
      image: '/landing (1).webp',
    },
    {
      id: 2,
      platform: "Shopify",
      title:'E-Commerce Store',
      image: '/landing (2).webp',
    },
    {
      id: 3,
      platform: "Shopify",
      title: 'AI Works',
      image: '/landing (3).webp',
    },
    {
      id: 4,
      platform: "WordPress",
      title:'Business Website',
      image: '/landing (4).webp',
    },
  ];

  // Get unique platforms
  const platforms = useMemo(() => [
    ...new Set(portfolioImages.map(img => img.platform))
  ], [portfolioImages]);

  const [activePlatform, setActivePlatform] = useState('all');
  const filteredImages = useMemo(() =>
    activePlatform === 'all'
      ? portfolioImages
      : portfolioImages.filter(img => img.platform === activePlatform),
    [activePlatform, portfolioImages]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Reset selectedIndex if filter changes
  React.useEffect(() => {
    setSelectedIndex(0);
  }, [activePlatform]);

  if (!isOpen) return null;

  const handlePrev = () => {
    if (selectedIndex > 0) setSelectedIndex(selectedIndex - 1);
  };
  const handleNext = () => {
    if (selectedIndex < filteredImages.length - 1) setSelectedIndex(selectedIndex + 1);
  };

  return (
    <div className="popup-overlay" onClick={e => { if (e.target.classList.contains('popup-overlay')) onClose(); }}>
      <div className="portfolio-popup-container">
        <div className="platform-filter-row-with-x">
          <div className="platform-filter-row">
            <button
              className={`platform-filter-btn${activePlatform === 'all' ? ' active' : ''}`}
              onClick={() => setActivePlatform('all')}
            >
              {t('all')}
            </button>
            {platforms.map(platform => (
              <button
                key={platform}
                className={`platform-filter-btn${activePlatform === platform ? ' active' : ''}`}
                onClick={() => setActivePlatform(platform)}
              >
                {platform}
              </button>
            ))}
          </div>
          <button className="close-x-btn" onClick={onClose} aria-label={t('close')}>
            <X size={24} />
          </button>
        </div>
        <div className="portfolio-content single-image-content">
          {filteredImages.length > 0 ? (
            <>
              <div className="image-switch-row">
                <button
                  className="arrow-btn left"
                  onClick={handlePrev}
                  disabled={selectedIndex === 0}
                  aria-label={t('prev')}
                >
                  <ChevronLeft size={32} />
                </button>
                <div className="image-title-center">
                  {filteredImages[selectedIndex].title[lang]}
                </div>
                <button
                  className="arrow-btn right"
                  onClick={handleNext}
                  disabled={selectedIndex === filteredImages.length - 1}
                  aria-label={t('next')}
                >
                  <ChevronRight size={32} />
                </button>
              </div>
              <div className="main-image-container">
                <img
                  src={filteredImages[selectedIndex].image}
                  alt={filteredImages[selectedIndex].title[lang]}
                  className="main-image"
                />
              </div>
            </>
          ) : (
            <div className="no-works-msg">{t('no_works')}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPopup;