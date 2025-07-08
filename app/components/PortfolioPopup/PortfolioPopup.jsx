
import './PortfolioPopup.css';
import React, { useState } from 'react';
import { X, ExternalLink, Eye, Link, Image as ImageIcon } from 'lucide-react';

const PortfolioPopup = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('links');

  const portfolioLinks = [
    {
      title: 'متجر الأزياء الراقية',
      url: 'https://template-kit.evonicmedia.com/layout41',
      description: 'متجر إلكتروني متجاوب لعرض وبيع الأزياء النسائية باستخدام WooCommerce بتصميم احترافي.',
      category: 'متجر إلكتروني'
    },
    {
      title: 'عيادة الدكتور  (Carino)',
      url: 'https://kits.haidezign.net/carino',
      description: 'موقع وكالة رقمية/تسويق مُخصص لوكالات الديجيتال، يركز على عرض الخدمات البصرية والتسويقية.', 
      category: 'وكالة رقمية / تسويق'
    },
    {
      title: 'مكتب المحاماة الذهبي',
      url: 'https://demo.bosathemes.com/agentor/template-kit/home/',
      description: 'موقع شركة قانونية (Legalor) يعرض الخدمات، المحامين، واستشارات أونلاين.', 
      category: 'موقع قانوني'
    },
    {
      title: 'Digipay',
      url: 'https://templatekit.jegtheme.com/digipay/',
      description: 'بوابة دفع إلكترونية/FinTech تدعم بطاقات متعددة، دفع متكرر، ومراقبة لحظية للمعاملات.', 
      category: 'بوابة دفع / FinTech'
    },
    {
      title: 'Aimo',
      url: 'https://demo.casethemes.net/aimo/home-02-one-page/',
      description: 'موقع لوكالات تقنية/ذكاء اصطناعي بعرض صفحة واحدة، تصميم عصري لعرض الخدمات.', 
      category: 'تقنية / AI'
    },
    {
      title: 'مطعم الأصالة',
      url: 'https://templates.sparklethings.com/mantri/template-kit/home/',
      description: 'موقع مطعم متكامل يعرض قائمة الطعام مع إمكانية طلب أونلاين وحجز طاولات.', 
      category: 'موقع مطعم'
    }
  ];
  
  
  

  const portfolioImages = [
    {
      id: 1,
      title: ' REWORK ',
      image: '/landing (1).webp',
    },
    {
      id: 3,
      title: ' Ai works ',
      image: '/landing (3).webp',
    },
  ];

  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="portfolio-popup-container">
        <div className="popup-header">
          <h2>معرض أعمالنا</h2>
          <button className="close-button" onClick={onClose}>
            <X size={24} />
          </button>
        </div>
        
        <div className="portfolio-tabs">
          <button 
            className={`tab-button ${activeTab === 'links' ? 'active' : ''}`}
            onClick={() => setActiveTab('links')}
          >
            <Link size={18} />
            روابط المواقع
          </button>
          <button 
            className={`tab-button ${activeTab === 'images' ? 'active' : ''}`}
            onClick={() => setActiveTab('images')}
          >
            <ImageIcon size={18} />
            صور المشاريع
          </button>
        </div>

        <div className="portfolio-content">
          {activeTab === 'links' && (
            <div className="links-grid">
              {portfolioLinks.map((project, index) => (
                <div key={index} className="link-card">
                  <div className="link-header">
                    <h3>{project.title}</h3>
                    <span className="category-badge">{project.category}</span>
                  </div>
                  <p>{project.description}</p>
                  <div className="link-actions">
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="visit-link">
                      <ExternalLink size={16} />
                      زيارة الموقع
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'images' && (
            <div className="images-grid">
              {portfolioImages.map((project) => (
                <div key={project.id} className="image-card">
                  <div className="image-container">
                    <img src={project.image} alt={project.title} />
                    <div className="image-overlay">
                      <span className="category-badge">{project.title}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPopup;