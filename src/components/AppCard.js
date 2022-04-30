import chrono from "../images/chrono.png"
import elektro from "../images/elektro.png"
import psycho from "../images/psycho.png"
import pyro from "../images/pyro.png"
import photo from "../images/photo.svg"
import ImageTextCard from "./ImageTextCard"

export default function AppCard(props) {
    const imgSourceByKg = {
        "Chronokinese" : chrono,
        "Elektrokinese" : elektro,
        "Psychokinese" : psycho,
        "Pyrokinese" : pyro,
        "Photokinese" : photo
    }
    return <ImageTextCard text={props.name} imgSource={imgSourceByKg[props.kraftgruppe]} onClick={props.onClick} />
}