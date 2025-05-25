import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SkillsProps {
  darkMode: boolean;
}

const SkillBox: React.FC<{ name: string; icon: string; darkMode: boolean }> = ({ name, icon, darkMode }) => {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.05,
        boxShadow: darkMode 
          ? "0 0 20px rgba(99, 102, 241, 0.5)" 
          : "0 0 20px rgba(79, 70, 229, 0.3)"
      }}
      whileTap={{ scale: 0.95 }}
      className={`relative p-6 rounded-xl ${
        darkMode 
          ? 'bg-gray-800 hover:bg-gray-700' 
          : 'bg-white hover:bg-gray-50'
      } shadow-lg transition-all duration-300 flex flex-col items-center justify-center gap-3 group`}
    >
      {/* Glow effect */}
      <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
        darkMode 
          ? 'bg-gradient-to-r from-indigo-500/20 to-purple-500/20' 
          : 'bg-gradient-to-r from-indigo-500/10 to-purple-500/10'
      } blur-sm`} />
      
      {/* Icon container with glow */}
      <div className="relative w-16 h-16 flex items-center justify-center">
        <div className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
          darkMode 
            ? 'bg-indigo-500/20' 
            : 'bg-indigo-500/10'
        } blur-md`} />
        <motion.img 
          src={icon} 
          alt={name} 
          className="w-12 h-12 object-contain relative z-10"
          whileHover={{ 
            filter: "drop-shadow(0 0 8px rgba(99, 102, 241, 0.5))"
          }}
        />
      </div>
      
      {/* Text with subtle animation */}
      <motion.h4 
        className="font-medium text-center relative z-10"
        whileHover={{ 
          color: darkMode ? "#818CF8" : "#4F46E5"
        }}
      >
        {name}
      </motion.h4>
    </motion.div>
  );
};

const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

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

  const programmingSkills = [
    { name: 'Python', icon: './skills/python.svg' },
    { name: 'Java', icon: './skills/Java.svg' },
    { name: 'C', icon: './skills/c.svg' },
  ];

  const webTechSkills = [
    { name: 'HTML5', icon: './skills/HTML5.svg' },
    { name: 'CSS3', icon: './skills/CSS3.svg' },
  ];

  const databaseSkills = [
    { name: 'MySQL', icon: './skills/mysql.svg' },
  ];

  const mlSkills = [
    { name: 'Pandas', icon: './skills/pandas.svg' },
    { name: 'NumPy', icon: './skills/numpy.svg' },
    { name: 'OpenCV', icon: './skills/opencv.svg' },
  ];

  const currentlyLearningSkills = [
    { 
      name: 'Canva', 
      icon: './skills/canva-icon.svg'
    },
    { 
      name: 'Adobe Photoshop', 
      icon: './skills/adobe-photoshop-icon.svg'
    },
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className={`min-h-screen w-full flex flex-col justify-center px-8 py-20 ${
        darkMode ? 'bg-dark-300 text-white' : 'bg-light-200 text-dark-100'
      }`}
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-sm uppercase tracking-wider font-semibold mb-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            My Expertise
          </motion.h2>
          <motion.h3 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Skills & Technologies
          </motion.h3>
          <motion.div variants={itemVariants} className="w-20 h-1 mx-auto bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></motion.div>
        </motion.div>

        <div className="space-y-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="space-y-8"
          >
            <motion.h4 variants={itemVariants} className="text-2xl font-bold flex items-center bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              <span className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white mr-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              Programming Languages
            </motion.h4>
            
            <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {programmingSkills.map((skill, index) => (
                <SkillBox
                  key={index}
                  name={skill.name}
                  icon={skill.icon}
                  darkMode={darkMode}
                />
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="space-y-8"
          >
            <motion.h4 variants={itemVariants} className="text-2xl font-bold flex items-center bg-gradient-to-r from-emerald-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              <span className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center text-white mr-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 15C15.866 15 19 11.866 19 8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8C5 11.866 8.13401 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              Web Technologies
            </motion.h4>
            
            <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {webTechSkills.map((skill, index) => (
                <SkillBox
                  key={index}
                  name={skill.name}
                  icon={skill.icon}
                  darkMode={darkMode}
                />
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="space-y-8"
          >
            <motion.h4 variants={itemVariants} className="text-2xl font-bold flex items-center bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 bg-clip-text text-transparent">
              <span className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-white mr-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 7V17C4 18.1046 4.89543 19 6 19H18C19.1046 19 20 18.1046 20 17V7M4 7H20M4 7L8 3M20 7L16 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              Databases
            </motion.h4>
            
            <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {databaseSkills.map((skill, index) => (
                <SkillBox
                  key={index}
                  name={skill.name}
                  icon={skill.icon}
                  darkMode={darkMode}
                />
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="space-y-8"
          >
            <motion.h4 variants={itemVariants} className="text-2xl font-bold flex items-center bg-gradient-to-r from-rose-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              <span className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white mr-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 15C15.866 15 19 11.866 19 8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8C5 11.866 8.13401 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              Machine Learning & Data Science
            </motion.h4>
            
            <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {mlSkills.map((skill, index) => (
                <SkillBox
                  key={index}
                  name={skill.name}
                  icon={skill.icon}
                  darkMode={darkMode}
                />
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="space-y-8"
          >
            <motion.h4 variants={itemVariants} className="text-2xl font-bold flex items-center bg-gradient-to-r from-amber-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              <span className="w-8 h-8 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center text-white mr-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 15C15.866 15 19 11.866 19 8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8C5 11.866 8.13401 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              Others
            </motion.h4>
            
            <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {currentlyLearningSkills.map((skill, index) => (
                <SkillBox
                  key={index}
                  name={skill.name}
                  icon={skill.icon}
                  darkMode={darkMode}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
