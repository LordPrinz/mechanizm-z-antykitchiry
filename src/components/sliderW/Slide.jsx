import classes from "./Slide.module.scss";
import { useEffect, useState } from "react";

const Slide = (props) => {
	const [isFadeOut, setIsFadeOut] = useState(false);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setIsFadeOut(true);
		}, [9700]);
		return () => {
			clearTimeout(timeout);
			setIsFadeOut(false);
		};
	}, []);

	const normal = (
		<div
			className={`${classes.slide} ${classes.fadeIn} ${
				isFadeOut ? classes.fadeOut : ""
			} ${props.className ?? ""}`}
		>
			<div className={classes.text}>
				{props?.description?.map((description, index) => (
					<div key={index} className={`${classes.description}`}>
						{description}
					</div>
				))}
			</div>
			<div className={classes.img__cover}>
				<img src={`${props.img}`} className={classes.img} alt="Slider" />
			</div>
		</div>
	);

	return props.isCustom ? (
		<div
			className={`${classes.slide} ${classes.fadeIn} ${
				isFadeOut ? classes.fadeOut : ""
			} ${props.className ?? ""}`}
		>
			<div className={classes.img__cover}>
				<img src={`${props.img}`} className={classes.img} alt="Slider" />
			</div>
		</div>
	) : (
		normal
	);
};

export default Slide;
