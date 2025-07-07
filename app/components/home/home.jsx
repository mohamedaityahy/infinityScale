'use client'
import React, { useState } from 'react';
import { Menu, X, Star, ArrowLeft, Play, Stethoscope, Scale, ShoppingCart, TrendingUp, CheckCircle, ArrowUpRight, Quote, Phone, Mail, MapPin, Twitter, Linkedin, Instagram } from 'lucide-react';
import './home.css';

const Landing = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="home">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="nav-brand">
            <div className="logo">
              <span>∞</span>
            </div>
            <h2>InfinityScale</h2>
          </div>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <a href="#services">خدماتنا</a>
            <a href="#testimonials">آراء العملاء</a>
            <a href="#contact">اتصل بنا</a>
          </nav>
          
          <div className="header-actions">
            <button className="btn-secondary">تسجيل الدخول</button>
            <button className="btn-primary">ابدأ مجاناً</button>
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
                <Star size={16} />
                <span>الوكالة الرائدة في المملكة</span>
              </div>
              
              <h1 className="hero-title">
                حول عملك إلى
                <span className="highlight"> نجاح لا محدود </span>
                مع InfinityScale
              </h1>
              
              <p className="hero-subtitle">
                نساعد الأطباء والمحامين وأصحاب المتاجر الإلكترونية في بناء حضور رقمي قوي 
                وتحقيق نمو مستدام من خلال مواقع ويب احترافية وحملات إعلانية مدروسة
              </p>
              
              <div className="hero-actions">
                <button className="btn-primary large">
                  احجز استشارة مجانية
                  <ArrowLeft size={20} />
                </button>
                <button className="btn-outline large">
                  <Play size={18} />
                  شاهد أعمالنا
                </button>
              </div>
              
              <div className="hero-stats">
                <div className="stat">
                  <div className="stat-number">500+</div>
                  <div className="stat-label">مشروع ناجح</div>
                </div>
                <div className="stat">
                  <div className="stat-number">98%</div>
                  <div className="stat-label">رضا العملاء</div>
                </div>
                <div className="stat">
                  <div className="stat-number">200%</div>
                  <div className="stat-label">زيادة في الأرباح</div>
                </div>
              </div>
            </div>
            
            <div className="hero-image">
              <img src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=600&fit=crop" alt="Professional workspace" />
              <div className="floating-card">
                <div className="card-icon">
                  <TrendingUp size={24} />
                </div>
                <div className="card-content">
                  <div className="card-number">+250%</div>
                  <div className="card-text">زيادة في الأرباح</div>
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
            <h2>حلولنا الرقمية المتطورة</h2>
            <p>نقدم خدمات شاملة مصممة لتحقيق النمو اللا محدود لعملك</p>
          </div>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon blue">
                <Stethoscope size={28} />
              </div>
              <h3>المواقع الطبية الاحترافية</h3>
              <p>مواقع ويب متقدمة للأطباء والعيادات تعزز الثقة مع المرضى وتبسط عملية الحجز</p>
              <ul>
                <li><CheckCircle size={16} /> تصميم يعكس الاحترافية الطبية</li>
                <li><CheckCircle size={16} /> نظام حجز مواعيد ذكي</li>
                <li><CheckCircle size={16} /> تجربة مستخدم متميزة</li>
              </ul>
              <button className="service-btn">
                اعرف المزيد <ArrowUpRight size={16} />
              </button>
            </div>
            
            <div className="service-card">
              <div className="service-icon orange">
                <Scale size={28} />
              </div>
              <h3>منصات المكاتب القانونية</h3>
              <p>حلول رقمية متطورة تبرز خبرتك القانونية وتجذب العملاء الذين يقدرون الثقة والكفاءة</p>
              <ul>
                <li><CheckCircle size={16} /> عرض احترافي للخدمات القانونية</li>
                <li><CheckCircle size={16} /> نماذج استشارة آمنة ومحمية</li>
                <li><CheckCircle size={16} /> محتوى يبني السمعة والمصداقية</li>
              </ul>
              <button className="service-btn">
                اعرف المزيد <ArrowUpRight size={16} />
              </button>
            </div>
            
            <div className="service-card">
              <div className="service-icon green">
                <ShoppingCart size={28} />
              </div>
              <h3>متاجر إلكترونية متقدمة</h3>
              <p>منصات تجارة إلكترونية عالية التحويل تزيد من مبيعاتك وتوسع نطاق عملك</p>
              <ul>
                <li><CheckCircle size={16} /> تصميم محفز للشراء</li>
                <li><CheckCircle size={16} /> حلول دفع متنوعة وآمنة</li>
                <li><CheckCircle size={16} /> إدارة ذكية للمنتجات</li>
              </ul>
              <button className="service-btn">
                اعرف المزيد <ArrowUpRight size={16} />
              </button>
            </div>
            
            <div className="service-card">
              <div className="service-icon purple">
                <TrendingUp size={28} />
              </div>
              <h3>الحملات الإعلانية المستهدفة</h3>
              <p>استراتيجيات إعلانية مدروسة تحقق أقصى عائد على الاستثمار وتجذب العملاء المناسبين</p>
              <ul>
                <li><CheckCircle size={16} /> استهداف دقيق ومتقدم</li>
                <li><CheckCircle size={16} /> تحليل وتحسين مستمر</li>
                <li><CheckCircle size={16} /> تقارير شفافة ومفصلة</li>
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
            <p>اكتشف كيف حققنا نتائج استثنائية لعملائنا في مختلف القطاعات</p>
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
              <p>مع InfinityScale، تحول موقعي الطبي إلى أداة تسويق قوية. زادت حجوزات المرضى بنسبة 250% والتصميم يعكس مستوى عيادتي المتميز.</p>
              <div className="author">
                <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face" alt="د. محمد العلي" />
                <div>
                  <h4>د. محمد العلي</h4>
                  <span>استشاري جراحة القلب - الرياض</span>
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
              <p>الحملات الإعلانية التي نفذها فريق InfinityScale جلبت لمكتبي قضايا عالية القيمة. النتائج فاقت كل توقعاتي والعائد كان استثنائياً.</p>
              <div className="author">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" alt="المحامي أحمد السعيد" />
                <div>
                  <h4>المحامي أحمد السعيد</h4>
                  <span>مؤسس مكتب السعيد للمحاماة - جدة</span>
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
              <p>متجري الإلكتروني أصبح يحقق أرباحاً تفوق متجري التقليدي بـ3 أضعاف. فريق InfinityScale فهم رؤيتي وحولها لواقع رقمي مربح.</p>
              <div className="author">
                <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face" alt="سارة المطيري" />
                <div>
                  <h4>سارة المطيري</h4>
                  <span>مؤسسة متجر الأناقة الراقية</span>
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
              ابدأ رحلتك نحو النجاح
            </div>
            <h2>هل أنت مستعد للنمو اللا محدود؟</h2>
            <p>انضم إلى مئات العملاء الذين حققوا نجاحاً استثنائياً مع InfinityScale</p>
            <button className="btn-primary large">
              احجز استشارة مجانية الآن
              <ArrowLeft size={20} />
            </button>
            <div className="contact-info">
              <a href="tel:966558889999">
                <Phone size={16} />
                966-55-888-9999
              </a>
              <a href="mailto:hello@infinityscale.sa">
                <Mail size={16} />
                hello@infinityscale.sa
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
                  <span>∞</span>
                </div>
                <h3>InfinityScale</h3>
              </div>
              <p>شريكك في تحقيق النمو الرقمي اللا محدود وبناء مستقبل مزدهر لعملك</p>
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
                <li><a href="#services">المواقع الطبية</a></li>
                <li><a href="#services">المكاتب القانونية</a></li>
                <li><a href="#services">المتاجر الإلكترونية</a></li>
                <li><a href="#services">الحملات الإعلانية</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>تواصل معنا</h4>
              <div className="contact-details">
                <div>
                  <Phone size={16} />
                  966-55-888-9999
                </div>
                <div>
                  <Mail size={16} />
                  hello@infinityscale.sa
                </div>
                <div>
                  <MapPin size={16} />
                  الرياض، المملكة العربية السعودية
                </div>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2024 InfinityScale. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;