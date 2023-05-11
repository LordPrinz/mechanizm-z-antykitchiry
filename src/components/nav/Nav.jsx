import classes from "./Nav.module.scss";
import NavigationList from "./NavigationList";
import linksData from "./../../assets/data/navigation.json";

const Nav = (props) => {
	return (
		<nav
			className={`${classes.navigation__nav} ${props.isActive && classes.active}`}
		>
			<NavigationList linksData={linksData} onClick={props.onClick} />
		</nav>
	);
};

export default Nav;
