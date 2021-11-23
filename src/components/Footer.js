import { FaFlagCheckered } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__top">
        <div className="footer__logo">
          <FaFlagCheckered className="footer__icon" />
          <h4>K Motors</h4>
        </div>

        <div className="footer__about">
          <h3>About Us</h3>
          <div className="footer__about--container">
            <a href="http://karlnassar.live/" target="_blank" rel="noreferrer">
              Website
            </a>
            <a href="http://karlnassar.live/" target="_blank" rel="noreferrer">
              Investors
            </a>
            <a href="http://karlnassar.live/" target="_blank" rel="noreferrer">
              Terms of Service
            </a>
          </div>
        </div>
        <div className="footer__join">
          <h3>Join Us</h3>
          <div className="footer__join--container">
            <a
              href="mailto:kgnassar01@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Submit Image
            </a>
            <a
              href="mailto:kgnassar01@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Submit Video
            </a>
            <a
              href="mailto:kgnassar01@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Influencer
            </a>
          </div>
        </div>
        <div className="footer__social">
          <h3>Social Media</h3>
          <div className="footer__social--container">
            <a
              className="footer__link"
              href="https://www.instagram.com/karlnassar1/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            <a
              className="footer__link"
              href="https://github.com/KarlGNassar"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              className="footer__link"
              href="https://www.linkedin.com/in/karl-nassar-2296a3202/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <small>
          K Motors &copy; {new Date().getFullYear()} All Rights Reserved.
        </small>
      </div>
    </div>
  );
};

export default Footer;
