import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
      <img src="https://studio.code.org/v3/assets/XA4gjKFTEd7IZwGr-ZBc8E7fH5jKozVowuXz52roKFs/portfolio.gif" alt="Prakhar" />

        <h2>Prakhar Sharma</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://www.linkedin.com/in/prakhar-sharma-10100a239/" target={"blank"}>
            <AiFillLinkedin />
          </a>
          <a href="https://www.instagram.com/_._.prakhar._._/?igshid=YmMyMTA2M2Y%3D" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/Prakhar788" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
