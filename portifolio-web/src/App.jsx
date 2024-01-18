import './App.css';
import Presentation from './components/Presentation/Presentation';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import AboutMe from './components/AboutMe/AboutMe';

// Images
import brand_logo from './assets/images/brand_logo.png';

function App() {
  const isJsDisabled = typeof window === 'undefined' || !('ontouchstart' in window);

  function jsDisabled() {
    alert('Por favor ative o javascript na página ou use um navegador mais moderno');
  }

  return (
    <div className="App">
      <Navbar />
      <Presentation />
      <AboutMe />
      <Projects />
      <Contact />
      <img className="whatsapp" src={brand_logo} alt="Contato pelo Whatsapp" />
      {isJsDisabled && <noscript>{jsDisabled}</noscript>}
    </div>
  );
}

export default App;
