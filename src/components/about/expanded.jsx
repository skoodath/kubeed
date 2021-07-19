import { About } from "../../styles/about.style";

const AboutTextComponent = ({ show }) => {
  return (
    <About.LongTextContainer show={show}>
      <About.LongText>
        Srinath worked as a Systems Architect helping companies across the US
        for over a decade.
      </About.LongText>
      <About.LongText>
        He started KubeEd because of his passion for sharing knowledge and
        experience after moving to India. This lead to creating some of the best
        selling Kubernetes courses that has trained and equipped 60k+
        professionals.
      </About.LongText>
      <About.LongText>
        He has a Masters in Computer Science with Summa Cum Laude from Purdue
        University.
      </About.LongText>
      <About.Connect
        to="connect"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        role="button"
        tabIndex="0"
      >
        Connect with Srinath
      </About.Connect>
    </About.LongTextContainer>
  );
};

export default AboutTextComponent;
