// CSS
import './Contact.css';

//Images
import brand_logo from '../../assets/images/brand_logo.png';

const Contact = () => {
  return (
    <div className="bg-secondary">
      <div className="containerWidth text-center">
        <div className="contact-container">
          <div className="">
            <h2>Contatos</h2>
            <div className=".contacts-ways">
              <a href="#">
                <img src={brand_logo} alt="Link do github" />
              </a>
              <a href="#">
                <img src={brand_logo} alt="Link do linkedin" />
              </a>
              <a href="#">
                <img src={brand_logo} alt="Link do currículo" />
              </a>
            </div>
          </div>
          <div className="">
            <h2>Currículo</h2>
            <a href="#">
              <img src={brand_logo} alt="Link do currículo" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
