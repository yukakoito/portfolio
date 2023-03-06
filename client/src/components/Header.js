import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import styled from 'styled-components';
import Button from './Button';

const Header = () => {

  const fontSize = 35;
 
  return(
    <Wrapper>
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
  justify-content: flex-end;
`

const IconContainer = styled.div`
  margin-right: 10vw;
  display: flex;
  justify-content: space-between;

  button {
    background-color: transparent;
    margin: 0;
  }
`