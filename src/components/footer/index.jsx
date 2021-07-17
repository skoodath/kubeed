import { Footer } from "../../styles/footer.style";
import CopyRightComponent from "./copy";
import kubexgrey from "../../assets/images/kubeedgrey.svg";

const FooterComponent = () => {
  return (
    <Footer.Wrapper name="footer">
      <Footer.Inner>
        <Footer.LogoWrapper>
          <Footer.Logo src={kubexgrey} alt="Kubex logo in footer" />
        </Footer.LogoWrapper>
        <CopyRightComponent />
      </Footer.Inner>
    </Footer.Wrapper>
  );
};

export default FooterComponent;
