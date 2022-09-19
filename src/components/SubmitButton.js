export default function SubmitButton(props) {
  return (
    <button className="important_button" type="submit" onClick={props.onSubmit}>
      {props.text}
    </button>
  );
}
