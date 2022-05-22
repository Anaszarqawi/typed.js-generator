import heart from '../assets/svg/heart-svgrepo-com.svg';
// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return (
    <footer>
      <p className="copyright">
        Made with <img src={heart} className="heart"></img>
        by <a href="https://github.com/Anaszarqawi"> @anaszarqawi_</a>
      </p>
      <a
        href="https://github.com/Anaszarqawi/typed.js-generator"
        target="_blank"
        className="github"
        rel="noreferrer"
      >
        Github | v1.0.0
      </a>
    </footer>
  );
}
