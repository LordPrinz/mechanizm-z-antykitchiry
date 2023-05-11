import { useParallax } from "react-scroll-parallax";
import Paragraph from "../components/Paragraph";
import Heading from "../components/Heading";
import Wave from "../components/Wave";
import classes from "./Origin.module.scss";

const Origin = () => {
	const parallax = useParallax({
		translateY: [0, 500],
	});

	const shipParallax = useParallax({
		translateX: [-150, 250],
		translateY: [-80, -80],
	});

	return (
		<section id="origin" className={classes.origin}>
			<Wave className={classes.wave} fill="#eee" />

			<div className={classes.sky}>
				<header
					ref={parallax.ref}
					className={`${
						classes.heading ?? ""
					} u-center-text u-margin-bottom-big`}
				>
					<Heading isAnimated={true} size="2" style={{ color: "white" }}>
						Pochodzenie
					</Heading>
				</header>
			</div>

			<div className={classes.main}>
				<img src="./rock.png" className={classes["rock-img"]} alt="rock" />

				<img
					ref={shipParallax.ref}
					src="./ship.png"
					className={classes["ship-img"]}
					alt="ship"
				/>

				<div className={classes["water-overlay"]}>
					<img src="./water.png" className={classes["water-img"]} alt="water" />
				</div>

				<div className={classes.text}>
					<Heading
						size="3"
						className="u-margin-bottom-small"
						style={{ color: "white", fontSize: "2.5rem" }}
					>
						Czasy starożytne
					</Heading>
					<Paragraph className="u-margin-bottom-big">
						Mechanizm powstał na Greckiej wyspie Antykithira przez nieznanego
						wybitnego uczonego. Uznaje się, że podczas Rzymskiej inwazji na
						Grecję mechanizm wraz z wieloma dziełami sztuki został skradziony.
						Niestety podczas powrotu rzymskiej galery statek przewożący łupy
						zatonął na skutek sztormu.
					</Paragraph>

					<Heading
						size="3"
						className="u-margin-bottom-small"
						style={{ color: "white", fontSize: "2.5rem" }}
					>
						Pierwszy kontakt
					</Heading>
					<Paragraph>
						Mechanizm odkryto przypadkiem. W 1900 roku grecki nurek Elias
						Stadiato podczas połowów gąbek w okolicy wyspy Antykithira na
						wysokości 42m zauważył wrak statku handlowego. Po podpłynięciu
						bliżej ujrzał mnówstwo Greckich rzeźb z marmuru i brąu. Była to
						część zatopionego skarbu antycznej Grecji. Nurkowie ocalili
						przepiękne zabytki antycznej Grecji. Jak się później okazało,
						najbardziej drogocennym elementem skarbu był kawałek brązu, który w
						1902 rozpadł się na kilka różnych skorodowanych brył. Wtedy naukowcą
						ukazał się układ kółek zębatch.
					</Paragraph>
				</div>

				<div className={classes["sand-overlay"]}>
					<img src="./sand.png" className={classes["sand-img"]} alt="sand" />
					<img
						src="./spongebob_house.png"
						className={classes["spongebob-img"]}
						alt="spongebob house"
					/>
					<img
						src="./ship_wreck"
						className={classes["wreck-img"]}
						alt="ship wreck"
					/>
				</div>
			</div>
		</section>
	);
};

export default Origin;
