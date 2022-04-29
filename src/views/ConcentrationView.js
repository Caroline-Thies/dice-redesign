import { useState } from "react"

import NumberPicker from "../components/NumberPicker";

export default function ConcentrationView(props) {
    const [startLevel, setStartLevel] = useState(1)
    const [goalLevel, setGoalLevel] = useState(props.wisdom)

    return <div className="flexcol">
        <h1>Konzentrier' dich!</h1>
        <h4>Startstufe</h4>
        <NumberPicker name="startLevel" max={props.wisdom - 1} selected={startLevel} onChange={setStartLevel} />
        <h4>Zielstufe</h4>
        <NumberPicker name="goalLevel" max={props.wisdom} selected={goalLevel} minActive={startLevel + 1} onChange={setGoalLevel} />
        <button className="important_button" >Würfeln!</button>
    </div>
}