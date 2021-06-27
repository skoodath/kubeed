import { Landing } from '../../styles/landing.style';
import CtaComponent from './cta';
import Typist from 'react-typist';
import { config, useSpring} from 'react-spring';

const LandingSection = () => {

  const props = useSpring({ 
    to: { opacity: 1, scale: 1 }, 
    from: { opacity: 0, scale: 0.9 }, 
    delay: 3500,
    config: config.stiff
  })

  return(
    <Landing.Wrapper name='landing'>
      <Landing.Inner>
          <Landing.Text>
            <Typist
              className='mytypist'
              avgTypingDelay = {50}
              cursor= {{
                show: false,
                hideWhenDone: true
              }}
              >
              <Typist.Delay ms={600} />
              <Landing.TitleOne>Learn kubernetes</Landing.TitleOne>
              <Landing.TitleTwo>The Easy Way</Landing.TitleTwo>
            </Typist>
            <Landing.Subtitle style={props}>Be a kubernetes Pro!</Landing.Subtitle>
            <CtaComponent />
          </Landing.Text>
      </Landing.Inner>
    </Landing.Wrapper>
    
  )
}

export default LandingSection;