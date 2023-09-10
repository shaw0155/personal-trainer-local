import fb from "../icons/facebook.png";
import insta from "../icons/instagram.png";
import yt from "../icons/youtube.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <h1>
        <span>FOLLOW</span> US ON
      </h1>
      <div className="icons-container">
        <Link to="">
          <img src={fb} alt="" />
        </Link>
        <Link to="">
          <img src={insta} alt="" />
        </Link>
        <Link to="">
          <img src={yt} alt="" />
        </Link>
      </div>

      <hr />
      <p>
        © COPYRIGHT 2023. ALL RIGHTS RESERVED. Website Design <span>SHAW</span>
      </p>
    </footer>
  );
}
