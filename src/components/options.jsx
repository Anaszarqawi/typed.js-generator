import Attribute from './attribute';

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return (
    <div className="optionsContainer">
      <div className="options">
        <Attribute
          title="Strings"
          type={<textarea type="text" className="input"></textarea>}
          for="1"
        />
        <Attribute
          title="Type Speed"
          type={<input type="number" className="input"></input>}
          for="2"
        />
        <Attribute
          title="Back Speed"
          type={<input type="number" className="input"></input>}
          for="3"
        />
        <Attribute
          title="Start Delay"
          type={<input type="number" className="input"></input>}
          for="4"
        />
        <Attribute
          title="Back Delay"
          type={<input type="number" className="input"></input>}
          for="5"
        />
        <Attribute title="Fade Out" for="6" />
        <Attribute
          title="Fade Out Delay"
          type={<input type="number" className="input"></input>}
          for="7"
        />
        <Attribute title="Loop" for="8" />
        <Attribute
          title="Loop Count"
          type={<input type="number" className="input"></input>}
          for="9"
        />
        <Attribute title="Shuffle" for="10" />
        <Attribute title="Smart Backspace" for="11" />
        <Attribute title="Show Cursor" for="12" />

        <Attribute
          title="Cursor"
          type={<input type="text" className="input" maxlength="1"></input>}
          for="13"
        />
      </div>
    </div>
  );
}
