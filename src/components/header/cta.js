import { useState } from 'react';
import { Links} from '../../styles/header.style';

const CtaComponent = () => {

  const [bg, setBg] = useState(null);

  const changeBg = () => {
    setBg(!bg);
    console.log(bg);
  }

  return(
    <Links
      to="courses"
      spy={true} 
      smooth={true} 
      offset={30} 
      duration={300}
      role='button'
      onMouseEnter={changeBg}
      onMouseLeave={changeBg}
      >
        Courses
      </Links>
  )
}

export default CtaComponent;