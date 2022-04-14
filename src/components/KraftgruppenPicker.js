import { useState } from "react"

export default function KraftgruppenPicker(props) {
    const kraftgruppen = ["Anima", 
                        "Audio", 
                        "Bio",
                        "Chrono",
                        "Cryo",
                        "Elektro",
                        "Heima",
                        "Momen",
                        "Morpho",
                        "Photo",
                        "Psycho",
                        "Pyro",
                        "Techno",
                        "Tele"]
    const [checkedState, setCheckedState] = useState(
        new Array(kraftgruppen.length).fill(false)
    )
    const getSelectedKraftgruppen = (updatedCheckedState) => {
        return kraftgruppen.filter((val, i) => updatedCheckedState[i])
    }
    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) => 
            index === position ? !item : item
        )
        setCheckedState(updatedCheckedState)
        props.updateSelectedKraftgruppen(getSelectedKraftgruppen(updatedCheckedState))
    }
    

    return (
        <div className="kgPicker">
            {kraftgruppen.map((kg, index) =>
            {
            let name = "kg_picker"
            let value = kg
            let key = kg
            return (
            <div key={key}>
                <input className="radio__input" type="checkbox" value={value} id={key} name={name} onChange={() => handleOnChange(index)} checked={checkedState[index]} />
                <label className="radio__label box noselect" id={key} htmlFor={key}>{value}</label>
            </div> )})}
        </div>
    )
}