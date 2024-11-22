"use client";

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Environment, PerspectiveCamera, Stars } from '@react-three/drei';
import WaveField from './WaveField';

export default function Scene() {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black" />
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={45} />
        <Suspense fallback={null}>
          
          <WaveField/>
          <Environment preset="night" />
          <ambientLight intensity={0.1} />
          <directionalLight 
            position={[5, 3, 5]} 
            intensity={3} 
            color="#ffffff"
          />
         
        </Suspense>
      </Canvas>
    </div>
  );
}