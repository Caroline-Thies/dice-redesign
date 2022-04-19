export default function CharacterList(props) {
    return <div className="flexcol">
    {props.characters.map((character, index) => <button className="standart_button" key={index} value={character} onClick={(event) => {props.onClick(event.target.value)}}>{character}</button>)}
    </div>
}