import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

import ImageTextCard from "../components/ImageTextCard"
import diceIcon from "../images/diceIcon.png"
import charEdit from "../images/charEdit.png"
import fileEdit from "../images/fileEdit.png"
import meditation from "../images/meditation.png"
import { BackendAdapter } from "../BackendAdapter"

export default function Home(props) {
    const params = useParams()
    const characterName = params.characterName
    const [character, setCharacter] = useState({})
    const [appNames, setAppNames] = useState([])
    useEffect(() => BackendAdapter.getCharacterByName(characterName).then(char => {setCharacter(char); setAppNames(Array.prototype.concat.apply([], Object.values(char.psiApps)).map(app => app.name))}), [])
    const navigate = useNavigate()

    const recentlyUsedApps = () => {
        if(!props.recentlyUsed) {
            return <p>Du hast keine kürzlich eingesetzten Apps.</p>
        }
        else {
            return <div>
                <h4>Kürzlich eingesetzt</h4>
                <div className="recentlyUsedContainer">
                    {props.recentlyUsed.map((app, index) => <ImageTextCard text={app} key={index} />)}
                </div>
            </div>
        }
    }

    return <div className="flexcol">
        <h1>Du spielst {characterName}</h1>
        <div>
            <h4>Kürzlich eingesetzt</h4>
            <div className="recentlyUsedContainer">
                {recentlyUsedApps()}
            </div>
        </div>
        <div>
            <h4>Weitere Aktionen</h4>
            <div className="furtherActionsContainer">
                <ImageTextCard text="App einsetzen" imgSource={diceIcon} onClick={() => navigate("Apps", {state: {apps: character.psiApps, kraftgruppen: character.kraftgruppen, wisdom: character.wisdom}})}/>
                <ImageTextCard text="Konzentrieren" imgSource={meditation} onClick={() => navigate("Concentrate", {state: {wisdom: character.wisdom}})} />
                <ImageTextCard text="Apps anpassen" imgSource={fileEdit} onClick={() => navigate("changeApps", {state: {appNames: appNames, kraftgruppen: character.kraftgruppen}})} />
                <ImageTextCard text={characterName + " bearbeiten"} imgSource={charEdit} />
            </div>
        </div>
    </div>
}