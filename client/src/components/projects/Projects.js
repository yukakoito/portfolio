import { projectData } from "./projectData";
import ProjectDetails from "./ProjectDetails";
import styled from "styled-components";

const Projects = () => {
  return(
    <div>
      <h1>Projects</h1>
      <ProjectContainer>
        {projectData.map(project => <ProjectDetails key={project.id} project={project}/>)}
      </ProjectContainer>
    </div>
  )
}

export default Projects;

const ProjectContainer = styled.div`
  width: 100%;
  display: flex;
`