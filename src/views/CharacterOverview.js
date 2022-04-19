import CharacterList from "../components/CharacterList"

export default function CharacterOverview(props) {

    const selectCharacter = (character) => {
        alert("Selected Character " + character)
    }

    const characterList = () => {
       if(!props.characters){
           return <p>Du hast aktuell keine Charaktere.</p>
       } else {
           return <CharacterList characters={props.characters} onClick={selectCharacter} />
       }
    }

    return <div className="flexcol">
        <h1>Charakterübersicht</h1>
        {characterList()}
        <button className="important_button">neuen Charakter erstellen</button>
    </div>
}