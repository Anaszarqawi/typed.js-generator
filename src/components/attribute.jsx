// eslint-disable-next-line import/no-anonymous-default-export
export default function (props) {
  return (
    <div className="attribute">
      <div className="title_checkbox">
        <input id={props.id} type="checkbox"></input>
        <span className="check"></span>
        <label for={props.id} className="title-label">
          {props.title}
        </label>
      </div>
      <div className="content">
        <span className="unit">{props.unit}</span>
        {props.type}
      </div>
    </div>
  );
}
