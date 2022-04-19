import ImageTextCard from "../components/ImageTextCard"
import diceIcon from "../images/diceIcon.png"
import charEdit from "../images/charEdit.png"
import fileEdit from "../images/fileEdit.png"
import meditation from "../images/meditation.png"

export default function Home(props) {
    const characterName = props.selectedCharacter

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
                {props.recentlyUsed.map((app, index) => <ImageTextCard text={app} key={index} />)}
            </div>
        </div>
        <div>
            <h4>Weitere Aktionen</h4>
            <div className="furtherActionsContainer">
                <ImageTextCard text="App einsetzen" imgSource={diceIcon} />
                <ImageTextCard text="Konzentrieren" imgSource={meditation} />
                <ImageTextCard text="Apps anpassen" imgSource={fileEdit} />
                <ImageTextCard text={characterName + " bearbeiten"} imgSource={charEdit} />
            </div>
        </div>
    </div>
}