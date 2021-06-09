import { Course } from '../../styles/course.style';
import HeadingComponent from '../sectionheading/sectionheading';


const CourseSection = () => {
  return(
    <Course.Wrapper name='courses'>
      <HeadingComponent
        text='Courses'
      />
    </Course.Wrapper>
  )
}

export default CourseSection;