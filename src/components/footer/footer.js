import { Footer } from '../../styles/footer.style';
import SocialMediaComponent from './social';
import CopyRightComponent from './copy';
import kubexgrey from '../../illustrations/Kubexgrey.svg';



const FooterComponent = () => {
  return(
    <Footer.Wrapper name='footer'>
      <Footer.Inner>
        <Footer.LogoWrapper>
          <Footer.Logo src={kubexgrey} alt='Kubex logo in footer' />
        </Footer.LogoWrapper>
        <SocialMediaComponent />
        <CopyRightComponent /> 
      </Footer.Inner>
      
    </Footer.Wrapper>
  )
}

export default FooterComponent;