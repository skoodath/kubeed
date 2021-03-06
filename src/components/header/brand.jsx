import { Brand, LogoLink } from "../../styles/header.style";
import logo from "../../assets/images/kubeedlogo.svg";

const BrandComponent = () => {
  return (
    <Brand.Wrapper>
      <LogoLink
        to="home"
        spy={true}
        smooth={true}
        offset={-75}
        duration={100}
        role="button"
        tabIndex="0"
      >
        <Brand.ImageSmall src={logo} alt="KubeEd logo" />
      </LogoLink>
    </Brand.Wrapper>
  );
};

export default BrandComponent;
