import { About } from '../../styles/about.style';
import HeadingComponent from '../sectionheading/sectionheading';


const AboutComponent = () => {
  return(
    <About.Wrapper name='about'>
      <About.Inner>
      <HeadingComponent
        text='About Instructor'
      />
      </About.Inner>
      
    </About.Wrapper>
  )
}

export default AboutComponent;