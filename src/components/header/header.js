import { Header } from "../../styles/header.style"
import BrandComponent from './brand';
import NavbarComponent from "./navigation";

const HeaderSection = () => {
  return(
    <Header.Wrapper>
      <BrandComponent />
      <NavbarComponent />
    </Header.Wrapper>
  )
}

export default HeaderSection;