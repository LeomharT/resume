import { COLORS } from "@/utils/Colors";
import { folder, useControls } from "leva";

export default function GoldBall() {
  const { metalness, roughness, color } = useControls({
    "🟡 Gold Ball": folder({
      metalness: {
        value: 0.35,
        step: 0.01,
        min: 0,
        max: 1,
      },
      roughness: {
        value: 0.4,
        step: 0.01,
        min: 0,
        max: 1,
      },
      color: COLORS.METALLIC_GOLD,
    }),
  });

  return (
    <mesh receiveShadow castShadow position={[0, 0.8, 0]}>
      <icosahedronGeometry args={[0.5, 20]} />
      <meshStandardMaterial
        color={color}
        metalness={metalness}
        roughness={roughness}
      />
    </mesh>
  );
}
