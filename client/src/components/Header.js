import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import EmailIcon from '@mui/icons-material/Email';
import styled from 'styled-components';
import Button from './Button';
// import Contact from './contact/Contact';
import { useState } from 'react';



const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const fontSize = 35;

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  }
 
  return(
    <Wrapper>
      <HeaderBody>
        <span>Yukako Ito</span>
        <span className='separator'> | </span>
        <span className='title'>Web Developer</span>
      </HeaderBody>
      <IconContainer>
        <Button url={'https://www.linkedin.com/in/itoyukako'}>
          <LinkedInIcon sx={{ fontSize: fontSize }}/>
        </Button>
        <Button url={'https://github.com/yukakoito'}>
          <GitHubIcon sx={{ fontSize: fontSize }}/>
        </Button>
        {/* <Button onClickFunc={handleModal}>
          <EmailIcon sx={{ fontSize: fontSize }}/>
        </Button> */}
      </IconContainer>
      {/* <Contact onClickFunc={handleModal} isModalOpen={isModalOpen}/> */}
    </Wrapper>
  )
}

export default Header;

const Wrapper = styled.div`
  height: 50px;
  width: 100%;
  background-color: var(--primary-color);
  color: var(--secondary-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const HeaderBody = styled.div`
  margin-left: 10vw;
  font-size: large;

  @media screen and (max-width: 600px){
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
  margin-right: 10vw;
  display: flex;
  justify-content: flex-end;

  button {
    background-color: transparent;
    margin: 0;
  }

  @media screen and (max-width: 600px){ 
    button {
      padding: 3px;
    }
  }
`