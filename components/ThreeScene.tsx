"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

function ParticleField() {
  const count = 1400;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 4 + Math.random() * 6;
      const t = Math.random() * Math.PI * 2;
      const p = Math.acos(2 * Math.random() - 1);
      pos[i * 3] = r * Math.sin(p) * Math.cos(t);
      pos[i * 3 + 1] = r * Math.sin(p) * Math.sin(t);
      pos[i * 3 + 2] = r * Math.cos(p);
    }
    return pos;
  }, []);

  const ref = useRef<THREE.Points>(null);
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.05;
      ref.current.rotation.x += delta * 0.015;
    }
  });

  const geometry = useMemo(() => {
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return g;
  }, [positions]);

  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial
        color="#00f0ff"
        size={0.05}
        sizeAttenuation
        transparent
        opacity={0.8}
        depthWrite={false}
      />
    </points>
  );
}

function WireTorus() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.15;
      ref.current.rotation.y += delta * 0.22;
      ref.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 2) * 0.04);
    }
  });
  return (
    <mesh ref={ref}>
      <torusGeometry args={[1.6, 0.02, 16, 64]} />
      <meshBasicMaterial color="#ff2e97" wireframe transparent opacity={0.9} />
    </mesh>
  );
}

function InnerGlow() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.08;
      ref.current.rotation.y -= delta * 0.12;
    }
  });
  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[0.7, 1]} />
      <meshBasicMaterial color="#00f0ff" wireframe transparent opacity={0.6} />
    </mesh>
  );
}

function GridFloor() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.6, 0]}>
      <planeGeometry args={[40, 40, 40, 40]} />
      <meshBasicMaterial color="#00f0ff" wireframe transparent opacity={0.08} />
    </mesh>
  );
}

export default function ThreeScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 50 }}
      gl={{ alpha: true, antialias: true }}
      dpr={[1, 2]}
      style={{ position: "absolute", inset: 0 }}
    >
      <Suspense fallback={null}>
        <ParticleField />
        <WireTorus />
        <InnerGlow />
        <GridFloor />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.4}
          dampingFactor={0.08}
        />
      </Suspense>
    </Canvas>
  );
}