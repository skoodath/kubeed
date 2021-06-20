import { Course } from '../../styles/course.style';
import HeadingComponent from '../sectionheading/sectionheading';
import CourseCardComponentNew from './cardsnew';



const CourseComponent = () => {

  return(
    <Course.Wrapper name='courses'>
      <Course.Inner>
      <HeadingComponent
        text='Courses'
      />
      <CourseCardComponentNew />
      </Course.Inner>
      
    </Course.Wrapper>
  )
}

export default CourseComponent;