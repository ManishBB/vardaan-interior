import React, { useState, useEffect } from 'react';
import { ChevronDown, Star, Phone, Mail, MapPin, Menu, X, Home, Briefcase, Users, MessageSquare, ArrowRight, CheckCircle, Clock, Shield, Zap } from 'lucide-react';

const VardanInteriorApp = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      title: "FULL HOME INTERIORS",
      description: "Complete interior solutions for your entire home",
      icon: <Home className="w-8 h-8" />
    },
    {
      title: "SMART-FIT INTERIORS",
      description: "Intelligent space optimization with modern technology",
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: "PREMIUM INTERIORS",
      description: "Luxury designs with world-class finishes",
      icon: <Star className="w-8 h-8" />
    },
    {
      title: "RENOVATIONS",
      description: "Transform your existing space with expert renovation",
      icon: <Briefcase className="w-8 h-8" />
    }
  ];

  const features = [
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: "LUXURY THAT LASTS",
      subtitle: "10 YEAR WARRANTY*",
      description: "Premium quality with long-term assurance"
    },
    {
      icon: <CheckCircle className="w-12 h-12 text-green-600" />,
      title: "SMART EMI PLANS",
      subtitle: "FOR YOU",
      description: "Flexible payment options to suit your budget"
    },
    {
      icon: <Clock className="w-12 h-12 text-purple-600" />,
      title: "DELIVERED IN",
      subtitle: "JUST 45 DAYS",
      description: "Fast and efficient project completion"
    },
    {
      icon: <Star className="w-12 h-12 text-orange-600" />,
      title: "150+ QUALITY",
      subtitle: "PARAMETERS CHECKED",
      description: "Rigorous quality control at every step"
    }
  ];

  const testimonials = [
    {
      text: "Absolutely loved working with Vardan Space Concept! Their team transformed our 2BHK into a beautiful, functional space that reflects our personality perfectly. The design process was smooth, and the delivery was exactly on time - just like they promised. Highly recommend them for anyone looking for premium yet practical interior solutions!",
      author: "Happy Customer",
      rating: 5
    },
    {
      text: "Outstanding service and attention to detail. The team understood our vision and brought it to life beautifully. The quality of work exceeded our expectations!",
      author: "Satisfied Client",
      rating: 5
    }
  ];

  const roomTypes = [
    { name: "Living Room", image: "🏠", description: "Elegant and comfortable living spaces" },
    { name: "Master Bedroom", image: "🛏️", description: "Luxurious personal retreats" },
    { name: "Kitchen", image: "🍽️", description: "Modern culinary experiences" },
    { name: "Bathroom", image: "🛁", description: "Spa-like relaxation spaces" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Animated Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                <Home className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Vardan
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'Services', 'Portfolio', 'About', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveSection(item.toLowerCase())}
                  className={`relative px-4 py-2 transition-all duration-300 hover:text-blue-600 ${
                    activeSection === item.toLowerCase() ? 'text-blue-600' : 'text-gray-700'
                  }`}
                >
                  {item}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform transition-transform duration-300 ${
                    activeSection === item.toLowerCase() ? 'scale-x-100' : 'scale-x-0'
                  }`} />
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden bg-white/95 backdrop-blur-md`}>
          <div className="px-4 py-4 space-y-2">
            {['Home', 'Services', 'Portfolio', 'About', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => {
                  setActiveSection(item.toLowerCase());
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
              The World's Finest Living, Now Within Reach
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-fade-in">
              Luxury Modular Home Interiors with a World-Class Touch
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              Your Entire Interior Story
            </h2>
            <p className="text-xl text-gray-600">Beautifully Under One Roof</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              Why Vardan - The Thought Behind Every Space
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-center"
              >
                <div className="flex justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-lg font-semibold text-blue-600 mb-2">{feature.subtitle}</p>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Room Types Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              Beautiful Spaces Start with Smart Ideas
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {roomTypes.map((room, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 text-center"
              >
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {room.image}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{room.name}</h3>
                <p className="text-gray-600">{room.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              Stories from our Happy Spaces
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-gray-800">- {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Have a Space in Mind? Let's Plan It Together
            </h2>
            <p className="text-xl text-blue-100">
              Looking to Transform Your Space with Expert Interior Solutions? Reach out to Vardan Space Concept
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-6 h-6 text-blue-200" />
                    <span className="text-white">+123-456-7890</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-6 h-6 text-blue-200" />
                    <span className="text-white">soluvent***@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-6 h-6 text-blue-200" />
                    <span className="text-white">Visit our showroom</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                  <button className="w-full bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transform hover:scale-105 transition-all duration-300">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Home className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">Vardan Space Concept</span>
          </div>
          <p className="text-gray-400 mb-4">
            Creating beautiful, functional spaces that reflect your personality
          </p>
          <div className="flex justify-center space-x-6">
            <button className="hover:text-blue-400 transition-colors duration-200">Privacy Policy</button>
            <button className="hover:text-blue-400 transition-colors duration-200">Terms of Service</button>
            <button className="hover:text-blue-400 transition-colors duration-200">Contact</button>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800">
            <p className="text-gray-400">© 2025 Vardan Space Concept. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VardanInteriorApp;