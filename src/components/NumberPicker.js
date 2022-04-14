import React from "react"
import { useState } from "react"

export default function NumberPicker(props) {
    const selected = props.selected ? props.selected : 0
    const [selectedOption, setSelectedOption] = useState(selected)

    const name = props.name

    const handleOptionChange = (value) => {
        setSelectedOption(value)
        props.onChange(value)
    }

    return (
        <div className="radio">{[...Array(props.max).keys()].map(i =>
            {
            let value = i + 1
            let key = name + value
            return (
            <div key={key} className="radioItem">
                <input className="radio__input" type="radio" value={value} id={key} name={name} key={key+"input"} onChange={() => handleOptionChange(value)} checked={value === selectedOption} />
                <label className="radio__label square noselect" htmlFor={key} key={key+"label"}>{value}</label>
            </div> )})}
        </div>)
}