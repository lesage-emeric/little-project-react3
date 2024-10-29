import { useState } from "react";

const Cinema = [
	{
		name: "The Lord of the Rings",
		img: "public/imgRings.png",
	},
	// {
	// 	name: "Saving Private Ryan",
	// 	img: "public/imgRyan.png",
	// },
	// {
	// 	name: "Star Wars: Episode III – Revenge of the Sith",
	// 	img: "public/imgSith.png",
	// },
	// {
	// 	name: "Dune",
	// 	img: "public/imgDune.png",
	// },
];

const Screen = () => {
	const [moovie, setMoovie] = useState(0);

	return (
		<>
			<ul>
				{Cinema.map((film) => (
					<li>
						<img key={film.name} src={film.img} alt={film.name} />
					</li>
				))}
			</ul>
		</>
	);
};

export default Screen;
