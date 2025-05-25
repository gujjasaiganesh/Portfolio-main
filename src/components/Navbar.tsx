import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
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
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-40 py-4 px-8 transition-all duration-300 ${
        isScrolled
          ? darkMode
            ? 'bg-dark-300/90 backdrop-blur-md shadow-lg'
            : 'bg-light-200/90 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      } text-dark-100`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.a
          href="#home"
          className="flex items-center space-x-2 group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={(e) => handleNavClick(e, '#home')}
        >
          <img 
            src="/logo.svg" 
            alt="Portfolio Logo" 
            className={`w-8 h-8 ${darkMode ? 'invert' : ''} transition-all duration-300`}
          />
          <span className="text-2xl font-bold bg-gradient-to-r from-primary-400 via-secondary-400 to-primary-500 bg-clip-text text-transparent font-poppins">
            Portfolio
          </span>
        </motion.a>

        {/* Desktop Menu */}
        <motion.ul
          className="hidden md:flex space-x-8 items-center"
          variants={navContainerVariants}
          initial="hidden"
          animate="visible"
        >
          {navItems.map((item) => (
            <motion.li key={item.name} variants={navItemVariants}>
              <a
                href={item.href}
                className={`text-sm font-medium transition-colors duration-300 relative group text-dark-100`}
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-400 to-secondary-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </motion.li>
          ))}
          <motion.li variants={navItemVariants}>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full transition-colors duration-300"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-primary-300" />
              ) : (
                <Moon className="w-5 h-5 text-dark-100" />
              )}
            </button>
          </motion.li>
        </motion.ul>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button
            onClick={toggleDarkMode}
            className="p-2 mr-2 rounded-full transition-colors duration-300"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-primary-300" />
            ) : (
              <Moon className="w-5 h-5 text-dark-100" />
            )}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg"
            aria-label="Open mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${darkMode ? 'text-light-100' : 'text-dark-100'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${darkMode ? 'text-light-100' : 'text-dark-100'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`md:hidden absolute top-full left-0 w-full ${
          darkMode ? 'bg-dark-300/95' : 'bg-light-200/95'
        } backdrop-blur-md shadow-lg p-4 text-dark-100`}
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isMobileMenuOpen ? 'auto' : 0,
          opacity: isMobileMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        style={{ overflow: 'hidden' }}
      >
        <ul className="flex flex-col space-y-4 py-2">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className={`block py-2 text-center text-lg font-medium text-dark-100`}
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;