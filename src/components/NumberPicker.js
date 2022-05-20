import React from "react";
import { useState } from "react";

export default function NumberPicker(props) {
  const selected = props.selected ? props.selected : 0;
  const [selectedOption, setSelectedOption] = useState(selected);

  const name = props.name;
  const minActive = props.minActive ? props.minActive : -1;

  const handleOptionChange = (value) => {
    setSelectedOption(value);
    props.onChange(value);
  };

  const getOptions = () => {
    if (!props.startsWithZero) {
      return [...Array(props.max).keys()];
    } else {
      return [-1].concat([...Array(props.max).keys()]);
    }
  };

  return (
    <div className="radio">
      {getOptions().map((i) => {
        let value = i + 1;
        let key = name + value;
        let disabled = value < minActive;
        return (
          <div key={key} className="radioItem">
            <input
              className="radio__input"
              type="radio"
              value={value}
              id={key}
              name={name}
              key={key + "input"}
              onChange={() => handleOptionChange(value)}
              checked={value === selectedOption}
              disabled={disabled}
            />
            <label
              className={
                disabled
                  ? "radio__label__disabled square noselect"
                  : "radio__label square noselect"
              }
              htmlFor={key}
              key={key + "label"}
            >
              {value}
            </label>
          </div>
        );
      })}
    </div>
  );
}
