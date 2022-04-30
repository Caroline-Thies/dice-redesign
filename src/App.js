import "./App.css";
import AppSelectView from "./views/AppSelectView";

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
      <AppSelectView knownApps={[
        {name: "Persönliche Zeit", kraftgruppe: "Chrono"}, 
        {name: "Gehirnwäsche", kraftgruppe: "Psycho"},
        {name: "Unwetter", kraftgruppe: "Elektro"},
        {name: "Vergangene Weihnacht", kraftgruppe: "Chrono"},
        {name: "Aufladen", kraftgruppe: "Elektro"},
        {name: "Gedankenspaß", kraftgruppe: "Chrono"},
        {name: "Lavafalle", kraftgruppe: "Pyro"},
        {name: "Absorption", kraftgruppe: "Pyro"}
        ]} />
    </div>
  );
}

export default App;
