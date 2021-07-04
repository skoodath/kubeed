import { Connect, Email, Linkedin, Youtube } from '../../styles/contact.style';
import HeadingComponent from '../sectionheading/sectionheading';

const ConnectComponent = () => {
  return(
    <Connect.Wrapper>
      <HeadingComponent
        text={`Let's Connect`}
      />
      <Connect.Inner>
        <a href='mailto:srinath@kubex.co' target='_blank' rel="noreferrer">
          <Connect.IconWrapper>
            <Email />
            <Connect.IconText>srinath@kubex.co</Connect.IconText>
          </Connect.IconWrapper>
        </a>
        <a href='https://www.linkedin.com/in/srinathchalla/' target='_blank' rel="noreferrer">
        <Connect.IconWrapper>
          <Linkedin />
          <Connect.IconText>Connect</Connect.IconText>
        </Connect.IconWrapper>
        </a>
        <a href='https://www.youtube.com/user/srinathrchalla1' target='_blank' rel="noreferrer">
          <Connect.IconWrapper>
            <Youtube />
            <Connect.IconText>Subscribe</Connect.IconText>
          </Connect.IconWrapper>
        </a>
        
      </Connect.Inner>      
    </Connect.Wrapper>
  )
}

export default ConnectComponent;