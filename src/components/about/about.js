import { About } from '../../styles/about.style';
import srinath from '../../illustrations/srinath.jpg';
import { useState } from 'react';
import HeadingComponent from '../sectionheading/sectionheading';
import AboutTextComponent from './expanded';


const AboutComponent = () => {

  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  }

  return(
    <>
      
      <About.Wrapper name='about'>
      <HeadingComponent
        text={'About Instructor'}
      />
        <About.Inner>
        
          <About.ImageWrapper>
            <About.Image src={srinath} alt={'Profile of Srinath'} title='know more' />
          </About.ImageWrapper>
          <About.ShortText>
            Hi, I am <b>Srinath Challa</b>. I am the founder and trainer at <b>Kubex</b>.
          </About.ShortText>
          {!show && <About.PlusButton onClick={handleShow} />}
          {show && <About.MinusButton onClick={handleShow} />}
          <AboutTextComponent show={show} />
        </About.Inner>
      </About.Wrapper>
    </>
  )
}

export default AboutComponent;