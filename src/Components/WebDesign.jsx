import { Environment, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Atom from "./Atom";
import { OrbitControls } from "@react-three/drei";

const WebDesign = () => {
  return (
    <Canvas>
      <OrbitControls enableZoom={false} autoRotate />
      <Stage environment={null}>
        <Environment
          path="public/"
          files="photo_studio_loft_hall_4k.hdr"
        ></Environment>
        <Atom />
      </Stage>
    </Canvas>
  );
};

export default WebDesign;
