import { Landing, ScrollDown } from "../../styles/landing.style";
import { BsChevronCompactDown } from 'react-icons/bs';


const LandingSection = () => {
  return(
    <Landing.Wrapper name='landing'>
      <ScrollDown
        to="courses"
        spy={true} 
        smooth={true} 
        offset={-100} 
        duration={400}
      >
        <BsChevronCompactDown />
      </ScrollDown>
    </Landing.Wrapper>
  )
}

export default LandingSection;