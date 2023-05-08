/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import "./ProductCard.css";
import { Link, useNavigate } from "react-router-dom";
import { urlFor } from "../../lib/client";

const ProductCard = ({ product: { image, name, slug, price, details } }) => {
  const navigate = useNavigate();

  // const refreshThePage = () => {
  //   navigate(`/product/${slug.current}`);
  //   window.location.reload();
  // };

  return (
    <div className="col-md-3 productColumn">
      {/* to={`/product/${product.slug}`} */}
      {/* onClick={refreshThePage} */}
      <Link to={`/product/${slug.current}`}>
        <div className="card productCard border-0">
          <div className="productCardTitle">
            <p className="productBigTitle">{name}</p>
            <p className="productSmallTitle">{details}</p>
          </div>

          {image && <img src={urlFor(image).url()} alt={name} />}

          <div className="productCardPrice">
            <p className="productPrice">${price}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
