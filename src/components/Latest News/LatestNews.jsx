/* eslint-disable no-unused-vars */
import "./LatestNews.css";
import {
  latestNewsHeaderTexts,
  latestNewsCardsTexts,
} from "../../constants/latest_News";
import LatestNewsCard from "./LatestNewsCard";

const LatestNews = () => {
  return (
    <div className="container d-flex flex-column justify-content-between">
      <div className="latestNewsTextBody d-flex flex-column">
        <div className="latestNewsTitle">
          <p>{latestNewsHeaderTexts.header}</p>
        </div>
        <div className="latestNewsText">
          <p>
            Problems trying to resolve the conflict between
            <span className="latestNewsBreakePoint">
              <br />
            </span>
            the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>
      </div>

      <div className="latestNewsCards d-flex align-items-center">
        <div className="row w-100">
          <div className="d-flex justify-content-between"></div>
          {latestNewsCardsTexts.map((item, index) => (
            <LatestNewsCard {...item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
