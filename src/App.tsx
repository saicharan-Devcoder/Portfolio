import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience/Experience';
import Metrics from './components/Metrics/Metrics';
import Projects from './components/Projects/Projects';
import Contributions from './components/Contributions/Contributions';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Metrics />
      <Projects />
      <Contributions />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;