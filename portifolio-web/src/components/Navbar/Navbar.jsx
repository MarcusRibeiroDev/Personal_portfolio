// CSS
import './Navbar.css';

// Hooks
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

// Context
import { StateContext } from '../../Contexts/languagePage';

const Navbar = () => {
  const [isTrue, setIsTrue] = useState(false);
  const { language, setLanguage } = useContext(StateContext);

  const toggleState = () => {
    setIsTrue(!isTrue);
    setLanguage(!isTrue);
  };

  return (
    <header className="containerWidth">
      <div className="d-flex text-center">
        <div className={`toggle-container ${isTrue ? 'true' : ''}`} onClick={toggleState}>
          <div className="toggle-ball"></div>
        </div>
        {!language && <p className="ball-name">PT-BR</p>}
        {language && <p className="ball-name">EN-US</p>}
      </div>
      <nav className="nav navbar">
        <ul className="nav nav-tabs list-unstyled d-flex my-1">
          <li className="nav-item">
            <Link to="/" className="nav-link active custom-a custom-active" aria-current="page">
              Home
            </Link>
          </li>
          <li className="nav-item">
            {!language && (
              <Link to="about" className="nav-link custom-a">
                Sobre mim
              </Link>
            )}
            {language && (
              <Link to="about" className="nav-link custom-a">
                About me
              </Link>
            )}
          </li>
          <li className="nav-item">
            {!language && (
              <Link to="projects" className="nav-link custom-a">
                Experiência
              </Link>
            )}
            {language && (
              <Link to="projects" className="nav-link custom-a">
                Experience
              </Link>
            )}
          </li>
          <li className="nav-item">
            {!language && (
              <Link to="contact" className="nav-link custom-a">
                Contato
              </Link>
            )}
            {language && (
              <Link to="contact" className="nav-link custom-a">
                Contact
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
