const Appartment = () => {
  const objects = [
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
      imgSrc: "",
      url: "https://www.chronodrive.com/",
    },
    {
      name: "Table",
      imgSrc: "",
      url: "https://www.lejardindesfleurs.com/",
    },
    {
      name: "Bookshelf",
      imgSrc: "",
      url: "https://wwww.amazon.com/",
    },
  ];

  return (
    <>
      {objects.map((element) => (
        <a href={element.url}>
          <img src={element.imgSrc} alt={element.name} />
        </a>
      ))}
    </>
  );
};

export default Appartment;
