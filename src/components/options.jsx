import Attribute from './attribute';

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return (
    <div className="optionsContainer">
      <div className="options">
        <Attribute
          title="Strings"
          type={<textarea type="text" className="input"></textarea>}
        />
        <Attribute
          title="Type Speed"
          type={<input type="number" className="input"></input>}
        />
        <Attribute
          title="Back Speed"
          type={<input type="number" className="input"></input>}
        />
        <Attribute
          title="Start Delay"
          type={<input type="number" className="input"></input>}
        />
        <Attribute
          title="Back Delay"
          type={<input type="number" className="input"></input>}
        />
        <Attribute title="Fade Out" />
        <Attribute
          title="Fade Out Delay"
          type={<input type="number" className="input"></input>}
        />
        <Attribute title="Loop" />
        <Attribute
          title="Loop Count"
          type={<input type="number" className="input"></input>}
        />
        <Attribute title="Shuffle" />
      </div>
    </div>
  );
}
