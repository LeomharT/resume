import { CameraControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import { ACESFilmicToneMapping } from "three";
import World from "../world";
export default function App() {
  return (
    <div className="w-screen h-screen">
      <Canvas
        camera={{
          fov: 70,
        }}
        gl={{
          toneMapping: ACESFilmicToneMapping,
        }}
      >
        <Perf position="top-left" />
        <CameraControls />
        <axesHelper />
        <World />
      </Canvas>
    </div>
  );
}
