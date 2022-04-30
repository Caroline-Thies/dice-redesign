import chrono from "../images/chrono.png"
import elektro from "../images/elektro.png"
import psycho from "../images/psycho.png"
import pyro from "../images/pyro.png"
import ImageTextCard from "./ImageTextCard"

export default function AppCard(props) {
    const imgSourceByKg = {
        "Chrono" : chrono,
        "Elektro" : elektro,
        "Psycho" : psycho,
        "Pyro" : pyro
    }
    return <ImageTextCard text={props.name} imgSource={imgSourceByKg[props.kraftgruppe]} />
}