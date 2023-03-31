import { projectData } from './projectData'
import ProjectDetails from './ProjectDetails'
import styled from 'styled-components'

const Projects = () => {
  return (
    <Wrapper>
      <h1>Projects</h1>
      <ProjectContainer>
        {projectData.map(project => (
          <ProjectDetails key={project.id} project={project} />
        ))}
      </ProjectContainer>
    </Wrapper>
  )
}

export default Projects

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
`

const ProjectContainer = styled.div`
  width: 100%;
  align-self: center;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 15px;

  @media screen and (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
`
