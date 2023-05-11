import classes from "./SourceItem.module.scss";

const SourceItem = (props) => {
	return (
		<li className={classes.item}>
			<a href={props.url} className={classes.link}>
				{props.name}
			</a>
		</li>
	);
};

export default SourceItem;
