import { Environment } from "@react-three/drei";
import { folder, useControls } from "leva";

export default function Environments() {
  const { preset } = useControls({
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
        value: "forest" as const,
      },
    }),
  });

  return (
    <>
      <Environment preset={preset} />
    </>
  );
}
