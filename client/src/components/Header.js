import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import styled from 'styled-components';
import Button from './Button';

const Header = () => {
 
  return(
    <Wrapper>
      <IconContainer>
        <Button url={'https://www.linkedin.com/in/itoyukako'}>
          <LinkedInIcon />
        </Button>
        <Button url={'https://github.com/yukakoito'}>
          <GitHubIcon/>
        </Button>
        <Button>
          <ContactMailIcon/>
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
  width: 100px;
  margin-right: 10vw;
  display: flex;
  justify-content: space-between;
`