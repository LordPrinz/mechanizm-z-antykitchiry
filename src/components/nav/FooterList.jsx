import linksData from "./../../assets/data/navigation.json";
import FooterLink from "./FooterLink";
import classes from "./FooterList.module.scss";

const FooterList = () => {
	return (
		<ul className={classes.footer__list}>
			{linksData.map((linkData, index) => (
				<FooterLink key={index} url={linkData.url} name={linkData.name} />
			))}
		</ul>
	);
};

export default FooterList;
