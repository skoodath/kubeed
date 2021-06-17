import { Brand, LogoLink } from '../../styles/header.style';
//import logo from '../../illustrations/kubexhorizontal.png';

const BrandComponent = () => {
  return(
        <Brand.Wrapper>
          <LogoLink 
            to="landing"
            spy={true} 
            smooth={true} 
            offset={-100} 
            duration={300}
            tabIndex='0'
            >
              Kubex
            </LogoLink>
        </Brand.Wrapper>
  )
}

export default BrandComponent;