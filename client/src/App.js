import GlobalStyles from "./GlobalStyles";
import About from "./components/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";

const App = () => {
  return (
    <div>
      <GlobalStyles/>
      <About/>
      <Skills/>
      <Projects/>
    </div>
  );
}

export default App;
