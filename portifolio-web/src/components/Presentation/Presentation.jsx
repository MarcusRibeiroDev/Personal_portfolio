// CSS
import './Presentation.css';

// Hooks
import { useState, useEffect } from 'react';

const Presentation = () => {
  const [languageVideo, setLanguageVideo] = useState(true);

  const [isMobile, setIsMobile] = useState(false);

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
    <main className="Apresentation">
      <div className="containerWidth">
        <div className="row">
          <div className="col-7 d-flex flex-column">
            <p className="">
              Marcus aqui <span className="animationHi">✌️</span> Saudações
            </p>
            <span>Desenvolvedor</span>
            <span>Full-Stack</span>
          </div>
          <div className="col d-flex justify-content-center align-items-center flex-column ">
            <div>
              <button className="btn btn-info" onClick={() => setLanguageVideo(true)}>
                PT/BR
              </button>
              <button className="btn btn-danger" onClick={() => setLanguageVideo(false)}>
                EN/US
              </button>
            </div>
            {languageVideo && (
              <video controls>
                <source src="seu_video.mp4" type="video/mp4" />
                Seu navegador não suporta o elemento de vídeo.
              </video>
            )}
            {!languageVideo && (
              <video controls>
                <source src="seu_video1.mp4" type="video/mp4" />
                Seu navegador não suporta o elemento de vídeo.
              </video>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Presentation;
