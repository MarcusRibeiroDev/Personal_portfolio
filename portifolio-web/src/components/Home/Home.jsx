// CSS
import './Home.css';

// Hooks
//import { useState, useEffect } from 'react';

const Presentation = () => {
  // Método para checar tamanho da tela e trocar para versão mobile
  /*
  const [isMobile, setIsMobile] = useState(false);
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
  }, []);*/

  return (
    <main className="Home containerWidth">
      <div className="d-flex justify-content-around">
        <div className="d-flex flex-column justify-content-center ">
          <p className="">
            Marcus aqui <span className="animationHi">✌️</span> Saudações
          </p>
          <span>Full-Stack</span>
          <span>Developer</span>
        </div>
        <div className="div-video d-flex flex-column justify-content-center">
          <video controls>
            <source src="seu_video.mp4" type="video/mp4" />
            Seu navegador não suporta o elemento de vídeo.
          </video>
        </div>
      </div>
    </main>
  );
};

export default Presentation;
