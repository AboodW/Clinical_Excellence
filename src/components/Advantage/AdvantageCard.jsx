/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./Advantage.css";
import { BsFillCreditCardFill } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";

const AdvantageCard = ({ header, buttonText }) => {
  return (
    <div className="col-md-6 p-0">
      <div className="card adCardCont border-0">
        <div className="card-body d-flex flex-column justify-content-between p-0">
          <div className=" cardIconContainer">
            <span>
              <BsFillCreditCardFill />
            </span>
          </div>
          <h5 className="card-title adHeader">{header} </h5>
          <div className="adCardDivider"></div>
          <p className="card-text adCardText">
            The gradual accumulation <br /> of
            <br /> information about
          </p>
          <div className="adCardButtonCont">
            <button href="#" className="adCardButton bg-white">
              <span className="adCardButtonText">{buttonText}</span>
              <span className="adCardButtonIcon">
                <IoIosArrowForward />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvantageCard;
