import { COLORS } from "@/utils/Colors";
import {
  MeshTransmissionMaterial,
  RoundedBoxGeometry,
  Text,
} from "@react-three/drei";
import { folder, useControls } from "leva";
const GOLDRATIO = 1.618033988749;

export default function TitleBox() {
  const { radius, ...config } = useControls({
    "🧊 Glass Box": folder({
      radius: {
        value: 0.2,
        step: 0.01,
        min: 0,
        max: 1,
      },
      transmission: { value: 1, min: 0, max: 1 },
      roughness: { value: 0.0, min: 0, max: 1, step: 0.01 },
      thickness: { value: 9.2, min: 0, max: 10, step: 0.01 },
      ior: { value: 1.5 * 2, min: 1, max: 5, step: 0.01 },
      chromaticAberration: { value: 0.06, min: 0, max: 1 },
      anisotropy: { value: 0.1, min: 0, max: 1, step: 0.01 },
      distortion: { value: 0.0, min: 0, max: 1, step: 0.01 },
      distortionScale: { value: 0.3, min: 0.01, max: 1, step: 0.01 },
      temporalDistortion: { value: 0.5, min: 0, max: 1, step: 0.01 },
      clearcoat: { value: 0.5, min: 0, max: 1 },
      attenuationDistance: { value: 0.5, min: 0, max: 10, step: 0.01 },
      color: COLORS.GLASS,
      attenuationColor: "#ffffff",
    }),
  });

  return (
    <group position={[-6.75, 0.5, -5.75]}>
      <Text
        scale={0.38}
        position={[-1.75, 0.21, -0.75]}
        rotation-x={-Math.PI / 2}
        frustumCulled={false}
        color="black"
        anchorX="center"
        anchorY="middle"
      >
        LEO'S DIGITAL RESUME
      </Text>
      <Text
        scale={0.8}
        position={[0, 0.21, 0.2]}
        rotation-x={-Math.PI / 2}
        frustumCulled={false}
        color="black"
        anchorX="center"
        anchorY="middle"
      >
        WebGL Engineer
      </Text>
      <mesh scale-y={0.2} castShadow>
        <RoundedBoxGeometry args={[6 * GOLDRATIO, 2, 2.5]} radius={radius} />
        <MeshTransmissionMaterial
          transmissionSampler
          samples={10}
          resolution={2048}
          {...config}
        />
      </mesh>
    </group>
  );
}
