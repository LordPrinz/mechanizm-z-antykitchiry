import classes from "./Logo.module.scss";

const Logo = (props) => {
	const color = props.color;

	let source = "./logo-white.svg";

	if (color === "blue") {
		source = "./logo-blue.svg";
	}

	return (
		<div className={classes["header__logo-box"]}>
			<img src={source} alt="Logo" className={classes.logo} />
		</div>
	);
};

export default Logo;
