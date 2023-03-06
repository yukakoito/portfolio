import { useState } from "react";

const defaultInputFields = {
  name: '',
  email: '', 
  message: ''
};

const ContactForm = () => {
  const [inputFields, setInputFields] = useState(defaultInputFields);
  const {displayName, email, message} = inputFields;

  const handleSubmit = async(event) => {
    event.preventDefault();
    
  }

  const handleChange = (event) => {
    const {name, value} = event.target;
    setInputFields({...inputFields, [name]: value})
  }

  return(
      <form onSubmit={handleSubmit}>
        <label htmlFor='displayName'>Name</label>
        <input 
          type='text'
          name='displayName'
          value={displayName}
          onChange={handleChange}
          required
        />
        <label htmlFor='email'>Email</label>
        <input 
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
          required
        />
        <label htmlFor='message'>Message</label>
        <textarea 
          type='text'
          name='message'
          value={message}
          onChange={handleChange}
          rows='6'
          maxLength='2000'
          required
        />
        <button type='submit'>Send</button>
      </form>
  )
}

export default ContactForm;
