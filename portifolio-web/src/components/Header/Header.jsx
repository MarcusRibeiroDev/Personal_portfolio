import { useState, useEffect } from 'react';

//CSS
import './Header.css';

//Images
import brand_logo from '../../assets/images/brand_logo.png';

const Header = () => {
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
                <div className="col d-flex align-content-center justify-content-center ">
                  <ul className="list-unstyled d-flex">
                    <li>
                      <a href="...">Conheça-me</a>
                    </li>
                    <li>
                      <a href="...">Competências</a>
                    </li>
                    <li>
                      <a href="...">Experiência</a>
                    </li>
                    <li className="me-0">
                      <a href="...">Contato</a>
                    </li>
                  </ul>
                </div>
              </>
            )}
            {isMobile && (
              <>
                <div className="col d-flex justify-content-end align-items-center p-0">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarToggleExternalContent"
                    aria-controls="navbarToggleExternalContent"
                    aria-expanded="true"
                    aria-label="Toggle navigation"
                  >
                    <i className="bi bi-list fs-4 "></i>
                  </button>
                </div>
                <ul className="list-unstyled collapse" id="navbarToggleExternalContent">
                  <li>
                    <a href="...">Conheça-me</a>
                  </li>
                  <li>
                    <a href="...">Competências</a>
                  </li>
                  <li>
                    <a href="...">Experiência</a>
                  </li>
                  <li className="me-0">
                    <a href="...">Contato</a>
                  </li>
                </ul>
              </>
            )}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;

// CORRIGIR PARADA DE ELE EMPURRAR CONTEUDO PRA CIMA
