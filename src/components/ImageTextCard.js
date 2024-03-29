export default function ImageTextCard(props) {
  return (
    <div className="imageTextCard" onClick={props.onClick}>
      <div className="imageTextCard-Image">
        <img alt="" src={props.imgSource} height={64} width={64} />
      </div>
      <div className="imageTextCard-Text">
        <p>{props.text}</p>
      </div>
    </div>
  );
}
