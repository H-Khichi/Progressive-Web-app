import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="about"
    >
      <header className="about-header">
        <motion.h1
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          About This Progressive Web App (PWA)
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Discover how we implemented cutting-edge web technologies to enhance user experience and performance.
        </motion.p>
      </header>

      <section className="about-content">
        <h2>Our Approach</h2>
        <motion.div
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <p>
            We focused on building an app that delivers fast performance, accessibility, and a seamless user experience. Here’s how:
          </p>
          <ul>
            <li>
              <strong>Service Workers:</strong> Leveraged to cache assets and provide offline functionality.
            </li>
            <li>
              <strong>Web App Manifest:</strong> Allows users to install the app and interact with it as if it's a native application.
            </li>
            <li>
              <strong>Lazy Loading & Code Splitting:</strong> Enhances performance by loading components only when they are needed.
            </li>
            <li>
              <strong>Accessibility:</strong> Implemented WCAG standards, ensuring the app is usable by people with disabilities.
            </li>
          </ul>
        </motion.div>
      </section>

      <section className="about-goal">
        <h2>Our Goal</h2>
        <motion.p
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          Our mission was to create a PWA that feels intuitive and fast, yet functions offline with a native app feel. The blend of modern technologies like React, Service Workers, and Framer Motion allowed us to enhance user experience, improve performance, and provide a scalable foundation for future development.
        </motion.p>
      </section>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="about-btn"
      >
        Contact Us
      </motion.button>
    </motion.div>
  );
};

export default About;
