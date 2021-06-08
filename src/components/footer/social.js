import { Social } from '../../styles/footer.style';
import { FaFacebookSquare, FaYoutubeSquare, FaInstagramSquare } from 'react-icons/fa';


const SocialMediaComponent = () => {
  return(
    <Social.Wrapper>
      <FaFacebookSquare />
      <FaYoutubeSquare />
      <FaInstagramSquare />
    </Social.Wrapper>
  )
}

export default SocialMediaComponent;