import { Form } from '../../styles/contact.style';

const FormComponent = () => {
  return(
    <Form.Wrapper>
      <Form.Form>
        <Form.FieldWrapper padding shadow>
          <Form.InputLabel htmlFor='name'>Name</Form.InputLabel>
          <Form.InputName type='text' name='name' />
        </Form.FieldWrapper>
        <Form.FieldWrapper padding shadow>
        <Form.InputLabel htmlFor='email'>Email</Form.InputLabel>
          <Form.InputEmail type='email' name='email' />
        </Form.FieldWrapper>
        <Form.FieldWrapper padding shadow flexd>
          <Form.InputLabel htmlFor='message'>message</Form.InputLabel>
          <Form.Message name='message' rows='4' />
        </Form.FieldWrapper>
        <Form.FieldWrapper>
          <Form.Button type='submit'>Send</Form.Button>
        </Form.FieldWrapper>
      </Form.Form>
      
    </Form.Wrapper>
  )
}

export default FormComponent;