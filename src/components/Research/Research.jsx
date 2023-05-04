import "./Research.css";
import { researchTexts } from "../../constants/research";
const Research = () => {
  return (
    <div className="container d-flex justify-content-between align-items-center">
      <div className="researchTextBody d-flex flex-column">
        <div className="researchTitles">
          <p className="researchSemiTitle">{researchTexts.semiTitle}</p>
          <p className="researchBigTitle">{researchTexts.title}</p>
        </div>

        <p className="researchText">
          Problems trying to resolve the conflict between
          <span className="breakResearch">
            <br />
          </span>
          the two major realms of Classical physics: Newtonian mechanics.
        </p>
        <div className="researchButtonBanner">
          <button className="researchFillButton">
            {researchTexts.fillButton}
          </button>
          <button className="researchOutlineButton">
            {researchTexts.outlineButton}
          </button>
        </div>
      </div>
      <div className="researchImg">
        <img src={researchTexts.img} alt={researchTexts.alt} />
      </div>
    </div>
  );
};

export default Research;
