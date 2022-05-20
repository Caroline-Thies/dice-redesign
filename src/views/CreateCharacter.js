import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BackendAdapter } from "../BackendAdapter";

import KraftgruppenPicker from "../components/KraftgruppenPicker";
import NumberPicker from "../components/NumberPicker";
import SubmitButton from "../components/SubmitButton";

export default function CreateCharacter() {
  const [wisdom, setWisdom] = useState(1);
  const [selfControl, setSelfControl] = useState(0);
  const [name, setName] = useState("");
  const [selectedKraftgruppen, setSelectedKraftgruppen] = useState([]);
  const [kgValues, setKgValues] = useState({
    Anima: 1,
    Audio: 1,
    Bio: 1,
    Chrono: 1,
    Cryo: 1,
    Elektro: 1,
    Heima: 1,
    Momen: 1,
    Morpho: 1,
    Photo: 1,
    Psycho: 1,
    Pyro: 1,
    Techno: 1,
    Tele: 1,
  });
  const navigate = useNavigate();

  const setKgValue = (kraftgruppe, value) => {
    kgValues[kraftgruppe] = value;
    setKgValues(kgValues);
  };

  const KraftgruppenValueSelector = () => {
    if (selectedKraftgruppen.length < 1) {
      return <></>;
    } else {
      return (
        <>
          <h3>Ausgewählte Kraftgruppen</h3>
          {selectedKraftgruppen.map((kg) => (
            <div key={"listentry-" + kg}>
              <h4>{kg + "kinese"}</h4>
              <NumberPicker
                max={12}
                name={"kgValue-" + kg}
                onChange={(event) => setKgValue(kg, event)}
                selected={kgValues[kg]}
              />
            </div>
          ))}
        </>
      );
    }
  };

  const submit = async (event) => {
    event.preventDefault();
    const kraftgruppen = {};
    Object.keys(kgValues).map((kg) =>
      kg in selectedKraftgruppen
        ? (kraftgruppen[kg + "kinese"] = kgValues[kg])
        : 0
    );
    const character = {
      name: name,
      wisdom: wisdom,
      hasPsiModule: false,
      kraftgruppen: kraftgruppen,
    };
    const response = await BackendAdapter.addCharacter(character);
    navigate("/characters");
  };

  return (
    <div className="flexcol">
      <h1>Charakter erstellen</h1>
      <form className="flexcol" onSubmit={(event) => submit(event)}>
        <h3>Name</h3>
        <input
          className="textinput"
          type="text"
          placeholder="Siegfried der Sieger"
          onChange={(event) => setName(event.target.value)}
        />
        <h3>Wissen</h3>
        <NumberPicker
          max={7}
          name="createCharacterWisdom"
          onChange={setWisdom}
          selected={1}
        />
        <h3>Willenskraft</h3>
        <NumberPicker
          max={12}
          name="createCharacterSelfControl"
          onChange={setSelfControl}
          selected={0}
          startsWithZero={true}
        />
        <h3>Bekannte Kraftgruppen</h3>
        <KraftgruppenPicker
          updateSelectedKraftgruppen={setSelectedKraftgruppen}
        />
        <KraftgruppenValueSelector />
        <SubmitButton text="Charakter erstellen" />
      </form>
    </div>
  );
}
