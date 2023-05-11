import classes from "./Paragraph.module.scss";

const Paragraph = (props) => {
	return (
		<p
			style={props.style}
			className={`${classes.paragraph} ${props.className ?? ""}`}
		>
			{props.children}
		</p>
	);
};

export default Paragraph;
