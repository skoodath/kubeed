import { Landing } from "../../styles/landing.style";
import kubexbg from '../../illustrations/kubbgnew.svg';


const LandingSection = () => {
  return(
    <Landing.Wrapper name='landing'>
      <Landing.Inner>
        <Landing.Text>
          <Landing.Title>
            <Landing.TitleOne>
              Learning
            </Landing.TitleOne>
            <Landing.TitleTwo>
              kubernetes
            </Landing.TitleTwo>
            <Landing.TitleThree>
              made <Landing.TitleStrike>hard</Landing.TitleStrike> easy
            </Landing.TitleThree>
          </Landing.Title>
        </Landing.Text>
        <Landing.Image>
          <img src={kubexbg} alt='background' />
        </Landing.Image>
      </Landing.Inner>
      {/* <ScrollDown
        to="courses"
        spy={true} 
        smooth={true} 
        offset={-100} 
        duration={400}
      >
        <BsChevronCompactDown />
      </ScrollDown> */}
    </Landing.Wrapper>
  )
}

export default LandingSection;