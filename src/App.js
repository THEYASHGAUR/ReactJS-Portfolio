import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';

const App = () => {
  return (
    <div>
      <Header />

      <main className='main'>
        <Home /> 
        <About />
      </main>
    </div>
  );
}

export default App;
