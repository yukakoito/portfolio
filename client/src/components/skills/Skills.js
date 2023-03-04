import { skillset } from "./skillset";

const Skills = () => {
  return(
    <div>
      <h1>Skills</h1>
    <ul>
      {skillset.map(skill => <li>{skill}</li>)}
    </ul>
    </div>
  )
}

export default Skills;