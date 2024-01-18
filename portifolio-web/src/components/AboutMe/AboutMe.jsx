// CSS
import './AboutMe.css';

//Images
import brand_logo from '../../assets/images/brand_logo.png';

const AboutMe = () => {
  return (
    <div className="AboutMe bg-secondary">
      <div className="containerWidth text-center ">
        <div className="d-flex text-start ">
          <img src={brand_logo} alt="" />
          <p>
            Lorem Ipsum je demonstrativní výplňový text používaný v tiskařském a knihařském
            průmyslu. Lorem Ipsum je považováno za standard v této oblasti už od začátku 16.
            století, kdy dnes neznámý tiskař vzal kusy textu a na jejich základě vytvořil speciální
            vzorovou knihu. Jeho odkaz nevydržel pouze pět století, on přežil i nástup elektronické
            sazby v podstatě beze změny. Nejvíce popularizováno bylo Lorem Ipsum v šedesátých letech
            20. století, kdy byly vydávány speciální vzorníky s jeho pasážemi a později pak díky
            počítačovým DTP programům jako Aldus PageMaker.
          </p>
        </div>
        <h2>Conhecimentos</h2>
        <div className="d-flex justify-content-center">
          <img src={brand_logo} alt="" />
          <img src={brand_logo} alt="" />
          <img src={brand_logo} alt="" />
          <img src={brand_logo} alt="" />
          <img src={brand_logo} alt="" />
          <img src={brand_logo} alt="" />
          <img src={brand_logo} alt="" />
          <img src={brand_logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
