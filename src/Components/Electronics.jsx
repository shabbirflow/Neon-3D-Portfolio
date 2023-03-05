import { Stage } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import Circuit from "./Circuit"
import { OrbitControls } from "@react-three/drei"

const Electronics = () => {

    return (
        <Canvas>
            <OrbitControls enableZoom={false} autoRotate />
            <Stage environment= 'city' intensity={0.6} >
            <Circuit />
            </Stage>
          </Canvas>
    )
}

export default Electronics