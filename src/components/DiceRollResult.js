export default function DiceRollResult(props) {
    return <div className="flexrow diceSet">
        {props.rollResult.map((result, index) => <div className="die" key={index}>{result}</div>)}
    </div>
}