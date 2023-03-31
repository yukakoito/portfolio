import GlobalStyles from './GlobalStyles'
import About from './components/About'
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects'
import Header from './components/Header'
import Footer from './components/Footer'
import styled from 'styled-components'

const App = () => {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <BodyWrapper>
        <About />
        <Skills />
        <Projects />
      </BodyWrapper>
      <Footer />
    </div>
  )
}

export default App

const BodyWrapper = styled.div`
  min-height: calc(100vh - 120px);
  max-width: var(--max-content-width);
  margin: 0 auto;
  padding: 15px 25px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`
