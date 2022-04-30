export default function DiceRollResult(props) {
    return <div className="flexrow">
        {props.rollResult.map((result, index) => <div className="die" key={index}>{result}</div>)}
    </div>
}