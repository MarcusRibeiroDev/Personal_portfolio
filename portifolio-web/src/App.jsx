import './App.css';
import Presentation from './components/Presentation/Presentation';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';

function App() {
  const isJsDisabled = typeof window === 'undefined' || !('ontouchstart' in window);

  function jsDisabled() {
    alert('Por favor ative o javascript na página ou use um navegador mais moderno');
  }

  return (
    <div className="App">
      <Navbar />
      <Presentation />
      <Projects />

      {isJsDisabled && <noscript>{jsDisabled}</noscript>}
    </div>
  );
}

export default App;
