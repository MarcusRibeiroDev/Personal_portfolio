import './App.css';
import Presentation from './components/Presentation/Presentation';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Presentation />
      <Projects />
    </div>
  );
}

export default App;
