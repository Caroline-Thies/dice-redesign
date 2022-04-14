import { useState } from "react"

import KraftgruppenPicker from "../components/KraftgruppenPicker";
import NumberPicker from "../components/NumberPicker";
import SubmitButton from "../components/SubmitButton";

export default function CreateCharacter(props) {
    const [wisdom, setWisdom] = useState(1)
    const [selectedKraftgruppen, setSelectedKraftgruppen] = useState([])
    const [kgValues, setKgValues] = useState({"Anima": 1, 
    "Audio": 1, 
    "Bio": 1,
    "Chrono": 1,
    "Cryo": 1,
    "Elektro": 1,
    "Heima": 1,
    "Momen": 1,
    "Morpho": 1,
    "Photo": 1,
    "Psycho": 1,
    "Pyro": 1,
    "Techno": 1,
    "Tele": 1})

    const setKgValue = (kraftgruppe, value) => {
        kgValues[kraftgruppe] = value
        setKgValues(kgValues)
    }

    const KraftgruppenValueSelector = () => {
        if (selectedKraftgruppen.length < 1) {
            return <></>
        } else {
            return (
            <>
                <h3>Ausgewählte Kraftgruppen</h3>
                {selectedKraftgruppen.map(kg => 
                <div key={"listentry-" + kg}>
                    <h4>{kg + "kinese"}</h4>
                    <NumberPicker max={10} name={"kgValue-" + kg} onChange={(event) => setKgValue(kg, event)} selected={kgValues[kg]}/>
                </div>)}
            </>)
        } 
    }

    const submit = () => {
        alert(wisdom + " " + selectedKraftgruppen + " " + kgValues)
    }

    return <div className="flexcol">
        <h1>Charakter erstellen</h1>
        <form className="flexcol" onSubmit={submit}>
            <h3>Name</h3>
            <input className="textinput" type="text" placeholder="Siegfried der Sieger" />
            <h3>Wissen</h3>
            <NumberPicker max={5} name="createCharacterWisdom" onChange={setWisdom} selected={1} />
            <h3>Bekannte Kraftgruppen</h3>
            <KraftgruppenPicker updateSelectedKraftgruppen={setSelectedKraftgruppen} />
            <KraftgruppenValueSelector />
            <SubmitButton text="Charakter erstellen" />
        </form>
    </div>
}