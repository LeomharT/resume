import { CameraControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { folder, Leva, useControls } from "leva";
import { Perf } from "r3f-perf";
import {
  ACESFilmicToneMapping,
  AgXToneMapping,
  CineonToneMapping,
  Color,
  CustomToneMapping,
  LinearToneMapping,
  NeutralToneMapping,
  NoToneMapping,
  ReinhardToneMapping,
} from "three";
import World from "../world";
import Environments from "../world/Environments";

export default function App() {
  const { toneMapping } = useControls({
    gl: folder({
      toneMapping: {
        options: {
          NoToneMapping,
          LinearToneMapping,
          ReinhardToneMapping,
          CineonToneMapping,
          ACESFilmicToneMapping,
          CustomToneMapping,
          AgXToneMapping,
          NeutralToneMapping,
        },
        value: ACESFilmicToneMapping,
      },
    }),
  });

  return (
    <div className="w-screen h-screen">
      <Leva isRoot titleBar={{ drag: false, title: "Debug" }} />
      <Canvas
        camera={{
          fov: 70,
          position: [0, 10, 7],
        }}
        scene={{
          background: new Color("#292a2b"),
        }}
        gl={{
          toneMapping,
          antialias: true,
        }}
        shadows="basic"
      >
        <Perf position="top-left" />
        <CameraControls />
        <Environments />
        <World />
      </Canvas>
    </div>
  );
}
