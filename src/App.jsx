import Hero from "./Components/Hero";
import Works from "./Components/Works";
import Who from "./Components/Who";
import Contact from "./Components/Contact";
import styled from "styled-components";

const Container = styled.div`
    height: 100vh;
    scroll-snap-type: y mandatory;
    overflow-y: auto;
    scrollbar-width: none;
    scroll-behavior: smooth;
    &::-webkit-scrollbar{
      display: none;
    }
    color: white;
    background: url('/image/grad2.jpg');
  `;

const App = () => {

  return (
      <Container>
        <Hero />
        <Who />
        <Works />
        <Contact />
      </Container>
  );
};

export default App;
