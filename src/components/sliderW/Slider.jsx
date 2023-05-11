import Control from "./Control";
import classes from "./Slider.module.scss";
import { useState, useEffect } from "react";
import SliderControler from "./SliderControler";

const options = [
	{
		title: "Przedni talerz",
		description: ["", "Ruch Gwiazd", ""],
		img: "https://media.discordapp.net/attachments/657658801863917568/970327807710347314/mechanizm--front-plate.png",
	},
	{
		title: "Tylny talerz",
		description: [
			"Nazwy miesięcy",
			"Charakteryzacja zaćmień",
			"Glify zaćmienia",
		],
		img: "https://media.discordapp.net/attachments/657658801863917568/970327825938792498/mechanizm--back-plate.png",
	},
	{
		title: "Przednia osłona",
		description: ["", "Cykl planetarny", ""],
		img: "https://media.discordapp.net/attachments/657658801863917568/970327812819001354/mechanizm--front-cover.png",
	},
	{
		title: "Tylna osłona",
		description: [
			"Opis kosmosu",
			"Struktura kalendarza",
			"Cykle słońca i księżca",
		],
		img: "https://media.discordapp.net/attachments/657658801863917568/970327831223607336/mechanizm--back-cover.png",
	},
	{
		title: "Budowa wewnętrzna",
		description: [],
		img: "https://media.discordapp.net/attachments/657658801863917568/970327866665492550/budowa.png",
		custom: true,
	},
];

const Slider = (props) => {
	const [currentSlide, setCurrentSlide] = useState(0);

	const changeSlide = (index) => {
		if (currentSlide === index) {
			return;
		}
		setCurrentSlide(index);
	};

	useEffect(() => {
		const timeout = setTimeout(() => {
			setCurrentSlide((prevState) => {
				if (prevState + 1 === options.length) {
					return 0;
				}
				return prevState + 1;
			});
		}, 10000);
		return () => {
			clearTimeout(timeout);
		};
	}, [currentSlide]);

	return (
		<div className={`${classes.slider} ${props.className} `}>
			<Control
				options={options}
				currentSlide={currentSlide}
				changeSlide={changeSlide}
				loadingSlide={
					options.length === currentSlide + 1 ? 0 : currentSlide + 1
				}
			/>

			<SliderControler options={options} currentSlide={currentSlide} />
		</div>
	);
};

export default Slider;
