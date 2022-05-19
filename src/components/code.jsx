export default function (props) {
  return (
    <pre>
      <code className={`language-${props.language}`}>{props.code}</code>
    </pre>
  );
}
