import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { MeshDistortMaterial, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Sphere } from "@react-three/drei"; 

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
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
    display: flex;
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  @media only screen and (max-width: 1000px){
    justify-content: center;
    align-items: center;
    /* background-color: pink; */
    height: 50vh;
    padding: 20px;
    /* flex: 4; */
  }
`;

const Right = styled.div`
  flex: 3;
  position: relative;

  @media only screen and (max-width: 1000px){
    height: 50vh;
    overflow: none;
    /* flex: 10; */
    margin-bottom: 20px;
    /* background-color: blue; */
  }
`;

const Title = styled.h1`
  font-size: 74px;
  margin: 0;

  @media only screen and (max-width: 1000px){
    font-size: 50px;
    margin: 20px 5px 10px 5px;
  }
`;

const Subtitle = styled.h2`
  color: #ed50f1;
  margin: 10px 0;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgrey;
  margin: 5px 0;
`;
const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  width: 50px;
  height: 20px;
`;

const Image = styled.img`
  width: 800px;
  height: 600px;
  object-fit: contain;
  /* border: 20px solid black; */
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @keyframes animate {
    to {
      transform: translateY(-30px);
    }
  }

  @media only screen and (max-width: 1000px){
    width: 300px;
    height: 300px;
  }
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
  &:hover {
    scale: 1.1;
    color: yellow;
  }
`;

const Hero = () => {

  const handleClick = () =>{
    const element = document.getElementById('who');
    if(element){
      element.scrollIntoView({behavior: "smooth"})
    }
  }

  return (
    <Section id = 'hero'>
      <Navbar />
      <Container>
        {" "}
        <Left>
          <Title> Think. Solve. Create. </Title>
          <WhatWeDo>
            <Line src="/image/line.png" />
            <Subtitle> What I do </Subtitle>
          </WhatWeDo>
          <Desc>
            A developer who enjoys creating delightful digital experiences
          </Desc>
          <Button onClick={handleClick}> Learn More </Button>
        </Left>{" "}
        <Right>
        <Canvas>
            <OrbitControls enableZoom={false} autoRotate />
            <ambientLight intensity={2} />
            <directionalLight position={[3, 5, 2]} />
            <Sphere args={[1, 100, 200]} scale = {2.5}>
            <MeshDistortMaterial 
              color='#0E185F'
              attach= 'material'
              distort={0.5}
              speed = {1.5}
            />
            </Sphere>
            <MeshDistortMaterial />
          </Canvas>
          <Image src="/image/astro1.png" />
        </Right>{" "}
      </Container>
    </Section>
  );
};

export default Hero;
