import Button from '../Button'
import GitHubIcon from '@mui/icons-material/GitHub'
import LaunchIcon from '@mui/icons-material/Launch'
import styled from 'styled-components'

const ProjectDetails = ({ project }) => {
  const { title, imageUrl, id, url, githubUrl } = project
  const fontSize = 18

  return (
    <Wrapper>
      <ProjectContainer>
        <Thumbnail url={imageUrl} />
        <div className='body'>
          <h2>{title}</h2>
          <ul>
            {project.stack.map(item => (
              <li key={id + '-' + item}>{item}</li>
            ))}
          </ul>
        </div>
      </ProjectContainer>
      <ButtonContainer>
        {url ? (
          <Button url={url}>
            <LaunchIcon sx={{ fontSize: fontSize }} />
            <span>Visit the website</span>
          </Button>
        ) : null}
        <Button url={githubUrl}>
          <GitHubIcon sx={{ fontSize: fontSize }} />
          <span>View GitHub Repo</span>
        </Button>
      </ButtonContainer>
    </Wrapper>
  )
}

export default ProjectDetails

const Wrapper = styled.div`
  min-height: 350px;
  width: 100%;
  position: relative;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
`

const Thumbnail = styled.div`
  width: 100%;
  height: 175px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  background-image: url(${p => p.url});
  background-size: cover;
  background-position-x: center;
`

const ProjectContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;

  .body {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    padding-top: 15px;
    gap: 10px;
    min-height: calc(100% - 175px);
  }

  ul {
    margin-left: 0;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    gap: 5px;
    width: 90%;
    margin: 0 auto;
  }

  li {
    list-style: none;
    padding: 5px 10px;
    border-radius: 5px;
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
    padding: 10px 0;
  }

  &:hover {
    opacity: 1;
    background-color: rgba(255, 255, 255, 0.7);
  }
`
