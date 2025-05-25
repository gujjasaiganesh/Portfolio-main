import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="about"
      ref={ref}
      className={`min-h-screen w-full flex items-center px-8 py-20 ${
        darkMode ? 'bg-dark-300 text-white' : 'bg-light-200 text-dark-100'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-primary-500 via-secondary-500 to-primary-400 opacity-20"
                animate={{
                  background: [
                    'linear-gradient(to top right, var(--primary-500), var(--secondary-500), var(--primary-400))',
                    'linear-gradient(to bottom right, var(--primary-400), var(--secondary-400), var(--primary-500))',
                    'linear-gradient(to top left, var(--secondary-500), var(--primary-500), var(--secondary-400))',
                    'linear-gradient(to top right, var(--primary-500), var(--secondary-500), var(--primary-400))',
                  ],
                }}
                transition={{ duration: 10, repeat: Infinity }}
              />
              
              <img
                src="./SaiGanesh.jpg"
                alt="Gujja Sai Ganesh"
                className="relative z-10 w-full aspect-square object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            <motion.div
              className="absolute -bottom-6 -left-6 w-64 h-64 rounded-full border-8 border-secondary-500/20"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ zIndex: -1 }}
            />
            
            <motion.div
              className="absolute -top-6 -right-6 w-40 h-40 rounded-full border-8 border-primary-500/20"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 4, delay: 1, repeat: Infinity }}
              style={{ zIndex: -1 }}
            />
          </motion.div>
          
          <div>
            <motion.div variants={itemVariants} className="mb-6">
              <h2 className="text-sm uppercase tracking-wider font-semibold mb-2 bg-gradient-to-r from-primary-400 via-secondary-400 to-primary-500 bg-clip-text text-transparent">
                About Me
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary-400 via-secondary-400 to-primary-500 bg-clip-text text-transparent">
                AI/ML Student & Developer
              </h3>
              <div className="w-20 h-1 bg-gradient-to-r from-primary-400 via-secondary-400 to-primary-500"></div>
            </motion.div>
            
            <motion.p variants={itemVariants} className="text-lg mb-6 leading-relaxed">
              I am a curious and motivated AI/ML student at Sreyas Institute of Engineering and Technology. I enjoy learning about machine learning and software development and like to build smart, useful systems that can grow and help many people.
            </motion.p>
            
            <motion.p variants={itemVariants} className="text-lg mb-8 leading-relaxed">
              I am interested in making AI solutions and easy-to-use web applications. Besides technology, I work as a freelance video editor for an Instagram fitness influencer, making fun and interesting Reels and fitness videos. I like working with others and coming up with new ideas, and I want to make a positive impact through my work.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <div className={`px-4 py-2 rounded-lg ${
                darkMode ? 'bg-dark-200' : 'bg-light-300'
              } shadow-md`}>
                <p className="text-xl font-bold text-primary-400">7.2</p>
                <p className="text-sm">Current CGPA</p>
              </div>
              
              <div className={`px-4 py-2 rounded-lg ${
                darkMode ? 'bg-dark-200' : 'bg-light-300'
              } shadow-md`}>
                <p className="text-xl font-bold text-secondary-400">3</p>
                <p className="text-sm">Projects</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-8">
              <a
                href="./gujjasaiganesh_resume.pdf"
                download="gujjasaiganesh_resume.pdf"
                className={`inline-flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 bg-gradient-to-r from-primary-500 to-secondary-500 text-white hover:shadow-lg hover:shadow-primary-500/20`}
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
