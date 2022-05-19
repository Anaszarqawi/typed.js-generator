import TextArea from './textArea';
import Options from './rightMenu';

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return (
    <div className="container">
      <TextArea />
      <Options />
    </div>
  );
}
