import classes from "./SourceList.module.scss";
import SourceItem from "./SourceItem";

const sources = [
	{
		name: "Youtube",
		url: "https://www.youtube.com/watch?v=0KpZKPdLBaE&t=2447s&ab_channel=DEX",
	},
	{
		name: "YouTube",
		url: "https://www.youtube.com/watch?v=UDFaAjjWzt8&ab_channel=AMORSCIENTIAE",
	},
	{
		name: "Wikipedia",
		url: "https://pl.wikipedia.org/wiki/Mechanizm_z_Antykithiry",
	},
	{
		name: "Strefa.biz",
		url: "https://strefa.biz/nauka/co-to-jest-mechanizm-z-antykithiry/",
	},
	{
		name: "Frwiki",
		url: "https://pl.frwiki.wiki/wiki/Machine_d%27Anticyth%C3%A8re",
	},
	{
		name: "Dzienniknaukowy",
		url: "https://dzienniknaukowy.pl/czlowiek/naukowcy-odkrywaja-tajemnice-mechanizmu-z-antykithiry",
	},
	{
		name: "ScrollMorele",
		url: "https://scroll.morele.net/technologia/czym-jest-mechanizm-z-antykithiry-do-czego-sluzyl-czy-to-prototyp-komputera/",
	},
	{
		name: "BBC Reel",
		url: "https://www.youtube.com/watch?v=qqlJ50zDgeA&ab_channel=BBCReel",
	},
	{
		name: "WielkaHistoria",
		url: "https://wielkahistoria.pl/mechanizm-z-antykithiry-najbardziej-niezwykle-i-tajemnicze-urzadzenie-starozytnosci/",
	},
	{
		name: "Scientific Reports",
		url: "https://www.nature.com/articles/s41598-021-84310-w",
	},
];

const SourceList = (props) => {
	return (
		<ul className={`${classes.list} ${props.className}`}>
			{sources.map((source, index) => {
				return <SourceItem key={index} name={source.name} url={source.url} />;
			})}
		</ul>
	);
};

export default SourceList;
