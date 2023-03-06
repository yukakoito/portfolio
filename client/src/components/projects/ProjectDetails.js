import Button from "../Button";
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import styled from "styled-components";

const ProjectDetails = ({project}) => {
  const {title, imageUrl, id, url, githubUrl} = project;
  const fontSize = 18;

  return(
    <Wrapper>
      <div>
        <Thumbnail src={imageUrl} alt={title} />
        <ProjectBody>
          <h2>{title}</h2>
          <ul>
            {project.stack.map(item => <li key={id+"-"+item}>{item}</li>)}
          </ul>
        </ProjectBody>
      </div>
      <ButtonContainer>
        {url? 
          <Button url={url}>
              <LaunchIcon sx={{ fontSize: fontSize }}/>
              <span>Visit the website</span>
          </Button> 
          : null
        }
        <Button url={githubUrl}>
            <GitHubIcon sx={{ fontSize: fontSize }}/>
            <span>View GitHub Repo</span>
        </Button>
      </ButtonContainer>
    </Wrapper>
  )
}

export default ProjectDetails;

const Wrapper = styled.div`
  height: 350px;
  width: 100%;
  position: relative;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
`

const Thumbnail = styled.img`
  width: 100%;
  height: 55%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`

const ProjectBody = styled.div`
  width: 100%;
  height: 43%;
  position: absolute;
  z-index: 1;
  bottom: 0;
  left: 0;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  ul {
    margin-left: 0;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    width: 90%;
  }

  li {
    list-style: none;
    padding: 5px;
    border-radius: 5px;
    margin: 2px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  }
`

const ButtonContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 100;
  top: 0;
  left: 0;
  opacity: 0;

  span {
    margin-left: 0.5em;
    font-size: medium;
  }

  button {
    width: 200px;
    justify-content: center;
    border-radius: 25px 0;
  }

  &:hover {
    opacity: 1;
    background-color: rgba(255,255,255, 0.7);
    transition: all 1s ease-in-out;
  }
`