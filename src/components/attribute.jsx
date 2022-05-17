export default function (props) {
  return (
    <div className="attribute">
      <div className="title_checkbox">
        <input id={props.id} type="checkbox"></input>
        <span className="check"></span>
        <label for={props.id} className="title">
          {props.title}
        </label>
      </div>
      <div className="content">{props.type}</div>
    </div>
  );
}
