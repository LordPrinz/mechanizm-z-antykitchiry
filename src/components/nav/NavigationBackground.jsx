import classes from "./NavigationBackground.module.scss";

const NavigationBackground = (props) => {
	return (
		<div
			className={`${classes.navigation__background} ${
				props.isActive && classes.active
			}`}
		>
			&nbsp;
		</div>
	);
};

export default NavigationBackground;
