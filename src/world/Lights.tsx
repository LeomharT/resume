import React, { useRef } from "react";
import { type SpotLight } from "three";

export default function Lights() {
  const spotLight = useRef<SpotLight>(null);

  // useHelper(
  //   spotLight as RefObject<Object3D<Object3DEventMap>>,
  //   SpotLightHelper,
  // );

  return (
    <React.Fragment>
      <ambientLight intensity={3.7} />
      <spotLight
        ref={spotLight}
        intensity={40.5}
        angle={0.5}
        penumbra={1}
        position={[-12, 8, -13]}
        castShadow
      />
    </React.Fragment>
  );
}
