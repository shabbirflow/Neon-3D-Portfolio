import { Stage } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import Cppmodel from "./Cppmodel"
import { OrbitControls } from "@react-three/drei"

const Devlopment = () => {

    return (
        <Canvas>
            <OrbitControls enableZoom={false} autoRotate />
            <Stage environment= 'city' intensity={0.6} >
            <Cppmodel />
            </Stage>
          </Canvas>
    )
}

export default Devlopment