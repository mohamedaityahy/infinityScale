'use client';
import React, { useState, useContext } from 'react';
import { X, User, Phone, Settings, MessageSquare, Send } from 'lucide-react';
import { LanguageContext } from '../../context/LanguageContext';
import en from '../../lang/en.json';
import ar from '../../lang/ar.json';

const translations = { en, ar };

const OrderFormPopup = ({ isOpen, onClose }) => {
  const { lang } = useContext(LanguageContext);
  const t = (key) => translations[lang][key] || key;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      const res = await fetch('/api/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
    
      const result = await res.json();
    
      if (result.success) {
        alert(t('order_success'));
        setFormData({ name: '', phone: '', service: '', description: '' });
        onClose();
      } else {
        alert(t('order_error') + result.error);
      }
    } catch (err) {
      console.error('Submit error:', err);
      alert(t('order_fail'));
    }
    setIsSubmitting(false);    
  };

  if (!isOpen) return null;

  // Handler to close only if overlay is clicked
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('popup-overlay')) {
      onClose();
    }
  };

  return (
    <div className="popup-overlay" onClick={handleOverlayClick}>
      <div className="popup-container">
        <div className="popup-header">
          <h2>{t('order_title')}</h2>
          <button className="close-button" onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        <form className="order-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">
              <User size={18} />
              {t('order_name')}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder={t('order_name_placeholder')}
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">
              <Phone size={18} />
              {t('order_phone')}
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder={t('order_phone_placeholder')}
            />
          </div>

          <div className="form-group">
            <label htmlFor="service">
              <Settings size={18} />
              {t('order_service')}
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="custom-select"
            >
              <option value="" disabled>{t('order_service_placeholder')}</option>
              <option value="shopify-wordpress">{t('order_service_shopify_wordpress')}</option>
              <option value="coding-saas">{t('order_service_custom_saas')}</option>
              <option value="video-ads">{t('order_service_video_ads')}</option>
              <option value="advertising">{t('order_service_advertising')}</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="description">
              <MessageSquare size={18} />
              {t('order_description')}
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder={t('order_description_placeholder')}
              rows="4"
            />
          </div>

          <button
            type="submit"
            className="submit-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <div className="spinner"></div>
                {t('order_sending')}
              </>
            ) : (
              <>
                <Send size={18} />
                {t('order_submit')}
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default OrderFormPopup;
