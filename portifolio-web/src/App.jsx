// CSS
import './App.css';

// Components
import AboutMe from './components/AboutMe/AboutMe';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';

// Images
import IconWhatsapp from './assets/images/Icon-Whatsapp.png';

//Hooks
import { useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

// Context
import { StateProvider } from './Contexts/languagePage';

<p className="p-2 m-0">Portifólio Marcus Ribeiro &copy; 2024</p>;

function App() {
  // Ativação tooltips
  useEffect(() => {
    const tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    const tooltipList = tooltipTriggerList.map(
      (tooltipTriggerEl) => new window.bootstrap.Tooltip(tooltipTriggerEl)
    );

    return () => {
      tooltipList.forEach((tooltip) => tooltip.dispose());
    };
  }, []);

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
      <a
        href="#"
        className=""
        data-bs-toggle="tooltip"
        data-bs-placement="left"
        data-bs-title="Tooltip on left"
        id="whatsapp"
      >
        <img src={IconWhatsapp} alt="Contato pelo Whatsapp" />
      </a>
    </div>
  );
}

export default App;
