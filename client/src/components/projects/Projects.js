import { projectData } from "./projectData";
import ProjectDetails from "./ProjectDetails";

const Projects = () => {
  return(
    <div>
      <h1>Projects</h1>
      <div>
        {projectData.map(project => <ProjectDetails project={project}/>)}
      </div>
    </div>
  )
}

export default Projects;