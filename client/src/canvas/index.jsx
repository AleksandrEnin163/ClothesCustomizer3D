import React from 'react'
import {Canvas} from '@react-three/fiber'
import {Environment, Center} from '@react-three/drei'
import Backdrop from './Backdrop'
import CamerRig from './CamerRig'
import Shirt from './Shirt'

function CanvasModel() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <Environment preset='city' />

      {/* <CamerRig> */}
        {/* <Backdrop /> */}
        <Center>
          <Shirt />
        </Center>
      {/* </CamerRig> */}
    </Canvas>
  )
}

export default CanvasModel