import "./Header.css";
import { headerTexts } from "../../constants/header";
// import NavBar from "./Navbar/NavBar";
import Overlay from "./../common/Overlay/Overlay";
const Header = () => {
  return (
    <header className="container-fluid headerLayout">
      <Overlay />
      {/* <NavBar /> */}
      <div className="container headerBody p-0 d-flex align-items-center justify-content-center">
        <div className="container my-auto p-0">
          <div className="headerBigTitle">{headerTexts[0].Bigtitle}</div>
          <div className="headerParagraph my-4">{headerTexts[0].paragraph}</div>
          <div className="headerButtons">
            <button className="getQuoteButton">
              {headerTexts[0].GetButton}
            </button>
            <button className="learnMoreButton">
              {headerTexts[0].LearnButton}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
