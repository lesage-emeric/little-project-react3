import "./App.css";
import Counch from "./components/Counch/Counch";
import NavBar from "./components/NavBar/NavBar";
import TV from "./components/TV/TV"

const Friends= [
  {
    FirstName : "Monica" ,
    img : ""
  },
  {
    FirstName : "Joey" ,
    img : ""
  },{
    FirstName : "Chandler" ,
    img : ""
  },{
    FirstName : "Phoebe" ,
    img : ""
  },{
    FirstName : "Ross" ,
    img : ""
  },{
    FirstName : "Rachel" ,
    img : ""
  },
]
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
