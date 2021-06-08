import { Footer } from '../../styles/footer.style';
import SocialMediaComponent from './social';
import CopyRightComponent from './copy';
import MailListComponent from './mailing';


const FooterComponent = () => {
  return(
    <Footer.Wrapper name='footer'>
      <MailListComponent />
      <SocialMediaComponent />
      <CopyRightComponent /> 
    </Footer.Wrapper>
  )
}

export default FooterComponent;