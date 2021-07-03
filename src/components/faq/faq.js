import { Faq, FAQHeader} from '../../styles/faq.style';
import faqs from './faqs';

const FaqComponent = () => {

  
  return(
    <>
      <Faq.Wrapper name='faq'>
           
            <FAQHeader.Title>
            <FAQHeader.FAQLogo /> FAQs
            </FAQHeader.Title>
      <Faq.Inner>
        {faqs.map(faq => (
          <Faq.FaqWrapper key={faq.id} >
            <Faq.QuestionWrapper>
            {faq.id !== 8? 
              <Faq.Question>
                {faq.question}
              </Faq.Question>
            :
              <Faq.Question style={{color: '#ed6709'}}>
                {faq.question}
              </Faq.Question>
            }
          </Faq.QuestionWrapper>  
            
            <Faq.Answer>
              {faq.answer}
            </Faq.Answer>
            
          </Faq.FaqWrapper>
        ) )}
        </Faq.Inner>
      </Faq.Wrapper>
    </>
  )
}

export default FaqComponent;