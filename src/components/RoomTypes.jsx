import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Home, Bed, Utensils, Bath } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const RoomTypes = () => {
  const roomTypes = [
    { 
      name: "Living Room", 
      emoji: "🏠", 
      description: "Elegant and comfortable living spaces that reflect your lifestyle",
      icon: <Home className="w-8 h-8" />,
      features: ["Smart Entertainment", "Comfortable Seating", "Ambient Lighting", "Storage Solutions"],
      color: "from-blue-500 to-blue-600"
    },
    { 
      name: "Master Bedroom", 
      emoji: "🛏️", 
      description: "Luxurious personal retreats designed for ultimate comfort and relaxation",
      icon: <Bed className="w-8 h-8" />,
      features: ["Premium Bedding", "Walk-in Closet", "Ensuite Bathroom", "Smart Controls"],
      color: "from-purple-500 to-purple-600"
    },
    { 
      name: "Kitchen", 
      emoji: "🍽️", 
      description: "Modern culinary experiences with state-of-the-art appliances and smart storage",
      icon: <Utensils className="w-8 h-8" />,
      features: ["Modern Appliances", "Smart Storage", "Island Design", "Breakfast Nook"],
      color: "from-orange-500 to-orange-600"
    },
    { 
      name: "Bathroom", 
      emoji: "🛁", 
      description: "Spa-like relaxation spaces with premium fixtures and elegant finishes",
      icon: <Bath className="w-8 h-8" />,
      features: ["Premium Fixtures", "Heated Floors", "Rain Shower", "Smart Mirrors"],
      color: "from-teal-500 to-teal-600"
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
    <section className="py-16 px-4 bg-white" id="room-types">
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
            Beautiful Spaces Start with Smart Ideas
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Every room has a purpose. Let us help you discover its full potential.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {roomTypes.map((room, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -15, 
                scale: 1.03,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <Card className="h-full group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
                {/* Background gradient overlay */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${room.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />
                
                <CardHeader className="text-center pb-4 relative z-10">
                  <motion.div 
                    className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 5 }}
                  >
                    {room.emoji}
                  </motion.div>
                  <div className="flex justify-center mb-4">
                    <motion.div 
                      className={`p-3 rounded-full bg-gradient-to-r ${room.color} text-white`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {room.icon}
                    </motion.div>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800 mb-2">
                    {room.name}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="text-center relative z-10">
                  <CardDescription className="text-gray-600 mb-6 leading-relaxed">
                    {room.description}
                  </CardDescription>
                  
                  <div className="space-y-3 mb-6">
                    {room.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-center justify-center space-x-2 text-sm text-gray-600"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <div className={`w-2 h-2 bg-gradient-to-r ${room.color} rounded-full`} />
                        <span>{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    className={`w-full group-hover:text-white group-hover:bg-gradient-to-r ${room.color} transition-all duration-300`}
                    whileHover={{ scale: 1.05 }}
                  >
                    Explore {room.name}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
                
                {/* Animated border */}
                <motion.div
                  className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${room.color}`}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
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
            className="inline-flex items-center space-x-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full shadow-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Home className="w-6 h-6" />
            <span className="text-lg font-semibold">
              Start Your Interior Journey Today
            </span>
            <ArrowRight className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default RoomTypes; 