import { useState, useMemo, useRef } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const PortfolioPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const portfolioImages = [
    { id: 1, platform: 'WordPress', title: 'Woo Project 1', image: '/woo.webp' },
    { id: 2, platform: 'WordPress', title: 'Woo Project 2', image: '/woo1.webp' },
    { id: 3, platform: 'WordPress', title: 'Woo Project 3', image: '/woo2.jpeg' },
    { id: 4, platform: 'WordPress', title: 'Woo Project 4', image: '/woo4.webp' },
    { id: 5, platform: 'WordPress', title: 'Woo Project 5', image: '/woo5.webp' },
    { id: 6, platform: 'WordPress', title: 'Woo Project 6', image: '/woo6.webp' },
    { id: 7, platform: 'WordPress', title: 'Woo Project 7', image: '/woo7.webp' },
    { id: 8, platform: 'WordPress', title: 'Woo Project 8', image: '/woo8.png' },
    { id: 9, platform: 'WordPress', title: 'REWORK', image: '/landing (1).webp' },
    { id: 10, platform: 'WordPress', title: 'E-Commerce Store', image: '/landing (2).webp' },
    { id: 11, platform: 'WordPress', title: 'AI Works', image: '/landing (3).webp' },
    { id: 12, platform: 'WordPress', title: 'Business Website', image: '/landing (4).webp' },
    { id: 13, platform: 'Shopify', title: 'Shopify Project 1', image: '/shopify.webp' },
    { id: 14, platform: 'Shopify', title: 'Shopify Project 2', image: '/shopify1.webp' },
    { id: 15, platform: 'Shopify', title: 'Shopify Project 3', image: '/shopify3.webp' },
    { id: 16, platform: 'Shopify', title: 'Shopify Project 4', image: '/shopify4.webp' },
    { id: 17, platform: 'Shopify', title: 'Shopify Project 5', image: '/shopify5.webp' },
    { id: 18, platform: 'Shopify', title: 'Shopify Project 6', image: '/shopify6.webp' },
    { id: 19, platform: 'Shopify', title: 'Shopify Project 7', image: '/shopify7.webp' },
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
  useEffect(() => {
    setSelectedIndex(0);
  }, [activePlatform]);

  const handlePrev = () => {
    if (selectedIndex > 0) setSelectedIndex(selectedIndex - 1);
  };
  const handleNext = () => {
    if (selectedIndex < filteredImages.length - 1) setSelectedIndex(selectedIndex + 1);
  };

  //  
  const imageRefs = useRef([]);
  // Ref for the image container (scroll to top)
  const imageContainerRef = useRef(null);

  useEffect(() => {
    if (imageRefs.current[selectedIndex]) {
      imageRefs.current[selectedIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    // Scroll the image container to the top when switching images
    if (imageContainerRef.current) {
      imageContainerRef.current.scrollTop = 0;
    }
  }, [selectedIndex]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl max-w-2xl w-full shadow-2xl">
        <button className="absolute top-4 right-4 text-gray-400 hover:text-white" onClick={onClose} aria-label="Close">
          <X size={24} />
        </button>
        <div className="flex items-center justify-center mb-6 gap-4">
          <button
            className="p-2 rounded-full bg-white/10 text-white hover:bg-purple-500 transition disabled:opacity-50"
            onClick={handlePrev}
            disabled={selectedIndex === 0}
            aria-label="Previous"
          >
            <ChevronLeft size={28} />
          </button>
          <h2 className="text-3xl font-bold text-center text-white flex-1">Portfolio</h2>
          <button
            className="p-2 rounded-full bg-white/10 text-white hover:bg-pink-500 transition disabled:opacity-50"
            onClick={handleNext}
            disabled={selectedIndex === filteredImages.length - 1}
            aria-label="Next"
          >
            <ChevronRight size={28} />
          </button>
        </div>
        <div className="flex justify-center gap-4 mb-6">
            <button
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${activePlatform === 'all' ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' : 'bg-white/10 text-gray-300 hover:bg-white/20'}`}
              onClick={() => setActivePlatform('all')}
            >
            All
            </button>
            {platforms.map(platform => (
              <button
                key={platform}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${activePlatform === platform ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' : 'bg-white/10 text-gray-300 hover:bg-white/20'}`}
                onClick={() => setActivePlatform(platform)}
              >
                {platform}
              </button>
            ))}
          </div>
        {/* Show only the selected image, always fill container */}
        <div className="flex flex-col items-center w-full">
          <div ref={imageContainerRef} className="w-full max-h-[70vh] overflow-y-auto flex justify-center items-start">
            <img
              src={filteredImages[selectedIndex].image}
              alt={filteredImages[selectedIndex].title}
              className="rounded-2xl border border-white/10 shadow-lg w-full object-contain"
              style={{ display: 'block' }}
            />
          </div>
          <div className="mt-4 text-lg font-semibold text-white text-center w-full">{filteredImages[selectedIndex].title}</div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPopup;