import Slide from "./Slide";
import classes from "./SliderControler.module.scss";

const SliderControler = (props) => {
	const slide = props.currentSlide;

	return (
		<div className={classes.slider__controler}>
			{props.options.map((option, index) => {
				if (slide === index) {
					return (
						<Slide
							key={index}
							description={option.description}
							img={option.img}
							isCustom={!!option.custom}
						>
							{option.title}
						</Slide>
					);
				}

				return null;
			})}
		</div>
	);
};

export default SliderControler;
