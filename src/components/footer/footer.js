import { Footer } from '../../styles/footer.style';
import SocialMediaComponent from './social';
import CopyRightComponent from './copy';
import MailListComponent from './mailing';


const FooterComponent = () => {
  return(
    <Footer.Wrapper name='footer'>
      <Footer.Inner>
        <MailListComponent />
        <SocialMediaComponent />
        <CopyRightComponent /> 
      </Footer.Inner>
      
    </Footer.Wrapper>
  )
}

export default FooterComponent;