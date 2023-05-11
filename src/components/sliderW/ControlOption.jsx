import classes from "./ControlOption.module.scss";

const ControlOption = (props) => {
	const isActive = props.isActive;
	const isLoading = props.isLoading;
	return (
		<div
			className={`${classes.control__option} ${isActive ? classes.active : ""} ${
				isLoading ? classes.loading : ""
			}`}
			onClick={props.onClick}
		>
			<span className={classes.text}>{props.children}</span>
		</div>
	);
};

export default ControlOption;
