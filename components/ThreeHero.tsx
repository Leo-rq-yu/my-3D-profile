'use client'; // Important for Next.js App Router client components

import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame, ThreeElements } from '@react-three/fiber';
import { OrbitControls, useGLTF, Html } from '@react-three/drei';
import * as THREE from 'three'; // For Group type

// It's good practice to define props for your model if it's reusable
interface ModelProps {
  url: string;
  [key: string]: any; // Allow other props like scale, position
}

function Model({ url, ...props }: ModelProps) {
  const group = useRef<THREE.Group>(null!);
  // useGLTF can take a string path to the model in the public folder
  const { scene } = useGLTF(url); 

  // Idle animation: Slow rotation
  useFrame((state, delta) => {
    if (group.current) {
      // Adjust rotation speed as needed
      group.current.rotation.y += delta * 0.2; 
    }
  });

  // Using primitive and passing the scene directly
  // Spread any additional props (like scale, position) to the primitive
  return <primitive ref={group} object={scene} {...props} />;
}

export default function ThreeHero() {
  return (
    <Canvas 
      camera={{ position: [0, 1.5, 4], fov: 50 }} 
      shadows // Enable shadows on the canvas
    >
      <ambientLight intensity={0.5} />
      {/* Directional light that casts shadows */}
      <directionalLight 
        position={[5, 5, 5]} 
        intensity={1.5} 
        castShadow 
      />
      <Suspense fallback={<Html center style={{ color: 'white' }}>Loading...</Html>}>
        {/* 
          Ensure the model path '/models/avatar.glb' will correctly resolve.
          This means 'avatar.glb' should be in your `public/models/` directory.
        */}
        <Model 
          url="/models/avatar.glb" 
          scale={1} 
          position={[0, -0.9, 0]} // Adjusted Y position for typical avatar placement
        />
        {/* 
          Optional: room model. Uncomment if you have a room model.
          <Model url="/models/room.glb" scale={1} position={[0, -1, 0]} /> 
        */}
      </Suspense>
      <OrbitControls 
        enableZoom={false} 
        maxPolarAngle={Math.PI / 2} // Prevent looking from below
        minPolarAngle={Math.PI / 2.5} // Prevent looking too far down from top
      />
    </Canvas>
  );
}

// Optional: Preload models if you want them to be fetched sooner.
// This is often useful for critical models in the main view.
// useGLTF.preload('/models/avatar.glb');
// useGLTF.preload('/models/room.glb'); // If using the room model
