import { ContactShadows } from "@react-three/drei";
import Lights from "./Lights";
import Paper from "./Paper";
import TestScene from "./test";

export default function World() {
  return (
    <>
      <axesHelper args={[3]} castShadow={false} />
      <Lights />
      <TestScene />
      <Paper />
      <ContactShadows
        frames={1}
        position={[0, -0.5, 0]}
        opacity={3.75}
        scale={30}
        blur={1.75}
        far={0.8}
      />
    </>
  );
}
