import { Landing } from "../../styles/landing.style";
import kubexbg from '../../illustrations/kubbgnew.svg';
import arrow from '../../illustrations/arrow.svg';


const LandingSection = () => {
  return(
    <Landing.Wrapper name='landing'>
      <Landing.Inner>
        <Landing.Text>
          <Landing.Title>
            <Landing.TitleOne>
              Learn
            </Landing.TitleOne>
            <Landing.TitleTwo>
              kubernetes
            </Landing.TitleTwo>
            <Landing.TitleThree>
              The <Landing.TitleStrike>hard</Landing.TitleStrike> easy
            </Landing.TitleThree>
          </Landing.Title>
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