import { Course } from '../../styles/course.style';
import CourseCardComponent from './cards';



const CourseComponent = () => {

  return(
    <Course.Wrapper name='courses'>
      <Course.Inner>
      <CourseCardComponent />
      </Course.Inner>
      
    </Course.Wrapper>
  )
}

export default CourseComponent;