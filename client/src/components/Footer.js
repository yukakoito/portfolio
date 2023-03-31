import styled from 'styled-components'

const Footer = () => {
  return <Wrapper>©️ Copyright 2023 Yukako Ito</Wrapper>
}

export default Footer

const Wrapper = styled.div`
  height: 60px;
  width: 100%;
  background-color: var(--primary-color);
  color: var(--secondary-color);
  display: flex;
  align-items: center;
  justify-content: center;
`
