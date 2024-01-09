import './App.css';
import Apresentation from './components/Apresentation/Apresentation';
import Header from './components/Header/Header';

// Bootstrap JS and CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Apresentation />
    </div>
  );
}

export default App;
