
import './App.css'
import Hero from './components/Hero'
import Who from './components/Who'
import Works from './components/Works'
import Contact from './components/Contact'
import styled from 'styled-components'
import Test from './components/Test'

const Container =styled.div`

  height: 100vh;
  background-color: rebeccapurple;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: red;
  background: url("./img/bg.png");
  
  &::webkit-scrollbar{
    display: none;
  }
`;

function App() {
  
  return (
   
    <Container>
        <Hero/>
        <Who/>
        <Works/>
        <Contact/>
        <Test/>
    </Container>
  );
}

export default App;
