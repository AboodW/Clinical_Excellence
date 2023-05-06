/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import "./Dashboard.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsPencilSquare } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import { client, urlFor } from "../lib/client";

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  // console.log(products);

  const handleProductUpdate = (id) => {
    console.log("update");
  };

  const handleDeleteUpdate = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (confirmDelete) {
      try {
        // Make API call to delete product
        await client.delete(id);

        // Update products state to remove deleted product
        const updatedProducts = products.filter(
          (product) => product._id !== id
        );
        setProducts(updatedProducts);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const fetchProductsData = async () => {
    const productsQuery = '*[_type == "product"]';
    const products1 = await client.fetch(productsQuery);
    setProducts(products1);
  };

  useEffect(() => {
    fetchProductsData();
  }, []);

  return (
    <div className=" container-fluid dashboardBigContainer">
      <div className="container  ">
        <button>
          <Link to="/">Home</Link>
        </button>
        <div className="mt-5 table-responsive-md">
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
              {products &&
                products.map((product, index) => (
                  <tr key={product._id} className="tableRedRow">
                    <th scope="row">{index + 1}</th>
                    <td>
                      <div className="mt-3">
                        {product.image && (
                          <img
                            src={urlFor(product.image[0])}
                            className="dashboardImageWidth"
                            alt={product.name}
                          />
                        )}
                      </div>
                    </td>
                    <td>
                      <div className="mt-3">{product.name}</div>
                    </td>

                    <td>
                      <div className="mt-3">{product.details}</div>
                    </td>
                    <td>
                      <div className="mt-3">${product.price}</div>
                    </td>
                    <td>
                      <div>
                        <button
                          to={`/`}
                          className="dashboardUpdate"
                          onClick={() => handleProductUpdate(product._id)}
                        >
                          <BsPencilSquare />
                        </button>
                      </div>
                    </td>
                    <td>
                      <div>
                        <button
                          to={`/`}
                          className="dashboardDelete"
                          onClick={() => handleDeleteUpdate(product._id)}
                        >
                          <AiFillDelete />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
