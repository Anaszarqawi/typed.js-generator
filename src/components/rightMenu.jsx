import Attribute from './attribute';
import Buttons from './buttons';
import Code from './code';

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return (
    <div className="rightMenu">
      <div className="leftSide">
        <div className="title">Script</div>
        <Code language="javascript" />
      </div>
      <div className="rightSide">
        <Buttons />
        <div className="options">
          <div className="title">Settings</div>

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
            type={
              <input type="number" className="input" placeholder="50"></input>
            }
            id="2"
            unit="ms"
          />
          <Attribute
            title="Back Speed"
            type={
              <input type="number" className="input" placeholder="20"></input>
            }
            id="3"
            unit="ms"
          />
          <Attribute
            title="Start Delay"
            type={
              <input type="number" className="input" placeholder="0"></input>
            }
            id="4"
            unit="ms"
          />
          <Attribute
            title="Back Delay"
            type={
              <input type="number" className="input" placeholder="0"></input>
            }
            id="5"
            unit="ms"
          />
          <Attribute title="Fade Out" id="6" />
          <Attribute
            title="Fade Out Delay"
            type={
              <input type="number" className="input" placeholder="0"></input>
            }
            id="7"
            unit="ms"
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
            id="12"
          />
        </div>
      </div>
    </div>
  );
}
