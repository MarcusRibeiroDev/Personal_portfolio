import './Projects.css';

//images

import notebookImage from '../../assets/images/Notebook.png';
import tabletImage from '../../assets/images/Tablet.png';
import cellImage from '../../assets/images/Cellphone.png';

const Projects = () => {
  return (
    <div className="Projects">
      <div className="containerWidth">
        <div className="row row-cols-2">
          <div className="col colCss">
            <a href="...">
              <img src={notebookImage} alt="thumb do projeto..." />
            </a>
            <h3>Cliente</h3>
            <p>Site para fazer pedidos em um lanchonete</p>
          </div>
          <div className="col colCss">
            <a href="...">
              <img src={tabletImage} alt="thumb do projeto..." />
            </a>
            <h3>Cliente</h3>
            <p>Site para emular e avaliar jogos retro</p>
          </div>
          <div className="col colCss">
            <a href="...">
              <img src={cellImage} alt="thumb do projeto..." />
            </a>
            <h3>Estudo</h3>
            <p>E-commerce de sapatos</p>
          </div>
          <div className="col colCss">
            <a href="...">
              <img src={notebookImage} alt="thumb do projeto..." />
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
