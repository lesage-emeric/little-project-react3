import "./Screen.css";
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
	// const changeImgSrcClick = () => {
	// 	const [filmIndex, setFilmIndex] = useState(0);
	// 	setFilmIndex(filmIndex + 1);
	// };
	return (
		<>
			<img src="public/imgRings.png" alt="" />
		</>
	);
};

export default Screen;
