// Hooks
import { useState, useEffect } from 'react';

// CSS
import './Navbar.css';

// Images
import brand_logo from '../../assets/images/brand_logo.png';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      setIsMobile(windowWidth <= 425); // Considerando 768 pixels como largura para tela de celular, ajuste conforme necessário
    };

    // Adiciona um ouvinte de evento para redimensionamento da tela
    window.addEventListener('resize', handleResize);

    // Chama a função para verificar o tamanho da tela quando o componente é montado
    handleResize();

    // Remove o ouvinte de evento ao desmontar o componente
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // O segundo argumento vazio garante que o efeito só seja executado uma vez durante a montagem

  return (
    <>
      <header className="header-component bg-secondary">
        <div className="containerWidth">
          <nav className="row">
            <div className="col d-flex align-content-center justify-content-start">
              <a href="...">
                <img src={brand_logo} alt="imagem que leva a home" className="img-styles" />
              </a>
            </div>
            {!isMobile && (
              <>
                <div className="col d-flex align-items-center justify-content-center">
                  <ul className="list-unstyled d-flex">
                    <li>
                      <a href="#">Competências</a>
                    </li>
                    <li>
                      <a href="#">Experiência</a>
                    </li>
                    <li className="me-0">
                      <a href="#">Contato</a>
                    </li>
                  </ul>
                </div>
              </>
            )}
            {isMobile && (
              <>
                <div className="col d-flex justify-content-end align-items-center p-0">
                  <button
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasExample"
                    aria-controls="offcanvasExample"
                  >
                    OFFCANVAS
                  </button>
                </div>
                <div
                  className="offcanvas offcanvas-start"
                  tabIndex="-1"
                  id="offcanvasExample"
                  aria-labelledby="offcanvasExampleLabel"
                >
                  <ol className="offcanvas-body">
                    <li>
                      <a href="#">Competências</a>
                    </li>
                    <li>
                      <a href="#">Experiência</a>
                    </li>
                    <li className="me-0">
                      <a href="#">Contato</a>
                    </li>
                  </ol>
                </div>
              </>
            )}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
