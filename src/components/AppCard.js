import anima from "../images/anima.png"
import bio from "../images/bio.png"
import chrono from "../images/chrono.png"
import cryo from "../images/cryo.png"
import elektro from "../images/elektro.png"
import momen from "../images/momen.png"
import morpho from "../images/morpho.png"
import psycho from "../images/psycho.png"
import pyro from "../images/pyro.png"
import photo from "../images/photo.svg"
import techno from "../images/techno.png"
import tele from "../images/tele.png"

import ImageTextCard from "./ImageTextCard"

export default function AppCard(props) {
    const imgSourceByKg = {
        "Animakinese" : anima,
        "Biokinese" : bio,
        "Chronokinese" : chrono,
        "Cryokinese" : cryo,
        "Elektrokinese" : elektro,
        "Momenkinese" : momen,
        "Morphokinese" : morpho,
        "Psychokinese" : psycho,
        "Pyrokinese" : pyro,
        "Photokinese" : photo,
        "Technokinese" : techno,
        "Telekinese" : tele
    }
    return <ImageTextCard text={props.name} imgSource={imgSourceByKg[props.kraftgruppe]} onClick={props.onClick} />
}