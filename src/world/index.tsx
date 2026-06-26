import { ContactShadows } from "@react-three/drei";
import GoldBall from "./GoldBall";
import Lights from "./Lights";
import Paper from "./Paper";
import TitleBox from "./TitleBox";

export default function World() {
  return (
    <>
      <axesHelper args={[3]} castShadow={false} />
      <Lights />
      <GoldBall />
      <TitleBox />
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
