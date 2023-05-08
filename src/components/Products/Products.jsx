/* eslint-disable no-unused-vars */
import "./Products.css";
import { productsTitles } from "../../constants/products";
import { client } from "../../lib/client";
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
// import OwlCarousel from "react-owl-carousel";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";

const Products = () => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const query = '*[_type == "product"]';
    const productData = await client.fetch(query).catch(console.error);

    setProducts(productData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // console.log(Array.of(products));

  return (
    <div className="container my-5">
      <div className="productTitles  d-flex flex-column align-items-start">
        <p className="productSemiTitle">{productsTitles.semiTitle}</p>
        <p className="productTitle">{productsTitles.title}</p>
      </div>
      <div className="products">
        <div className="row">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

{
  /* <OwlCarousel
  key={product._id}
  className="owl-theme"
  loop
  autoplay
  margin={10}
  nav
> */
}
{
  /* <div className="item"> */
}
{
  /* </div> */
}
{
  /* </OwlCarousel> */
}
export default Products;
