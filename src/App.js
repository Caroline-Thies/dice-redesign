import "./App.css";
import Home from "./views/Home";

function App() {
  return (
    <div className="mainContent">
      <Home selectedCharacter={"Mila"} recentlyUsed={["Persönliche Zeit", "Gehirnwäsche"]} />
    </div>
  );
}

export default App;
