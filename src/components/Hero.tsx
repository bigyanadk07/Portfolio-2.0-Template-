import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, FileDown, ArrowDown, ExternalLink } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      href: 'https://github.com/yourusername',
      label: 'GitHub',
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      href: 'https://linkedin.com/in/yourusername',
      label: 'LinkedIn',
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      href: 'https://twitter.com/yourusername',
      label: 'Twitter',
    },
  ];

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
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }}></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative text-center px-4"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="text-sm font-medium text-primary-400 tracking-wider uppercase">Welcome to my portfolio</span>
        </motion.div>

        <motion.h1 
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-6 gradient-text"
        >
          Bigyan Adhikari
        </motion.h1>

        <motion.h2 
          variants={itemVariants}
          className="text-2xl md:text-3xl text-gray-300 mb-8"
        >
          Web Developer & Programmer
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Passionate about creating beautiful and functional web applications. 
          With expertise in modern web technologies, I bring ideas to life through clean code and intuitive design.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex justify-center space-x-6 mb-12"
        >
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-400 transform hover:scale-110 transition-all duration-300"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
        >
          <a
            href="/path-to-your-cv.pdf"
            className="btn-primary group"
          >
            <span className="flex items-center justify-center gap-2">
              <FileDown className="w-5 h-5 group-hover:animate-bounce" />
              Download CV
              <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </span>
          </a>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="btn-secondary group cursor-pointer"
          >
            <span className="flex items-center justify-center gap-2">
              Contact Me
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </span>
          </Link>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-primary-500/50 rounded-full p-1">
            <div className="w-1.5 h-1.5 bg-primary-500 rounded-full animate-bounce mx-auto"></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;