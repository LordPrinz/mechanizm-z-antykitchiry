import { Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import Main from "./pages/Main";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Main />} />
			<Route path="about" element={<AboutPage />} />
		</Routes>
	);
};

export default App;
