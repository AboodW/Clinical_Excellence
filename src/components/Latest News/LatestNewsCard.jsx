/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./LatestNewsCard.css";
import { AiOutlineAreaChart } from "react-icons/ai";
import { GiAlarmClock } from "react-icons/gi";
import { IoIosArrowForward } from "react-icons/io";

const LatestNewsCard = (props) => {
  const {
    img,
    googleLink,
    trendingLink,
    newLink,
    cardTitle,
    cardText,
    cardClockLink,
    cardChartLink,
    cardButtonText,
  } = props;
  return (
    <div className="col-md-3">
      <div className="card latestNewsCardCont p-0 m-2 border-0">
        <div className="card-body d-flex flex-column justify-content-between p-0">
          <div className="LatestNewsCardImgContainer">
            <img
              src={img}
              alt="Group-207"
              className="card-img-top"
              border="0"
            />
          </div>
          <div className="LatestMenu">
            <button className="border-0 ">{googleLink}</button>
            <button className="border-0 ">{trendingLink}</button>
            <button className="border-0 ">{newLink}</button>
          </div>
          <h5 className="card-title latestNewsHeader">{cardTitle}</h5>
          <p className="card-text latestNewsCardText">{cardText}</p>

          <div className="LatestNewsCCLinks">
            <button className="border-0 bg-white d-flex align-items-center">
              <span className="clock">
                <GiAlarmClock />
              </span>
              {cardClockLink}
            </button>
            <button className="border-0 bg-white d-flex align-items-center ">
              <span className="chart">
                <AiOutlineAreaChart />
              </span>
              {cardChartLink}
            </button>
          </div>

          <button
            href="#"
            className="latestNewsButton d-flex align-items-center"
          >
            {cardButtonText}
            <span className="">
              <IoIosArrowForward />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LatestNewsCard;
