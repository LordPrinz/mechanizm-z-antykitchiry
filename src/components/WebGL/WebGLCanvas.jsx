import { OrbitControls, PresentationControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import WebGLModel from "./WebGLModel.jsx";

const WebGLCanvas = () => {
	return (
		<Canvas dpr={[1, 5]} camera={{ fov: 75 }} style={{ position: "absolute" }}>
			<color attach="background" args={["#313131"]} />
			<PresentationControls speed={0.5} global polar={[-0.1, Math.PI / 3]}>
				<Stage environment={"forest"}>
					<WebGLModel scale={0.0001} />
				</Stage>
			</PresentationControls>
			<OrbitControls autoRotate autoRotateSpeed={1} />
		</Canvas>
	);
};

export default WebGLCanvas;
