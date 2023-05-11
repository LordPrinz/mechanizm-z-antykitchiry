import classes from "./Button.module.scss";

const Button = (props) => {
	const type = props.type ?? "text";
	const target = props.target;
	const animation = props.animation;

	let className;

	if (type === "white") {
		className = `${classes.btn} ${classes["btn--white"]} ${
			animation && classes["btn--animated"]
		} ${props.className ?? ""}`;
	}
	if (type === "text") {
		className = `${classes["btn-text"]} ${props.className ?? ""}`;
	}

	const component = target ? (
		<a href={target} className={className} style={props.style}>
			{props.children}
		</a>
	) : (
		<button type="button" className={className} style={props.style}>
			{props.children}
		</button>
	);

	return component;
};

export default Button;
