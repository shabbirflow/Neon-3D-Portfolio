import { Stage } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import Earth from "./Earth"
import { OrbitControls } from "@react-three/drei"

const ProblemSolving = () => {

    return (
        <Canvas scale = {0.3}>
            <OrbitControls enableZoom={false} autoRotate />
            <Stage environment= 'city' intensity={0.6} scale = {0.3}>
            <Earth />
            </Stage>
          </Canvas>
    )
}

export default ProblemSolving