import { Environment, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Circuit from "./Circuit";
import { OrbitControls } from "@react-three/drei";

const Electronics = () => {
  return (
    <Canvas>
      <OrbitControls enableZoom={false} autoRotate />
      <Stage environment={null}>
        <Environment
          path="public/"
          files="photo_studio_loft_hall_4k.hdr"
        ></Environment>
        <Circuit />
      </Stage>
    </Canvas>
  );
};

export default Electronics;
