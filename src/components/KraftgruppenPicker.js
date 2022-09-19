import { useState } from "react";

export default function KraftgruppenPicker(props) {
  const selected = props.selected ? props.selected : [];
  const kraftgruppen = [
    "Anima",
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
    "Tele",
  ];

  const baseCheckedState = kraftgruppen.map((kg) => selected.indexOf(kg) > -1);

  const [checkedState, setCheckedState] = useState(baseCheckedState);
  const getSelectedKraftgruppen = (updatedCheckedState) => {
    return kraftgruppen.filter((val, i) => updatedCheckedState[i]);
  };
  const handleOnChange = (position) => {
    let updatedCheckedState = [];
    if (!props.radio) {
      updatedCheckedState = checkedState.map((item, index) =>
        index === position ? !item : item
      );
    } else {
      for (let i = 0; i < kraftgruppen.length; i++) {
        if (i === position) {
          updatedCheckedState[i] = true;
        } else {
          updatedCheckedState[i] = false;
        }
      }
    }
    setCheckedState(updatedCheckedState);
    props.updateSelectedKraftgruppen(
      getSelectedKraftgruppen(updatedCheckedState)
    );
  };

  return (
    <div className="kgPicker">
      {kraftgruppen.map((kg, index) => {
        let name = "kg_picker";
        let value = kg;
        let key = kg;
        return (
          <div key={key}>
            <input
              className="radio__input"
              type="checkbox"
              value={value}
              id={key}
              name={name}
              onChange={() => handleOnChange(index)}
              checked={checkedState[index]}
            />
            <label className="radio__label box noselect" htmlFor={key}>
              {value}
            </label>
          </div>
        );
      })}
    </div>
  );
}
