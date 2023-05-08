/* eslint-disable no-unused-vars */
import "./Reviews.css";
import { ratingTexts, subscribeTexts } from "../../constants/reviews";

const Reviews = () => {
  return (
    <div className="container-fluid reviewsContainer mt-5  mx-auto d-flex justify-content-around">
      <div className="ratingContainer d-flex flex-column justify-content-center align-items-center">
        <div className="stars">
          <img src={ratingTexts?.img} alt={"stars"} />
        </div>
        <div className="reviewText">
          <p>{ratingTexts?.text}</p>
        </div>
        <div className="authorBanner d-flex justify-content-between align-items-center">
          <div className="authorImg">
            <img src={ratingTexts?.reviewImg} alt={"author"} />
          </div>
          <div className="authorInfo d-flex flex-column  align-items-center">
            <p className="authorName ps-3 mb-0">{ratingTexts?.authorName}</p>
            <p className="authorJob mb-0">{ratingTexts?.authorJob}</p>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <div className="verticalDivider"></div>
      </div>
      <div className="subscribeContainer d-flex flex-column justify-content-center align-items-center">
        <div className="subscribeText1">
          <p>{subscribeTexts?.title}</p>
        </div>
        <div className="subscribeDiscount">
          <p>{subscribeTexts?.discount}</p>
        </div>

        <div className="subscribeInput d-flex">
          <input
            type="text"
            placeholder={subscribeTexts?.placeholder}
            className="form-control"
          />
          <button
            type="button"
            className="btn mt-0 reviewUniqueSubscribeButton"
          >
            {subscribeTexts?.buttonText}
          </button>
        </div>

        <div className="subscribeText2">
          <p>{subscribeTexts?.title}</p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
