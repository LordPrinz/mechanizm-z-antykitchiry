import Heading from "../components/Heading";
import WebGLCanvas from "../components/WebGL/WebGLCanvas";
import Slider from "../components/sliderW/Slider";
import classes from "./Visualization.module.scss";

const Visualization = () => {
	return (
		<section className={classes.visualization} id="visualization">
			<header
				className={`${classes.heading} u-center-text u-margin-bottom-medium`}
			>
				<Heading isAnimated={true} size="2" style={{ color: "#ddd" }}>
					Wizualizacja
				</Heading>
			</header>

			<Slider className={classes.slider} />

			<header
				className={`${classes.heading} u-center-text u-margin-bottom-medium`}
			>
				<Heading isAnimated={true} size="2" style={{ color: "#ddd" }}>
					Wizualizacja 3D
				</Heading>
			</header>

			<div className={classes.canvas__container}>
				<WebGLCanvas />
			</div>
		</section>
	);
};

export default Visualization;
