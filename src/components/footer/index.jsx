import { Footer } from "../../styles/footer.style";
import CopyRightComponent from "./copy";
import kubexfooter from "../../assets/images/footer.svg";

const FooterComponent = () => {
  return (
    <Footer.Wrapper name="footer">
      <Footer.Inner>
        <Footer.LogoWrapper>
          <Footer.Logo src={kubexfooter} alt="Kubex logo in footer" />
        </Footer.LogoWrapper>
        <CopyRightComponent />
      </Footer.Inner>
    </Footer.Wrapper>
  );
};

export default FooterComponent;
