/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import "./Dashboard.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsPencilSquare } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import { client, urlFor } from "../lib/client";
import { UpdateModal, AddNewProduct } from "../components";

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  //states for fields
  const [pProduct, setPProduct] = useState({
    name: "",
    details: "",
    price: "",
    image: "",
    slug: "",
  });
  let storeId;
  // console.log(products);

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const storeIdFunc = (id) => {
    storeId = id;
    // console.log(storeId);

    products.map((product) => {
      if (product._id === storeId) {
        // console.log(product);
        setPProduct({
          name: product.name,
          details: product.details,
          price: product.price,
          image: product.image,
          slug: product.slug,
        });

        console.log(product.name);
        console.log(product.details);
        console.log(product.price);
        console.log(product.image);
        console.log(product.slug);
      }
    });
  };

  console.log(pProduct);

  const handleProductUpdate = async () => {
    // const { name, details, price, image } = e.target.elements;
    // const product = {
    //   name: name.value,
    //   details: details.value,
    //   price: price.value,
    //   image: image.value,
    // };
    // try {
    //   // Make API call to update product
    //   await client.update(product);
    //   // Update products array
    //   const updatedProducts = products.map((product) => {
    //     if (product._id === storeId) {
    //       return product;
    //     }
    //     return product;
    //   });
    //   setProducts(updatedProducts);
    //   // Close modal
    // } catch (error) {
    //   console.error(error);
    // }
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
      <div className="container ">
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
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#UpdateProduct"
                          className="dashboardUpdate"
                          onClick={() => storeIdFunc(product._id)}
                        >
                          <BsPencilSquare />
                        </button>
                      </div>
                    </td>
                    <td>
                      <div>
                        <button
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
      <div
        className="modal fade"
        id="UpdateProduct"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Updating Product
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {/* Update Modal Form */}
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="image" className="form-label">
                    Image
                  </label>
                  <input
                    type="file"
                    name="image"
                    className="form-control"
                    id="image"
                    placeholder={"Change Image"}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder={pProduct.name}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="details" className="form-label">
                    Details
                  </label>

                  <textarea
                    name="details"
                    className="form-control"
                    id="details"
                    placeholder={pProduct.details}
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="price" className="form-label">
                    Price
                  </label>
                  <input
                    type="text"
                    name="price"
                    className="form-control"
                    id="price"
                    placeholder={`$${pProduct.price}`}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="submit" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
