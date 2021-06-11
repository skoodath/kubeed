import { Landing } from "../../styles/landing.style";
import CtaComponent from "./cta";
import kubexbg from '../../illustrations/kubexbg.svg';


const LandingSection = () => {
  return(
    <Landing.Wrapper name='landing'>
      <Landing.Inner>
        <Landing.Text>
          <Landing.Title>
            <Landing.TitleOne>
              Learn from
            </Landing.TitleOne>
            <Landing.TitleTwo>
              kubernetes experts
            </Landing.TitleTwo>
          </Landing.Title>
          <Landing.Subtitle>
            Master kubernetes from industry experts and advance your career or manage your organization's infrastructure
          </Landing.Subtitle>
          <CtaComponent />
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