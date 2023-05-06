/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import "./Dashboard.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsPencilSquare } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import { client, urlFor } from "../lib/client";

const Dashboard = () => {
  const [products, setProducts] = useState();
  const { image, name, slug, price, details } = products;

  const fetchProductsData = async () => {
    const productsQuery = '*[_type == "product"]';
    const products1 = await client.fetch(productsQuery);
    setProducts(products1);
  };

  useEffect(() => {
    fetchProductsData();
  });

  return (
    <div className="container">
      <button>
        <Link to="/">Home</Link>
      </button>
      <div className="mt-5">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Image</th>
              <th scope="col">Name</th>
              <th scope="col">Details</th>
              <th scope="col">price</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@fat</td>
              <td>@mdo</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>@fat</td>
              <td>@mdo</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colspan="1">Larry the Bird</td>
              <td>@twitter</td>
              <td>@twitter</td>
              <td>@fat</td>
              <td>@mdo</td>
              <td>@fat</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
