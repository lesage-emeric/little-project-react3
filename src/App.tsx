import "./App.css";
import Counch from "./components/Counch/Counch";
import Kitchen from "./components/Kitchen/Kitchen";
import NavBar from "./components/NavBar/NavBar";
import TV from "./components/TV/TV";

function App() {
	return (
		<>
			<nav>
				<NavBar />
			</nav>
			<TV />
			<Counch />
			<Kitchen />
		</>
	);
}

export default App;
