
const ProjectDetails = ({project}) => {

  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noreferrer')
  }
  return(
    <div>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <ul>
        {project.stack.map(item => <li>{item}</li>)}
      </ul>
      <button onClick={() => openInNewTab(project.url)}>Visit the website</button>
      <button onClick={() => openInNewTab(project.githubUrl)}>View GitHub Repo</button>
    </div>
  )
}

export default ProjectDetails;