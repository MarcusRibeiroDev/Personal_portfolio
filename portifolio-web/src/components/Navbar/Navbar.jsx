// CSS
import './Navbar.css';

// Hooks
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import { StateContext } from '../../Contexts/languagePage';

const Navbar = () => {
  const [isTrue, setIsTrue] = useState(false);
  const { language, setLanguage } = useContext(StateContext);

  const toggleState = () => {
    setIsTrue(!isTrue);
    setLanguage(!isTrue);
  };

  console.log(language);
  console.log(isTrue);

  return (
    <header className="containerWidth">
      <div className={`toggle-container ${isTrue ? 'true' : ''}`} onClick={toggleState}>
        <div className="toggle-ball"></div>
      </div>
      <nav className="nav navbar">
        <ul className="nav nav-tabs list-unstyled d-flex my-1">
          <li className="nav-item">
            <Link to="/" className="nav-link active custom-a custom-active" aria-current="page">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="about" className="nav-link custom-a">
              Sobre mim
            </Link>
          </li>
          <li className="nav-item">
            <Link to="projects" className="nav-link custom-a">
              Experiência
            </Link>
          </li>
          <li className="nav-item">
            <Link to="contact" className="nav-link custom-a">
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
