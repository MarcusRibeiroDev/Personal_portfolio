import './Projects.css';

//images

import cellTablet from '../../assets/images/Cell_Tablet.png';

const Projects = () => {
  return (
    <div className="Projects">
      <div className="containerWidth">
        <h2 className="text-center pb-2 ">Projetos</h2>
        <div className="row row-cols-2">
          <div className="col colCss">
            <a href="...">
              <img src={cellTablet} alt="thumb do projeto..." />
            </a>
            <h3>Cliente</h3>
            <p>Site para fazer pedidos em um lanchonete</p>
          </div>
          <div className="col colCss">
            <a href="...">
              <img src={cellTablet} alt="thumb do projeto..." />
            </a>
            <h3>Cliente</h3>
            <p>Site para emular e avaliar jogos retro</p>
          </div>
          <div className="col colCss">
            <a href="...">
              <img src={cellTablet} alt="thumb do projeto..." />
            </a>
            <h3>Estudo</h3>
            <p>E-commerce de sapatos</p>
          </div>
          <div className="col colCss">
            <a href="...">
              <img src={cellTablet} alt="thumb do projeto..." />
            </a>
            <h3>Estudo</h3>
            <p>Blog pessoal</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
