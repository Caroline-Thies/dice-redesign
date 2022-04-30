import { useState } from "react"
import NumberPicker from "../components/NumberPicker"
import { rollD6 } from "../DiceRoller"

export default function AppView(props) {
    const [availableDice, setAvailableDice] = useState(0)
    const [toSacrifice, setToSacrifice] = useState(0)
    const [toRoll, setToRoll] = useState(3)
    const [newMin, setNewMin] = useState(0)
    const [newMax, setNewMax] = useState(0)
    const [successRate, setSuccessRate] = useState(0)
    const [concentration, setConcentration] = useState(1)
    const [timeslessKnowledge, setTimelessKnowledge] = useState(1)
    const [investedDice, setInvestedDice] = useState(0)
    const [diceResult, setDiceResult] = useState([])
    const [showDiceResult, setShowDiceResult] = useState(false)

    const name = props.app.name
    const min = props.app.minVal
    const max = props.app.maxVal
    const desc = props.app.description
    const maxConcentration = props.character.wisdom
    const kgLevel = props.kgLevel

    const rollDice = () => {
        const result = rollD6(toRoll, true)
        setDiceResult(result)
        setShowDiceResult(true)
    }

    const calcDiceResult = () => {
        let sum = 0;
        for (let i = 0; i < diceResult.length; i++) {
            sum += diceResult[i]
        }
        return sum
    }

    const getRollResultMessage = () => {
        const result = calcDiceResult()
        if (newMin <= result && result <= newMax) {
            return <p className="large">Die Probe war <span className="greenText">erfolgreich</span></p>
        } else {
            return <p className="large">Die Probe ist <span className="redText">fehlgeschlagen</span></p>
        }
    }

    const renderDiceResult = () => {
        if (showDiceResult) {
            return <div className="flexcol">
                <div className="flexrow">
                    {diceResult.map((result, index) => <div className="die" key={index}>{result}</div>)}
                </div>
                <p>Ergebnis: {calcDiceResult()}</p>
                {getRollResultMessage()}
            </div>
        }
        else {
            return <></>
        }
    }

    return <div className="flexcol">
        <h1>{name}</h1>
        <p className="bold">{min} - {max}</p>
        <div className="appDescription">{desc}</div>
        <div>
           <h4>Konzentration</h4>
           <NumberPicker name="Konzentration" max={maxConcentration} selected={concentration} onChange={setConcentration}/>
        </div>
        <div>
            <h4>Zeitloses Wissen</h4>
            <NumberPicker name="Zeitloses Wissen" max={5} selected={timeslessKnowledge} onChange={setTimelessKnowledge} />
        </div>
        <div>
            <h4>Investierte Würfel</h4>
            <NumberPicker name="Investierte Würfel" max={kgLevel} selected={investedDice} startsWithZero={true} onChange={setInvestedDice} />
        </div>
        <div className="textContainer">
            <p>Verfügbare Würfel: {availableDice}</p>
            <p>
                Du solltest <span className="redText">{toSacrifice}</span> Würfel opfern 
            und mit <span className="greenText">{toRoll}</span> Würfeln in den neuen Trefferbereich 
            von <span className="bold">{newMin}-{newMax}</span> würfeln. Die Erfolgswahrscheinlichkeit
            liegt dann bei ca. <span className="greenText large">{successRate}%</span>.
            </p>
        </div>
        {renderDiceResult()}
        <button className="important_button" onClick={rollDice}>Mit dieser Verteilung würfeln!</button>
    </div>
}