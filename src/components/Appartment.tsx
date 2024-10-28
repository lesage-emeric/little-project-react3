const Appartment = () => {
	const objects = [
		{
			name: "Table",
			imgSrc: "public/imgFlower.png",
			url: "https://www.lejardindesfleurs.com/",
		},
		{
			name: "Bookshelf",
			imgSrc: "public/imgBookshelf.png",
			url: "https://wwww.amazon.com/",
		},
		{
			name: "TV",
			imgSrc:
				"public/pngtree-flat-screen-tv-transparent-png-free-clipart-png-image_5190594-removebg-preview.png",
			url: "https://www.tf1.fr/",
		},
		{
			name: "Counch",
			imgSrc: "public/imgCounch.png",
			url: "https://www.ikea.com/fr/fr/",
		},
		{
			name: "Kitchen",
			imgSrc: "public/imgFridge.png",
			url: "https://www.chronodrive.com/",
		},
	];

	return (
		<>
			{objects.map((element) => (
				<div key={element.name} className={element.name}>
					<a key={element.name} href={element.url}>
						<img src={element.imgSrc} alt={element.name} />
					</a>
				</div>
			))}
		</>
	);
};

export default Appartment;
