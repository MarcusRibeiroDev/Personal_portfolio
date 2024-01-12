import './Apresentation.css';

//Images
import brand_logo from '../../assets/images/brand_logo.png';

const Apresentation = () => {
  return (
    <main className="Apresentation">
      <div className="containerWidth">
        <div className="container-main">
          <p className="">Marcus aqui✌️ Saudações</p>
          <span>Desenvolvedor</span>
          <div className="d-flex">
            <span>Full-Stack</span>
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
          </div>
        </div>
      </div>
    </main>
  );
};

export default Apresentation;
