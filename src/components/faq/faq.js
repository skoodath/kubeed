import { Faq } from '../../styles/faq.style';
import HeadingComponent from '../sectionheading/sectionheading';
import faqs from './faqs';


const FaqComponent = () => {
  
  return(
    <Faq.Wrapper name='faqs'>
      <Faq.Inner>
      <HeadingComponent
        text='Frequently Asked Questions'
      />
      {faqs.map(faq => (
        <Faq.FaqWrapper key={faq.id} >
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