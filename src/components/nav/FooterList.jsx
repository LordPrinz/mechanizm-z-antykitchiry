import FooterLink from "./FooterLink";
import classes from "./FooterList.module.scss";

const linksData = [
	{
		name: "Wstęp",
		url: "/#",
	},
	{
		name: "O Mechaniźmie",
		url: "/#about",
	},
	{
		name: "Pochodzenie",
		url: "/#origin",
	},
	{
		name: "Budowa",
		url: "/#construction",
	},
	{
		name: "Badania",
		url: "/#research",
	},
	{
		name: "Wizualizacja",
		url: "/#visualization",
	},
	{
		name: "Implementacja",
		url: "/#implementations",
	},
	{
		name: "O Mnie",
		url: "/about",
	},
];

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
