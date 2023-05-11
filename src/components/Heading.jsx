import classes from "./Heading.module.scss";

const Heading = (props) => {
	const content = props.children;
	const size = props.size ?? 1;
	const isAnimated = props.isAnimated;

	if (size < 1 || size > 6) {
		throw new Error("Invalid size!");
	}

	switch (+size) {
		case 1:
			return (
				<h1
					style={props.style}
					className={`${classes.heading ?? ""} ${classes["heading--1"] ?? ""} ${
						isAnimated ? classes.animation : ""
					} ${props.className ?? ""}`}
				>
					{content}
				</h1>
			);
		case 2:
			return (
				<h2
					style={props.style}
					className={`${classes.heading ?? ""} ${classes["heading--2"] ?? ""} ${
						isAnimated ? classes.animation : ""
					} ${props.className ?? ""}`}
				>
					{content}
				</h2>
			);
		case 3:
			return (
				<h3
					style={props.style}
					className={`${classes.heading ?? ""} ${classes["heading--3"] ?? ""} ${
						isAnimated ? classes.animation : ""
					} ${props.className ?? ""}`}
				>
					{content}
				</h3>
			);
		case 4:
			return (
				<h4
					style={props.style}
					className={`${classes.heading ?? ""} ${classes["heading--4"] ?? ""} ${
						isAnimated ? classes.animation : ""
					} ${props.className ?? ""}`}
				>
					{content}
				</h4>
			);
		case 5:
			return (
				<h5
					style={props.style}
					className={`${classes.heading ?? ""} ${classes["heading--5"] ?? ""} ${
						isAnimated ? classes.animation : ""
					} ${props.className ?? ""}`}
				>
					{content}
				</h5>
			);
		case 6:
			return (
				<h6
					style={props.style}
					className={`${classes.heading ?? ""} ${classes["heading--6"] ?? ""} ${
						isAnimated ? classes.animation : ""
					} ${props.className ?? ""}`}
				>
					{content}
				</h6>
			);
		default:
			throw new Error("Unknown heading size!");
	}
};

export default Heading;
