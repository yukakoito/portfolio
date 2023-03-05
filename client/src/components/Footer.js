import styled from "styled-components";

const Footer = () => {
  return(
    <Wrapper>
      ©️ Copyright 2023 Yi
    </Wrapper>
  )
}

export default Footer;

const Wrapper = styled.div`
  height: 50px;
  width: 100%;
  background-color: var(--primary-color);
  position: absolute;
  bottom: 0;
  color: var(--secondary-color);
  display: flex;
  align-items: center;
  justify-content: center;
`