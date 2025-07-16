'use client'
import React, { useState, useContext, useRef } from 'react';
import { Menu, X, Star, ArrowLeft, Play, Globe, Zap, Smartphone, TrendingUp, CheckCircle, ArrowUpRight, Quote, Phone, Mail, MapPin, Twitter, Linkedin, Instagram, ChevronDown, ShoppingCart } from 'lucide-react';
import './home.css';
import OrderFormPopup from '../form/orderForm';
import PortfolioPopup from '../PortfolioPopup/PortfolioPopup';
import { LanguageContext } from '../../context/LanguageContext';
import en from '../../lang/en.json';
import ar from '../../lang/ar.json';

const translations = { en, ar };

const LANGUAGES = [
  { code: 'ar', label: 'العربية' },
  { code: 'en', label: 'EN' },
];

const Landing = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOrderFormOpen, setIsOrderFormOpen] = useState(false);
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  const { lang, setLang } = useContext(LanguageContext);
  const t = (key) => translations[lang][key] || key;

  // Dropdown state
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  React.useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [dropdownOpen]);

  return (
    <div className="home">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="nav-brand">
            <div className="logo">
              <img src="/logo.svg" alt="infinityScale" />
            </div>
          </div>
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <a href="#services">{t('services')}</a>
            <a href="#testimonials">{t('testimonials')}</a>
            <a href="#contact">{t('contact')}</a>
          </nav>
          <div className="header-actions">
            <div className="lang-switcher-header" ref={dropdownRef}>
              <button
                className="lang-dropdown-btn"
                onClick={() => setDropdownOpen((open) => !open)}
                aria-haspopup="listbox"
                aria-expanded={dropdownOpen}
              >
                {LANGUAGES.find(l => l.code === lang)?.label}
                <ChevronDown size={18} style={{ marginInlineStart: 6 }} />
              </button>
              {dropdownOpen && (
                <ul className="lang-dropdown-list" role="listbox">
                  {LANGUAGES.map((l) => (
                    <li
                      key={l.code}
                      className={`lang-dropdown-item${lang === l.code ? ' active' : ''}`}
                      onClick={() => { setLang(l.code); setDropdownOpen(false); }}
                      role="option"
                      aria-selected={lang === l.code}
                    >
                      {l.label}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <button className="btn-primary" onClick={() => setIsOrderFormOpen(true)}>
              {lang === 'ar' ? (
                <>
                  {t('create_order')}
                  <ShoppingCart size={20} />
                </>
              ) : (
                <>
                  <ShoppingCart size={20} />
                  {t('create_order')}
                </>
              )}
            </button>
          </div>
          <button 
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <div className="hero-badge">
                <img src="/icon.svg" alt="icon" className='icon'/>
                <span>{t('hero_badge')}</span>
              </div>
              <h1 className="hero-title">
                {t('hero_title_1')}
                <span className="highlight">{t('hero_title_2')}</span>
                {t('hero_title_3')}
              </h1>
              <p className="hero-subtitle">
                {t('hero_subtitle')}
              </p>
              <div className="hero-actions">
                <button className="btn-primary large" onClick={() => setIsOrderFormOpen(true)}>
                  <ShoppingCart size={20} />
                  {t('create_order')}
                </button>
                <button className="btn-outline large" onClick={() => setIsPortfolioOpen(true)}>
                  <Play size={18} />
                  {t('see_works')}
                </button>
              </div>
              <div className="hero-stats">
                <div className="stat">
                  <div className="stat-number">200+</div>
                  <div className="stat-label">{t('stat_projects')}</div>
                </div>
                <div className="stat">
                  <div className="stat-number">99%</div>
                  <div className="stat-label">{t('stat_satisfaction')}</div>
                </div>
                <div className="stat">
                  <div className="stat-number">5x</div>
                  <div className="stat-label">{t('stat_growth')}</div>
                </div>
              </div>
            </div>
            <div className="hero-image">
              <img src="/slidImg.png" alt={t('hero_img_alt')} />
              <div className="floating-card">
                <div className="card-icon">
                  <TrendingUp size={24} />
                </div>
                <div className="card-content">
                  <div className="card-number">+300%</div>
                  <div className="card-text">{t('stat_growth')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <div className="section-header">
            <h2>{t('services_header')}</h2>
            <p>{t('services_desc')}</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon blue">
                <Globe size={28} />
              </div>
              <h3>{t('service_web_title')}</h3>
              <p>{t('service_web_desc')}</p>
              <ul>
                <li><CheckCircle size={16} /> {t('service_web_feature1')}</li>
                <li><CheckCircle size={16} /> {t('service_web_feature2')}</li>
                <li><CheckCircle size={16} /> {t('service_web_feature3')}</li>
              </ul>
              <button className="service-btn">
                {t('learn_more')} <ArrowUpRight size={16} />
              </button>
            </div>
            <div className="service-card">
              <div className="service-icon orange">
                <Zap size={28} />
              </div>
              <h3>{t('service_app_title')}</h3>
              <p>{t('service_app_desc')}</p>
              <ul>
                <li><CheckCircle size={16} /> {t('service_app_feature1')}</li>
                <li><CheckCircle size={16} /> {t('service_app_feature2')}</li>
                <li><CheckCircle size={16} /> {t('service_app_feature3')}</li>
              </ul>
              <button className="service-btn">
                {t('learn_more')} <ArrowUpRight size={16} />
              </button>
            </div>
            <div className="service-card">
              <div className="service-icon green">
                <Smartphone size={28} />
              </div>
              <h3>{t('service_ecom_title')}</h3>
              <p>{t('service_ecom_desc')}</p>
              <ul>
                <li><CheckCircle size={16} /> {t('service_ecom_feature1')}</li>
                <li><CheckCircle size={16} /> {t('service_ecom_feature2')}</li>
                <li><CheckCircle size={16} /> {t('service_ecom_feature3')}</li>
              </ul>
              <button className="service-btn">
                {t('learn_more')} <ArrowUpRight size={16} />
              </button>
            </div>
            <div className="service-card">
              <div className="service-icon purple">
                <TrendingUp size={28} />
              </div>
              <h3>{t('service_marketing_title')}</h3>
              <p>{t('service_marketing_desc')}</p>
              <ul>
                <li><CheckCircle size={16} /> {t('service_marketing_feature1')}</li>
                <li><CheckCircle size={16} /> {t('service_marketing_feature2')}</li>
                <li><CheckCircle size={16} /> {t('service_marketing_feature3')}</li>
              </ul>
              <button className="service-btn">
                {t('learn_more')} <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials">
        <div className="container">
          <div className="section-header">
            <h2>{t('testimonials_header')}</h2>
            <p>{t('testimonials_desc')}</p>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="quote">
                <Quote size={32} />
              </div>
              <div className="stars">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
              </div>
              <p>{t('testimonial_1_text')}</p>
              <div className="author">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face" alt={t('testimonial_1_author')} />
                <div>
                  <h4>{t('testimonial_1_author')}</h4>
                  <span>{t('testimonial_1_role')}</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="quote">
                <Quote size={32} />
              </div>
              <div className="stars">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
              </div>
              <p>{t('testimonial_2_text')}</p>
              <div className="author">
                <img src="/revImg.png" alt={t('testimonial_2_author')} />
                <div>
                  <h4>{t('testimonial_2_author')}</h4>
                  <span>{t('testimonial_2_role')}</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="quote">
                <Quote size={32} />
              </div>
              <div className="stars">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
              </div>
              <p>{t('testimonial_3_text')}</p>
              <div className="author">
                <img src=" https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" alt={t('testimonial_3_author')} />
                <div>
                  <h4>{t('testimonial_3_author')}</h4>
                  <span>{t('testimonial_3_role')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <div className="cta-badge">
              <TrendingUp size={16} />
              {t('cta_badge')}
            </div>
            <h2>{t('cta_title')}</h2>
            <p>{t('cta_desc')}</p>
            <button className="btn-primary large" onClick={() => setIsOrderFormOpen(true)}>
              <ShoppingCart size={20} />
              {t('create_order')}
            </button>
            <div className="contact-info">
              <a href="tel:709130391">
                <Phone size={16} />
                {t('cta_phone')}
              </a>
              <a href="mailto:hello@infinityscale.ma">
                <Mail size={16} />
                {t('cta_email')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="footer-brand">
                <div className="logo">
                  <img src="/logo.svg" alt="infinityScale" />
                </div>
              </div>
              <p>{t('footer_slogan')}</p>
              <div className="social-links">
                <a href="#" aria-label="Twitter">
                  <Twitter size={20} />
                </a>
                <a href="#" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
                <a href="#" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
            <div className="footer-section">
              <h4>{t('footer_services')}</h4>
              <ul>
                <li><a href="#services">{t('web_development')}</a></li>
                <li><a href="#services">{t('web_applications')}</a></li>
                <li><a href="#services">{t('ecommerce')}</a></li>
                <li><a href="#services">{t('digital_marketing')}</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>{t('footer_contact')}</h4>
              <div className="contact-details">
                <div>
                  <Phone size={16} />
                  {t('footer_phone')}
                </div>
                <div>
                  <Mail size={16} />
                  {t('footer_email')}
                </div>
                <div>
                  <MapPin size={16} />
                  {t('footer_address')}
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>{t('footer_copyright')}</p>
          </div>
        </div>
      </footer>

      {/* Popups */}
      <OrderFormPopup isOpen={isOrderFormOpen} onClose={() => setIsOrderFormOpen(false)} />
      <PortfolioPopup isOpen={isPortfolioOpen} onClose={() => setIsPortfolioOpen(false)} />
    </div>
  );
};

export default Landing;