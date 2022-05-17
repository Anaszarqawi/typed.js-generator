import Attribute from './attribute';
import Buttons from './buttons';

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return (
    <div className="RightMenu">
      <Buttons />
      <div className="options">
        <Attribute
          title="Strings"
          type={
            <textarea
              type="text"
              placeholder="These are the default values...&#10;You know what you should do?&#10;Use your own!&#10;Have a great day!"
              className="input"
              rows="6"
            ></textarea>
          }
          id="1"
        />
        <Attribute
          title="Type Speed"
          type={<input type="number" className="input" placeholder="0"></input>}
          id="2"
        />
        <Attribute
          title="Back Speed"
          type={<input type="number" className="input" placeholder="0"></input>}
          id="3"
        />
        <Attribute
          title="Start Delay"
          type={<input type="number" className="input" placeholder="0"></input>}
          id="4"
        />
        <Attribute
          title="Back Delay"
          type={
            <input type="number" className="input" placeholder="700"></input>
          }
          id="5"
        />
        <Attribute title="Fade Out" id="6" />
        <Attribute
          title="Fade Out Delay"
          type={
            <input type="number" className="input" placeholder="500"></input>
          }
          id="7"
        />
        <Attribute title="Loop" id="8" />
        <Attribute
          title="Loop Count"
          type={
            <input
              type="number"
              className="input"
              placeholder="Infinity"
            ></input>
          }
          id="9"
        />
        <Attribute title="Shuffle" id="10" />
        <Attribute title="Smart Backspace" id="11" />
        <Attribute title="Show Cursor" id="12" />

        <Attribute
          title="Cursor"
          type={
            <input
              type="text"
              className="input"
              maxLength="1"
              placeholder="|"
            ></input>
          }
          id="13"
        />
      </div>
    </div>
  );
}
