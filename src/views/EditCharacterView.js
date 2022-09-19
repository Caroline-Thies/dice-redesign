import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { BackendAdapter } from "../BackendAdapter";
import CharacterEditor from "../components/CharacterEditor";

export default function EditCharacterView() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { character } = state;

  const knownKraftgruppen = Object.keys(character.kraftgruppen)
    .filter((key) => {
      return character.kraftgruppen[key] > 1;
    })
    .map((kg) => kg.replace("kinese", ""));

  const kgValues = {};
  Object.keys(character.kraftgruppen).map(
    (kg) => (kgValues[kg.replace("kinese", "")] = character.kraftgruppen[kg])
  );

  const onSubmit = async (name, wisdom, kraftgruppen) => {
    character.name = name;
    character.wisdom = wisdom;
    Object.keys(kraftgruppen).map(
      (kg) => (character.kraftgruppen[kg + "kinese"] = kraftgruppen[kg])
    );
    console.log(character);
    await BackendAdapter.updateCharacter(character);
    navigate("/" + character.name);
  };

  return (
    <>
      <CharacterEditor
        wisdom={character.wisdom}
        title={character.name + " bearbeiten"}
        selectedKraftgruppen={knownKraftgruppen}
        kgValues={kgValues}
        name={character.name}
        submitText={"Speichern"}
        onSubmit={onSubmit}
      />
    </>
  );
}
