import Button from "../Button";
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import styled from "styled-components";

const ProjectDetails = ({project}) => {

  return(
    <div>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <ul>
        {project.stack.map(item => <li key={project.id+"-"+item}>{item}</li>)}
      </ul>
      <Button url={project.url}>
        <ButtonContainer>
          <LaunchIcon/>
          <span>Visit the website</span>
        </ButtonContainer>
      </Button>
      <Button url={project.githubUrl}>
        <ButtonContainer>
          <GitHubIcon/>
          <span>View GitHub Repo</span>
        </ButtonContainer>
      </Button>
    </div>
  )
}

export default ProjectDetails;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  
  span {
    margin-left: 0.5em;
  }
`