/* eslint-disable no-unused-vars */
import "./Advantage.css";
import {
  advantageHeaderTexts,
  advantageCardTexts,
  adImg,
} from "../../constants/advantage";
import AdvantageCard from "./AdvantageCard";

const Advantage = () => {
  return (
    <div className="advantageBigContainer mt-5 container d-flex flex-column justify-content-between">
      <div className="AdvantageTextBody d-flex flex-column">
        <div className="AdvantageSemiTitle">
          <p>{advantageHeaderTexts.semiTitle}</p>
        </div>
        <div className="AdvantageTitle">
          <p>{advantageHeaderTexts.title}</p>
        </div>
        <div className="AdvantageText">
          <p>
            Problems trying to resolve the conflict between
            <span className="AdvantageBreakePoint">
              <br />
            </span>
            the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>
      </div>
      <div className="AdvantageCardContainer d-flex justify-content-between">
        <div className="AdvantageImage">
          <img src={adImg.img} alt="Advantage img" />
        </div>
        <div className="AdvantageCards d-flex justify-content-between align-items-center">
          <div className="row">
            {advantageCardTexts.map((item, index) => (
              <AdvantageCard {...item} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantage;
