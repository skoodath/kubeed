import { Landing } from "../../styles/landing.style";
import CtaComponent from "./cta";

const LandingSection = () => {
  return (
    <Landing.Wrapper name="home">
      <Landing.BackgroundLayer>
        <Landing.Inner>
          <Landing.Text>
            <Landing.Subtitle>Be a kubernetes Pro!</Landing.Subtitle>
            <Landing.TitleOne>Learn Kubernetes</Landing.TitleOne>
            <Landing.TitleTwo>The Easy Way</Landing.TitleTwo>
            <CtaComponent />
          </Landing.Text>
        </Landing.Inner>
      </Landing.BackgroundLayer>
    </Landing.Wrapper>
  );
};

export default LandingSection;
