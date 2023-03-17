import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Services from './components/Services/Services';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Scrollup from './components/scrollup/Scrollup';


const App = () => {
  return (
    <div>
      <Header />

      <main className='main'>
        <Home /> 
        <About />
        <Skills />
        <Services />
        <Projects />
        <Contact />
      </main>

      <Scrollup />
    </div>
  );
}

export default App;
