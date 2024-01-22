import React from 'react'
import styled from 'styled-components'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Cube from './Cube'

const Section =styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`
const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Left = styled.div`
   flex: 1;

  @media only screen and (max-width: 768px) {
    display: none;
  }
  `;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
  
  `;

  const Title = styled.h1`
  color: white;
  font-size: 74px;

  @media only screen and (max-width: 768px) {
    font-size: 55px;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #da4ea2;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  color: white;
  font-weight: 500;
  width: 120px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;


const Img = styled.img`
  width: 1000px;
  height: 800px;
  object-fit: contain;
  
  top: 0;
  bottom:0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @keyframes animate {
    to{
      transform: translateY(20px);
    }
  }

  `;

const Who = () => {
  return (
    <Section>
      
      <Container>
        <Left>
          <Canvas camera={{fov:25, position: [5,5,5]}}>
            <OrbitControls enableZoom={false}/>
            <ambientLight intensity={1}/>
            <directionalLight position= {[3,2,1]} />
            <Cube/>
          </Canvas>
          
        </Left>
        <Right>
          <Title>Think outside the square space</Title>
          <WhatWeDo>
            <Line src=""/>
            <Subtitle>Who we Are</Subtitle>
          </WhatWeDo>
          <Desc>a creative group of designers and developers with a passion for the arts.</Desc>
          <Button>See our works</Button>
        </Right>
        
      </Container>
    </Section>
  )
}

export default Who;