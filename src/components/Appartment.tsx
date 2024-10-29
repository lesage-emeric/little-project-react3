import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const Appartment = () => {
	const objects = [
		{
			name: "TV",
			imgSrc:
				"public/pngtree-flat-screen-tv-transparent-png-free-clipart-png-image_5190594-removebg-preview.png",
			url: "https://www.tf1.fr/",
		},

		{
			name: "Bookshelf",
			imgSrc: "public/imgBookshelf.png",
			url: "https://wwww.amazon.com/",
		},

		{
			name: "Counch",
			imgSrc: "public/imgCounch.png",
			url: "https://www.ikea.com/fr/fr/",
		},
		{
			name: "Table",
			imgSrc: "public/imgFlower.png",
			url: "https://www.lejardindesfleurs.com/",
		},
		{
			name: "Kitchen",
			imgSrc: "public/imgFridge.png",
			url: "https://www.chronodrive.com/",
		},
	];

	return (
		<>
			{objects.map((element) =>
						<div key={element.name} className={element.name}>
		{element.name === "TV" ? 		
					<Popup trigger={<img src={element.imgSrc}/>} position="right center">
						<div>Popup content here !!</div>
					</Popup>
				:
						<a
							key={element.name}
							href={element.url}
							target="_blank"
							rel="noreferrer"
						>}
							<img src={element.imgSrc} alt={element.name} />
						</a>
					</div>
				
			)}
		</>
	);
};

export default Appartment;
