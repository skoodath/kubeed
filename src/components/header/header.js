import { useSpring } from 'react-spring';
import { Header } from '../../styles/header.style';
import BrandComponent from './brand';
import NavbarComponent from "./navigation";


const HeaderSection = () => {

  const props = useSpring({ to: { y: 0 }, from: { y: -100 }, delay: 3200 })
  
  return(
    <Header.Wrapper style={props}>
      <Header.Inner>
        <BrandComponent />
        <NavbarComponent />
      </Header.Inner>
      
    </Header.Wrapper>
  )
}

export default HeaderSection;