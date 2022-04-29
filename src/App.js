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
        {name: "Persönliche Zeit", kraftgruppe: "Chronokinese"}, 
        {name: "Gehirnwäsche", kraftgruppe: "Psychokinese"},
        {name: "Unwetter", kraftgruppe: "Elektrokinese"},
        {name: "Vergangene Weihnacht", kraftgruppe: "Chronokinese"},
        {name: "Aufladen", kraftgruppe: "Elektrokinese"},
        {name: "Gedankenspaß", kraftgruppe: "Chronokinese"},
        {name: "Lavafalle", kraftgruppe: "Pyrokinese"},
        {name: "Absorption", kraftgruppe: "Pyrokinese"}
        ]} />
    </div>
  );
}

export default App;
