import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { BackendAdapter } from "../BackendAdapter"

import CharacterList from "../components/CharacterList"

export default function CharacterOverview() {
    const [characterNames, setCharacterNames] = useState([])
    const navigate = useNavigate()

    useEffect(() => BackendAdapter.getAllCharacterNames().then(names => setCharacterNames(names)), [])

    const selectCharacter = (characterName) => {
        navigate("/"+characterName)
    }

    const characterList = () => {
       if(characterNames.length < 1){
           return <p>Du hast aktuell keine Charaktere.</p>
       } else {
           return <CharacterList characterNames={characterNames} onClick={selectCharacter} />
       }
    }

    return <div className="flexcol">
        <h1>Charakterübersicht</h1>
        {characterList()}
        <button className="important_button" onClick={() => navigate("/createCharacter")}>neuen Charakter erstellen</button>
    </div>
}