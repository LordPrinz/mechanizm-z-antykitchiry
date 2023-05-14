import Button from "../components/Button";
import Heading from "../components/Heading";
import Logo from "../components/Logo";
import Paragraph from "../components/Paragraph";
import Wave from "../components/Wave";
import classes from "./AboutMe.module.scss";
const AboutMe = () => {
	return (
		<section className={classes.aboutMe}>
			<Logo color="blue" />
			<div className={classes.text}>
				<header className={`${classes.heading} u-margin-bottom-medium`}>
					<Heading size={2} isAnimated={true}>
						O Autorze
					</Heading>
				</header>
				<Paragraph className={`u-margin-bottom-big`}>
					Nazywam się Oskar Płaziński, mam 19 lat. Uczę się w 4 klasie technikum
					o kierunku programista w ZSTI Gliwice Technikum nr 1.
					<br />
					Uwielbiam programować i grać na pianinie. Moim ulubionym językiem
					programowania jest Typescript / JavaScript. Bardzo często używam tych
					języków do tworzenia aplikacji internetowych, serwerów, botów,
					aplikacji mobilnych oraz aplikacji desktopowych.
					<br />
					Chciałbym się dalej rozwijać i nabierać doświadczenia w tej branży.
				</Paragraph>
				<Heading className="u-margin-bottom-small" size="3">
					Dlaczego Mechanizm z Antykithiry?
				</Heading>
				<Paragraph>
					Wybrałem temat związany z Mechanizmem z Antykithiry, ponieważ myślę,
					że ta tematyka jest stosunkowo mało popularna, a tworząc tę stronę
					miałem na celu w sposób przystępny, kolorowy i ciekawy przedstawić
					koncept tego niezwykłego urządzenia.
				</Paragraph>
				<Button className={`${classes.btn}`} target="#technologies">
					Technologie &rarr;
				</Button>
			</div>
			<div className={classes.photo}>
				<div className={classes.image__cover}></div>
			</div>
			<Wave className={classes.wave} />
		</section>
	);
};

export default AboutMe;
