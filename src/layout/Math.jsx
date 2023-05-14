import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";
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
				<Paragraph>
					Mechanizm z Antykithiry jest bardzo złożony. Jeśli chodzi o koncepcje
					matematyczne, to można wymienić trygonometrię, teorię liczb, geometrię
					i algebrę. Trygonometria była używana do obliczania kątów i pozycji
					ciał niebieskich. Teoria liczb służyła do dokładnego określenia
					długości okresów ruchów planet. Geometria była wykorzystywana w celu
					zaprojektowania części mechanizmu np. kół zębatych. Algebra była
					potrzebna do wykonywania skomplikowanych obliczeń.
				</Paragraph>
				<Paragraph className="u-margin-bottom-big">
					Mechanizm został zbudowany w oparciu o wiedzę matematyczną i
					astronomiczną uczonych z Babilonu oraz teorie starożytnych Greków.
					Ważnym elementem była relacja okresowa planet. Ilość zębów w danym
					kole zębatych była określona poprzez zależności okresowe planet.
					Relacje te były odkryte głównie przez Babilończków. Przykładem
					zależności, która została odkryta w późniejszym czasie jest relacja
					Wenus (<span className={classes.blue}>289</span>
					{", "}
					<span className={classes.red}>462</span>) oraz Saturn (
					<span className={classes.blue}>427</span>
					{", "}
					<span className={classes.red}>442</span>). <br />
					Zależność okresową opisuje się jako np.{" "}
					<span className={classes.blue}>57 cykli synodycznych</span> w ciągu{" "}
					<span className={classes.red}>59 lat</span> dla Saturna, czyli (
					<span className={classes.blue}>57</span>
					{", "}
					<span className={classes.red}>59</span>). W tym przypadku liczby nie
					zostały jeszcze poddane swobodnemu procesowi Parmanidesa, dlatego też
					podana zależność okresowa, na pierwszy rzut oka może wydawać się inna
					od tej podanej wcześniej w tekście. Relacje te były odtworzone dzięki
					rozbiciu liczb na czynniki i zautomatyzowaniu przy pomocy kół zębatych
					oraz przekładni. Z uwagi na potrzebę dopasowania się do geometrii
					układu epicyklicznego, koła mechanizmów muszą mieć mniej niż 100
					zębów. Ważnym elementem podczas projektowania mechanizmu odegrała
					znajomość relacji okresowych oraz krotności liczb wchodzących w jej
					skład, ponieważ na tej podstawie stworzono relacje kół zębatych w
					mechaniźmie. <br />
					<br />
					<b>Cykl synodyczny </b> - czas po którym dwa ciała niebieskie
					powracają do tej samej pozycji względem słońca.
				</Paragraph>

				<Heading size="3" className={classes.heading__iteration}>
					Swobodny proces Parmenidesa:
				</Heading>
				<div className={classes.iteration}>
					<span className={classes.blue}>p - cykle synodyczne</span> <br />
					<span className={classes.red}>
						r - cykle synodyczne obliczone za czasów epoki hellenistycznej
					</span>
					<br /> <span className={classes.blue}>q - ilość lat</span> <br />
					<span className={classes.red}>
						s - ilość lat obliczonych za czasów epoki hellenistycznej
					</span>{" "}
					<br />
					<br />
					<i>Iteracja 1: </i>(<span className={classes.blue}>p</span> +{" "}
					<span className={classes.red}>r</span>,{" "}
					<span className={classes.blue}>q</span> +{" "}
					<span className={classes.red}>s</span>)
				</div>
				<div className={classes.iteration}>
					<i>Iteracja 2: </i>(<span className={classes.blue}>2p</span> +{" "}
					<span className={classes.red}>r</span> ,{" "}
					<span className={classes.blue}>2q</span> +{" "}
					<span className={classes.red}>s</span>), (
					<span className={classes.blue}>p</span> +{" "}
					<span className={classes.red}>2r</span>,{" "}
					<span className={classes.blue}>q</span> +{" "}
					<span className={classes.red}>2s</span>)
				</div>
				<div className={classes.iteration}>
					<i>Iteracja 3: </i>(<span className={classes.blue}>3p</span> +{" "}
					<span className={classes.red}>r</span> ,{" "}
					<span className={classes.blue}>3q</span> +{" "}
					<span className={classes.red}>s</span>), (
					<span className={classes.blue}>p</span> +{" "}
					<span className={classes.red}>3r</span>,{" "}
					<span className={classes.blue}>q</span> +{" "}
					<span className={classes.red}>3s</span>)
				</div>
				<div className={classes.iteration}>
					<i>Iteracja 4* : </i>(<span className={classes.blue}>4p</span> +{" "}
					<span className={classes.red}>r</span>,{" "}
					<span className={classes.blue}>4q</span> +{" "}
					<span className={classes.red}>s</span>), (
					<span className={classes.blue}>3p</span> +{" "}
					<span className={classes.red}>2r</span>,{" "}
					<span className={classes.blue}>3q</span> +{" "}
					<span className={classes.red}>2s</span>), (
					<span className={classes.blue}>2p</span> +{" "}
					<span className={classes.red}>3r</span>,{" "}
					<span className={classes.blue}>2q</span> +{" "}
					<span className={classes.red}>3s</span>), (
					<span className={classes.blue}>p</span> +{" "}
					<span className={classes.red}>4r</span>,{" "}
					<span className={classes.blue}>q</span> +{" "}
					<span className={classes.red}>4s</span>)
				</div>
				<Heading size="3" className={classes.heading__iteration}>
					Przykładowe obliczanie relacji okresowych dla Saturna:
				</Heading>
				<div className={classes.table}>
					<div className={classes.title}>Inicjalizacja</div>
					<div className={`${classes.value} ${classes.blue}`}>p = 57</div>
					<div className={`${classes.value} ${classes.red}`}>q = 59</div>
					<div className={`${classes.value} ${classes.blue}`}>r = 256</div>
					<div className={`${classes.value} ${classes.red}`}>s = 265</div>
					<div className={classes.title}>Iteracja 1</div>
					<div className={`${classes.value} `}>p + r = 313</div>
					<div className={`${classes.value} `}>q + s = 324 </div>
					<div className={`${classes.value} `}></div>
					<div className={`${classes.value} `}> </div>
					<div className={classes.title}>Iteracja 2</div>
					<div className={`${classes.value}`}>2p + r = 370</div>
					<div className={`${classes.value} `}>2q + s = 383 </div>
					<div className={`${classes.value} `}>p + 2r = 569</div>
					<div className={`${classes.value} `}>q + 2s = 589</div>
					<div className={classes.title}>Iteracja 3</div>
					<div className={`${classes.value} ${classes.blue}`}>3p + r = 427</div>
					<div className={`${classes.value} ${classes.red}`}>3q + s = 442</div>
					<div className={`${classes.value}`}>p + 3r = 825</div>
					<div className={`${classes.value} `}>q + 3s = 854 </div>
				</div>
				<Heading size="3" className={classes.heading__iteration}>
					Relacje okresowe w mechaniźmie z Antykithiry:
				</Heading>
				<div className={classes.table}>
					<div className={classes.captions}>Planeta</div>
					<div className={classes.captions}>Cykle Synodyczne</div>
					<div className={classes.captions}>Lata</div>
					<div className={classes.captions}>Krotności liczb</div>
					<div className={classes.captions}>Krotności liczb</div>
					<div className={classes.title}>Merkury</div>
					<div className={`${classes.value} ${classes.blue}`}>1513</div>
					<div className={`${classes.value} ${classes.red}`}>480</div>
					<div className={`${classes.value} ${classes.blue}`}>
						17 &times; 89
					</div>
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
					<div className={`${classes.value} ${classes.red}`}>
						2 &times; 13 &times; 17
					</div>
				</div>
			</div>
		</section>
	);
};

export default Math;
