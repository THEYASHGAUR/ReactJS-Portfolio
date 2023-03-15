import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Services from './components/Services/Services';


const App = () => {
  return (
    <div>
      <Header />

      <main className='main'>
        <Home /> 
        <About />
        <Skills />
        <Services />
      </main>
    </div>
  );
}

export default App;
