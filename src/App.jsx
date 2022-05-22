import TextArea from './components/textArea';
import Options from './components/rightMenu';
import Navbar from './components/navbar';
import Footer from './components/footer';

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return (
    <div className="container">
      <Navbar />
      <TextArea />
      <Options />
      <Footer />
    </div>
  );
}
