import Heading from "../components/Heading";
import TechnologiesList from "../components/TechnologiesList";
import Wave from "../components/Wave";
import classes from "./Technologies.module.scss";

const Technologies = () => {
	return (
		<section className={classes.technologies} id="technologies">
			<header className={`${classes.header} u-center-text u-margin-bottom-big`}>
				<Heading size="2" isAnimated={true} className={"u-margin-bottom-medium"}>
					Technologie
				</Heading>
			</header>
			<TechnologiesList />
			<Wave className={classes.wave} />
		</section>
	);
};

export default Technologies;
