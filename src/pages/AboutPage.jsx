import AboutMe from "../layout/AboutMe";
import Footer from "../layout/Footer";
import Navigation from "../layout/Navigation";
import Source from "../layout/Source";
import Technologies from "../layout/Technologies";
import { useEffect } from "react";

const AboutPage = () => {
	useEffect(() => {
		window.scrollTo({ top: 0 });
	}, []);

	return (
		<>
			<Navigation />
			<AboutMe />
			<Technologies />
			<Source />
			<Footer />
		</>
	);
};

export default AboutPage;
