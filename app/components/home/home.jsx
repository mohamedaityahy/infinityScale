'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  FaCode,
  FaShoppingCart,
  FaRocket,
  FaBullseye,
  FaCheckCircle,
  FaGlobe,
  FaClock,
  FaHeart,
  FaLightbulb,
  FaComments,
  FaPlay,
  FaGem,
  FaChartLine,
  FaUserShield,
  FaBars,
  FaTimes,
  FaWhatsapp
} from 'react-icons/fa';
import { IoRocketSharp } from 'react-icons/io5';
import { RiMagicFill, RiSparklingFill } from 'react-icons/ri';
import { GiMagicSwirl, GiSparkles, GiMagicHat } from 'react-icons/gi';
import {
  BiCodeAlt,
  BiLogoReact,
  BiLogoNodejs,
  BiLogoMongodb,
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoDocker,
  BiLogoPostgresql,
  BiLogoJava
} from 'react-icons/bi';
import { AiFillThunderbolt, AiFillApi } from 'react-icons/ai';
import { BsStarFill, BsGithub } from 'react-icons/bs';
import { MdRocketLaunch, MdCloudQueue } from 'react-icons/md';
import {
  SiNextdotjs,
  SiExpress,
  SiLaravel,
  SiTailwindcss,
  SiMysql,
  SiOpenai,
  SiVercel,
  SiNetlify,
  SiDigitalocean,
  SiLinux,
  SiNginx,
  SiStripe,
  SiPaypal,
  SiShopify,
  SiWoo
} from 'react-icons/si';
import { TbBrandVscode, TbApi, TbDatabase, TbBrain } from 'react-icons/tb';
import { DiGit } from 'react-icons/di';
import './home.css';
import OrderFormPopup from '../form/orderForm';
import PortfolioPopup from '../PortfolioPopup/PortfolioPopup';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [isOrderFormOpen, setIsOrderFormOpen] = useState(false);
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      icon: FaGlobe,
      title: "WordPress Wizardry",
      subtitle: "Where Content Meets Magic ✨",
      description: "We don't just build WordPress sites—we craft digital experiences that make your competitors wonder what sorcery you're using. From lightning-fast loading times to conversion-optimized designs.",
      features: ["Custom Theme Alchemy", "Plugin Enchantment", "SEO Spell Casting", "Performance Potions"],
      color: "from-emerald-400 to-cyan-400",
      bgPattern: "🌟"
    },
    {
      icon: FaShoppingCart,
      title: "Shopify Superpowers",
      subtitle: "E-commerce That Actually Sells 🚀",
      description: "Turn browsers into buyers with Shopify stores so irresistible, your customers will think they're under a shopping spell. We build stores that sell while you sleep.",
      features: ["Conversion Optimization", "Payment Flow Mastery", "Inventory Automation", "Customer Journey Design"],
      color: "from-purple-400 to-pink-400",
      bgPattern: "💎"
    },
    {
      icon: FaCode,
      title: "SaaS Sorcery",
      subtitle: "Code That Changes Everything 🔮",
      description: "From wild ideas to world-changing SaaS platforms. We turn your 'what if' into 'holy wow' with custom applications that scale from startup to unicorn.",
      features: ["MVP Magic", "API Architecture", "User Experience Design", "Scalability Solutions"],
      color: "from-blue-400 to-indigo-400",
      bgPattern: "⚡"
    }
  ];

  const testimonials = [
    {
      name: "Alex Rivera",
      role: "E-commerce Entrepreneur",
      content: "These wizards turned my struggling Shopify store into a money-printing machine. Sales increased 340% in just 3 months!",
      rating: 5,
      avatar: "🚀",
      company: "TechGear Pro"
    },
    {
      name: "Sarah Kim",
      role: "SaaS Founder",
      content: "From idea to $50K MRR in 6 months. Their SaaS development skills are absolutely mind-blowing!",
      rating: 5,
      avatar: "💫",
      company: "DataFlow AI"
    },
    {
      name: "Marcus Johnson",
      role: "Agency Owner",
      content: "Our WordPress sites now load in under 1 second and convert 3x better. Pure magic!",
      rating: 5,
      avatar: "⭐",
      company: "Creative Studios"
    }
  ];

  const stats = [
    { number: "500+", label: "Digital Dreams Realized", icon: FaBullseye },
    { number: "98%", label: "Client Happiness Rate", icon: FaHeart },
    { number: "2.5x", label: "Average Revenue Boost", icon: FaChartLine },
    { number: "24/7", label: "Support Superheroes", icon: FaUserShield }
  ];

  const process = [
    {
      step: "01",
      title: "Dream Discovery",
      description: "We dive deep into your vision and uncover the magic hiding in your ideas.",
      icon: FaLightbulb,
      color: "text-yellow-500"
    },
    {
      step: "02",
      title: "Strategic Sorcery",
      description: "We craft a battle plan that turns your goals into guaranteed victories.",
      icon: FaBullseye,
      color: "text-red-500"
    },
    {
      step: "03",
      title: "Creative Coding",
      description: "Our developers work their magic to bring your vision to life with pixel-perfect precision.",
      icon: BiCodeAlt,
      color: "text-blue-500"
    },
    {
      step: "04",
      title: "Launch & Levitate",
      description: "We launch your project and watch your business soar to new heights.",
      icon: MdRocketLaunch,
      color: "text-purple-500"
    }
  ];

  const technologies = [
    // MERN Stack - Frontend
    { icon: BiLogoReact, name: "React", category: "Frontend", color: "text-cyan-400" },
    { icon: SiNextdotjs, name: "Next.js", category: "Frontend", color: "text-white" },
    { icon: BiLogoJavascript, name: "JavaScript", category: "Frontend", color: "text-yellow-400" },
    { icon: BiLogoTypescript, name: "TypeScript", category: "Frontend", color: "text-blue-400" },
    { icon: SiTailwindcss, name: "Tailwind", category: "Frontend", color: "text-cyan-300" },
    
    // MERN Stack - Backend & Other Frameworks
    { icon: BiLogoNodejs, name: "Node.js", category: "Backend", color: "text-green-400" },
    { icon: SiExpress, name: "Express", category: "Backend", color: "text-gray-300" },
    { icon: BiLogoJava, name: "Java", category: "Backend", color: "text-orange-500" },
    { icon: SiLaravel, name: "Laravel", category: "Backend", color: "text-red-400" },
    
    // MERN Stack - Database
    { icon: BiLogoMongodb, name: "MongoDB", category: "Database", color: "text-green-500" },
    { icon: BiLogoPostgresql, name: "PostgreSQL", category: "Database", color: "text-blue-500" },
    { icon: SiMysql, name: "MySQL", category: "Database", color: "text-orange-400" },
    
    // Docker & VPS Deployment
    { icon: BiLogoDocker, name: "Docker", category: "DevOps", color: "text-blue-400" },
    { icon: SiLinux, name: "Linux VPS", category: "DevOps", color: "text-yellow-300" },
    { icon: SiNginx, name: "Nginx", category: "DevOps", color: "text-green-400" },
    { icon: SiDigitalocean, name: "DigitalOcean", category: "Cloud", color: "text-blue-500" },
    { icon: SiVercel, name: "Vercel", category: "Cloud", color: "text-white" },
    { icon: SiNetlify, name: "Netlify", category: "Cloud", color: "text-cyan-400" },
    
    // AI & APIs
    { icon: SiOpenai, name: "OpenAI", category: "AI", color: "text-green-300" },
    { icon: TbBrain, name: "AI Integration", category: "AI", color: "text-purple-400" },
    { icon: AiFillApi, name: "REST APIs", category: "API", color: "text-blue-300" },
    
    // SaaS & E-Commerce Solutions
    { icon: SiShopify, name: "Shopify", category: "E-commerce", color: "text-green-400" },
    { icon: SiWoo, name: "WooC..", category: "E-commerce", color: "text-purple-500" },
    { icon: SiStripe, name: "Stripe", category: "Payment", color: "text-purple-400" },
    { icon: SiPaypal, name: "PayPal", category: "Payment", color: "text-blue-500" },
    { icon: FaRocket, name: "SaaS Apps", category: "SaaS", color: "text-pink-400" },
    { icon: TbApi, name: "API Design", category: "SaaS", color: "text-cyan-400" },
    
    // Tools
    { icon: BsGithub, name: "GitHub", category: "Tools", color: "text-gray-300" },
    { icon: DiGit, name: "Git", category: "Tools", color: "text-orange-500" },
    { icon: TbBrandVscode, name: "VS Code", category: "Tools", color: "text-blue-400" },
    { icon: MdCloudQueue, name: "Cloud Deploy", category: "DevOps", color: "text-gray-400" }
  ];

  // Ref and state for improved parallax-centering of the middle row
  const middleRowRef = useRef(null);
  const [middleRowCenterPoint, setMiddleRowCenterPoint] = useState(null);

  useEffect(() => {
    if (!middleRowRef.current || middleRowCenterPoint !== null) return;
    const row = middleRowRef.current;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMiddleRowCenterPoint(window.scrollY);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(row);
    return () => observer.disconnect();
  }, [middleRowCenterPoint]);

  // Scroll the row by a fixed amount
  const scrollMiddleRow = (direction) => {
    if (middleRowRef.current) {
      const scrollAmount = 200;
      middleRowRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  // Center icon on hover
  const handleIconHover = (index) => {
    if (middleRowRef.current) {
      const row = middleRowRef.current;
      const icon = row.children[index];
      if (icon) {
        const iconRect = icon.getBoundingClientRect();
        const rowRect = row.getBoundingClientRect();
        const offset = iconRect.left - rowRect.left - rowRect.width / 2 + iconRect.width / 2;
        row.scrollBy({ left: offset, behavior: 'smooth' });
      }
    }
  };

  // Remove smooth parallax state and effects

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-emerald-900/20"></div>
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            transition: 'all 0.3s ease-out'
          }}
        ></div>
        {/* Floating Elements */}
        <AiFillThunderbolt className="absolute top-20 left-10 text-6xl text-yellow-400 animate-bounce" />
        <IoRocketSharp className="absolute top-40 right-20 text-4xl text-blue-400 animate-pulse" />
        <GiSparkles className="absolute bottom-40 left-20 text-5xl text-purple-400 animate-spin" />
        <FaGem className="absolute bottom-20 right-10 text-3xl text-pink-400 animate-bounce" />
      </div>

      {/* Navigation */}
      <nav className="relative z-50 bg-black/80 backdrop-blur-xl border-b border-white/10 sticky top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center transform rotate-12 hover:rotate-0 transition-transform duration-300">
                <RiSparklingFill className="w-7 h-7 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  InfinityScale
                </span>
                <div className="text-xs text-gray-400">Digital Wizards</div>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-300 hover:text-white transition-colors relative group">
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#process" className="text-gray-300 hover:text-white transition-colors relative group">
                Process
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors relative group">
                Success Stories
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
              </a>
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">
                Start Magic ✨
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white"
              >
                {isMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-black/90 backdrop-blur-xl border-t border-white/10 py-6">
              <div className="flex flex-col space-y-6">
                <a href="#services" className="text-gray-300 hover:text-white px-4 transition-colors">Services</a>
                <a href="#process" className="text-gray-300 hover:text-white px-4 transition-colors">Process</a>
                <a href="#testimonials" className="text-gray-300 hover:text-white px-4 transition-colors">Success Stories</a>
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full mx-4">
                  Start Magic ✨
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3 mb-8">
              <GiMagicSwirl className="w-5 h-5 text-purple-400" />
              <span className="text-purple-300 font-medium">Where Code Meets Magic</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              <span className="block">We Don&apos;t Just</span>
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                Build Websites
              </span>
              <span className="block text-5xl md:text-6xl mt-4">We Create Digital Empires</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Stop settling for boring websites that put your customers to sleep. 
              We craft <span className="text-purple-400 font-semibold">WordPress masterpieces</span>, 
              <span className="text-pink-400 font-semibold"> Shopify money-makers</span>, and 
              <span className="text-cyan-400 font-semibold"> SaaS solutions</span> that make your competitors cry.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <button
                className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white px-10 py-5 rounded-full text-xl font-bold hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 shadow-2xl hover:shadow-purple-500/50"
                onClick={() => setIsOrderFormOpen(true)}
              >
                <span className="flex items-center">
                  Let&apos;s Create Magic
                  <RiMagicFill className="w-6 h-6 ml-3 group-hover:animate-spin" />
                </span>
              </button>
              <button
                className="group border-2 border-white/20 text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-white/10 transition-all backdrop-blur-sm"
                onClick={() => setIsPortfolioOpen(true)}
              >
                <span className="flex items-center">
                  <FaPlay className="w-6 h-6 mr-3" />
                  Watch Our Magic
                </span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-4xl mb-2 flex justify-center items-center">
                    <stat.icon className="w-10 h-10 text-pink-400" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="bg-gradient-to-r Yfrom-purple-400 to-pink-400 bg-clip-text">Superpowers</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Three legendary services that transform ordinary businesses into digital legends
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group relative">
                {/* Background Pattern */}
                <div className="absolute inset-0 text-9xl opacity-5 flex items-center justify-center pointer-events-none">
                  {service.bgPattern}
                </div>
                
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-500 transform hover:-translate-y-4 hover:shadow-2xl">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-3xl font-bold mb-2">{service.title}</h3>
                  <p className="text-lg text-purple-300 mb-4 font-medium">{service.subtitle}</p>
                  <p className="text-gray-300 mb-8 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <FaCheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full bg-gradient-to-r ${service.color} text-white py-4 rounded-2xl font-bold hover:shadow-lg transition-all transform hover:scale-105`}>
                    Unleash This Power
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Showcase Section */}
      <section className="relative z-10 py-22 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3 mb-8">
              <TbDatabase className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-300 font-medium">Full-Stack Arsenal</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Tech Mastery</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              <span className="text-cyan-400 font-semibold">MERN Stack</span> • 
              <span className="text-white font-semibold"> Next.js</span> • 
              <span className="text-orange-400 font-semibold"> Java</span> • 
              <span className="text-red-400 font-semibold"> Laravel</span> • 
              <span className="text-green-400 font-semibold"> SaaS Solutions</span> • 
              <span className="text-purple-400 font-semibold"> AI Integration</span> • 
              <span className="text-blue-400 font-semibold"> Docker & VPS Deployment</span>
            </p>
          </div>
          
          {/* Scrolling Tech Icons */}
          <div className="relative">
            {/* First Row - Parallax */}
            <div className="flex space-x-8 mb-8">
              {[...technologies.slice(0, 15), ...technologies.slice(0, 15)].map((tech, index) => (
                <div 
                  key={`row1-${index}`}
                  className="flex-shrink-0 group"
                  style={{ transform: `translateX(${-scrollY * 0.5}px)` }}
                >
                  <div className="w-20 h-20 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl flex flex-col items-center justify-center hover:bg-white/10 transition-all duration-300 transform hover:scale-110 hover:-translate-y-2">
                    <tech.icon className={`${tech.color} w-8 h-8 mb-1`} />
                    <span className="text-xs text-gray-400 font-medium">{tech.name}</span>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Second Row - Parallax */}
            <div className="flex space-x-8 mb-8">
              {[...technologies.slice(15, 30), ...technologies.slice(15, 30)].map((tech, index) => (
                <div 
                  key={`row2-${index}`}
                  className="flex-shrink-0 group"
                  style={{ transform: `translateX(${-scrollY * 0.5}px)` }}
                >
                  <div className="w-20 h-20 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl flex flex-col items-center justify-center hover:bg-white/10 transition-all duration-300 transform hover:scale-110 hover:-translate-y-2">
                    <tech.icon className={`${tech.color} w-8 h-8 mb-1`} />
                    <span className="text-xs text-gray-400 font-medium">{tech.name}</span>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Third Row - Parallax (slower) */}
            <div className="flex space-x-8">
              {[...technologies.slice(30), ...technologies.slice(0, 10), ...technologies.slice(30), ...technologies.slice(0, 10)].map((tech, index) => (
                <div 
                  key={`row3-${index}`}
                  className="flex-shrink-0 group"
                  style={{ transform: `translateX(${-scrollY * 0.2}px)` }}
                >
                  <div className="w-20 h-20 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl flex flex-col items-center justify-center hover:bg-white/10 transition-all duration-300 transform hover:scale-110 hover:-translate-y-2">
                    <tech.icon className={`${tech.color} w-8 h-8 mb-1`} />
                    <span className="text-xs text-gray-400 font-medium">{tech.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Tech Categories */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "MERN Stack", icon: BiLogoReact, color: "from-cyan-500 to-blue-500", count: "Core" },
              { name: "Next.js", icon: SiNextdotjs, color: "from-gray-600 to-gray-400", count: "Expert" },
              { name: "Java & Laravel", icon: BiLogoJava, color: "from-orange-500 to-red-500", count: "Pro" },
              { name: "Docker & VPS", icon: BiLogoDocker, color: "from-blue-500 to-cyan-500", count: "Deploy" },
              { name: "AI Integration", icon: TbBrain, color: "from-purple-500 to-pink-500", count: "Modern" },
              { name: "SaaS & E-com", icon: FaRocket, color: "from-green-500 to-emerald-500", count: "Solutions" }
            ].map((category, index) => (
              <div key={index} className="text-center group">
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{category.name}</h3>
                <p className="text-gray-400 text-sm">{category.count}</p>
              </div>
            ))}
          </div>
          
          {/* Skills Summary */}
          <div className="mt-20 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Your Full-Stack Developer
                </span>
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">🚀</div>
                  <h4 className="text-xl font-bold text-white mb-2">MERN & Next.js Expert</h4>
                  <p className="text-gray-300">MongoDB, Express, React, Node.js + Next.js for modern, scalable web applications with Java & Laravel backend options</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">💼</div>
                  <h4 className="text-xl font-bold text-white mb-2">SaaS & E-Commerce Solutions</h4>
                  <p className="text-gray-300">Custom SaaS platforms, Shopify stores, payment integrations, and AI-powered business solutions</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">☁️</div>
                  <h4 className="text-xl font-bold text-white mb-2">Docker & VPS Deployment</h4>
                  <p className="text-gray-300">Docker containerization, Linux VPS setup, cloud deployment on DigitalOcean, Vercel, and Netlify</p>
                </div>
              </div>
              {/* New SaaS Announcement */}
              <div className="mt-10 flex justify-center">
                <div className="bg-gradient-to-r from-emerald-400 to-blue-500 text-white px-3 py-2 rounded-2xl shadow-lg flex items-center gap-2 animate-pulse border-2 border-white/20 w-full whitespace-nowrap justify-center">
                  <span className="text-xs font-bold whitespace-nowrap">🚀 Coming Soon:</span>
                  <span className="text-xs font-semibold whitespace-nowrap">eBuilders.com</span>
                  <span className="hidden sm:inline text-xs text-white/80 whitespace-nowrap">— Our next-gen SaaS: an AI-powered landing page builder for eCommerce creators and businesses. Stay tuned!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="relative z-10 py-20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Secret Formula</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The 4-step process that turns your wildest digital dreams into reality
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-10 h-10 text-gray-200" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-cyan-400 to-blue-400 text-black text-sm font-bold px-3 py-1 rounded-full">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-300 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Success Stories</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real clients, real results, real magic ✨
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-12 rounded-3xl text-center">
              <div className="text-6xl mb-6">{testimonials[currentTestimonial].avatar}</div>
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <BsStarFill key={i} className="w-6 h-6 text-yellow-400" />
                ))}
              </div>
              <blockquote className="text-2xl text-gray-200 mb-8 italic leading-relaxed">
                &quot;{testimonials[currentTestimonial].content}&quot;
              </blockquote>
              <div>
                <div className="text-xl font-bold text-white">{testimonials[currentTestimonial].name}</div>
                <div className="text-purple-300">{testimonials[currentTestimonial].role}</div>
                <div className="text-gray-400">{testimonials[currentTestimonial].company}</div>
              </div>
            </div>
            
            {/* Testimonial Indicators */}
            <div className="flex justify-center mt-8 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentTestimonial 
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500' 
                      : 'bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MdRocketLaunch className="text-8xl mb-8 text-purple-400 mx-auto animate-bounce" />
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Ready to Join the <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Digital Elite?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Stop watching your competitors steal your customers. Let&apos;s build something so amazing, 
            they&apos;ll think you hired actual wizards.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white px-12 py-6 rounded-full text-xl font-bold hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 shadow-2xl">
              <span className="flex items-center justify-center">
                Start Your Empire Today
                <IoRocketSharp className="w-6 h-6 ml-3 group-hover:animate-bounce" />
              </span>
            </button>
            <a
              className="border-2 border-white/30 text-white px-12 py-6 rounded-full text-xl font-bold hover:bg-white/10 transition-all backdrop-blur-sm flex items-center justify-center"
              href="https://wa.me/212709130391"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaComments className="w-6 h-6 mr-3" />
              Let&apos;s Chat First
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-5xl font-bold mb-8">
                Let&apos;s Create Something <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Legendary</span>
              </h2>
              <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                Ready to transform your business into a digital powerhouse? 
                Our team of code wizards is standing by to make magic happen.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center text-gray-300 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <FaComments className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Email Magic</div>
                    <div className="text-purple-300">hello@InfinityScale.com</div>
                    <div className="font-semibold mt-4">WhatsApp</div>
                    <div className="text-green-300">+212709130391</div>
                  </div>
                </div>
                
                <div className="flex items-center text-gray-300 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <FaClock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Always Available</div>
                    <div className="text-cyan-300">24/7 for urgent digital emergencies</div>
                  </div>
                </div>
                
                <div className="flex items-center text-gray-300 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <FaHeart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Made with Love</div>
                    <div className="text-green-300">And lots of coffee ☕</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Inline Order Form */}
            <OrderFormPopup inline={true} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-black/50 backdrop-blur-xl border-t border-white/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-8 md:mb-0">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center transform rotate-12">
                <RiSparklingFill className="w-7 h-7 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  InfinityScale
                </span>
                <div className="text-xs text-gray-400">Digital Wizards</div>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-400 mb-2">&copy; 2024 InfinityScale Digital Wizards. All rights reserved.</p>
              <p className="text-gray-500">Crafting digital magic, one line of code at a time ✨</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Order Form Popup */}
      <OrderFormPopup isOpen={isOrderFormOpen} onClose={() => setIsOrderFormOpen(false)} />
      {/* Portfolio Popup */}
      <PortfolioPopup isOpen={isPortfolioOpen} onClose={() => setIsPortfolioOpen(false)} />

      {/* Sticky WhatsApp Button */}
      <a
        href="https://wa.me/212709130391"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed z-50 bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white flex items-center gap-2 px-5 py-3 rounded-full shadow-lg shadow-green-500/30 transition-all duration-300 text-lg font-bold animate-bounce hover:animate-none"
        style={{ boxShadow: '0 4px 24px 0 rgba(34,197,94,0.25)' }}
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="w-6 h-6" />
        WhatsApp
      </a>
    </div>
  );
} 