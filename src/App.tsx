import "./App.css";
import Counch from "./components/Counch/Counch";
import NavBar from "./components/NavBar/NavBar";
import TV from "./components/TV/TV";

function App() {
	return (
		<>
			<nav>
				<NavBar />
			</nav>
			<Counch />

			<TV />
		</>
	);
}
export default App;
