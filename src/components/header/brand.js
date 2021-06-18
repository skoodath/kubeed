import { Brand, LogoLink } from '../../styles/header.style';
import logowhite from '../../illustrations/logowhite.png';
import logoblack from '../../illustrations/logoblack.png';

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
              <Brand.ImageLarge src={logowhite} alt='Kubex logo' />
              <Brand.ImageSmall src={logoblack} alt='Kubex logo' />
            </LogoLink>
        </Brand.Wrapper>
  )
}

export default BrandComponent;