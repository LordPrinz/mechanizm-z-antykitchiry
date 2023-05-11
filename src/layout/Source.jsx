import Heading from "../components/Heading";
import SourceList from "../components/SourceList";
import classes from "./Source.module.scss";

const Source = () => {
	return (
		<div className={classes.source} id="source">
			<header className={`${classes.header} u-center-text u-margin-bottom-medium`}>
				<Heading size="2" isAnimated={true}>
					Źródła
				</Heading>
			</header>

			<SourceList className={classes.list} />
		</div>
	);
};

export default Source;
