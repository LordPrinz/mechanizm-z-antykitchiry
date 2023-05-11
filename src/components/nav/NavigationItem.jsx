import { Link } from "react-router-dom";
import classes from "./NavigationItem.module.scss";

const NavigationItem = (props) => {
	const id = props.id;
	const text = props.text;
	const url = props.target;

	let link = (
		<Link to={url} className={classes.navigation__link} onClick={props.onClick}>
			<span>{id < 10 ? `0${id}` : id}</span>
			{text}
		</Link>
	);

	if (url[0] === "/") {
		if (url[1] === "#") {
			link = (
				<a href={url} className={classes.navigation__link} onClick={props.onClick}>
					<span>{id < 10 ? `0${id}` : id}</span>
					{text}
				</a>
			);
		}
	}

	return (
		<li className={`${classes.navigation__item} ${props.className ?? ""}`}>
			{link}
		</li>
	);
};

export default NavigationItem;
