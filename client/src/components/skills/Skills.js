import { skillData } from "./skillData";

const Skills = () => {
  return(
    <div>
      <h1>Skills</h1>
    <ul>
      {skillData.map(skill => <li key={skill}>{skill}</li>)}
    </ul>
    </div>
  )
}

export default Skills;