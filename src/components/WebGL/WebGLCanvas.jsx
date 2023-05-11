import { PresentationControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import WebGLModel from "./WebGLModel.jsx";

const WebGLCanvas = () => {
	return (
		<Canvas dpr={[1, 5]} camera={{ fov: 100 }} style={{ position: "absolute" }}>
			<color attach="background" args={["#101010"]} />
			<PresentationControls speed={1.5} global polar={[-0.1, Math.PI / 4]}>
				<Stage>
					<WebGLModel scale={0.01} />
				</Stage>
			</PresentationControls>
		</Canvas>
	);
};

export default WebGLCanvas;
