import { Environment, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cppmodel from "./Cppmodel";
import { OrbitControls } from "@react-three/drei";

const Devlopment = () => {
  return (
    <Canvas>
      <OrbitControls enableZoom={false} autoRotate />
      <Stage environment={null}>
        <Environment
          path="public/"
          files="photo_studio_loft_hall_4k.hdr"
        ></Environment>
        <Cppmodel />
      </Stage>
    </Canvas>
  );
};

export default Devlopment;
