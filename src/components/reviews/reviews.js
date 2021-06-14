import { Review } from '../../styles/review.style';
import ReviewCardComponent from './card';
import HeadingComponent from '../sectionheading/sectionheading';


const ReviewComponent = () => {
  return(
    <Review.Wrapper>
      <Review.Inner>
      <HeadingComponent
        text='Testimonials'
      />
      <ReviewCardComponent />
      </Review.Inner>
      
    </Review.Wrapper>
  )
}

export default ReviewComponent;