import { Contact } from '../../styles/contact.style';
import ConnectComponent from './form';

const ContactComponent = () => {
  return(
    <Contact.Wrapper name='connect'>
      <Contact.Inner>
        <ConnectComponent />
      </Contact.Inner>
      
    </Contact.Wrapper>
  )
}

export default ContactComponent;