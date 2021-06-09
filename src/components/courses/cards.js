import { Card } from '../../styles/course.style';
import { FaStar, FaStarHalf} from 'react-icons/fa';
import kubernetes from '../../illustrations/kubernetes-icon-white.png';

const CourseCardComponent = () => {
  return(
    <Card.Wrapper>
      <Card.CardCase>
        <Card.CardItem>
          <Card.CardTopSection bgcolor={'#3800b2'}>
            <Card.CardLogo src={kubernetes} alt='kubernetes' />
            <Card.CardCourseTitle>
              Kubernetes Made Easy: 
            </Card.CardCourseTitle>
            <Card.CardCourseSubTitle>
              Learn Kubernetes From Scratch
            </Card.CardCourseSubTitle>
            <Card.CourseRatingContainer>
              <Card.CourseRating>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalf /> 
              </Card.CourseRating>
              <Card.CourseReviews>(1,857)</Card.CourseReviews>
              <Card.CourseStudents>11,539 Enrolled</Card.CourseStudents>
            </Card.CourseRatingContainer>
          </Card.CardTopSection>
          <Card.CardBottomSection>
            <Card.CourseBotton role='button'>
              START COURSE
            </Card.CourseBotton>
          </Card.CardBottomSection>
        </Card.CardItem>
        <Card.CardItem>
          <Card.CardTopSection bgcolor={'#e27a7e'}>
            <Card.CardLogo src={kubernetes} alt='kubernetes' />
            <Card.CardCourseTitle>
              Kubernetes: 
            </Card.CardCourseTitle>
            <Card.CardCourseSubTitle>
              Getting Started (2019)
            </Card.CardCourseSubTitle>
            <Card.CourseRatingContainer>
              <Card.CourseRating>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalf /> 
              </Card.CourseRating>
              <Card.CourseReviews>(2,914)</Card.CourseReviews>
              <Card.CourseStudents>43,098 Enrolled</Card.CourseStudents>
            </Card.CourseRatingContainer>
          </Card.CardTopSection>
          <Card.CardBottomSection>
            <Card.CourseBotton role='button'>
              START COURSE
            </Card.CourseBotton>
          </Card.CardBottomSection>
        </Card.CardItem>
        <Card.CardItem>
          <Card.CardTopSection bgcolor={'#009162'}>
            <Card.CardLogo src={kubernetes} alt='kubernetes' />
            <Card.CardCourseTitle>
              Ultimate CKA<mark>new</mark>
            </Card.CardCourseTitle>
            <Card.CardCourseSubTitle>
              Certified Kubernetes Administrator
            </Card.CardCourseSubTitle>
            <Card.CourseRatingContainer>
              <Card.CourseRating>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalf /> 
              </Card.CourseRating>
              <Card.CourseReviews>(2)</Card.CourseReviews>
              <Card.CourseStudents>16 Enrolled</Card.CourseStudents>
            </Card.CourseRatingContainer>
          </Card.CardTopSection>
          <Card.CardBottomSection>
            <Card.CourseBotton 
              href='https://www.udemy.com/course/ultimate-cka-certified-kubernetes-administrator/?couponCode=JUN2021'
              role='button'>
              START COURSE
            </Card.CourseBotton>
          </Card.CardBottomSection>
        </Card.CardItem>
        <Card.CardItem>
          <Card.CardTopSection bgcolor={'#0066ae'}>
            <Card.CardLogo src={kubernetes} alt='kubernetes' />
            <Card.CardCourseTitle>
              Ultimate CKAD<mark>new</mark>
            </Card.CardCourseTitle>
            <Card.CardCourseSubTitle>
              Certified Kubernetes Application Developer
            </Card.CardCourseSubTitle>
            <Card.CourseRatingContainer>
              <Card.CourseRating>
                <span>Not Rated</span>
              </Card.CourseRating>
              <Card.CourseReviews>(0)</Card.CourseReviews>
              <Card.CourseStudents>2 Enrolled</Card.CourseStudents>
            </Card.CourseRatingContainer>
          </Card.CardTopSection>
          <Card.CardBottomSection>
            <Card.CourseBotton role='button'>
              START COURSE
            </Card.CourseBotton>
          </Card.CardBottomSection>
        </Card.CardItem>
      </Card.CardCase>
    </Card.Wrapper>
  )
}

export default CourseCardComponent;