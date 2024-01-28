// CSS
import './Home.css';

// Hooks
import { useContext } from 'react';

// Context
import { StateContext } from '../../Contexts/languagePage';

const Home = () => {
  const { language } = useContext(StateContext);

  return (
    <main className="Home containerWidth">
      {!language && (
        <div className="containerHome ">
          <div className="d-flex flex-column justify-content-start col-7">
            <p className="">
              Marcus aqui <span className="animationHi">✌️</span> Saudações
            </p>
            <span>Desenvolvedor</span>
            <span className=" mb-5 ">Full-Stack</span>
            <p className=" w-100 ">
              Oi sou um programador full stack de 21 anos, apaixonado por tecnologia e atualmente
              cursando Ciência da Computação. Dê uma olhada no meu portifólio para conhecer mais
              sobre mim e meu trabalho!
            </p>
          </div>
          <video controls className="">
            <source src="seu_video.mp4" type="video/mp4" />
            Seu navegador não suporta o elemento de vídeo.
          </video>
        </div>
      )}
      {language && (
        <div className="containerHome ">
          <div className="d-flex flex-column justify-content-start col-7">
            <p className="">
              Here is Marcus <span className="animationHi">✌️</span> Nice to meet you!
            </p>
            <span>Full-Stack</span>
            <span className=" mb-5 ">Developer</span>
            <p className=" w-100 ">
              Hi, I am a 21-year-old full stack programmer, passionate about technology and
              currently studying Computer Science. Take a look at my portfolio to find out more
              about me and my work!
            </p>
          </div>
          <video controls className="">
            <source src="seu_video.mp4" type="video/mp4" />
            Your browser does not support the video element..
          </video>
        </div>
      )}
    </main>
  );
};

export default Home;
