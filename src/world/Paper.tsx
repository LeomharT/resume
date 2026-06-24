import { COLORS } from "@/utils/Colors";
import { RoundedBoxGeometry } from "@react-three/drei";
import { folder, useControls } from "leva";

const GOLDRATIO = 1.618033988749;

export default function Paper() {
  const { roughness, metalness, radius } = useControls({
    "📜 Paper": folder({
      roughness: {
        value: 0.5,
        step: 0.01,
        min: 0,
        max: 1,
      },
      metalness: {
        value: 0.721,
        step: 0.01,
        min: 0,
        max: 1,
      },
      radius: 0.5,
    }),
  });

  return (
    <mesh scale-y={0.025} castShadow receiveShadow>
      <RoundedBoxGeometry
        args={[10 * GOLDRATIO, 10, 10]}
        radius={radius}
        steps={1}
        smoothness={16}
        bevelSegments={16}
        creaseAngle={0.4}
      />
      <meshStandardMaterial
        roughness={roughness}
        metalness={metalness}
        color={COLORS.PLATINUM}
      />
    </mesh>
  );
}
