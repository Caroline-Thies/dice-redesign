import DiceRollResult from "./DiceRollResult";

export default function ConcentrationStep(props) {
    const total = props.rollResult.reduce((a, b) => a + b)
    const required = 10 + props.step*5
    const style = total >= required ? {color: "green"} : {color: "red"}
    
    return (
        <div>
            <h4>Stufe {props.step}</h4>
            <DiceRollResult rollResult={props.rollResult} />
            <p style={style}>Gesamt: {total}/{required}</p>
        </div>
    )
}