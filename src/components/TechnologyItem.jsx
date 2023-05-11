import classes from "./TechnologyItem.module.scss";

const TechnologyItem = (props) => {
	return (
		<li className={classes.item}>
			<a className={classes.link} href={props.url}>
				<img className={classes.img} src={props.image} alt={props.name} />
				<h3 className={`${classes.heading} u-margin-bottom-small`}>
					{props.name}
				</h3>
				<p>{props.children}</p>
			</a>
		</li>
	);
};

export default TechnologyItem;
