import { Header } from "../../styles/header.style";
import BrandComponent from "./brand";
import MenuComponent from "./hamburger";
import NavbarBigComponent from "./navbarbig";
import NavbarSmallComponent from "./navbarsmall";

const HeaderSection = () => {
  return (
    <Header.Wrapper>
      <Header.Inner>
        <BrandComponent />
        <MenuComponent />
        <NavbarBigComponent />
        <NavbarSmallComponent />
      </Header.Inner>
    </Header.Wrapper>
  );
};

export default HeaderSection;
