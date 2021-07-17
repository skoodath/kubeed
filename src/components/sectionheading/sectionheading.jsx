import { SectionHeader } from "../../styles/sectionheading.style";


const HeadingComponent = ({text}) => {
  return(
      <SectionHeader.Title>
        {text}
      </SectionHeader.Title>
  )
}

export default HeadingComponent;