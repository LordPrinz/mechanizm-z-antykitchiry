import NavigationItem from "./NavigationItem";
import classes from "./NavigationList.module.scss";

const NavigationList = (props) => {
	const linksData = props.linksData;
	return (
		<ul className={classes.navigation__list}>
			{linksData.map((linkData, index) => (
				<NavigationItem
					onClick={props.onClick}
					key={index + 1}
					id={index + 1}
					target={linkData.url}
					text={linkData.name}
				/>
			))}
		</ul>
	);
};

export default NavigationList;
