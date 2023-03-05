import { Stage } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import Atom from "./Atom"
import { OrbitControls } from "@react-three/drei"

const WebDesign = () => {

    return (
        <Canvas>
            <OrbitControls enableZoom={false} autoRotate />
            <Stage environment= 'city' intensity={0.6} >
            <Atom />
            </Stage>
          </Canvas>
    )
}

export default WebDesign;