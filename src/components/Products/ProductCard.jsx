/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import "./ProductCard.css";
import { Link } from "react-router-dom";
import { urlFor } from "../../lib/client";

const ProductCard = ({ product: { image, name, slug, price, details } }) => {
  return (
    <div className="col-md-3 productColumn">
      <Link to="/">
        <div className="card productCard border-0">
          <div className="productCardTitle">
            <p className="productBigTitle">{name}</p>
            <p className="productSmallTitle">{details}</p>
          </div>

          <img src={urlFor(image && image[0])} alt={name} />

          <div className="productCardPrice">
            <p className="productPrice">${price}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
