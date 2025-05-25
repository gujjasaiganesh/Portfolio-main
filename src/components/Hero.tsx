import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const scrollToNextSection = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.getBoundingClientRect().top + window.scrollY,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className={`relative h-screen w-full flex flex-col justify-center items-center px-8 ${
        darkMode ? 'text-white' : 'text-gray-900'
      }`}
    >
      <ParticleBackground />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 dark:from-transparent dark:to-black/40" />
      
      <div className="z-10 max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold leading-tight mb-6"
        >
          <span className="inline-block">Hello, I'm </span>
          <span className="inline-block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Gujja Sai Ganesh
          </span>
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <h2 className="text-xl md:text-3xl font-light mb-8">
            <span className="inline-block">Aspiring</span>{" "}
            <span className="inline-block font-medium">AI/ML Engineer</span>{" "}
            <span className="inline-block">with a passion for innovation</span>
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row justify-center gap-4 mt-8"
        >
          <motion.a
            href="#projects"
            className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>
          
          <motion.a
            href="#contact"
            className={`px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 ${
              darkMode 
                ? 'bg-white/10 backdrop-blur-sm text-white hover:bg-white/20' 
                : 'bg-gray-900/10 backdrop-blur-sm text-gray-900 hover:bg-gray-900/20'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToNextSection}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className={`w-8 h-8 ${darkMode ? 'text-white' : 'text-gray-800'}`} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;