import { Faq, ScrollUp } from '../../styles/faq.style';
import HeadingComponent from '../sectionheading/sectionheading';
import faqs from './faqs';
import { BsChevronCompactUp } from 'react-icons/bs';


const FaqComponent = () => {
  return(
    <Faq.Wrapper>
      <Faq.Inner>
      <ScrollUp
        to="landing"
        spy={true} 
        smooth={true} 
        offset={-100} 
        duration={500}
      >
        <BsChevronCompactUp />
      </ScrollUp>
      <HeadingComponent
        text='Frequently Asked Questions'
      />
      {faqs.map(faq => (
        <Faq.FaqWrapper key={faq.id}>
          <Faq.Question>
            {faq.question}
          </Faq.Question>
          <Faq.Answer>
            {faq.answer}
          </Faq.Answer>
        </Faq.FaqWrapper>
      ) )}
      </Faq.Inner>
    </Faq.Wrapper>
  )
}

export default FaqComponent;