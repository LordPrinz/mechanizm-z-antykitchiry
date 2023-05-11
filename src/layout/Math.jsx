import Heading from "../components/Heading";
import classes from "./Math.module.scss";

const Math = () => {
	return (
		<section className={`${classes.math}`} id="math">
			<header className={`${classes.header} u-center-text u-margin-bottom-big`}>
				<Heading isAnimated={true} size="2" style={{ color: "#ddd" }}>
					Matematyka w Mechaniźmie
				</Heading>
			</header>
			<div className={classes.container}>
				<Heading size="3" className={classes.heading__iteration}>
					Swobodny proces Parmenidesa:
				</Heading>
				<div className={classes.iteration}>
					<i>Iteracja 1: </i>(<span className={classes.blue}>p</span> +{" "}
					<span className={classes.red}>r</span>, <span className={classes.blue}>q</span>{" "}
					+ <span className={classes.red}>s</span>)
				</div>
				<div className={classes.iteration}>
					<i>Iteracja 2: </i>(<span className={classes.blue}>2p</span> +{" "}
					<span className={classes.red}>r</span> ,{" "}
					<span className={classes.blue}>2q</span> +{" "}
					<span className={classes.red}>s</span>), (
					<span className={classes.blue}>p</span> +{" "}
					<span className={classes.red}>2r</span>, <span className={classes.blue}>q</span>{" "}
					+ <span className={classes.red}>2s</span>)
				</div>
				<div className={classes.iteration}>
					<i>Iteracja 3: </i>(<span className={classes.blue}>3p</span> +{" "}
					<span className={classes.red}>r</span> ,{" "}
					<span className={classes.blue}>3q</span> +{" "}
					<span className={classes.red}>s</span>), (
					<span className={classes.blue}>p</span> +{" "}
					<span className={classes.red}>3r</span>, <span className={classes.blue}>q</span>{" "}
					+ <span className={classes.red}>3s</span>)
				</div>
				<div className={classes.iteration}>
					<i>Iteracja 4: </i>(<span className={classes.blue}>4p</span> +{" "}
					<span className={classes.red}>r</span>, <span className={classes.blue}>4q</span>{" "}
					+ <span className={classes.red}>s</span>), (
					<span className={classes.blue}>3p</span> +{" "}
					<span className={classes.red}>2r</span>,{" "}
					<span className={classes.blue}>3q</span> +{" "}
					<span className={classes.red}>2s</span>), (
					<span className={classes.blue}>2p</span> +{" "}
					<span className={classes.red}>3r</span>,{" "}
					<span className={classes.blue}>2q</span> +{" "}
					<span className={classes.red}>3s</span>), (
					<span className={classes.blue}>p</span> +{" "}
					<span className={classes.red}>4r</span>, <span className={classes.blue}>q</span>{" "}
					+ <span className={classes.red}>4s</span>)
				</div>

				<div className={classes.table}>
					<div className={classes.captions}>Planeta</div>
					<div className={classes.captions}>Cykle Synodyczne</div>
					<div className={classes.captions}>Lata</div>
					<div className={classes.captions}>Krotności</div>
					<div className={classes.captions}>Krotności</div>
					<div className={classes.title}>Merkury</div>
					<div className={`${classes.value} ${classes.blue}`}>1513</div>
					<div className={`${classes.value} ${classes.red}`}>480</div>
					<div className={`${classes.value} ${classes.blue}`}>17 &times; 89</div>
					<div className={`${classes.value} ${classes.red}`}>
						2 <sup>5</sup> &times; 3 &times; 5
					</div>
					<div className={classes.title}>Wenus</div>
					<div className={`${classes.value} ${classes.blue}`}>289</div>
					<div className={`${classes.value} ${classes.red}`}>462</div>
					<div className={`${classes.value} ${classes.blue}`}>
						17 <sup>2</sup>
					</div>
					<div className={`${classes.value} ${classes.red}`}>
						2 &times; 3 &times; 7 &times; 11
					</div>
					<div className={classes.title}>Mars</div>
					<div className={`${classes.value} ${classes.blue}`}>133</div>
					<div className={`${classes.value} ${classes.red}`}>344</div>
					<div className={`${classes.value} ${classes.blue}`}>7 &times; 19</div>
					<div className={`${classes.value} ${classes.red}`}>
						2 <sup>2</sup> &times; 71
					</div>
					<div className={classes.title}>Jowisz</div>
					<div className={`${classes.value} ${classes.blue}`}>315</div>
					<div className={`${classes.value} ${classes.red}`}>344</div>
					<div className={`${classes.value} ${classes.blue}`}>
						3 <sup>2</sup> &times; 5 &times; 7
					</div>
					<div className={`${classes.value} ${classes.red}`}>
						2 <sup>3</sup> &times; 43
					</div>
					<div className={classes.title}>Saturn</div>
					<div className={`${classes.value} ${classes.blue}`}>427</div>
					<div className={`${classes.value} ${classes.red}`}>442</div>
					<div className={`${classes.value} ${classes.blue}`}>7 &times; 61</div>
					<div className={`${classes.value} ${classes.red}`}>2 &times; 13 &times; 17</div>
				</div>
			</div>
		</section>
	);
};

export default Math;
