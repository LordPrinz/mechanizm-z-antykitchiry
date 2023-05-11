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
						Mechanizm z Antykithiry to tajemniczy, starożytny przyrząd służący
						do obliczania pozycji ciał niebieskich. Mechanizm powstał ponad 2000
						lat temu. Był on najbardziej złożonym mechanizmem do czasów
						XVII-wiecznych zegarów. Autor tego dzieła techniki nie jest jeszcze
						znany. Ale z odczytu inskrypcji wykonanych w brązie wynika, że autor
						miał świetną znajomość astromii i matematyki.
					</Paragraph>

					<Paragraph>
						Mechanizm mimo, że nie przypomina dzisiejszego komputera to spełniał
						podobne funkcje - liczył. Mechanizm z Antykithiry często określa się
						mianem pierwszego komputera lub starożytnego komputera. Obiekt łączy
						w sobie wiedzę greckich, egipskich i babilońskich myślicieli.
						Badania tego mechanizmu <b>wciąż</b> się nie zakończyły. Na zdjęciu
						obok można zobaczyć największy kawałek tego niezwykłego urządzenia.
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
