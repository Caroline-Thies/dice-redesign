import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginView from "./views/LoginView";
import CharacterOverview from "./views/CharacterOverview";
import CreateCharacter from "./views/CreateCharacter";
import Home from "./views/Home";
import AppSelectView from "./views/AppSelectView";
import ConcentrationView from "./views/ConcentrationView";
import AppView from "./views/AppView";
import ChangeKnownAppsView from "./views/ChangeKnownAppsView";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginView />} />
        <Route path="/characters" element={<CharacterOverview />} />
        <Route path="/createCharacter" element={<CreateCharacter />} />
        <Route path="/:characterName" element={<Home />} />
        <Route path="/:characterName/Apps" element={<AppSelectView />} />
        <Route
          path="/:characterName/Concentrate"
          element={<ConcentrationView />}
        />
        <Route path="/:characterName/:appName" element={<AppView />} />
        <Route
          path="/:characterName/changeApps"
          element={<ChangeKnownAppsView />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
