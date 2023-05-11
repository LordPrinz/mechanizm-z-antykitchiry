import classes from "./NavigationButton.module.scss";

const NavigationButton = (props) => {
	return (
		<button className={classes.navigation__button} onClick={props.onClick}>
			<span
				className={`${classes.navigation__icon} ${
					props.isActive ? classes.active : ""
				}`}
			>
				&nbsp;
			</span>
		</button>
	);
};

export default NavigationButton;
