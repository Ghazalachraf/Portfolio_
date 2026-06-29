"use client";

import { useRef, useMemo, useEffect, Suspense } from "react";
import { Canvas, useFrame, useLoader, type ThreeEvent } from "@react-three/fiber";
import { Billboard, Float } from "@react-three/drei";
import * as THREE from "three";

const ICONS = [
  "react", "nextjs", "laravel", "nodejs", "python",
  "javascript", "php", "java", "html5", "css3",
  "tailwindcss", "sass", "bootstrap", "mysql", "mongodb",
  "postgresql", "git", "docker", "linux", "figma",
];

// Distribute points roughly evenly on a sphere (Fibonacci sphere).
function fibonacciSphere(count: number, radius: number) {
  const points: [number, number, number][] = [];
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = golden * i;
    points.push([Math.cos(theta) * r * radius, y * radius, Math.sin(theta) * r * radius]);
  }
  return points;
}

function IconCard({ name, position }: { name: string; position: [number, number, number] }) {
  const texture = useLoader(THREE.TextureLoader, `/icons/${name}.svg`);
  const hovered = useRef(false);
  const group = useRef<THREE.Group>(null);

  useEffect(() => {
    /* eslint-disable react-hooks/immutability -- configuring a three.js texture in place is the standard pattern */
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.anisotropy = 8;
    texture.needsUpdate = true;
    /* eslint-enable react-hooks/immutability */
  }, [texture]);

  useFrame(() => {
    if (!group.current) return;
    const target = hovered.current ? 1.35 : 1;
    group.current.scale.lerp(new THREE.Vector3(target, target, target), 0.15);
  });

  const onOver = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    hovered.current = true;
    document.body.style.cursor = "pointer";
  };
  const onOut = () => {
    hovered.current = false;
    document.body.style.cursor = "auto";
  };

  return (
    <Float speed={2} rotationIntensity={0.4} floatIntensity={0.6}>
      <group ref={group} position={position}>
        <Billboard>
          {/* frosted rounded card behind the logo */}
          <mesh onPointerOver={onOver} onPointerOut={onOut}>
            <circleGeometry args={[0.62, 48]} />
            <meshBasicMaterial color="#ffffff" transparent opacity={0.9} />
          </mesh>
          <mesh position={[0, 0, 0.001]}>
            <circleGeometry args={[0.62, 48]} />
            <meshBasicMaterial color="#eef2ff" transparent opacity={0.6} />
          </mesh>
          <mesh position={[0, 0, 0.01]} raycast={() => null}>
            <planeGeometry args={[0.78, 0.78]} />
            <meshBasicMaterial map={texture} transparent alphaTest={0.05} toneMapped={false} />
          </mesh>
        </Billboard>
      </group>
    </Float>
  );
}

function Constellation() {
  const group = useRef<THREE.Group>(null);
  const positions = useMemo(() => fibonacciSphere(ICONS.length, 3.1), []);
  const pointer = useRef({ x: 0, y: 0 });

  useFrame((state, delta) => {
    if (!group.current) return;
    pointer.current.x = state.pointer.x;
    pointer.current.y = state.pointer.y;
    // gentle auto-rotation
    group.current.rotation.y += delta * 0.12;
    // tilt toward the cursor
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      pointer.current.y * 0.35,
      0.05,
    );
    group.current.position.x = THREE.MathUtils.lerp(
      group.current.position.x,
      pointer.current.x * 0.4,
      0.05,
    );
  });

  return (
    <group ref={group}>
      {ICONS.map((name, i) => (
        <IconCard key={name} name={name} position={positions[i]} />
      ))}
    </group>
  );
}

export default function TechConstellation() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      style={{ pointerEvents: "auto" }}
    >
      <ambientLight intensity={1} />
      <Suspense fallback={null}>
        <Constellation />
      </Suspense>
    </Canvas>
  );
}
