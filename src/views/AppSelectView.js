import filter from "../images/filter.png"

import SearchBar from "../components/SearchBar"
import AppCard from "../components/AppCard"

export default function AppSelectView(props) {
    
    const getApps = () => {
        return props.knownApps
    }

    return (
        <div className="flexcol">
            <div className="flexrow">
                <SearchBar />
                <img src={filter} width={35} height={35} />
            </div>
            <div className="appList">
                {getApps().map(app => <AppCard name={app.name} kraftgruppe={app.kraftgruppe} key={app.name}/>)}
            </div>
        </div>
    )
}