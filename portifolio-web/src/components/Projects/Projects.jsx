// Hooks
import { useState, useEffect } from 'react';

// CSS
import './Projects.css';

// Images
import cellTablet from '../../assets/images/Cell_Tablet.png';

const Projects = () => {
  const [isMobile, setIsMobile] = useState(false);

  const projectsInfo = [
    {
      id: 1,
      purpose: 'Cliente',
      description: 'Site para fazer pedidos em um lanchonete',
      altImage: 'Thumb do projeto de lanchonete',
    },
    {
      id: 2,
      purpose: 'Cliente',
      description: 'Site para destribuição de e-books e audiobooks',
      altImage: 'Thumb do projeto de e-books e audiobooks',
    },
    {
      id: 3,
      purpose: 'Estudo',
      description: 'E-commerce de loja de sapatos',
      altImage: 'Thumb do projeto de loja de sapatos',
    },
    {
      id: 4,
      purpose: 'Estudo',
      description: 'Blog pessoal',
      altImage: 'Thumb do projeto de blog',
    },
  ];

  // Método para checar tamanho da tela e trocar para versão mobile
  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      setIsMobile(windowWidth <= 425);
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="Projects">
      <div className="containerWidth">
        <div
          className={!isMobile ? 'row row-cols-2 flex-wrap' : 'display-flex flex-column flex-wrap'}
        >
          {projectsInfo.map((project) => (
            <div key={project.id} className={!isMobile ? 'col colCss' : 'imgMobile'}>
              <a href="#">
                <img src={cellTablet} alt={project.altImage} />
              </a>
              <h3>{project.purpose}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
