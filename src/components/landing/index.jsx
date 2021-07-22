import { Landing } from "../../styles/landing.style";
import CtaComponent from "./cta";
import landing from "../../assets/images/landing.png";

const LandingSection = () => {
  return (
    <Landing.Wrapper name="home">
      <Landing.Inner>
        <Landing.Text>
          <Landing.Subtitle>Be a Kubernetes Pro!</Landing.Subtitle>
          <Landing.TitleOne>
            <Landing.TitleSpan1>Learn Kubernetes</Landing.TitleSpan1>
            <Landing.TitleSpan2>The Easy Way</Landing.TitleSpan2>
          </Landing.TitleOne>
          {/* <Landing.TitleTwo>The Easy Way</Landing.TitleTwo> */}
          <CtaComponent />
        </Landing.Text>
        <Landing.BackgroundLayer>
          <img src={landing} alt="Landing page illustration" />
        </Landing.BackgroundLayer>
      </Landing.Inner>
    </Landing.Wrapper>
  );
};

export default LandingSection;
