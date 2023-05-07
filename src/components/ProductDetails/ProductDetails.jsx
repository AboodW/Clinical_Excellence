/* eslint-disable no-unused-vars */
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "../Header/Navbar/Navbar";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
import { client, urlFor } from "../../lib/client";
import Products from "../Products/Products";
import { useStateContext } from "../../context/StateContext";
import "./ProductDetails.css";
import ProductCard from "../Products/ProductCard";

const ProductDetails = () => {
  const { slug } = useParams();
  // console.log(slug);
  const [product, setProduct] = useState([]);
  const [products, setProducts] = useState([]);
  const { decQty, incQty, qty, onAdd, setQty, setShowCart } = useStateContext();
  const { image, name, details, price } = product;
  // console.log(product.image);
  // console.log(products);

  const handleBuyNow = () => {
    onAdd(product, qty);

    setShowCart(true);
  };

  const fetchProductsData = async () => {
    const productsQuery = '*[_type == "product"]';
    const products1 = await client.fetch(productsQuery);
    setProducts(products1);
  };
  const fetchProductData = async () => {
    const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
    const product1 = await client.fetch(query);
    setProduct(product1);
  };

  const fetchStaticPaths = async () => {
    const query = '*[_type == "product"]';
    const products1 = await client.fetch(query);
    const paths = products1.map((product) => ({
      params: { slug: product.slug.current },
    }));
    return {
      paths,
      fallback: false,
    };
  };

  useEffect(() => {
    fetchStaticPaths();
    fetchProductsData();
    fetchProductData();
  }, [slug]);

  return (
    <div>
      <Navbar />
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            {image && (
              <img
                src={urlFor(image[0])}
                className="product-detail-image"
                alt={name}
              />
            )}
          </div>
        </div>

        <div className="product-detail-desc">
          <h1>{name}</h1>
          <div className="reviews">
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>(20)</p>
          </div>
          <h4>Details: </h4>
          <p>{details}</p>
          <p className="price">${price}</p>
          <div className="quantity">
            <h3>Quantity:</h3>
            <p className="quantity-desc">
              <span className="minus" onClick={decQty}>
                <AiOutlineMinus />
              </span>
              <span className="num">{qty}</span>
              <span className="plus" onClick={incQty}>
                <AiOutlinePlus />
              </span>
            </p>
          </div>
          <div className="buttons">
            <button
              type="button"
              className="add-to-cart"
              onClick={() => onAdd(product, qty)}
            >
              Add to Cart
            </button>
            <button type="button" className="buy-now" onClick={handleBuyNow}>
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <div className="maylike-products-wrapper">
        <h2>You may also like</h2>
        <div className="marquee">
          <div className="maylike-products-container divSize track">
            {products.map((product) => (
              //Link
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
