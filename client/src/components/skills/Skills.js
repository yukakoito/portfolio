import { skillData } from './skillData'
import styled from 'styled-components'

const Skills = () => {
  return (
    <div>
      <h1>Skills</h1>
      <SkillWrapper>
        {skillData.map(skill => (
          <li key={skill}>{skill}</li>
        ))}
      </SkillWrapper>
    </div>
  )
}

export default Skills

const SkillWrapper = styled.ul`
  display: flex;
  flex-flow: row wrap;
  max-width: 600px;
  margin-left: 15px;

  li {
    min-width: 150px;
  }
`
