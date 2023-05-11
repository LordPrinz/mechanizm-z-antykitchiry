import classes from "./TechnologiesList.module.scss";
import TechnologyItem from "./TechnologyItem";

const data = [
	{
		name: "React.js",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
		url: "https://pl.reactjs.org/",
		description:
			"Javascriptowa biblioteka służąca do tworzenia interfejsów użytkownika.",
	},
	{
		name: "SCSS",
		image: "https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg",
		url: "https://sass-lang.com/",
		description: "Potężne rozszerzenie CSS.",
	},
	{
		name: "react-scroll-parallax",
		image: "https://react-scroll-parallax.damnthat.tv/img/logo.png",
		url: "https://react-scroll-parallax.damnthat.tv/docs/intro",
		description: "Biblioteka React.js ułatwiająca tworzenie efektu parallax.",
	},
	{
		name: "react-router",
		image:
			"https://cdn.pellerex.com/public/ecosystem/web/content/web-spa-routing/pellerex-spa-routing.png",
		url: "https://reactrouter.com/",
		description:
			"Biblioteka React.js umożliwiająca przechodznie między podstronami.",
	},
	{
		name: "Vite",
		image: "https://vitejs.dev/logo.svg",
		url: "https://vitejs.dev/",
		description:
			"Przyszłościowe narzędzie przyspieszające proces pisania stron.",
	},
	{
		name: "JavaScript",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png",
		url: "https://www.javascript.com/",
		description: "Popularny i potężny język programowania.",
	},
	{
		name: "Visual Studio Code",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png",
		url: "https://code.visualstudio.com/",
		description: "Popularny  edytor kodu źródłowego.",
	},
	{
		name: "Gimp",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/The_GIMP_icon_-_gnome.svg/1024px-The_GIMP_icon_-_gnome.svg.png",
		url: "https://www.gimp.org/",
		description: "Darmowy edytor graficzny.",
	},
	{
		name: "Figma",
		image: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
		url: "https://www.figma.com/",
		description: "Darmowe narzędzie do projektowania UI użytkownika.",
	},
];

const TechnologiesList = () => {
	return (
		<ul className={classes.list}>
			{data.map((element, index) => {
				return (
					<TechnologyItem
						key={index}
						image={element.image}
						url={element.url}
						name={element.name}
					>
						{element.description}
					</TechnologyItem>
				);
			})}
		</ul>
	);
};

export default TechnologiesList;
