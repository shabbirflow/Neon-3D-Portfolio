import { PerspectiveCamera, RenderTexture } from "@react-three/drei";
import React from "react";

const MyShape = () => {
  // dimension ---- args = {[1.2, 0.3, 64, 16]}
  //perspective camera position -------- position={[0, 0, 2]}

  return (
    <mesh>
      {/* <boxGeometry args={[2, 2, 2]} /> */}
      <torusKnotGeometry  args = {[1.2, 0.3, 64, 16]}/>
      <meshNormalMaterial>
        <RenderTexture attach="map">
          <PerspectiveCamera makeDefault position={[0, 0, 2]} />
        </RenderTexture>
      </meshNormalMaterial>
    </mesh>
  );
};

export default MyShape;
