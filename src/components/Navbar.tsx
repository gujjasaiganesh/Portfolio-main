import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navContainerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      }
    },
    tap: {
      scale: 0.95,
    }
  };

  const logoVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      }
    },
    hover: {
      scale: 1.05,
      rotate: [0, -5, 5, 0],
      transition: {
        rotate: {
          repeat: 0,
          duration: 0.5,
          ease: "easeInOut",
        }
      }
    }
  };

  const mobileMenuVariants = {
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.05,
        staggerDirection: -1,
        when: "afterChildren"
      }
    },
    open: {
      height: "auto",
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.1,
        delayChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  const mobileItemVariants = {
    closed: { 
      opacity: 0, 
      y: 20,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      }
    },
    open: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      }
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    const element = document.querySelector(href);
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY,
        behavior: 'smooth',
      });
    }
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navContainerVariants}
      className={`fixed top-0 left-0 w-full z-40 py-4 px-8 transition-all duration-500 ${
        isScrolled
          ? darkMode
            ? 'bg-dark-300/90 backdrop-blur-md shadow-lg'
            : 'bg-light-200/90 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      } ${darkMode ? 'text-white' : 'text-dark-100'}`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.a
          href="#home"
          variants={logoVariants}
          whileHover="hover"
          whileTap="tap"
          className="flex items-center space-x-2 group"
          onClick={(e) => handleNavClick(e, '#home')}
        >
          <motion.img 
            src="/logo.svg" 
            alt="Portfolio Logo" 
            className={`w-8 h-8 ${darkMode ? 'invert' : ''} transition-all duration-300`}
            animate={{ rotate: [0, 360] }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
            }}
          />
          <motion.span 
            className="text-2xl font-bold bg-gradient-to-r from-primary-400 via-secondary-400 to-primary-500 bg-clip-text text-transparent font-poppins"
            animate={{
              backgroundPosition: ["0%", "100%"],
            }}
            transition={{
              duration: 8,
              ease: "linear",
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            Portfolio
          </motion.span>
        </motion.a>

        {/* Desktop Menu */}
        <motion.ul
          className="hidden md:flex space-x-8 items-center"
          variants={navContainerVariants}
        >
          {navItems.map((item) => (
            <motion.li key={item.name} variants={navItemVariants}>
              <motion.a
                href={item.href}
                className={`text-sm font-medium transition-colors duration-300 relative group ${
                  darkMode ? 'text-white hover:text-white' : 'text-dark-100 hover:text-dark-300'
                }`}
                onClick={(e) => handleNavClick(e, item.href)}
                whileHover="hover"
                whileTap="tap"
              >
                {item.name}
                <motion.span 
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-400 to-secondary-400"
                  initial={{ width: "0%" }}
                  whileHover={{ width: "100%" }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 20
                  }}
                />
              </motion.a>
            </motion.li>
          ))}
          <motion.li variants={navItemVariants}>
            <motion.button
              onClick={toggleDarkMode}
              className="p-2 rounded-full transition-all duration-300"
              whileHover={{ 
                scale: 1.1,
                rotate: 180,
              }}
              whileTap={{ scale: 0.9 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 10
              }}
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun className={`w-5 h-5 ${darkMode ? 'text-white' : 'text-primary-300'}`} />
              ) : (
                <Moon className="w-5 h-5 text-dark-100" />
              )}
            </motion.button>
          </motion.li>
        </motion.ul>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <motion.button
            onClick={toggleDarkMode}
            className="p-2 mr-2 rounded-full"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 10
            }}
            aria-label="Toggle dark mode"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={darkMode ? 'sun' : 'moon'}
                initial={{ opacity: 0, rotate: -180 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 180 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 15
                }}
              >
                {darkMode ? (
                  <Sun className={`w-5 h-5 ${darkMode ? 'text-white' : 'text-primary-300'}`} />
                ) : (
                  <Moon className="w-5 h-5 text-dark-100" />
                )}
              </motion.div>
            </AnimatePresence>
          </motion.button>
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 10
            }}
            aria-label="Open mobile menu"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isMobileMenuOpen ? 'close' : 'menu'}
                initial={{ opacity: 0, rotate: -180 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 180 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 15
                }}
              >
                {isMobileMenuOpen ? (
                  <X className={`w-6 h-6 ${darkMode ? 'text-white' : 'text-dark-100'}`} />
                ) : (
                  <Menu className={`w-6 h-6 ${darkMode ? 'text-white' : 'text-dark-100'}`} />
                )}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className={`md:hidden absolute top-full left-0 w-full ${
              darkMode ? 'bg-dark-300/95' : 'bg-light-200/95'
            } backdrop-blur-md shadow-lg p-4`}
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <motion.ul className="flex flex-col space-y-4 py-2">
              {navItems.map((item) => (
                <motion.li 
                  key={item.name}
                  variants={mobileItemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href={item.href}
                    className={`block py-2 text-center text-lg font-medium ${
                      darkMode ? 'text-white hover:text-white' : 'text-dark-100 hover:text-dark-300'
                    }`}
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;