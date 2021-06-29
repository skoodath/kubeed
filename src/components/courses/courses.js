import { Course } from '../../styles/course.style';
import HeadingComponent from '../sectionheading/sectionheading';
import CourseCardComponent from './cards';



const CourseComponent = () => {

  return(
    <>
      
      <Course.Wrapper name='courses'>
      <HeadingComponent
        text={'Courses'}
        />
        <Course.Inner>
        <CourseCardComponent />
        </Course.Inner>
        
      </Course.Wrapper>
    </>
  )
}

export default CourseComponent;