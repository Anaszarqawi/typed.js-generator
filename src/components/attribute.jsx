// eslint-disable-next-line import/no-anonymous-default-export
export default function (props) {
  return (
    <div className="attribute">
      <div className="title_checkbox">
        <input id={props.for} type="checkbox"></input>
        <span className="check"></span>
        <label for={props.for} className="title">
          {props.title}
        </label>
      </div>
      <div className="content">{props.type}</div>
    </div>
  );
}
