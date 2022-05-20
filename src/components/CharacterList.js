export default function CharacterList(props) {
  return (
    <div className="flexcol">
      {props.characterNames.map((name, index) => (
        <button
          className="standart_button"
          key={index}
          value={name}
          onClick={(event) => {
            props.onClick(event.target.value);
          }}
        >
          {name}
        </button>
      ))}
    </div>
  );
}
