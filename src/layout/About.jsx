import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";
import classes from "./About.module.scss";
import Button from "../components/Button";
const About = () => {
	return (
		<section id="about" className={classes.about}>
			<header
				className={`${classes.heading} u-center-text u-margin-bottom-big`}
			>
				<Heading isAnimated={true} size="2">
					O mechaniźmie
				</Heading>
			</header>

			<div className={classes["flex-container"]}>
				<div className={classes.text}>
					<Heading className="u-margin-bottom-small" size="3">
						Czym jest mechanizm z Antykithiry?
					</Heading>
					<Paragraph>
						Mechanizm z Antykithiry, to starożytny, mechaniczny przyrząd
						obliczeniowy odkryty w 1901 roku na wraku statku z około 60 p.n.e.
						na dnie Morza Egejskiego, koło greckiej wyspy Antikythera.
					</Paragraph>

					<Paragraph>
						Mechanizm z Antykithiry jest uważany za jedno z najważniejszych
						odkryć archeologicznych i jest uznawany za najstarsze znane
						urządzenie obliczeniowe na świecie. Składa się z serii kołowych
						bębnów i trybików, wykonanych z brązu. Przyrząd był zaawansowany
						technologicznie jak na swoje czasy i prawdopodobnie służył do
						przeprowadzania skomplikowanych obliczeń astronomicznych.
					</Paragraph>

					<Paragraph>
						Badania wykazały, że Mechanizm z Antykithiry mógł być używany do
						przewidywania pozycji planet, dat zaćmień słonecznych i księżycowych
						oraz innych zjawisk astronomicznych. Być może mógł również służyć
						jako kalendarz lub do obliczania cykli olimpijskich.
					</Paragraph>
					<Button target="#origin">Pochodzenie &rarr;</Button>
				</div>
				<div className={classes["image-container"]}>
					<img
						src="./mechanizm.jpg"
						className={classes.image}
						alt="mechanizm"
					/>
				</div>
			</div>
		</section>
	);
};
export default About;
