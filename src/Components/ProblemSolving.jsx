import { Environment, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Earth from "./Earth";
import { OrbitControls } from "@react-three/drei";

const ProblemSolving = () => {
  return (
    <Canvas scale={0.3}>
      <OrbitControls enableZoom={false} autoRotate />
      <Stage environment={null}>
        <Environment
          path="public/"
          files="photo_studio_loft_hall_4k.hdr"
        ></Environment>
        <Earth />
      </Stage>
    </Canvas>
  );
};

export default ProblemSolving;
