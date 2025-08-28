import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    // e.preventDefault();
    // toast({
    //   title: "🚧 Contact Form",
    //   description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    // });
    // setFormData({ name: '', email: '', message: '' });
    e.preventDefault();

    try {
      // Build form-encoded body to avoid CORS preflight
      const params = new URLSearchParams();
      params.append('name', formData.name);
      params.append('email', formData.email);
      params.append('message', formData.message);

      console.log("Env URL:", import.meta.env.VITE_WEB_APP_URL);

      const res = await fetch(import.meta.env.VITE_WEB_APP_URL, {
        method: 'POST',
        body: params // DO NOT set Content-Type header manually
      });

      const json = await res.json();

      if (json.status === 'success') {
        toast({
          title: 'Message sent',
          description: 'Thanks — we saved your message and connect shortly!',
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(json.message || 'Unknown error');
      }
    } catch (err) {
      console.error(err);
      toast({
        title: 'Error',
        description: err.message || 'Failed to send message.',
      });
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "hello@growlouder.com",
      description: "Get in touch for partnerships and inquiries"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+91 9016758329",
      description: "Speak directly with our growth experts"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "701 Rio IT Park,Yamuna Chowk ",
      description: "Schedule a meeting at our headquarters"
    }
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-pink-500' },
    { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:text-blue-500' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-blue-400' },    
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-600' },
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - GROWLOUDER PRODUCTIONS | Get In Touch</title>
        <meta name="description" content="Ready to grow your social media presence? Contact GROWLOUDER today for a free consultation and discover how we can amplify your brand's voice." />
      </Helmet>

      <div className="pt-24 pb-20 bg-black">
        <div className="container mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl font-bold mb-6">
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Ready to amplify your brand's voice? Let's start a conversation about your social media growth goals.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gray-900 p-8 rounded-2xl border border-gray-700">
                <h2 className="text-3xl font-bold mb-6 gradient-text">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent transition-all"
                      placeholder="Enter your full name"
                      autoComplete='off'
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent transition-all"
                      placeholder="Enter your email address"
                      autoComplete='off'
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your project and goals..."
                      autoComplete='off'
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full bg-[var(--gold)] text-black hover:bg-yellow-500 text-lg py-3 glow"
                  >
                    Send Message <Send className="ml-2" size={20} />
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold mb-6 gradient-text">Contact Information</h2>
                <p className="text-gray-400 text-lg mb-8">
                  Choose the best way to reach us. We're here to help you grow louder.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-4 p-6 bg-gray-900 rounded-xl border border-gray-700 hover:border-[var(--gold)] transition-colors"
                  >
                    <div className="w-12 h-12 bg-[var(--gold)] rounded-full flex items-center justify-center flex-shrink-0">
                      <info.icon size={24} className="text-black" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">{info.title}</h3>
                      <p className="text-[var(--gold)] font-medium mb-1">{info.details}</p>
                      <p className="text-gray-400 text-sm">{info.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-8">
                <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className={`w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 ${social.color} transition-colors duration-300`}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-white mb-4">Our Location</h3>
                <div className="w-full h-64 bg-gray-800 rounded-xl flex items-center justify-center border border-gray-700">
                  <div className="text-center">
                    <MapPin size={48} className="text-[var(--gold)] mx-auto mb-2" />
                    <p className="text-gray-400">Interactive Map</p>
                    <p className="text-sm text-gray-500">New York, NY</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mt-20 bg-gradient-to-r from-gray-900 to-black p-12 rounded-3xl border border-[var(--gold)] glow"
          >
            <h2 className="text-4xl font-bold mb-6 gradient-text">
              Ready to Grow Louder?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Don't let your brand get lost in the noise. Let's create a strategy that makes you impossible to ignore.
            </p>
            <Button
              className="bg-[var(--gold)] text-black hover:bg-yellow-500 text-lg px-8 py-4 glow"
              onClick={() => toast({
                title: "🚧 Free Consultation Feature",
                description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
              })}
            >
              Get Free Consultation
            </Button>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Contact;