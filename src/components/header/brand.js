import { Brand, LogoLink } from '../../styles/header.style';

const BrandComponent = () => {
  return(
        <Brand.Wrapper>
          <LogoLink 
            to="landing"
            spy={true} 
            smooth={true} 
            offset={-100} 
            duration={300}

            >
              kubex
            </LogoLink>
        </Brand.Wrapper>
  )
}

export default BrandComponent;