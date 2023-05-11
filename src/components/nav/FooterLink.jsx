import { Link } from "react-router-dom";
import classes from "./FooterLink.module.scss";

const FooterLink = (props) => {
	const url = props.url;
	const name = props.name;
	let link = (
		<Link to={url} className={classes.footer__link}>
			{name}
		</Link>
	);

	if (url[0] === "/") {
		if (url[1] === "#") {
			link = (
				<a href={url} className={classes.footer__link}>
					{name}
				</a>
			);
		}
	}

	return <li className={classes.footer__item}>{link}</li>;
};

export default FooterLink;
