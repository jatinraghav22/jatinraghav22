import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

export function DeveloperNodes() {
  const groupRef = useRef();
  const reactRing1 = useRef();
  const reactRing2 = useRef();
  const reactRing3 = useRef();

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15;
    }
    if (reactRing1.current) reactRing1.current.rotation.z += delta * 0.4;
    if (reactRing2.current) reactRing2.current.rotation.x += delta * 0.4;
    if (reactRing3.current) reactRing3.current.rotation.y += delta * 0.4;
  });

  return (
    <group ref={groupRef}>
      {/* Central JR Core Monogram Emblem */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.8}>
        <group position={[0, 0, 0]}>
          {/* Inner Glowing Crystal Core */}
          <mesh>
            <octahedronGeometry args={[0.9, 2]} />
            <meshStandardMaterial
              color="#3B82F6"
              emissive="#1D4ED8"
              emissiveIntensity={0.6}
              roughness={0.2}
              metalness={0.8}
              wireframe
            />
          </mesh>

          {/* Core Glow Sphere */}
          <mesh>
            <sphereGeometry args={[0.45, 16, 16]} />
            <meshBasicMaterial color="#60A5FA" wireframe />
          </mesh>

          {/* Surrounding React Orbital Rings */}
          <mesh ref={reactRing1} rotation={[Math.PI / 3, 0, 0]}>
            <torusGeometry args={[1.7, 0.015, 16, 64]} />
            <meshBasicMaterial color="#06B6D4" transparent opacity={0.7} />
          </mesh>
          <mesh ref={reactRing2} rotation={[-Math.PI / 3, 0, 0]}>
            <torusGeometry args={[1.7, 0.015, 16, 64]} />
            <meshBasicMaterial color="#8B5CF6" transparent opacity={0.7} />
          </mesh>
          <mesh ref={reactRing3} rotation={[0, Math.PI / 2, 0]}>
            <torusGeometry args={[1.7, 0.015, 16, 64]} />
            <meshBasicMaterial color="#3B82F6" transparent opacity={0.7} />
          </mesh>
        </group>
      </Float>

      {/* Node 1: LEARN (DSA & C++) */}
      <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.6}>
        <group position={[-2.4, 1.4, 0.5]}>
          <mesh>
            <boxGeometry args={[0.5, 0.5, 0.5]} />
            <meshStandardMaterial color="#8B5CF6" emissive="#6D28D9" emissiveIntensity={0.6} wireframe />
          </mesh>
        </group>
      </Float>

      {/* Node 2: BUILD (React & Full-Stack) */}
      <Float speed={2.2} rotationIntensity={0.6} floatIntensity={0.7}>
        <group position={[2.5, 1.2, -0.6]}>
          <mesh>
            <dodecahedronGeometry args={[0.4]} />
            <meshStandardMaterial color="#06B6D4" emissive="#0891B2" emissiveIntensity={0.6} wireframe />
          </mesh>
        </group>
      </Float>

      {/* Node 3: SOLVE (Algorithms & Logic) */}
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
        <group position={[-2.2, -1.5, -0.4]}>
          <mesh>
            <tetrahedronGeometry args={[0.45]} />
            <meshStandardMaterial color="#10B981" emissive="#059669" emissiveIntensity={0.6} wireframe />
          </mesh>
        </group>
      </Float>

      {/* Node 4: DEPLOY (Cloud & Servers) */}
      <Float speed={2.0} rotationIntensity={0.5} floatIntensity={0.6}>
        <group position={[2.3, -1.4, 0.4]}>
          <mesh>
            <cylinderGeometry args={[0.3, 0.3, 0.4, 6]} />
            <meshStandardMaterial color="#3B82F6" emissive="#1D4ED8" emissiveIntensity={0.6} wireframe />
          </mesh>
        </group>
      </Float>
    </group>
  );
}
