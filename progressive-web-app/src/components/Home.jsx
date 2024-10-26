import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="home"
    >
      <header className="home-header">
        <motion.h1
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          Welcome to Our Progressive Web Application!
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Experience a modern web app with offline capabilities, smooth transitions, and optimized performance.
        </motion.p>
      </header>

      <section className="home-content">
        <h2>Key Features</h2>
        <motion.ul
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <li>
            <strong>Offline Mode:</strong> Seamlessly access content even without an internet connection.
          </li>
          <li>
            <strong>Smooth Animations:</strong> Enjoy delightful transitions and UI interactions.
          </li>
          <li>
            <strong>Fast Loading:</strong> Thanks to code splitting and lazy loading, components load as needed.
          </li>
          <li>
            <strong>Accessible:</strong> Built with inclusivity in mind, adhering to WCAG standards.
          </li>
        </motion.ul>
      </section>

      <section className="home-details">
        <h2>Why Choose a PWA?</h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1.2 }}
        >
          Progressive Web Apps (PWAs) provide a native app-like experience directly through the browser. Whether you're on desktop or mobile, PWAs enhance usability, speed, and interactivity, making it easier for users to engage with content.
        </motion.p>

        <motion.img
          src="https://www.matridtech.net/wp-content/uploads/2019/06/progressive-web-app.jpg"
          alt="PWA Diagram"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />
      </section>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="explore-btn"
      >
        Explore More
      </motion.button>
    </motion.div>
  );
};

export default Home;
