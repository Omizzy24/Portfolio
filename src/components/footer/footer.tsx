import "./footer.css";
import Link from "next/link";
export default function Footer() {
  return (
    <div className="footer">
      <div className="topHeader">
        <div className="left">2025</div>
        <div className="right">NYC/CT </div>
      </div>
      <div className="linksSection">
        <div className="left">
          <div className="container">
            <div className="topText">Get in touch</div>
            <div className="bottomText">youremail@proton.me</div>
          </div>
          <div className="container">
            <div className="topText">Connect</div>
            {/* NOTE: onClick is currently removed */}
            <div className="bottomText">Github</div>
            <div className="bottomText">Instagram</div>
            <div className="bottomText">Linkedin</div>
          </div>
        </div>
        <div className="right">
          <div className="navBar">
            <a href="#hero" className="item">
              Home{" "}
            </a>
            <a href="#about" className="item">
              About
            </a>
            <a href="#education" className="item">
              Education
            </a>
            <a href="#skills" className="item">
              Skills
            </a>
            <a href="#services" className="item">
              Services
            </a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="top">
          © 2025 &nbsp;Omar Al-Shammary &nbsp;All Rights Reserved
        </div>
        <div className="bottom">
          Designed and Developed by&nbsp;
          <Link href="https://github.com/omaral-shammary">
            <u>Omar Al-Shammary</u>
          </Link>
        </div>
      </div>
    </div>
  );
}
