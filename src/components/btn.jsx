export default function (props) {
  return (
    <button id="btn" className={props.name}>
      {props.name}
    </button>
  );
}
