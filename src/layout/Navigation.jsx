import { useState } from "react";
import Nav from "../components/nav/Nav";
import NavigationBackground from "../components/nav/NavigationBackground";
import NavigationButton from "../components/nav/NavigationButton";

const Navigation = () => {
	const [isActive, setIsActive] = useState(false);

	const toggleNavigation = () => {
		setIsActive((prevState) => {
			return !prevState;
		});
	};

	return (
		<>
			<NavigationButton isActive={isActive} onClick={toggleNavigation} />
			<NavigationBackground isActive={isActive} />
			<Nav onClick={toggleNavigation} isActive={isActive} />
		</>
	);
};

export default Navigation;
