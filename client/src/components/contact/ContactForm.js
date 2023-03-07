import { useForm } from '@formspree/react'
import styled from 'styled-components'

const ContactForm = () => {
  const [state, handleSubmit] = useForm('xvonrjwp')

  if(state.succeeded) {
    return( 
      <ConfirmationMsg>
        <h2>Thank you for your message.</h2>
        <p>I will get back to you as soon as possible.</p>
      </ConfirmationMsg>
    )
  }

  return(
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name:</label>
        <input 
          type='text'
          name='name'
          required
        />
        <label htmlFor='email'>Email:</label>
        <input 
          type='email'
          name='email'
          required
        />
        <label htmlFor='message'>Message:</label>
        <textarea 
          name='message'
          rows='7'
          maxLength='2000'
          required
        />
        <button type='submit' disabled={state.submitting}>Send</button>
      </form>
  )
}

export default ContactForm;

const ConfirmationMsg = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
  p {
    font-size: smaller;
  }
`
