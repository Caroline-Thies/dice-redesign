import magnifying_glass from "../images/magnifying_glass.svg"
import closeX from "../images/closeX.png"

export default function SearchBar(props) {
    return <div className="searchBar">
        <img src={magnifying_glass} />
        <form>
            <input type="text" className="searchBarTextInput" placeholder="search ..." onChange={event => props.setSearchText(event.target.value)} /> </form>
        <img src={closeX} height={25} width={25}/>
    </div>
}