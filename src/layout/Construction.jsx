import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";
import classes from "./Construction.module.scss";

const Construction = () => {
	return (
		<section className={classes.construction} id="construction">
			<header
				className={`${classes.heading} u-center-text u-margin-bottom-medium`}
			>
				<Heading isAnimated={true} size="2" style={{ color: "#ddd" }}>
					Budowa mechanizmu
				</Heading>
			</header>
			<div className={classes.container}>
				<Heading
					size="3"
					style={{ color: "#ddd", fontSize: "2.5rem" }}
					className={`${classes["heading--1"]} `}
				>
					Dane techniczne
				</Heading>
				<Paragraph
					className={`${classes.paragraph} ${classes["text--1"]} u-margin-bottom-medium`}
				>
					Mechanizm złożony jest z 37 kół zębatych z brązu, o średnicy od 1 cm
					do 17 cm. Ilość zębów na każdym kole było liczbą pierwszą. Koła były
					napędzane za pomocą korby z boku. Urządzenie mierzyło jedynie 33 cm
					wysokości, 17 cm szerokości i 9 cm głębokości. Było zawieszone na
					drwenianej ramie. Na tarczach mechanizmu były wyryte liczne
					inskrypcje.
				</Paragraph>
				<img
					src="./mechanizm--4.png"
					className={classes["img--1"]}
					alt="mechanizm"
				/>

				<Heading
					size="3"
					style={{ color: "#ddd", fontSize: "2.5rem" }}
					className={`${classes["heading--2"]} `}
				>
					Działanie
				</Heading>
				<Paragraph
					className={`${classes.paragraph} ${classes["text--2"]} u-margin-bottom-medium`}
				>
					Tarcza umieszczona z przodu pokazywała ruch Słońca, Księżyca i planet
					na tle zodiaku oraz kalendarza egipskiego z uwzględnieniem roku
					przestępnego. Mechanizm potrafił również obliczyć dzień, w którym
					wystpąpi zaćmienie Księżyca. Urządzenie było tak dokładne, że
					potrafiło również odtworzyć takie szczegóły, jak nierównomierny ruch
					księżyca na niebie. Ten starożytny komputer pozwalał przewidywać
					momenty wschodów i zachodów ważniejszych dla Greków gwiazd i
					gwiazdozbiorów oraz pozycję niektórych gwiazd.
				</Paragraph>
			</div>
		</section>
	);
};

export default Construction;
