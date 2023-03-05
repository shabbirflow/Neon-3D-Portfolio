import React from "react";
import styled from "styled-components";
import { fields } from "../store";
import Development from "./Development";
import ProblemSolving from "./ProblemSolving";
import WebDesign from "./WebDesign";
import Electronics from "./Electronics";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  
  @media only screen and (max-width: 1000px){
    height: 100vh;
  }
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  justify-content: space-between;
  display: flex;
  
  @media only screen and (max-width: 1000px){
    height: 100%;
    width: 100vw;
    /* background-color: yellow; */
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
  /* background-color: yellow; */
  
  @media only screen and (max-width: 1000px){
    height: 40vh;
    width: 100vw;
    margin-bottom: 0;
  }
`;

const Right = styled.div`
  flex: 1;
  /* background-color: blue; */
  height: 400px;
  overflow: none;
  justify-self: center;
  align-self: center;
  
  @media only screen and (max-width: 1000px){
    height: 60vh;
    width: 90vw;
    margin-bottom: 40px;
  }
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
`;
const Listitem = styled.li`
  font-size: 75px;
  margin: 10px 0;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  color: transparent;
  cursor: pointer;
  -webkit-text-stroke: 1px white;
  position: relative;

  ::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: #ed50f1;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover {
    ::after {
      animation: moveText 0.3s linear both;

      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }

  @media only screen and (max-width: 1000px){
    font-size: 40px;
    -webkit-text-stroke: 0px;
    color: white;
  }
`;

const Works = () => {
  const [model, setModel] = React.useState("Data Structures");

  const listitems = fields.map((x) => {
    return (
      <Listitem
        key={x}
        text={x}
        onClick={() => {
          setModel(x);
        }}
      >
        {x}
      </Listitem>
    );
  });
  // console.log(fields);

  return (
    // <div id='works'>
    <Section id = 'works'>
      <Container>
        <Left>
          <List>{listitems}</List>
        </Left>
        <Right>
          {model == "Web Design" ? (
            <WebDesign />
          ) : model == "Electronics" ? (
            <Electronics />
          ) : (model == "Data structures" || model == "Algorithms") ? (
            <Development />
          ) : model == "Development" ? (
            <WebDesign />
          ) : (
            <ProblemSolving />
          )}
        </Right>
      </Container>
    </Section>
    // </div>
  );
};

export default Works;
