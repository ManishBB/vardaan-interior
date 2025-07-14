import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, User, Award } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      text: "Absolutely loved working with Vardan Space Concept! Their team transformed our 2BHK into a beautiful, functional space that reflects our personality perfectly. The design process was smooth, and the delivery was exactly on time - just like they promised. Highly recommend them for anyone looking for premium yet practical interior solutions!",
      author: "Sarah & Rajesh Kumar",
      location: "Mumbai, Maharashtra",
      rating: 5,
      project: "2BHK Interior Design",
      avatar: "👨‍👩‍👧‍👦"
    },
    {
      text: "Outstanding service and attention to detail. The team understood our vision and brought it to life beautifully. The quality of work exceeded our expectations and the smart storage solutions they implemented have made our small apartment feel spacious and organized.",
      author: "Priya Sharma",
      location: "Delhi, NCR",
      rating: 5,
      project: "1BHK Smart Interior",
      avatar: "👩‍💼"
    },
    {
      text: "Vardan Space Concept delivered beyond our expectations! Their premium interior package gave our home a luxurious feel without breaking the bank. The 10-year warranty gives us peace of mind, and the smart EMI plan made it affordable. Truly a world-class experience!",
      author: "Amit & Neha Patel",
      location: "Bangalore, Karnataka",
      rating: 5,
      project: "Premium 3BHK Interior",
      avatar: "👨‍👩‍👦"
    },
    {
      text: "The renovation work was completed in just 45 days as promised. The team was professional, punctual, and the quality of materials used is exceptional. Our kitchen and living room look like they belong in a luxury magazine. Worth every penny!",
      author: "Dr. Meera Iyer",
      location: "Chennai, Tamil Nadu",
      rating: 5,
      project: "Kitchen & Living Renovation",
      avatar: "👩‍⚕️"
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

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-purple-50 to-pink-50" id="testimonials">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Award className="w-5 h-5" />
            <span className="text-sm font-semibold">Trusted by 10,000+ Families</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Stories from our Happy Spaces
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Real experiences from real families who trusted us with their homes.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <Card className="h-full group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm relative overflow-hidden">
                {/* Quote icon background */}
                <motion.div
                  className="absolute top-4 right-4 text-gray-100 text-6xl opacity-10"
                  initial={{ scale: 0, rotate: -10 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  <Quote />
                </motion.div>
                
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="text-3xl">{testimonial.avatar}</div>
                    <div>
                      <CardTitle className="text-lg font-semibold text-gray-800">
                        {testimonial.author}
                      </CardTitle>
                      <CardDescription className="text-sm text-gray-600">
                        {testimonial.location}
                      </CardDescription>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 mb-2">
                    {renderStars(testimonial.rating)}
                    <span className="text-sm text-gray-600 ml-2">
                      {testimonial.rating}.0/5.0
                    </span>
                  </div>
                  
                  <motion.div
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    <User className="w-3 h-3" />
                    <span>{testimonial.project}</span>
                  </motion.div>
                </CardHeader>
                
                <CardContent>
                  <motion.p 
                    className="text-gray-700 leading-relaxed italic"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                    "{testimonial.text}"
                  </motion.p>
                </CardContent>
                
                {/* Animated border */}
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-pink-600"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Stats */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: "10,000+", label: "Happy Families" },
              { number: "4.9/5", label: "Average Rating" },
              { number: "45 Days", label: "Average Delivery" },
              { number: "10 Years", label: "Warranty Period" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
              >
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials; 