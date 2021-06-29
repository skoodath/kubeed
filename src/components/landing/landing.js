import { Landing } from '../../styles/landing.style';
import CtaComponent from './cta';

const LandingSection = () => {

  return(
    <Landing.Wrapper name='landing'>
      <Landing.Inner>
          <Landing.Text>
              <Landing.TitleOne>Learn Kubernetes</Landing.TitleOne>
              <Landing.TitleTwo>The Easy Way</Landing.TitleTwo>
            <Landing.Subtitle>Be a kubernetes Pro!</Landing.Subtitle>
            <CtaComponent />
          </Landing.Text>
      </Landing.Inner>
    </Landing.Wrapper>
    
  )
}

export default LandingSection;