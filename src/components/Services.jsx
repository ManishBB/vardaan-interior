import React from 'react';
import { motion } from 'framer-motion';
import { Home, Zap, Star, Briefcase, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';

const Services = () => {
  const services = [
    {
      title: "FULL HOME INTERIORS",
      description: "Complete interior solutions for your entire home with premium finishes and smart space optimization.",
      icon: <Home className="w-8 h-8" />,
      features: ["Custom Design", "Premium Materials", "Smart Storage", "Complete Installation"]
    },
    {
      title: "SMART-FIT INTERIORS",
      description: "Intelligent space optimization with modern technology and innovative design solutions.",
      icon: <Zap className="w-8 h-8" />,
      features: ["Space Optimization", "Smart Technology", "Modular Design", "Quick Installation"]
    },
    {
      title: "PREMIUM INTERIORS",
      description: "Luxury designs with world-class finishes and exclusive materials for discerning clients.",
      icon: <Star className="w-8 h-8" />,
      features: ["Luxury Materials", "Exclusive Design", "Premium Finishes", "VIP Service"]
    },
    {
      title: "RENOVATIONS",
      description: "Transform your existing space with expert renovation and modern upgrades.",
      icon: <Briefcase className="w-8 h-8" />,
      features: ["Expert Renovation", "Modern Upgrades", "Quality Assurance", "Timely Delivery"]
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

  return (
    <section className="py-16 px-4 bg-white" id="services">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 text-gray-800"
            variants={itemVariants}
          >
            Your Entire Interior Story
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600"
            variants={itemVariants}
          >
            Beautifully Under One Roof
          </motion.p>
        </motion.div>
        
        {/* Desktop Grid View */}
        <motion.div 
          className="hidden lg:grid lg:grid-cols-2 xl:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="h-full group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-gray-50 to-white">
                <CardHeader className="text-center">
                  <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300 mx-auto">
                    {service.icon}
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-800 mb-2">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 mb-4">
                    {service.description}
                  </CardDescription>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    variant="ghost" 
                    className="mt-4 w-full group-hover:text-blue-600"
                    whileHover={{ scale: 1.05 }}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile/Tablet Carousel */}
        <motion.div 
          className="lg:hidden"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {services.map((service, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card className="h-full group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-gray-50 to-white">
                      <CardHeader className="text-center">
                        <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300 mx-auto">
                          {service.icon}
                        </div>
                        <CardTitle className="text-lg font-bold text-gray-800 mb-2">
                          {service.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="text-center">
                        <CardDescription className="text-gray-600 mb-4">
                          {service.description}
                        </CardDescription>
                        <div className="space-y-2">
                          {service.features.slice(0, 2).map((feature, idx) => (
                            <div key={idx} className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                        <Button 
                          variant="ghost" 
                          className="mt-4 w-full group-hover:text-blue-600"
                          whileHover={{ scale: 1.05 }}
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 