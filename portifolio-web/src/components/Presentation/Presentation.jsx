import './Presentation.css';

//Images
import brand_logo from '../../assets/images/brand_logo.png';
import { useState } from 'react';

const Presentation = () => {
  const [languageVideo, setLanguageVideo] = useState(true);

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
          {/* <div className="d-flex container-subtitles">
            <div className="container-images">
              <a href="...">
                <img src={brand_logo} alt="Link do github" />
              </a>
              <a href="...">
                <img src={brand_logo} alt="Link do linkedin" />
              </a>
              <a href="...">
                <img src={brand_logo} alt="Link do currículo" />
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </main>
  );
};

export default Presentation;
