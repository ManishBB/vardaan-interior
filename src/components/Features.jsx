import React from 'react';
import { motion } from 'framer-motion';
import { Shield, CheckCircle, Clock, Star, Zap, Award, Users, Heart } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const Features = () => {
  const features = [
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: "LUXURY THAT LASTS",
      subtitle: "10 YEAR WARRANTY*",
      description: "Premium quality with long-term assurance and comprehensive coverage",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <CheckCircle className="w-12 h-12 text-green-600" />,
      title: "SMART EMI PLANS",
      subtitle: "FOR YOU",
      description: "Flexible payment options to suit your budget with zero hidden costs",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Clock className="w-12 h-12 text-purple-600" />,
      title: "DELIVERED IN",
      subtitle: "JUST 45 DAYS",
      description: "Fast and efficient project completion with guaranteed timelines",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Star className="w-12 h-12 text-orange-600" />,
      title: "150+ QUALITY",
      subtitle: "PARAMETERS CHECKED",
      description: "Rigorous quality control at every step of the process",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: <Zap className="w-12 h-12 text-indigo-600" />,
      title: "SMART TECHNOLOGY",
      subtitle: "INTEGRATION",
      description: "Modern smart home features seamlessly integrated into your design",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: <Award className="w-12 h-12 text-pink-600" />,
      title: "AWARD WINNING",
      subtitle: "DESIGN TEAM",
      description: "Expert designers with years of experience and recognition",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: <Users className="w-12 h-12 text-teal-600" />,
      title: "DEDICATED",
      subtitle: "PROJECT MANAGER",
      description: "Personal project manager to oversee your entire journey",
      color: "from-teal-500 to-teal-600"
    },
    {
      icon: <Heart className="w-12 h-12 text-red-600" />,
      title: "CUSTOMER FIRST",
      subtitle: "APPROACH",
      description: "Your satisfaction is our priority with 24/7 support",
      color: "from-red-500 to-red-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-purple-50" id="features">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Why Vardan - The Thought Behind Every Space
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            We believe every space tells a story. Here's what makes our story special.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                scale: 1.05,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <Card className="h-full group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader className="text-center pb-4">
                  <motion.div 
                    className="flex justify-center mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <CardTitle className="text-lg font-bold text-gray-800 mb-2">
                    {feature.title}
                  </CardTitle>
                  <div className={`text-sm font-semibold bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                    {feature.subtitle}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </CardDescription>
                  
                  {/* Animated border effect */}
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-8 py-4 rounded-full shadow-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Shield className="w-6 h-6 text-blue-600" />
            <span className="text-lg font-semibold text-gray-800">
              Trusted by 10,000+ Happy Families
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features; 