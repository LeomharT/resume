import { COLORS } from "@/utils/Colors";
import { useRef } from "react";
import type { Mesh } from "three";

export default function TestScene() {
  const boxRef = useRef<Mesh>(null);

  return (
    <mesh ref={boxRef} receiveShadow castShadow position={[0, 0.8, 0]}>
      <icosahedronGeometry args={[0.5, 20]} />
      <meshStandardMaterial
        color={COLORS.METALLIC_GOLD}
        metalness={0.45}
        roughness={0.1}
      />
    </mesh>
  );
}
