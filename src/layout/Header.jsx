import Button from "../components/Button";
import Heading from "../components/Heading";
import Wave from "../components/Wave";
import classes from "./Header.module.scss";
import Logo from "../components/Logo";

const Header = () => {
	return (
		<header className={classes.header}>
			<Logo />
			<Heading className={classes["heading-primary"]} style={{ textAlign: "center" }}>
				<span className={classes["heading-primary-main"]}>Mechanizm</span>
				<span className={classes["heading-primary-sub"]}>z antykithiry</span>
			</Heading>
			<Button animation={true} type="white" target="#about">
				Co to takiego?
			</Button>
			<Wave className={classes.wave} fill="#eee" />
		</header>
	);
};

export default Header;
