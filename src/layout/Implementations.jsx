import Heading from "../components/Heading";
import Wave from "../components/Wave";
import classes from "./Implementations.module.scss";
import Implementation from "../components/Implementation";

const implementations = [
	{
		img: "https://media.discordapp.net/attachments/657658801863917568/970327850571952128/lego--1.jpg",
		title: "Polski prototyp lego",
		text: "Konstrukcja została złożona przez Marka Mazurkiewicza 19 września 2011 w ramach XV Festiwalu Nauki w Centrum Astronomicznym im. Mikołaja Kopernika.",
	},
	{
		img: "https://media.discordapp.net/attachments/657658801863917568/970326859642470400/xd.jpg",
		title: "Inne repliki i rekonstrukcje",
		text: "",
		isCustom: true,
	},
	{
		img: "",
		title: "Wizualizacja",
		text: "",
		isEmbed: true,
	},
	{
		img: "https://media.discordapp.net/attachments/657658801863917568/970327839591243816/lego--2.png",
		title: "Prototyp Lego",
		text: "Konstrukcja składa się z 1500 klocków lego, 110 kół, i pochłonęła 30 dni pracy. Konstrukcja została stworzona przez Andrew Carol'a w 2010 roku.",
	},
];

const Implementations = () => {
	return (
		<section className={classes.implementations} id="implementations">
			<Wave className={classes.wave} />
			<header
				className={`${classes.heading} u-center-text u-margin-bottom-big`}
			>
				<Heading isAnimated={true} size="2">
					Implementacje
				</Heading>
			</header>
			<div className={classes.implementation__container}>
				{implementations.map((implementation, index) => {
					return (
						<Implementation
							isEmbed={implementation.isEmbed}
							isCustom={implementation.isCustom}
							key={index}
							index={index}
							img={implementation.img}
							title={implementation.title}
							text={implementation.text}
						/>
					);
				})}
			</div>
		</section>
	);
};
export default Implementations;
