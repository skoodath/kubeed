import { Header } from '../../styles/header.style';
import BrandComponent from './brand';
import NavbarComponent from "./navigation";
import CtaComponent from './cta';

const HeaderSection = () => {
  
  return(
    <Header.Wrapper>
      <Header.Inner>
        <BrandComponent />
        <NavbarComponent />
        <CtaComponent />
      </Header.Inner>
      
    </Header.Wrapper>
  )
}

export default HeaderSection;