// eslint-disable-next-line import/no-anonymous-default-export
export default function (props) {
  return (
    <div className="attribute">
      <div className="title_checkbox">
        <input type="checkbox"></input>
        <div className="title">{props.title}</div>
      </div>
      <div className="content">{props.type}</div>
    </div>
  );
}
