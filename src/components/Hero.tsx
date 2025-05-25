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
        darkMode ? 'bg-dark-300 text-light-100' : 'bg-light-200 text-dark-100'
      }`}
    >
      <ParticleBackground />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 dark:from-transparent dark:to-black/40" />
      
      <div className="z-10 max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-poppins text-5xl md:text-7xl font-bold leading-tight mb-6"
        >
          <span className="inline-block">Hello, I'm </span>
          <span className="inline-block bg-gradient-to-r from-primary-400 via-secondary-400 to-primary-500 bg-clip-text text-transparent">
            Gujja Sai Ganesh
          </span>
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <h2 className="font-inter text-xl md:text-3xl font-light mb-8">
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
            className="px-8 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 font-inter"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>
          
          <motion.a
            href="#contact"
            className={`px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 font-inter ${
              darkMode 
                ? 'bg-dark-200/80 backdrop-blur-sm text-light-100 hover:bg-dark-100/90' 
                : 'bg-light-300/80 backdrop-blur-sm text-dark-100 hover:bg-light-400/90'
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
          <ChevronDown className={`w-8 h-8 ${darkMode ? 'text-light-100' : 'text-dark-100'}`} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;