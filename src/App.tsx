import "./App.css";
import Appartment from "./components/Appartment";
import Avatar from "./components/Avatar";
import Counch from "./components/Counch/Counch";
import NavBar from "./components/NavBar/NavBar";
import Popup from "reactjs-popup";
import Screen from "./components/Screen";


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
                <Popup id="popup" trigger={<button ><img className="telecommande" src="1-Telecommande-universelle-8-en-1-removebg-preview.png" alt="" /></button>} position="left center">
                    <div>
                        <Screen />
                    </div>
                </Popup>
            </div>
			
		</>
	);
}
export default App;
