import { OrbitControls,  MeshDiscardMaterial } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import styled from 'styled-components'
import Cube from './Cube'



const Container = styled.div`
  height: 100vh;
  width: 100%;
  scroll-snap-align: center;
`

const Test = () => {
  return (
    <Container>
      <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <sphereGeometry args={[1, 100, 200]} scale={2}>
              <MeshDiscardMaterial
                color="#220736"
                attach="material"
                distort={0.5}
                speed={2}
              />
            </sphereGeometry>
          </Canvas>
    </Container>
  )
}

export default Test