import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Mesh } from "three";

const radius = 3.0;

export default function TestScene() {
  const boxRef = useRef<Mesh>(null);

  useFrame((state) => {
    const elapsed = state.clock.getElapsedTime();

    boxRef.current?.position.set(
      Math.cos(elapsed) * radius,
      0,
      Math.sin(elapsed) * radius,
    );
  });

  return (
    <mesh ref={boxRef} position-z={-5}>
      <icosahedronGeometry args={[0.1, 3]} />
      <meshBasicMaterial color="yellow" />
    </mesh>
  );
}
