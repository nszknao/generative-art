import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Mesh } from "three";

const Thing = () => {
  const ref = useRef<Mesh>(null);

  useFrame(() => {
    if (ref.current === null) return;
    ref.current.rotation.z += 0.01;
  });

  return (
    <mesh
      ref={ref}
      onClick={() => console.log("click")}
      onPointerOver={() => console.log("hover")}
      onPointerOut={() => console.log("unhover")}
    >
      <planeBufferGeometry attach="geometry" args={[1, 1]} />
      <meshBasicMaterial
        attach="material"
        color="hotpink"
        opacity={0.5}
        transparent
      />
    </mesh>
  );
};

export const Example = () => {
  return (
    <Canvas>
      <Thing />
    </Canvas>
  );
};
