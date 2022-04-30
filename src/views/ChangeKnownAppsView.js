import { useState } from "react";

import KraftgruppenPicker from "../components/KraftgruppenPicker";

export default function ChangeKnownAppsView(props) {
    const [selectedKraftgruppe, setSelectedKraftgruppe] = useState("Anima")

    const selectKraftgruppe = (kgList) => {
        setSelectedKraftgruppe(kgList[0])
    }

    console.log(selectedKraftgruppe)

    return <div className="flexcol">
        <h1>Bekannte Apps anpassen</h1>
        <h4>Kraftgruppe auswählen</h4>
        <KraftgruppenPicker radio={true} updateSelectedKraftgruppen={selectKraftgruppe} />
    </div>
}