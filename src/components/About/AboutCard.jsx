/* eslint-disable react/prop-types */
import "./AboutCard.css";

const AboutCard = (props) => {
  const { num, text, text2 } = props;
  return (
    <div className="col-lg-3 aboutColCont">
      <div className="card aboutCardCont">
        <div className="card-body p-0 aboutBody">
          <span className="cardCircle">{num}</span>

          <p className="card-text aboutCardText1 w-50">{text}</p>

          <div className="horeLine"></div>

          <div className="twoLines d-flex">
            <p className="card-text aboutCardText2 ">{text2}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
