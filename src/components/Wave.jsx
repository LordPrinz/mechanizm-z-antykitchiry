const Wave = (props) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className={props.className}
			style={props.style}
			viewBox="0 0 1440 320"
			preserveAspectRatio="none"
		>
			<path
				fill={props.fill ?? "#262626"}
				fillOpacity={props.fillOpacity ?? "1"}
				d="M0,224L48,240C96,256,192,288,288,282.7C384,277,480,235,576,218.7C672,203,768,213,864,202.7C960,192,1056,160,1152,165.3C1248,171,1344,213,1392,234.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
			></path>
		</svg>
	);
};

export default Wave;
