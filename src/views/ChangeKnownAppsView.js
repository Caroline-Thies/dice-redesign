import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { BackendAdapter } from "../BackendAdapter";
import AppPicker from "../components/AppPicker";

import KraftgruppenPicker from "../components/KraftgruppenPicker";

export default function ChangeKnownAppsView() {
    const {state} = useLocation()
    const {appNames, kraftgruppen} = state
    const params = useParams()
    const [knownApps, setKnownApps] = useState(appNames)
    const [selectedKraftgruppe, setSelectedKraftgruppe] = useState("Animakinese")
    const [appsByKraftgruppe, setAppsByKraftgruppe] = useState({"Animakinese": [], 
    "Audiokinese": [], 
    "Biokinese": [],
    "Chronokinese": [],
    "Cryokinese": [],
    "Elektrokinese": [],
    "Heimakinese": [],
    "Momenkinese": [],
    "Morphokinese": [],
    "Photokinese": [],
    "Psychokinese": [],
    "Pyrokinese": [],
    "Technokinese": [],
    "Telekinese": []})

    const selectKraftgruppe = async (kgList) => {
        const kraftgruppe = kgList[0] + "kinese"
        setSelectedKraftgruppe(kraftgruppe)
        if (appsByKraftgruppe[kraftgruppe].length === 0){
            const appsByKraftgruppeCopy = JSON.parse(JSON.stringify(appsByKraftgruppe))
            appsByKraftgruppeCopy[kraftgruppe] = await BackendAdapter.getAllAppNamesByKraftgruppe(kraftgruppe)
            await setAppsByKraftgruppe(appsByKraftgruppeCopy)
        }
    }

    const updateSelectedApp = async (appName, selected) => {
        await BackendAdapter.setAppLearned(params.characterName, appName, selected)
        if (knownApps.includes(appName) === selected) {
            return
        } else if (selected) {
            setKnownApps(JSON.parse(JSON.stringify(knownApps)).push(appName))
        } else {
            setKnownApps(knownApps.filter(name => !(name === appName)))
        }
    }

    return <div className="flexcol">
        <h1>Bekannte Apps anpassen</h1>
        <h4>Kraftgruppe auswählen</h4>
        <KraftgruppenPicker radio={true} updateSelectedKraftgruppen={selectKraftgruppe} />
        <h4>Apps</h4>
        <AppPicker apps={appsByKraftgruppe[selectedKraftgruppe]} knownApps={knownApps} updateSelectedApp={updateSelectedApp} />
    </div>
}