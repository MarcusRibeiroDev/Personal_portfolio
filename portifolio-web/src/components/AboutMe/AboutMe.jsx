// CSS
import './AboutMe.css';

//Images
import BsIcon from '../../assets/images/BS-Icon.png';
import cssIcon from '../../assets/images/CSS-Icon.png';
import FirebaseIcon from '../../assets/images/Firebase-Icon.png';
import GitIcon from '../../assets/images/Git-Icon.png';
import htmlIcon from '../../assets/images/HTML-Icon.png';
import jsIcon from '../../assets/images/JS-Icon.png';
import photo from '../../assets/images/Marcus.jpg';
import reactIcon from '../../assets/images/React-Icon.png';
import TypeIcon from '../../assets/images/Typescript-Icon.png';

// Hooks
import { useContext } from 'react';

// Context
import { StateContext } from '../../Contexts/languagePage';

const AboutMe = () => {
  const { language } = useContext(StateContext);

  return (
    <div className="AboutMe">
      <div className="containerWidth text-center">
        <div className="me-photo">
          <img src={photo} alt="" />
          {!language && (
            <p>
              Olá! Eu sou Marcus Ribeiro, um estudante dedicado de 21 anos, atualmente residindo em
              Itu/SP e cursando o 5º semestre de Ciência da Computação. Sou autodidata e
              disciplinado, sempre em busca de aprimorar meus conhecimentos em programação e na
              resolução de problemas. No campo da programação, dei meus primeiros passos no
              front-end, trabalhando com HTML, CSS, JavaScript e React para criar interfaces
              interativas, responsivas e esteticamente agradáveis.
              <br />
              <br />
              Desenvolvi uma sólida lógica de programação e continuo expandindo meu domínio nesse
              campo. Além disso, busco constantemente melhorar meu inglês, atingindo um nível
              intermediário-avançado, conforme destacado pelos feedbacks positivos de professores no
              Cambly.
              <br />
              <br />
              Colaborei em projetos pessoais e em parceria com clientes, incluindo trabalhos em
              equipe com meu irmão, onde demonstramos proficiência em Git e eficácia na resolução de
              desafios colaborativos. Estou entusiasmado para aplicar meu conhecimento e paixão pela
              programação, contribuindo de forma positiva em um ambiente profissional. Sou
              adaptável, resiliente e sempre pronto para enfrentar novos desafios.
            </p>
          )}
          {language && (
            <p>
              Hello! I am Marcus Ribeiro, a 21 year old dedicated student, currently residing in
              Itu/SP and studying the 5th semester of Computer Science. I am self-taught and
              disciplined, always looking to improve my knowledge in programming and Problem
              solving. In the field of programming, I took my first steps in front-end, working with
              HTML, CSS, JavaScript and React to create interfaces interactive, responsive and
              aesthetically pleasing.
              <br />
              <br />
              I developed a solid programming logic and continue to expand my mastery in this field.
              Furthermore, I constantly seek to improve my English, reaching a level
              intermediate-advanced, as highlighted by positive feedback from teachers in the
              Cambly.
              <br />
              <br />I collaborated on personal projects and in partnership with clients, including
              work on team with my brother, where we demonstrated proficiency in Git and
              effectiveness in resolving collaborative challenges. I am excited to apply my
              knowledge and passion to programming, contributing positively in a professional
              environment. I am adaptable, resilient and always ready to face new challenges.
            </p>
          )}
        </div>
        {!language && <h2>Conhecimentos</h2>}
        {language && <h2>Skills</h2>}
        <div className="d-flex justify-content-center">
          <img src={htmlIcon} alt="" />
          <img src={cssIcon} alt="" />
          <img src={jsIcon} alt="" />
          <img src={reactIcon} alt="" />
          <img src={BsIcon} alt="" />
          <img src={FirebaseIcon} alt="" />
          <img src={TypeIcon} alt="" />
          <img src={GitIcon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
