import { Contact } from '../../styles/contact.style';
import HeadingComponent from '../sectionheading/sectionheading';
import FormComponent from './form';


const ContactComponent = () => {
  return(
    <Contact.Wrapper name='contact'>
      <Contact.Inner>
      <HeadingComponent
        text='Get In Touch'
      />
      <FormComponent />
      </Contact.Inner>
      
    </Contact.Wrapper>
  )
}

export default ContactComponent;