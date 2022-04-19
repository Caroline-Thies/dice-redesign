import NumberPicker from "../components/NumberPicker";

export default function ConcentrationView(props) {
    return <div className="flexcol">
        <h1>Konzentrier' dich!</h1>
        <h4>Startstufe</h4>
        <NumberPicker name="startLevel" max={props.wisdom} />
        <h4>Zielstufe</h4>
        <NumberPicker name="goalLevel" max={props.wisdom} />
    </div>
}