/* eslint-disable no-unused-vars */
import "./Products.css";
import { productsTitles } from "../../constants/products";
import { client } from "../../lib/client";
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

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

export default Products;
