import './App.css';
import React , {useEffect, useState} from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Services from './components/Services/Services';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Scrollup from './components/scrollup/Scrollup';
import Footer from './components/Footer/Footer';


const App = () => {
  const [darkMode, setDarkMode] = useState("light-theme");
  

  const toggleDarkMode = () => {
    // setDarkMode(!darkMode);
    console.log("button clicked");
    if(darkMode === "dark-theme"){
      setDarkMode("light-theme")
    }
    else{
      setDarkMode("dark-theme");
    }

    
  };
  useEffect(() => {
    document.body.className = darkMode;
  } , [darkMode]);
  return (
    <div  className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Contact />
        <Footer />
      </main>

      <Scrollup />
    </div>
  );
}

export default App;
