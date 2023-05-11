import classes from "./Control.module.scss";
import ControlOption from "./ControlOption";
const Control = (props) => {
	return (
		<div className={classes.control}>
			{props.options.map((option, index) => {
				return (
					<ControlOption
						key={index}
						index={index}
						onClick={props.changeSlide.bind(null, index)}
						isActive={index === props.currentSlide}
						isLoading={props.loadingSlide === index}
					>
						{option.title}
					</ControlOption>
				);
			})}
		</div>
	);
};

export default Control;
