import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'
import styled from 'styled-components'
import Button from './Button'
import Contact from './contact/Contact'
import { useState } from 'react'

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const fontSize = 35

  const handleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <Wrapper>
      <Container>
        <HeaderBody>
          <span>Yukako Ito</span>
          <span className='separator'> | </span>
          <span className='title'>Web Developer</span>
        </HeaderBody>
        <IconContainer>
          <Button url={'https://www.linkedin.com/in/itoyukako'}>
            <LinkedInIcon sx={{ fontSize: fontSize }} />
          </Button>
          <Button url={'https://github.com/yukakoito'}>
            <GitHubIcon sx={{ fontSize: fontSize }} />
          </Button>
          <Button onClickFunc={handleModal}>
            <EmailIcon sx={{ fontSize: fontSize }} />
          </Button>
        </IconContainer>
      </Container>
      <Contact onClickFunc={handleModal} isModalOpen={isModalOpen} />
    </Wrapper>
  )
}

export default Header

const Wrapper = styled.div`
  height: 60px;
  width: 100%;
  background-color: var(--primary-color);
  color: var(--secondary-color);
`
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  max-width: var(--max-content-width);
  padding: 0 25px;
  height: 100%;
`

const HeaderBody = styled.div`
  font-size: large;

  @media screen and (max-width: 600px) {
    display: flex;
    flex-flow: column wrap;

    .separator {
      display: none;
    }

    .title {
      font-size: small;
    }
  }
`

const IconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;

  button {
    background-color: transparent;
  }

  @media screen and (max-width: 600px) {
    button {
      padding: 3px;
    }
  }
`
