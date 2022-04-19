import "./App.css";
import CharacterOverview from "./views/CharacterOverview";

function App() {
  return (
    <div className="mainContent">
      <CharacterOverview characters={["Mila", "Lila", "General Mumm"]}/>
    </div>
  );
}

export default App;
