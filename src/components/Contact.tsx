import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, Check, Mail, MapPin, Phone, Linkedin, Instagram, Github } from 'lucide-react';

interface ContactProps {
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Simulate API call
    setTimeout(() => {
      if (formState.name && formState.email && formState.message) {
        setIsSubmitted(true);
        setIsSubmitting(false);
        setFormState({ name: '', email: '', message: '' });
      } else {
        setError('Please fill all fields');
        setIsSubmitting(false);
      }
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const contactItems = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      value: 'gujjasaiganesh@gmail.com',
      href: 'mailto:gujjasaiganesh@gmail.com',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      value: '+91 8499005984',
      href: 'tel:+918499005984',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      value: 'Hyderabad, India',
      href: '#',
    },
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-6 h-6" />,
      href: 'https://www.linkedin.com/in/gujja-sai-ganesh-816556365/',
      label: 'LinkedIn',
    },
    {
      icon: <Github className="w-6 h-6" />,
      href: 'https://github.com/gujjasaiganesh',
      label: 'GitHub',
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      href: 'https://www.instagram.com/sai_ganesh14',
      label: 'Instagram',
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className={`min-h-screen w-full flex flex-col justify-center py-20 px-8 ${
        darkMode ? 'bg-dark-300' : 'bg-light-200'
      } text-dark-100`}
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-sm uppercase tracking-wider font-semibold mb-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Get In Touch
          </motion.h2>
          <motion.h3 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Contact Me
          </motion.h3>
          <motion.div variants={itemVariants} className="w-20 h-1 mx-auto bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-8"></motion.div>
          <motion.p variants={itemVariants} className="max-w-2xl mx-auto text-lg">
            Have a project in mind or want to discuss potential collaborations? 
            Feel free to reach out through the contact form or using the information below.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <motion.h4 variants={itemVariants} className="text-2xl font-bold mb-6 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Send Me a Message
            </motion.h4>
            
            <motion.form
              variants={containerVariants}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <motion.div variants={itemVariants}>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  className={`w-full p-3 rounded-lg border focus:ring-2 focus:outline-none transition-all duration-300 ${
                    darkMode
                      ? 'bg-gray-700 border-gray-600 focus:ring-indigo-500 text-white'
                      : 'bg-white border-gray-300 focus:ring-indigo-500 text-gray-900'
                  }`}
                  placeholder="John Doe"
                />
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  className={`w-full p-3 rounded-lg border focus:ring-2 focus:outline-none transition-all duration-300 ${
                    darkMode
                      ? 'bg-gray-700 border-gray-600 focus:ring-indigo-500 text-white'
                      : 'bg-white border-gray-300 focus:ring-indigo-500 text-gray-900'
                  }`}
                  placeholder="john@example.com"
                />
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full p-3 rounded-lg border focus:ring-2 focus:outline-none transition-all duration-300 ${
                    darkMode
                      ? 'bg-gray-700 border-gray-600 focus:ring-indigo-500 text-white'
                      : 'bg-white border-gray-300 focus:ring-indigo-500 text-gray-900'
                  }`}
                  placeholder="Hello, I'd like to talk about..."
                />
              </motion.div>
              
              {error && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-500 text-sm"
                >
                  {error}
                </motion.div>
              )}
              
              <motion.div variants={itemVariants} className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`px-8 py-3 rounded-full font-medium flex items-center justify-center space-x-2 transition-all duration-500 transform ${
                    isSubmitted
                      ? 'bg-green-500 text-white'
                      : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-xl'
                  } ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitted ? (
                    <>
                      <Check className="w-5 h-5" />
                      <span>Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <Send className={`w-5 h-5 ${isSubmitting ? 'animate-pulse' : ''}`} />
                      <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    </>
                  )}
                </button>
              </motion.div>
            </motion.form>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <motion.h4 variants={itemVariants} className="text-2xl font-bold mb-6 bg-gradient-to-r from-emerald-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Contact Information
            </motion.h4>
            
            <motion.div variants={containerVariants} className="space-y-8 mb-12">
              {contactItems.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: darkMode 
                      ? "0 0 20px rgba(99, 102, 241, 0.3)" 
                      : "0 0 20px rgba(79, 70, 229, 0.2)"
                  }}
                  className={`relative flex items-start space-x-4 p-4 rounded-lg transition-all duration-300 group ${
                    darkMode 
                      ? 'hover:bg-gray-700/50' 
                      : 'hover:bg-gray-50/50'
                  }`}
                >
                  {/* Glow effect */}
                  <div className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    darkMode 
                      ? 'bg-gradient-to-r from-indigo-500/10 to-purple-500/10' 
                      : 'bg-gradient-to-r from-indigo-500/5 to-purple-500/5'
                  } blur-sm`} />
                  
                  {/* Icon container with glow */}
                  <div className="relative p-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white group-hover:shadow-lg group-hover:shadow-indigo-500/20 transition-all duration-300">
                    <div className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                      darkMode 
                        ? 'bg-indigo-500/20' 
                        : 'bg-indigo-500/10'
                    } blur-md`} />
                    <motion.div
                      whileHover={{ 
                        scale: 1.1,
                        filter: "drop-shadow(0 0 8px rgba(255, 255, 255, 0.5))"
                      }}
                      className="relative z-10"
                    >
                      {item.icon}
                    </motion.div>
                  </div>
                  
                  <div className="relative z-10">
                    <motion.h5 
                      className="font-medium"
                      whileHover={{ 
                        color: darkMode ? "#818CF8" : "#4F46E5"
                      }}
                    >
                      {item.title}
                    </motion.h5>
                    <motion.p 
                      className={darkMode ? 'text-gray-300' : 'text-gray-600'}
                      whileHover={{ 
                        color: darkMode ? "#A5B4FC" : "#6366F1"
                      }}
                    >
                      {item.value}
                    </motion.p>
                  </div>
                </motion.a>
              ))}
            </motion.div>
            
            <motion.div variants={itemVariants} className="mt-12">
              <h4 className="text-xl font-bold mb-4 bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 bg-clip-text text-transparent">
                Connect on Social Media
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ 
                      scale: 1.1,
                      boxShadow: darkMode 
                        ? "0 0 20px rgba(99, 102, 241, 0.3)" 
                        : "0 0 20px rgba(79, 70, 229, 0.2)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative p-4 rounded-full group transition-all duration-300 ${
                      darkMode 
                        ? 'bg-gradient-to-r from-indigo-500/20 to-purple-500/20 hover:from-indigo-500/30 hover:to-purple-500/30' 
                        : 'bg-gradient-to-r from-indigo-500/10 to-purple-500/10 hover:from-indigo-500/20 hover:to-purple-500/20'
                    }`}
                    aria-label={link.label}
                  >
                    {/* Glow effect */}
                    <div className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                      darkMode 
                        ? 'bg-indigo-500/20' 
                        : 'bg-indigo-500/10'
                    } blur-md`} />
                    
                    <motion.div
                      whileHover={{ 
                        scale: 1.1,
                        filter: "drop-shadow(0 0 8px rgba(99, 102, 241, 0.5))"
                      }}
                      className={`relative z-10 ${
                        darkMode ? 'text-white' : 'text-indigo-600'
                      }`}
                    >
                      {link.icon}
                    </motion.div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
