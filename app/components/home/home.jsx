'use client'
import React, { useState } from 'react';
import { Menu, X, Star, ArrowLeft, Play, Globe, Zap, Smartphone, TrendingUp, CheckCircle, ArrowUpRight, Quote, Phone, Mail, MapPin, Twitter, Linkedin, Instagram } from 'lucide-react';
import './home.css';
import OrderFormPopup from '../form/orderForm';
import PortfolioPopup from '../PortfolioPopup/PortfolioPopup';

const Landing = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOrderFormOpen, setIsOrderFormOpen] = useState(false); // ✅ Fixed: renamed for clarity
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);

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
            <a href="#services">خدماتنا</a>
            <a href="#testimonials">آراء العملاء</a>
            <a href="#contact">اتصل بنا</a>
          </nav>
          <div className="header-actions">
            <button className="btn-secondary">تسجيل الدخول</button>
            <button className="btn-primary" onClick={() => setIsOrderFormOpen(true)}>إنشاء طلب</button>
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
                <span>الوكالة الرائدة في تطوير المواقع</span>
              </div>
              <h1 className="hero-title">
                نحول أفكارك إلى
                <span className="highlight"> مواقع ويب استثنائية </span>
                تحقق النتائج
              </h1>
              <p className="hero-subtitle">
                نخصص في تطوير مواقع ويب حديثة وتطبيقات متقدمة تساعد الشركات على النمو والازدهار في العالم الرقمي. 
                من المتاجر الإلكترونية إلى المنصات المؤسسية، نقدم حلولاً تقنية متكاملة تلبي احتياجاتك
              </p>
              <div className="hero-actions">
                <button className="btn-primary large" onClick={() => setIsOrderFormOpen(true)}>
                  إنشاء طلب
                  <ArrowLeft size={20} />
                </button>
                <button className="btn-outline large" onClick={() => setIsPortfolioOpen(true)}>
                  <Play size={18} />
                  شاهد أعمالنا
                </button>
              </div>
              <div className="hero-stats">
                <div className="stat">
                  <div className="stat-number">200+</div>
                  <div className="stat-label">مشروع ناجح</div>
                </div>
                <div className="stat">
                  <div className="stat-number">99%</div>
                  <div className="stat-label">رضا العملاء</div>
                </div>
                <div className="stat">
                  <div className="stat-number">5x</div>
                  <div className="stat-label">نمو الأعمال</div>
                </div>
              </div>
            </div>
            <div className="hero-image">
              <img src="/slidImg.png" alt="Professional web development" />
              <div className="floating-card">
                <div className="card-icon">
                  <TrendingUp size={24} />
                </div>
                <div className="card-content">
                  <div className="card-number">+300%</div>
                  <div className="card-text">نمو الأعمال</div>
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
            <h2>خدماتنا المتميزة في التطوير</h2>
            <p>نقدم حلولاً تقنية شاملة ومبتكرة تساعد عملك على التفوق والنمو في البيئة الرقمية</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon blue">
                <Globe size={28} />
              </div>
              <h3>مواقع الويب الاحترافية</h3>
              <p>مواقع ويب سريعة ومتجاوبة مع جميع الأجهزة، مصممة لتحقيق أعلى معدلات التحويل وتجربة مستخدم استثنائية</p>
              <ul>
                <li><CheckCircle size={16} /> تصميم عصري ومتجاوب</li>
                <li><CheckCircle size={16} /> تحسين محركات البحث (SEO)</li>
                <li><CheckCircle size={16} /> سرعة تحميل فائقة</li>
              </ul>
              <button className="service-btn">
                اعرف المزيد <ArrowUpRight size={16} />
              </button>
            </div>
            <div className="service-card">
              <div className="service-icon orange">
                <Zap size={28} />
              </div>
              <h3>تطبيقات الويب المتقدمة</h3>
              <p>تطبيقات ويب تفاعلية قوية مبنية بأحدث التقنيات لتوفير تجربة مستخدم سلسة وأداء متميز</p>
              <ul>
                <li><CheckCircle size={16} /> تقنيات حديثة (React, Node.js)</li>
                <li><CheckCircle size={16} /> واجهات تفاعلية متطورة</li>
                <li><CheckCircle size={16} /> أمان وموثوقية عالية</li>
              </ul>
              <button className="service-btn">
                اعرف المزيد <ArrowUpRight size={16} />
              </button>
            </div>
            <div className="service-card">
              <div className="service-icon green">
                <Smartphone size={28} />
              </div>
              <h3>المتاجر الإلكترونية</h3>
              <p>منصات تجارة إلكترونية محسنة للمبيعات مع أنظمة دفع آمنة وإدارة متقدمة للمنتجات والطلبات</p>
              <ul>
                <li><CheckCircle size={16} /> أنظمة دفع متعددة وآمنة</li>
                <li><CheckCircle size={16} /> إدارة شاملة للمخزون</li>
                <li><CheckCircle size={16} /> تقارير مبيعات تفصيلية</li>
              </ul>
              <button className="service-btn">
                اعرف المزيد <ArrowUpRight size={16} />
              </button>
            </div>
            <div className="service-card">
              <div className="service-icon purple">
                <TrendingUp size={28} />
              </div>
              <h3>التسويق الرقمي والإعلانات</h3>
              <p>حملات تسويق رقمي مدروسة وإعلانات مستهدفة لزيادة الوصول وتحقيق أفضل عائد على الاستثمار</p>
              <ul>
                <li><CheckCircle size={16} /> إعلانات جوجل وفيسبوك</li>
                <li><CheckCircle size={16} /> تحليل البيانات والأداء</li>
                <li><CheckCircle size={16} /> استراتيجيات تسويق محتوى</li>
              </ul>
              <button className="service-btn">
                اعرف المزيد <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials">
        <div className="container">
          <div className="section-header">
            <h2>قصص نجاح عملائنا</h2>
            <p>اكتشف كيف ساعدنا عملاءنا في تحقيق أهدافهم الرقمية وتنمية أعمالهم</p>
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
              <p>فريق InfinityScale طور لنا متجراً إلكترونياً متقدماً زاد من مبيعاتنا بنسبة 400%. الموقع سريع وسهل الاستخدام وجودة التصميم رائعة.</p>
              <div className="author">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face" alt="أحمد الحسني" />
                <div>
                  <h4>أحمد الحسني</h4>
                  <span>مؤسس متجر تكنو برو -أكادير</span>
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
              <p>تطبيق الويب الذي بناه لنا InfinityScale حول طريقة عمل شركتنا تماماً. أصبحت العمليات أكثر كفاءة والعملاء أكثر رضا.</p>
              <div className="author">
                <img src="/revImg.png" alt="فاطمة بنعلي" />
                <div>
                  <h4>فاطمة بنعلي</h4>
                  <span>مديرة شركة الخدمات اللوجستية - الرباط</span>
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
              <p>موقعنا الجديد جلب لنا عملاء جدد من جميع أنحاء المغرب. التصميم احترافي والموقع يظهر في النتائج الأولى لجوجل.</p>
              <div className="author">
                <img src=" https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" alt="يوسف العمراني" />
                <div>
                  <h4>يوسف العمراني</h4>
                  <span>مدير وكالة العقارات الذهبية - مراكش</span>
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
              ابدأ مشروعك اليوم
            </div>
            <h2>هل أنت مستعد لتطوير موقعك؟</h2>
            <p>انضم إلى مئات العملاء الذين اختاروا InfinityScale لتطوير مشاريعهم الرقمية وحققوا نجاحاً باهراً</p>
            <button className="btn-primary large" onClick={() => setIsOrderFormOpen(true)}>
              إنشاء طلب
              <ArrowLeft size={20} />
            </button>
            <div className="contact-info">
              <a href="tel:709130391">
                <Phone size={16} />
                212-709130391
              </a>
              <a href="mailto:hello@infinityscale.ma">
                <Mail size={16} />
                hello@infinityscale.ma
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
              <p>شريكك المثالي في تطوير الحلول الرقمية المبتكرة. نحول أفكارك إلى مواقع ويب وتطبيقات ناجحة</p>
              <div className="social-links">
                <a href="#">
                  <Twitter size={20} />
                </a>
                <a href="#">
                  <Linkedin size={20} />
                </a>
                <a href="#">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
            <div className="footer-section">
              <h4>خدماتنا</h4>
              <ul>
                <li><a href="#services">تطوير المواقع</a></li>
                <li><a href="#services">تطبيقات الويب</a></li>
                <li><a href="#services">المتاجر الإلكترونية</a></li>
                <li><a href="#services">التسويق الرقمي</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>تواصل معنا</h4>
              <div className="contact-details">
                <div>
                  <Phone size={16} />
                  212-655-889-999
                </div>
                <div>
                  <Mail size={16} />
                  hello@infinityscale.ma
                </div>
                <div>
                  <MapPin size={16} />
                  أكادير، المملكة المغربية
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 InfinityScale. جميع الحقوق محفوظة.</p>
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