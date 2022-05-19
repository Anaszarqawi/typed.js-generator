import Btn from './btn';
export default function () {
  return (
    <div className="controlSection">
      <div className="title">Controlling</div>
      <div className="buttons">
        <Btn name="Toggle" />
        <Btn name="Start" />
        <Btn name="Stop" />
        <Btn name="Reset" />
        <Btn name="Destroy" />
      </div>
    </div>
  );
}
