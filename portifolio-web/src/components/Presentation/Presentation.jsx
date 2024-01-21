// CSS
import './Presentation.css';

// Hooks
import { useState, useEffect } from 'react';

const Presentation = () => {
  const [isTrue, setIsTrue] = useState(false);

  const toggleState = () => {
    setIsTrue(!isTrue);
  };

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
      <div className="language-container">
        <p>Inglês</p>
        <div className={`toggle-container ${isTrue ? 'true' : ''}`} onClick={toggleState}>
          <div className="toggle-ball"></div>
        </div>
      </div>
      <div className="containerWidth">
        <div
          className={
            !isMobile
              ? 'd-flex justify-content-around'
              : 'd-flex flex-column justify-content-between align-items-center '
          }
        >
          <div className="d-flex flex-column justify-content-center ">
            <p className="">
              Marcus aqui <span className="animationHi">✌️</span> Saudações
            </p>
            <span>Full-Stack</span>
            <span>Developer</span>
          </div>
          <div className="div-video d-flex flex-column justify-content-center">
            {/* <button className="btn btn-info" onClick={() => setLanguageVideo(true)}>
              PT/BR
            </button>
            <button className="btn btn-danger" onClick={() => setLanguageVideo(false)}>
              EN/US
            </button> */}
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
