import React from "react";
import styled from "styled-components";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import MyShape from "./MyShape";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  justify-content: space-between;
  display: flex;

  @media only screen and (max-width: 1000px) {
    flex-direction: column;
    height: 100%;
    /* background-color: yellow; */
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  /* background-color: yellow; */
  @media only screen and (max-width: 1000px) {
    height: 40vh;
    gap: 0px;
  }
`;

const Right = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  /* gap: 10px; */
  padding: 10px;
  @media only screen and (max-width: 1000px) {
    /* background-color: red; */
    padding: 0;
    height: 60vh;
    justify-content: flex-start;
    margin-bottom: 40px;
  }
`;

const Title = styled.h1`
  font-size: 74px;
  margin: 0;
  @media only screen and (max-width: 1000px) {
    font-size: 50px;
    margin: 0px 20px 0 20px;
    padding: 0px;
    /* background-color: pink; */
  }
`;

const Subtitle = styled.h2`
  color: #ed50f1;
  margin: 10px 0;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgrey;
  margin: 8px 0;

  @media only screen and (max-width: 1000px) {
    margin: 20px;
  }
`;
const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media only screen and (max-width: 1000px) {
    margin-left: 20px;
    gap: 10px;
  }
`;

const Line = styled.img`
  width: 50px;
  height: 20px;
`;

const Button = styled.button`
  width: 200px;
  height: 50px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  background-color: #ed50f1;
  color: white;
  transition: 0.1s;
  margin: 10px;
  &:hover {
    scale: 1.1;
    color: yellow;
  }

  @media only screen and (max-width: 1000px) {
    margin: 20px;
  }
`;

const Who = () => {
  const handleClick = () => {
    const element = document.getElementById("works");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Section id = 'who' >
      <Container>
        {" "}
        <Left>
          <Canvas>
            <OrbitControls enableZoom={false} autoRotate />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 5, 2]} />
            <MyShape />
          </Canvas>
        </Left>{" "}
        <Right>
          <Title> Think outside the box. </Title>
          <WhatWeDo>
            <Line src="/image/line.png" />
            <Subtitle> I am.. </Subtitle>
          </WhatWeDo>
          <Desc>
            A full - stack developer who strives to solve real world problems
          </Desc>
          <Button onClick={handleClick}> Here are my skills </Button>
        </Right>{" "}
      </Container>
    </Section>
  );
};

export default Who;
