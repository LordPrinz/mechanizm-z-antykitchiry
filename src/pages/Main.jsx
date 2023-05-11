import useDocumentTitle from "../hooks/useDocumentTitle";
import About from "../layout/About";
import Construction from "../layout/Construction";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import Implementations from "../layout/Implementations";
import Layout from "../layout/Layout";
import Math from "../layout/Math";
import Navigation from "../layout/Navigation";
import Origin from "../layout/Origin";
import Research from "../layout/Research";
import Visualization from "../layout/Visualization";

const Main = () => {
	const [documentTitle, setDocumentTitle] = useDocumentTitle(
		"Mechanizm z Antykithiry"
	);

	return (
		<Layout>
			<Navigation />
			<Header />
			<About />
			<Origin />
			<Construction />
			<Math />
			<Research />
			<Visualization />
			<Implementations />
			<Footer />
		</Layout>
	);
};

export default Main;
