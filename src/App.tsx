import "./App.css";
import Appartment from "./components/Appartment";
import Avatar from "./components/Avatar";
import Counch from "./components/Counch/Counch";
import NavBar from "./components/NavBar/NavBar";

const Friends = [
	{
		FirstName: "Monica",
		img: "",
	},
	{
		FirstName: "Joey",
		img: "",
	},
	{
		FirstName: "Chandler",
		img: "",
	},
	{
		FirstName: "Phoebe",
		img: "",
	},
	{
		FirstName: "Ross",
		img: "",
	},
	{
		FirstName: "Rachel",
		img: "",
	},
];
function App() {
	return (
		<>
			<nav>
				<NavBar />
			</nav>
			<div className="Room">
				<Appartment />
			</div>
		</>
	);
}
export default App;
