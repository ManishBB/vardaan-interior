import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Home, Users, Award, Zap } from 'lucide-react';
import { Button } from './ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';

const ShowcaseCarousel = () => {
  const showcaseItems = [
    {
      title: "Luxury Living Redefined",
      subtitle: "Premium Interior Solutions",
      description: "Experience the perfect blend of luxury and functionality with our premium interior designs. Every detail is crafted to create spaces that inspire and comfort.",
      image: "🏠",
      stats: [
        { icon: <Star className="w-5 h-5" />, value: "4.9/5", label: "Customer Rating" },
        { icon: <Users className="w-5 h-5" />, value: "10,000+", label: "Happy Families" },
        { icon: <Award className="w-5 h-5" />, value: "150+", label: "Quality Checks" }
      ],
      color: "from-blue-600 to-purple-600",
      bgColor: "from-blue-50 to-purple-50"
    },
    {
      title: "Smart Space Solutions",
      subtitle: "Intelligent Design Technology",
      description: "Transform your space with smart technology integration. From automated lighting to intelligent storage, we make your home work smarter, not harder.",
      image: "⚡",
      stats: [
        { icon: <Zap className="w-5 h-5" />, value: "45 Days", label: "Delivery Time" },
        { icon: <Home className="w-5 h-5" />, value: "100%", label: "Custom Design" },
        { icon: <Star className="w-5 h-5" />, value: "10 Years", label: "Warranty" }
      ],
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-50 to-pink-50"
    },
    {
      title: "Complete Home Transformation",
      subtitle: "End-to-End Interior Services",
      description: "From concept to completion, we handle every aspect of your interior project. Our comprehensive approach ensures seamless execution and stunning results.",
      image: "🎨",
      stats: [
        { icon: <Users className="w-5 h-5" />, value: "24/7", label: "Support" },
        { icon: <Award className="w-5 h-5" />, value: "Premium", label: "Materials" },
        { icon: <Zap className="w-5 h-5" />, value: "Smart", label: "EMI Plans" }
      ],
      color: "from-pink-600 to-orange-600",
      bgColor: "from-pink-50 to-orange-50"
    }
  ];

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
    <section className="min-h-screen flex items-center bg-gradient-to-br from-slate-50 to-blue-50" id="showcase">
      <div className="w-full">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {showcaseItems.map((item, index) => (
              <CarouselItem key={index} className="pl-0">
                <motion.div 
                  className={`min-h-screen flex items-center bg-gradient-to-br ${item.bgColor} relative overflow-hidden`}
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {/* Background Elements */}
                  <motion.div
                    className="absolute inset-0 -z-10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                  >
                    <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl" />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-400/10 rounded-full blur-3xl" />
                  </motion.div>

                  <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                      {/* Content */}
                      <motion.div 
                        className="text-center lg:text-left"
                        variants={itemVariants}
                      >
                        <motion.div
                          className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full mb-6"
                          initial={{ scale: 0.8, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2, duration: 0.6 }}
                        >
                          <span className="text-sm font-semibold">{item.subtitle}</span>
                        </motion.div>
                        
                        <motion.h2 
                          className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent"
                          variants={itemVariants}
                        >
                          {item.title}
                        </motion.h2>
                        
                        <motion.p 
                          className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0"
                          variants={itemVariants}
                        >
                          {item.description}
                        </motion.p>
                        
                        <motion.div 
                          className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
                          variants={itemVariants}
                        >
                          <Button 
                            variant="gradient" 
                            size="lg"
                            className="rounded-full text-lg px-8 py-4"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <span>Explore Now</span>
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
                        
                        {/* Stats */}
                        <motion.div 
                          className="grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0"
                          variants={itemVariants}
                        >
                          {item.stats.map((stat, idx) => (
                            <motion.div
                              key={idx}
                              className="text-center"
                              whileHover={{ scale: 1.05, y: -5 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <div className="flex justify-center mb-2 text-blue-600">
                                {stat.icon}
                              </div>
                              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                {stat.value}
                              </div>
                              <div className="text-sm text-gray-600">
                                {stat.label}
                              </div>
                            </motion.div>
                          ))}
                        </motion.div>
                      </motion.div>
                      
                      {/* Visual Element */}
                      <motion.div 
                        className="flex justify-center lg:justify-end"
                        variants={itemVariants}
                      >
                        <motion.div
                          className="relative"
                          whileHover={{ scale: 1.05, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <div className={`w-80 h-80 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center shadow-2xl`}>
                            <div className="text-8xl">{item.image}</div>
                          </div>
                          
                          {/* Floating elements */}
                          <motion.div
                            className="absolute -top-4 -right-4 w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center"
                            animate={{ y: [-10, 10, -10] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                          >
                            <Star className="w-8 h-8 text-yellow-400" />
                          </motion.div>
                          
                          <motion.div
                            className="absolute -bottom-4 -left-4 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center"
                            animate={{ y: [10, -10, 10] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                          >
                            <Award className="w-6 h-6 text-blue-600" />
                          </motion.div>
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:bg-white" />
          <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:bg-white" />
        </Carousel>
      </div>
    </section>
  );
};

export default ShowcaseCarousel; 