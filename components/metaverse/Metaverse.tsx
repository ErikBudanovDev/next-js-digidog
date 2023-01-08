import React from "react";
import { Canvas } from "@react-three/fiber";
import classes from './metaverse.module.css';
import { useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from "@react-three/fiber";
import { TorusGeometry } from "three";

export default function Metaverse() {
  return <div className={classes.canvas}>
    <Canvas shadows={true}
        camera={{
          position: [-6, 7, 7],
        }}
  >
    <ambientLight intensity={0.1} />
  <directionalLight color="blue" position={[0, 0, 5]} />
    <mesh>
      <torusGeometry />
    <meshStandardMaterial />
 </mesh>
    </Canvas>
    </div>
  
}
