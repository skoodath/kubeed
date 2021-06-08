import { Review, ScrollUp } from '../../styles/review.style';
import ReviewCardComponent from './card';
import HeadingComponent from '../sectionheading/sectionheading';
import { BsChevronCompactUp } from 'react-icons/bs';


const ReviewComponent = () => {
  return(
    <Review.Wrapper>
      <HeadingComponent
        text='Testimonials'
      />
      <ReviewCardComponent />
      <ScrollUp
        to="landing"
        spy={true} 
        smooth={true} 
        offset={-100} 
        duration={500}
      >
        <BsChevronCompactUp />
      </ScrollUp>
    </Review.Wrapper>
  )
}

export default ReviewComponent;