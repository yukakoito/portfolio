import { Dialog } from "@mui/material";
import styled from "styled-components";
import ContactForm from "./ContactForm";

const Contact = ({onClickFunc, isModalOpen}) => {

  return(
    <Dialog open={isModalOpen} fullWidth={true}>
      <Wrapper>
        <button className='closeButton' onClick={() => onClickFunc()}>✕</button>
        <h1>Contact</h1>
        <ContactForm />
      </Wrapper>
    </Dialog>
  )
}

export default Contact;

const Wrapper = styled.div`
  margin: 10px 25px 0;

  button {
    align-self: flex-end;
    margin: 10px 0;
    width: 100%;
    justify-content: center;
  }
  
  .closeButton {
    position: absolute;
    top: 0;
    right: 10px;
    width: fit-content;
    font-size: x-small;
  }
`