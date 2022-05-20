import githubIcon from '../assets/svg/Github - Negative.svg';
// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return (
    <div className="navbar">
      <div className="logo">Typed.js Generator</div>
      <a
        className="github"
        href="https://github.com/mattboldt/typed.js/"
        target="blank"
      >
        <img src={githubIcon} alt="Typed.js-Github" title="Typed.js-Github" />
      </a>
    </div>
  );
}
