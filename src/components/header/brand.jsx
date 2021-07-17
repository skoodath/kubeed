import { Brand, LogoLink } from "../../styles/header.style";
import logo from "../../assets/images/kubeedlogo.svg";

const BrandComponent = () => {
  return (
    <Brand.Wrapper>
      <LogoLink
        to="home"
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
        role="button"
        tabIndex="0"
      >
        <Brand.ImageSmall src={logo} alt="Kubex logo" />
      </LogoLink>
    </Brand.Wrapper>
  );
};

export default BrandComponent;
