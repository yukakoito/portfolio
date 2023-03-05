import GlobalStyles from "./GlobalStyles";
import About from "./components/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <GlobalStyles/>
      <Header/>
      <About/>
      <Skills/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
