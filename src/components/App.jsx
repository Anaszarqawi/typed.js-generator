import TextArea from './textArea';
import Options from './rightMenu';
import Navbar from './navbar';

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return (
    <div className="container">
      <Navbar />
      <TextArea />
      <Options />
    </div>
  );
}
