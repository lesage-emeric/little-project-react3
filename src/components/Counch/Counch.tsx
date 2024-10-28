import "./Counch.css";

const imageCounch = {
	src: "public/imgCounch.png",
	name: "Canapé en cuir marron",
};

const Counch = () => {
	return (
		<>
			<a href="https://www.ikea.com/fr/fr/" target="_blank" rel="noreferrer">
				<img
					className="img-counch"
					src={imageCounch.src}
					alt={imageCounch.name}
				/>
			</a>
		</>
	);
};

export default Counch;
