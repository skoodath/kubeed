import { Footer } from "../../styles/footer.style";

const MailListComponent = () => {
  return(
    <Footer.FormWrapper>
      <Footer.FormHeader>Subscribe to our mailing list</Footer.FormHeader>
      <Footer.Form>
        <Footer.Input type='email' name='email' placeholder='Email Address' />
        <Footer.Button>Send</Footer.Button>
      </Footer.Form>
    </Footer.FormWrapper>
      
    )
}

export default MailListComponent;