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
      className={`relative h-screen w-full flex flex-col justify-center items-center px-8 overflow-hidden ${
        darkMode ? 'text-white' : 'text-dark-100'
      }`}
    >
      {/* Video Background */}
      <div className="absolute inset-0 -z-20">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          style={{ filter: darkMode ? 'brightness(0.4)' : 'brightness(0.8)' }}
          onError={(e) => console.error('Video loading error:', e)}
        >
          <source src="./Motion.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Particle Overlay */}
      <ParticleBackground />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40 -z-10" />
      
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
            className="px-8 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 font-inter backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>
          
          <motion.a
            href="#contact"
            className={`px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 font-inter backdrop-blur-sm ${
              darkMode 
                ? 'bg-white/10 text-white hover:bg-white/20' 
                : 'bg-black/10 text-dark-100 hover:bg-black/20'
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
          <ChevronDown className="w-8 h-8 text-white" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;