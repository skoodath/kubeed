import { useSpring, animated } from 'react-spring';
import { CtaLink } from '../../styles/landing.style';

const CtaComponent = () => {

  const props = useSpring({ 
    to: { opacity: 1, scale: 1 }, 
    from: { opacity: 0, scale: 0.9 }, delay: 3600, duration: 1000 })

  return(
    <animated.div style={props} >
      <CtaLink
      to="courses"
      spy={true} 
      smooth={true} 
      offset={-100} 
      duration={300}
      role='button'
      >
        Start Learning
      </CtaLink>
    </animated.div>
    
  )
}

export default CtaComponent;