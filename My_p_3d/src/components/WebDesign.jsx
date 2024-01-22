
import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Laptop from './Laptop'
import styled from 'styled-components'


const Desc = styled.div`
width: 200px;
height: 70px;
color: grey; 
padding: 20px;
border-radius: 10px;
position: absolute;
top: 100px;
right: 100px;

@media only screen and (max-width: 768px) {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
`

const WebDesign = () => {
  return (
    <>
      <Canvas>
       <OrbitControls enableZoom={false}/> 
        <Stage environment="city" intensity={180.6}>
        <Laptop/>
        </Stage>
      </Canvas>
      
      <Desc>
        We design prducts with a strong focus n both world class design and ensuring your product is a market success.
      </Desc>
    </>
  )
}

export default WebDesign