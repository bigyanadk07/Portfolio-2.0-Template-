import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import OngoingProjects from './components/OngoingProjects';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <div className="bg-background text-white min-h-screen cursor-none">
      <CustomCursor />
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <Hero />
        <Projects />
        <Skills />
        <OngoingProjects />
        <Contact />
      </main>
    </div>
  );
}

export default App;