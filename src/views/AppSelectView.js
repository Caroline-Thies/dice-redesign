import filter from "../images/filter.png"
import clearFilter from "../images/clearFilter.png"

import SearchBar from "../components/SearchBar"
import AppCard from "../components/AppCard"
import KraftgruppenPicker from "../components/KraftgruppenPicker"
import { useState } from "react"

export default function AppSelectView(props) {
    const [selectedKraftgruppen, setSelectedKraftgruppen] = useState([])
    const [searchText, setSearchText] = useState("")
    const [filterActive, setFilterActive] = useState(false)
 
    const getApps = () => {
        if (!filterActive){
            return props.knownApps.filter(app => app.name.includes(searchText))
        } else {
            return props.knownApps.filter(app => selectedKraftgruppen.includes(app.kraftgruppe) &&
                                        app.name.includes(searchText))
        }
        
    }

    const toggleFilter = () => {
       setFilterActive(!filterActive)
       setSelectedKraftgruppen([]) 
    }

    const filterIcon = () => {
        return filterActive ? clearFilter : filter
    }

    const filterOptions = () => {
        if (filterActive) {
            return (
            <div>
                <KraftgruppenPicker updateSelectedKraftgruppen={setSelectedKraftgruppen}/>   
            </div>)
        }
        
    }

    const showFilterResults = () => {
        const apps = getApps()
        if (apps.length > 0) {
            return (
            <div className="appList">
                {apps.map(app => <AppCard name={app.name} kraftgruppe={app.kraftgruppe} key={app.name}/>)}
            </div>
            )
        } else {
            return (
                <div>
                    <p>keine Apps dieser Kriterien gefunden ...</p>
                </div>
            )
        }
    }

    return (
        <div className="flexcol">
            <div className="flexrow sticky">
                <SearchBar setSearchText={setSearchText} />
                <img src={filterIcon()} width={35} height={35} onClick={toggleFilter} alt="click here to toggle filter" />
            </div>
            {filterOptions()}
            {showFilterResults()}
        </div>
    )
}