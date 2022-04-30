import { useState } from "react"
import { useLocation } from "react-router-dom";
import ConcentrationStep from "../components/ConcentrationStep";

import NumberPicker from "../components/NumberPicker";
import { rollD6 } from "../DiceRoller";

export default function ConcentrationView() {
    const {state} = useLocation()
    const {wisdom} = state
    const [startLevel, setStartLevel] = useState(0)
    const [goalLevel, setGoalLevel] = useState(wisdom)
    const [rollResults, setRollResults] = useState([])
    const [showRollResults, setShowRollResults] = useState(false)
    const [success, setSuccess] = useState(false)
    const [lastStartLevel, setLastStartLevel] = useState(0)

    const selfControl = 5

    const concentrate = () => {
        let results = []
        setSuccess(true)
        setLastStartLevel(startLevel)
        for (let i = startLevel + 1; i <= goalLevel; i++) {
            const rollResult = rollD6(wisdom + selfControl, false)
            results.push(rollResult)
            const total = rollResult.reduce((a, b) => a + b)
            const required = 10 + i*5
            if (total < required) {
                setSuccess(false)
                break
            }
        }
        setRollResults(results)
        setShowRollResults(true)
    }

    const renderRollResults = () => {
        if(!showRollResults) return <></>
        const text = success ?
                        <p className="successText">Die Probe war erfolgreich!</p>:
                        <p className="failText">Die Probe ist fehlgeschlagen!</p>
        return <div>
            {text}
            {rollResults.map((resultSet, index) => 
                <ConcentrationStep step={lastStartLevel+index+1} rollResult={resultSet} key={startLevel+index} />
            )}
        </div>
    }

    return <div className="flexcol">
        <h1>Konzentrier' dich!</h1>
        <h4>Startstufe</h4>
        <NumberPicker name="startLevel" max={wisdom - 1} selected={startLevel} onChange={setStartLevel} startsWithZero={true} />
        <h4>Zielstufe</h4>
        <NumberPicker name="goalLevel" max={wisdom} selected={goalLevel} minActive={startLevel + 1} onChange={setGoalLevel} />
        <button className="important_button" onClick={concentrate} >Würfeln!</button>
        {renderRollResults()}
    </div>
}

