import { useHelper } from "@react-three/drei";
import React, { useRef, type RefObject } from "react";
import {
  Object3D,
  SpotLightHelper,
  type Object3DEventMap,
  type SpotLight,
} from "three";

export default function Lights() {
  const spotLight = useRef<SpotLight>(null);

  useHelper(
    spotLight as RefObject<Object3D<Object3DEventMap>>,
    SpotLightHelper,
  );

  return (
    <React.Fragment>
      <ambientLight intensity={0.7} />
      <spotLight
        ref={spotLight}
        intensity={50.5}
        angle={3.5}
        penumbra={1}
        position={[-3, 5, -3]}
        castShadow
      />
    </React.Fragment>
  );
}
