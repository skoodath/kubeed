import { useState } from 'react';
import { Faq, PlusButton, MinusButton } from '../../styles/faq.style';
import HeadingComponent from '../sectionheading/sectionheading';
import faqs from './faqs';

const FaqComponent = () => {

  const [open, setOpen] = useState(null);

  const showQuestion = (index) => {
    if(open === index){
     return setOpen(null)
    }
    setOpen(index)
  }
  
  return(
    <>
      
      <Faq.Wrapper name='faq'>
      <HeadingComponent
        text={'Frequently Asked Questions'}
        />
      <Faq.Inner>
        {faqs.map(faq => (
          <Faq.FaqWrapper key={faq.id} >
            <Faq.QuestionWrapper onClick={() => showQuestion(faq.id)}>
            {faq.id !== 8? 
              <Faq.Question>
                {faq.question}
              </Faq.Question>
            :
              <Faq.Question style={{fontWeight: 800}}>
                {faq.question}
              </Faq.Question>
            }
              {open === faq.id? <MinusButton />: <PlusButton />}
          </Faq.QuestionWrapper>  
            
            {open === faq.id && <Faq.Answer open={open}>
              {faq.answer}
            </Faq.Answer> }
            
          </Faq.FaqWrapper>
        ) )}
        </Faq.Inner>
      </Faq.Wrapper>
    </>
  )
}

export default FaqComponent;