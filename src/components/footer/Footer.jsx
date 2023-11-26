import tikTok from "../../assets/tiktok.svg";

const Footer = () => {
  return (
    <footer className="">
      <div className="socials">
        <a href="#">
          <i className="bi bi-tiktok"></i>
        </a>
        <a href="#">
          <i className="bi bi-twitter-x"></i>
        </a>{" "}
        <a href="#">
          <i className="bi bi-facebook"></i>
        </a>
        <a href="#">
          <i className="bi bi-instagram"></i>
        </a>
        <a href="#">
          <i className="bi bi-yelp"></i>
        </a>
      </div>
      <div className="footer-links">
        <ul>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms of Service</a>
          </li>
          <li>
            <a href="#">Legal Information</a>
          </li>
        </ul>
      </div>
      <div className="copyright">
        &copy;2023 Smacky’s Smokin’ BBQ Shack. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
