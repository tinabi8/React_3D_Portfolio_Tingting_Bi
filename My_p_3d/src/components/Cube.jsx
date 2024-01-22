import React, { useRef } from 'react'
import { RenderTexture, Text, PerspectiveCamera } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'


const Cube = () => {
    const textRef = useRef()
    useFrame(
        (state) =>
        (textRef.current.position.x =Math.sin(state.clock.elapsedTime) *2)
    )
  return (
    <mesh>
          <boxGeometry args = {[1,1,1]}/>
          <meshBasicMaterial >
            <RenderTexture attach="map">
              <PerspectiveCamera
              makeDefault
              position={[0,0,2]}
              />
              <color attach="background" args={["#dc9dcd"]}></color>
              <Text ref={textRef} fontSize={1} color="#555">
                hello
              </Text>
            </RenderTexture>
          </meshBasicMaterial>
        </mesh>
  )
}

export default Cube