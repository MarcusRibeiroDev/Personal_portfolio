// CSS
import './Home.css';

const Home = () => {
  return (
    <main className="Home containerWidth">
      <div className="containerHome">
        <div className="d-flex flex-column justify-content-start col-7">
          <p className="">
            Marcus aqui <span className="animationHi">✌️</span> Saudações
          </p>
          <span>Desenvolvedor</span>
          <span className=" mb-5 ">Full-Stack</span>
          <p className=" w-100 ">
            Oi sou um programador full stack de 21 anos, apaixonado por tecnologia e atualmente
            cursando Ciência da Computação. Dê uma olhada no meu portifólio para conhecer mais sobre
            mim e meu trabalho!
          </p>
        </div>
        <video controls className="">
          <source src="seu_video.mp4" type="video/mp4" />
          Seu navegador não suporta o elemento de vídeo.
        </video>
      </div>
    </main>
  );
};

export default Home;
