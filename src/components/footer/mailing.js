import { Footer } from "../../styles/footer.style";
import { useForm } from 'react-hook-form';

const MailListComponent = () => {

  const {register, handleSubmit, reset, formState: { errors}} = useForm();

  

  const SubmitForm = (data) => {
   /*  emailjs.send('gmail', 'gmail_template', data.email, 'user_VxY4OJHzwej0Cv5B4mDg9')
    .then((result) =>    { */
        console.log('what is data?', data.email);
        reset({
          email: ""
        });
       /*  reset({

        })
    }, (error) => {
        console.log(error.text);
    });
    reset({
        email: ""
    }) */
};



  return(
    <Footer.FormWrapper>
      <Footer.FormHeader>Subscribe to our mailing list</Footer.FormHeader>
      <Footer.Form onSubmit={handleSubmit(SubmitForm)}>
        <div>
        <Footer.Input 
          type='email' 
          {...register('email', {
            required: 'Email address is required',
            pattern: {
              value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              message: 'Please enter a valid email address'
            }
          })} 
          placeholder='Email Address'
        />
        <Footer.Button type='submit'>Subscribe</Footer.Button>
        </div>
        {errors.email?.type === 'pattern' && <p>{errors.email.message}</p>}
        {errors.email?.type === 'required' && <p>{errors.email.message}</p>}
      </Footer.Form>
    </Footer.FormWrapper>
      
    )
}

export default MailListComponent;