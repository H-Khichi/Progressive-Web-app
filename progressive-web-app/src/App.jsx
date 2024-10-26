import React, { Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import ErrorBoundary from './components/ErrorBoundary'; 
import "./App.css"
const Home = lazy(() => import('./components/Home.jsx')); 
const About = lazy(() => import('./components/About.jsx'));

function App() {
  const location = useLocation();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ErrorBoundary>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </AnimatePresence>
      </ErrorBoundary>
    </Suspense>
  );
}

export default App;
