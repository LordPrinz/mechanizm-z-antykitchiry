import { useGLTF } from "@react-three/drei";

const WebGLModel = (props) => {
	const { scene } = useGLTF("/mechanizm3d.glb");

	return (
		<>
			<primitive object={scene} {...props} />
			<perspectiveCamera />
		</>
	);
};

export default WebGLModel;
