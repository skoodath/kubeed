import { Header } from "../../styles/header.style"
import BrandComponent from './brand';
import NavbarComponent from "./navigation";

const HeaderSection = () => {
  return(
    <Header.Wrapper>
      <Header.Inner>
        <BrandComponent />
        <NavbarComponent />
      </Header.Inner>
      
    </Header.Wrapper>
  )
}

export default HeaderSection;