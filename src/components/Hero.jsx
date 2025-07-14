import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Shield, Clock, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  const features = [
    { icon: <Shield className="w-6 h-6" />, text: "10 Year Warranty" },
    { icon: <CheckCircle className="w-6 h-6" />, text: "Smart EMI Plans" },
    { icon: <Clock className="w-6 h-6" />, text: "45 Days Delivery" },
    { icon: <Star className="w-6 h-6" />, text: "150+ Quality Checks" }
  ];

  return (
    <section id="home" className="pt-24 pb-16 px-4 min-h-screen flex items-center">
      <div className="container mx-auto">
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main Heading */}
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            The World's Finest Living, Now Within Reach
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 mb-8 animate-fade-in"
            variants={itemVariants}
          >
            Luxury Modular Home Interiors with a World-Class Touch
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            variants={itemVariants}
          >
            <Button 
              variant="gradient" 
              size="lg"
              className="rounded-full text-lg px-8 py-4"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="rounded-full text-lg px-8 py-4 border-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View Portfolio
            </Button>
          </motion.div>
          
          {/* Features Grid */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center p-4 rounded-lg bg-white/50 backdrop-blur-sm border border-white/20"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-blue-600 mb-2">
                  {feature.icon}
                </div>
                <p className="text-sm font-medium text-gray-700 text-center">
                  {feature.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      
      {/* Background Elements */}
      <motion.div
        className="absolute inset-0 -z-10 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-400/10 rounded-full blur-3xl" />
      </motion.div>
    </section>
  );
};

export default Hero; 