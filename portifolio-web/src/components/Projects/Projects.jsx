// Hooks
import { useState, useEffect } from 'react';

// CSS
import './Projects.css';

// Images
import cellTablet from '../../assets/images/Cell_Tablet.png';

const Projects = () => {
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
    <div className="Projects">
      <div className="containerWidth">
        <h2 className="text-center pb-2 ">Projetos</h2>
        {!isMobile && (
          <div className="row row-cols-2 flex-wrap">
            <div className="col colCss">
              <a href="#">
                <img src={cellTablet} alt="thumb do projeto#" />
              </a>
              <h3>Cliente</h3>
              <p>Site para fazer pedidos em um lanchonete</p>
            </div>
            <div className="col colCss">
              <a href="#">
                <img src={cellTablet} alt="thumb do projeto#" />
              </a>
              <h3>Cliente</h3>
              <p>Site para emular e avaliar jogos retro</p>
            </div>
            <div className="col colCss">
              <a href="#">
                <img src={cellTablet} alt="thumb do projeto#" />
              </a>
              <h3>Estudo</h3>
              <p>E-commerce de sapatos</p>
            </div>
            <div className="col colCss">
              <a href="#">
                <img src={cellTablet} alt="thumb do projeto#" />
              </a>
              <h3>Estudo</h3>
              <p>Blog pessoal</p>
            </div>
          </div>
        )}

        {isMobile && (
          <div className="display-flex flex-column flex-wrap">
            <div className="imgMobile">
              <a href="#">
                <img src={cellTablet} alt="thumb do projeto#" />
              </a>
              <h3>Cliente</h3>
              <p>Site para fazer pedidos em um lanchonete</p>
            </div>
            <div className="imgMobile">
              <a href="#">
                <img src={cellTablet} alt="thumb do projeto#" />
              </a>
              <h3>Cliente</h3>
              <p>Site para emular e avaliar jogos retro</p>
            </div>
            <div className="imgMobile">
              <a href="#">
                <img src={cellTablet} alt="thumb do projeto#" />
              </a>
              <h3>Estudo</h3>
              <p>E-commerce de sapatos</p>
            </div>
            <div className="imgMobile">
              <a href="#">
                <img src={cellTablet} alt="thumb do projeto#" />
              </a>
              <h3>Estudo</h3>
              <p>Blog pessoal</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
