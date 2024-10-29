import { useState } from "react";

const moovies = [
	{
		name: "The Lord of the Rings",
		img: "public/imgRings.png",
	},
	{
		name: "Saving Private Ryan",
		img: "public/imgRyan.png",
	},
	{
		name: "Star Wars: Episode III – Revenge of the Sith",
		img: "public/imgSith.png",
	},
	{
		name: "Dune",
		img: "public/imgDune.png",
	},
];

const Screen = () => {
	const handleClick = () => {
		const [filmIndex, setFilmIndex] = useState(0);
		setFilmIndex(filmIndex + 1);
	};
	return (
		<>
			<img src="" alt="" />
		</>
	);
};

export default Screen;
