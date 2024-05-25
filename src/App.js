// src/App.js
import React from 'react';
import { useTheme, ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
// import ProjectForm from './components/ProjectForm/ProjectForm';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';
import './App.css';

const AppContent = () => {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <Navbar />
      <main>
        <section id="home"><Home /></section>
        <section id="projects">
          <Projects />
          {/* <ProjectForm /> */}
        </section>
        <section id="contacts"><Contacts /></section>
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
