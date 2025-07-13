import React, { useState } from 'react';
import { X, User, Phone, Settings, MessageSquare, Send } from 'lucide-react';

const OrderFormPopup = ({ isOpen, onClose }) => {
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
        alert('تم إرسال طلبك بنجاح! سنتواصل معك قريباً');
        setFormData({ name: '', phone: '', service: '', description: '' });
        onClose();
      } else {
        alert('حدث خطأ أثناء الإرسال: ' + result.error);
      }
    } catch (err) {
      console.error('Submit error:', err);
      alert('فشل في إرسال الطلب');
    }
    setIsSubmitting(false);    
  };

  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <div className="popup-header">
          <h2>إنشاء طلب جديد</h2>
          <button className="close-button" onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        <form className="order-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">
              <User size={18} />
              الاسم الكامل
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="أدخل اسمك الكامل"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">
              <Phone size={18} />
              رقم الهاتف
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="+212 6XX XX XX XX"
            />
          </div>

          <div className="form-group">
            <label htmlFor="service">
              <Settings size={18} />
              الخدمة المطلوبة
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="custom-select"
            >
              <option value="" disabled>اختر الخدمة المطلوبة</option>
              <option value="siteweb">تصميم وتطوير موقع إلكتروني</option>
              <option value="ads">إعلانات ممولة على وسائل التواصل</option>
              <option value="video ads"> فيديو إعلاني احترافية</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="description">
              <MessageSquare size={18} />
              وصف المشروع
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="اكتب تفاصيل مشروعك والنتائج التي تريد تحقيقها..."
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
                جارٍ الإرسال...
              </>
            ) : (
              <>
                <Send size={18} />
                إرسال الطلب
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default OrderFormPopup;
