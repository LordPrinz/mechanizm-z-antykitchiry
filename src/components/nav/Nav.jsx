import classes from "./Nav.module.scss";
import NavigationList from "./NavigationList";
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

const Nav = (props) => {
	return (
		<nav
			className={`${classes.navigation__nav} ${
				props.isActive && classes.active
			}`}
		>
			<NavigationList linksData={linksData} onClick={props.onClick} />
		</nav>
	);
};

export default Nav;
