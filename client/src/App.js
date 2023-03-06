import GlobalStyles from "./GlobalStyles";
import About from "./components/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Header from "./components/Header";
import Footer from "./components/Footer";
import styled from "styled-components";

const App = () => {
  return (
    <div>
      <GlobalStyles/>
      <Header/>
      <BodyWrapper>
        <About/>
        <Skills/>
        <Projects/>
      </BodyWrapper>
      <Footer/>
    </div>
  );
}

export default App;

const BodyWrapper = styled.div`
  margin: 35px 10vw;
  min-height: calc(100vh - 170px);
`