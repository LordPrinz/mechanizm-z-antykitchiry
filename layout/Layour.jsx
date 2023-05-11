import classes from "./Layout.module.scss";

const Layout = (props) => {
	return <div className={classes.layout}>{props.children}</div>;
};

export default Layout;
