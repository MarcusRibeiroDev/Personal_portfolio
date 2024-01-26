// CSS
import './App.css';

// Components
import AboutMe from './components/AboutMe/AboutMe';
import Contact from './components/Contact/Contact';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';

// Images
import IconWhatsapp from './assets/images/Icon-Whatsapp.png';

//Hooks
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { StateProvider } from './Contexts/languagePage';

<p className="p-2 m-0">Portifólio Marcus Ribeiro &copy; 2024</p>;

function App() {
  return (
    <div>
      <StateProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<AboutMe />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
          <Footer />
        </Router>
      </StateProvider>
      <img id="whatsapp" src={IconWhatsapp} alt="Contato pelo Whatsapp" />
    </div>
  );
}

export default App;
