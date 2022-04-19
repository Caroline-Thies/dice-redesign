import "./App.css";
import AppView from "./views/AppView"

const app = {
  name : "Persönliche Zeit",
  minVal : 11,
  maxVal : 15,
  description: "Das Ziel dieser App kann in seiner persönlichen Zeit zurück gesetzt werden. Grundsätzlich handelt es sich hierbei um 1+([KS]x10) Minuten. Für [2KS] werden Minuten zu Stunden und für [4KS] werden es Tage. Dadurch kann z.B. der Zustand eines zerstörten Autos auf einen älteren Stand gebracht werden."
}

const char = {
  wisdom: 5
}

function App() {
  return (
    <div className="mainContent">
      <AppView app={app} character={char} kgLevel={8}/>
    </div>
  );
}

export default App;
