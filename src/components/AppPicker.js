import { useEffect, useState } from "react"

export default function AppPicker(props) {
    const apps = props.apps ? props.apps : []
    const [checkedState, setCheckedState] = useState(
        [false, false, false, false, false, false, false, false, false, false]
    )
    useEffect(() => {if(props.apps.length > 0 && props.knownApps.length > 0) setCheckedState(props.apps.map(app => props.knownApps.includes(app)))}, [props.apps, props.knownApps])
    const handleOnChange = (position) => {
        let updatedCheckedState = []
        if(!props.radio){
            updatedCheckedState = checkedState.map((item, index) => 
                index === position ? !item : item
            )
        } else {
            for (let i = 0; i < apps.length; i++) {
                if (i === position) {
                    updatedCheckedState[i] = true
                } else {
                    updatedCheckedState[i] = false
                }
            }
        }
        setCheckedState(updatedCheckedState)
        props.updateSelectedApp(apps[position], updatedCheckedState[position])
    }

    return (
        <div className="kgPicker">
            {apps.map((kg, index) =>
            {
            let name = "appPicker"
            let value = kg
            let key = kg
            return (
            <div key={key}>
                <input className="radio__input" type="checkbox" value={value} id={key} name={name} onChange={() => handleOnChange(index)} checked={checkedState[index]} />
                <label className="radio__label appBox noselect"  htmlFor={key}>{value}</label>
            </div> )})}
        </div>
    )
}