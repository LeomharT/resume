import { Environment, Lightformer } from "@react-three/drei";
import { folder, useControls } from "leva";

export default function Environments() {
  useControls({
    "🏞️ Environment": folder({
      preset: {
        options: [
          "apartment",
          "city",
          "dawn",
          "forest",
          "lobby",
          "night",
          "park",
          "studio",
          "sunset",
          "warehouse",
        ] as const,
        value: "apartment" as const,
      },
    }),
  });

  return (
    <>
      <Environment>
        <group rotation={[-Math.PI / 3, 0, 1]}>
          <Lightformer
            form="circle"
            intensity={10}
            rotation-x={Math.PI / 2}
            position={[0, 5, -9]}
            scale={2}
          />
          <Lightformer
            form="circle"
            intensity={2}
            rotation-y={Math.PI / 2}
            position={[-5, 1, -1]}
            scale={2}
          />
          <Lightformer
            form="circle"
            intensity={2}
            rotation-y={Math.PI / 2}
            position={[-5, -1, -1]}
            scale={2}
          />
          <Lightformer
            form="circle"
            intensity={2}
            rotation-y={-Math.PI / 2}
            position={[10, 1, 0]}
            scale={8}
          />
          <Lightformer
            form="rect"
            intensity={3}
            onUpdate={(self) => self.lookAt(0, 0, 0)}
            position={[10, 10, 0]}
            scale={10}
          />
        </group>
      </Environment>
    </>
  );
}
