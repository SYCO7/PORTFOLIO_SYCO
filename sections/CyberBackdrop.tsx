"use client";

import { useMemo, useRef } from "react";

import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function hash(value: number) {
  const scaled = Math.sin(value * 12.9898) * 43758.5453;
  return scaled - Math.floor(scaled);
}

function ParticleField() {
  const points = useRef<THREE.Points>(null);

  const particles = useMemo(() => {
    const vertices = new Float32Array(220 * 3);

    for (let index = 0; index < vertices.length; index += 3) {
      vertices[index] = (hash(index + 1) - 0.5) * 24;
      vertices[index + 1] = (hash(index + 2) - 0.5) * 14;
      vertices[index + 2] = (hash(index + 3) - 0.5) * 14;
    }

    return vertices;
  }, []);

  useFrame((state) => {
    if (!points.current) {
      return;
    }

    points.current.rotation.y = state.clock.getElapsedTime() * 0.04;
    points.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.03;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[particles, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#fb7185" size={0.035} transparent opacity={0.38} sizeAttenuation />
    </points>
  );
}

function GridPlane() {
  const grid = useRef<THREE.GridHelper>(null);

  useFrame((state) => {
    if (!grid.current) {
      return;
    }

    grid.current.material.opacity = 0.15 + Math.sin(state.clock.getElapsedTime() * 0.8) * 0.05;
  });

  return (
    <gridHelper
      ref={grid}
      args={[34, 34, "#fb7185", "#220f16"]}
      position={[0, -3.2, 0]}
      rotation={[0.24, 0, 0]}
    />
  );
}

export default function CyberBackdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 opacity-85">
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 9], fov: 62 }} gl={{ antialias: false }}>
        <ambientLight intensity={0.2} />
        <directionalLight position={[4, 6, 3]} intensity={0.3} color="#fb7185" />
        <ParticleField />
        <GridPlane />
      </Canvas>
    </div>
  );
}
