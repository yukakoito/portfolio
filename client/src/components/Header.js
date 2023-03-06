import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import styled from 'styled-components';
import Button from './Button';

const Header = () => {

  const fontSize = 35;
 
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
        <Button>
          <ContactMailIcon sx={{ fontSize: fontSize }}/>
        </Button>
      </IconContainer>
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