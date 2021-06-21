import { Landing } from "../../styles/landing.style";
import kubexbg from '../../illustrations/kubbgnew.svg';
import arrow from '../../illustrations/arrow.svg';


const LandingSection = () => {
  return(
    <Landing.Wrapper name='landing'>
      <Landing.Inner>
        <Landing.Text>
          <Landing.TitleOne>
            Learn
          </Landing.TitleOne>
          <Landing.TitleOne>
            Kubernetes
          </Landing.TitleOne>
          <Landing.TitleOne>
            The <Landing.TitleStrike>Hard</Landing.TitleStrike> Easy
          </Landing.TitleOne>
          <Landing.TitleOne>
            Way
          </Landing.TitleOne>
          <Landing.Pointer src={arrow} alt='pointer arrow above subtitle' />
          <Landing.Subtitle>Be a kubernetes Pro!</Landing.Subtitle>
        </Landing.Text>
        <Landing.Image>
          <img src={kubexbg} alt='background' />
        </Landing.Image>
      </Landing.Inner>
    </Landing.Wrapper>
    
  )
}

export default LandingSection;