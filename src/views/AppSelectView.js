import filter from "../images/filter.png"

import SearchBar from "../components/SearchBar"
import AppCard from "../components/AppCard"
import KraftgruppenPicker from "../components/KraftgruppenPicker"
import { useState } from "react"

export default function AppSelectView(props) {
    const [selectedKraftgruppen, setSelectedKraftgruppen] = useState([])
    const [searchText, setSearchText] = useState("")

    const getApps = () => {
        if (searchText === ""){
            return props.knownApps.filter(app => selectedKraftgruppen.includes(app.kraftgruppe))
        } else {
            return props.knownApps.filter(app => selectedKraftgruppen.includes(app.kraftgruppe) &&
                                        app.name.includes(searchText))
        }
        
    }

    return (
        <div className="flexcol">
            <div className="flexrow sticky">
                <SearchBar setSearchText={setSearchText} />
                <img src={filter} width={35} height={35} />
            </div>
            <div>
                <KraftgruppenPicker updateSelectedKraftgruppen={setSelectedKraftgruppen}/>   
            </div>
            <div className="appList">
                {getApps().map(app => <AppCard name={app.name} kraftgruppe={app.kraftgruppe} key={app.name}/>)}
            </div>
        </div>
    )
}