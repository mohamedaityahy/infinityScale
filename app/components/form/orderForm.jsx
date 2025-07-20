'use client';
import React, { useState } from 'react';
import { X, User, Phone, Settings, MessageSquare, Send } from 'lucide-react';

const OrderFormPopup = ({ isOpen, onClose, inline = false }) => {
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
    try {
      const res = await fetch('/api/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await res.json();
      if (result.success) {
        alert('Your order has been sent successfully! We will contact you soon.');
        setFormData({ name: '', phone: '', service: '', description: '' });
        if (onClose) onClose();
      } else {
        alert('An error occurred while sending: ' + result.error);
      }
    } catch (err) {
      console.error('Submit error:', err);
      alert('Failed to send order.');
    }
    setIsSubmitting(false);
  };

  if (!inline && !isOpen) return null;

  // Handler to close only if overlay is clicked
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('popup-overlay')) {
      if (onClose) onClose();
    }
  };

  // Tailwind classes for the form container
  const formContainerClass =
    'bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl max-w-xl w-full mx-auto shadow-2xl';

  const formContent = (
    <div className={formContainerClass}>
      <h3 className="text-2xl font-bold mb-6 text-center">Create New Order</h3>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2" htmlFor="name">
            <User size={18} /> Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your full name"
            className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 backdrop-blur-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2" htmlFor="phone">
            <Phone size={18} /> Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="+212 6XX XX XX XX"
            className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 backdrop-blur-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2" htmlFor="service">
            <Settings size={18} /> Requested Service
          </label>
          <div className="relative">
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full px-4 py-4 bg-black/60 border border-purple-500 text-white rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 placeholder-gray-400 appearance-none pr-10"
            >
              <option value="" disabled>Select the requested service</option>
              <option value="shopify-wordpress">Shopify/WordPress Store</option>
              <option value="coding-saas">Website/SaaS Development</option>
              <option value="video-ads">Video Ads</option>
              <option value="advertising">Advertising</option>
            </select>
            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-pink-400">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
            </span>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2" htmlFor="description">
            <MessageSquare size={18} /> Project Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe your project and the results you want to achieve..."
            rows={4}
            className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 backdrop-blur-sm resize-none"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 rounded-xl text-lg font-bold hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 shadow-lg"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <div className="spinner inline-block mr-2 align-middle"></div>
              Sending...
            </>
          ) : (
            <>
              <Send size={18} className="inline-block mr-2 align-middle" />
              Submit Order
            </>
          )}
        </button>
      </form>
    </div>
  );

  if (inline) {
    return formContent;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm popup-overlay" onClick={handleOverlayClick}>
      <div className="relative w-full max-w-xl mx-auto">
        <button className="absolute top-4 right-4 text-gray-400 hover:text-white" onClick={onClose}>
          <X size={24} />
        </button>
        {formContent}
      </div>
    </div>
  );
};

export default OrderFormPopup;
