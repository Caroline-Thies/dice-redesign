import DiceRollResult from "./DiceRollResult";

export default function ConcentrationStep(props) {
    const style = props.total >= props.required ? {color: "green"} : {color: "red"}
    
    return (
        <div>
            <h4>Stufe {props.step}</h4>
            <DiceRollResult rollResult={props.rollResult} />
            <p style={style}>Gesamt: {props.total}/{props.required}</p>
        </div>
    )
}