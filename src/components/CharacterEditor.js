import NumberPicker from "./NumberPicker";
import KraftgruppenPicker from "./KraftgruppenPicker";
import SubmitButton from "./SubmitButton";
import { useState } from "react";

export default function CharacterEditor(props) {
  const onSubmit = props.onSubmit;
  const title = props.title ? props.title : "Charakter erstellen";
  const submitText = props.submitText
    ? props.submitText
    : "Charakter erstellen";
  const baseWisdom = props.wisdom ? props.wisdom : 1;
  const baseSelfControl = props.selfControl ? props.selfControl : 0;
  const baseSelectedKraftgruppen = props.selectedKraftgruppen
    ? props.selectedKraftgruppen
    : [];
  const baseKgValues = props.kgValues
    ? props.kgValues
    : {
        Anima: 0,
        Audio: 0,
        Bio: 0,
        Chrono: 0,
        Cryo: 0,
        Elektro: 0,
        Heima: 0,
        Momen: 0,
        Morpho: 0,
        Photo: 0,
        Psycho: 0,
        Pyro: 0,
        Techno: 0,
        Tele: 0,
      };
  const baseName = props.name ? props.name : "";

  const [wisdom, setWisdom] = useState(baseWisdom);
  const [selfControl, setSelfControl] = useState(baseSelfControl);
  const [name, setName] = useState(baseName);
  const [selectedKraftgruppen, setSelectedKraftgruppen] = useState(
    baseSelectedKraftgruppen
  );
  const [kgValues, setKgValues] = useState(baseKgValues);

  const setKgValue = (kraftgruppe, value) => {
    kgValues[kraftgruppe] = value;
    setKgValues(kgValues);
  };

  const updateSelectedKraftgruppen = (selectedKgs) => {
    Object.keys(kgValues).map((kg) => {
      if (selectedKgs.indexOf(kg) < 0) setKgValue(kg, 0);
      else if (kgValues[kg] === 0) setKgValue(kg, 1);
    });
    setSelectedKraftgruppen(selectedKgs);
  };

  const KraftgruppenValueSelector = () => {
    if (selectedKraftgruppen.length < 1) {
      return <></>;
    } else {
      return (
        <>
          <h3>Ausgewählte Kraftgruppen</h3>
          {selectedKraftgruppen.map((kg) => {
            return (
              <div key={"listentry-" + kg}>
                <h4>{kg + "kinese"}</h4>
                <NumberPicker
                  max={12}
                  name={"kgValue-" + kg}
                  onChange={(event) => setKgValue(kg, event)}
                  selected={kgValues[kg]}
                />
              </div>
            );
          })}
        </>
      );
    }
  };

  const submit = (event) => {
    onSubmit(name, wisdom, kgValues);
  };

  return (
    <div className="flexcol">
      <h1>{title}</h1>
      <form className="flexcol" onSubmit={(event) => event.preventDefault()}>
        <h3>Name</h3>
        <input
          className="textinput"
          type="text"
          placeholder="Siegfried der Sieger"
          onChange={(event) => setName(event.target.value)}
          value={name}
        />
        <h3>Wissen</h3>
        <NumberPicker
          max={7}
          name="editCharacterWisdom"
          onChange={setWisdom}
          selected={wisdom}
        />
        <h3>Willenskraft</h3>
        <NumberPicker
          max={12}
          name="editCharacterSelfControl"
          onChange={setSelfControl}
          selected={selfControl}
          startsWithZero={true}
        />
        <h3>Bekannte Kraftgruppen</h3>
        <KraftgruppenPicker
          updateSelectedKraftgruppen={updateSelectedKraftgruppen}
          selected={selectedKraftgruppen}
        />
        <KraftgruppenValueSelector />
        <SubmitButton text={submitText} onSubmit={submit} />
      </form>
    </div>
  );
}
