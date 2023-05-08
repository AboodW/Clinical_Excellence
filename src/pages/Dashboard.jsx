/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import "./Dashboard.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsPencilSquare } from "react-icons/bs";
import { MdOutlineMedicalServices } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import { client, urlFor } from "../lib/client";
import { UpdateModal, AddNewProduct } from "../components";

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  //states for fields
  const [pProduct, setPProduct] = useState({
    name: "",
    details: "",
    price: "",
    image: "",
    slug: "",
  });
  const [storeId, setStoreId] = useState("");

  const handleAddProductSubmit = async (e) => {
    e.preventDefault();
    //form data
    const formData = new FormData(e.target);
    const newProduct = {
      name: formData.get("AddName"),
      details: formData.get("AddDetails"),
      price: formData.get("AddPrice"),
      slug: formData.get("AddSlug"),
    };
    if (formData.get("AddImage")) {
      const file = formData.get("AddImage");

      const asset = await client.assets.upload("image", file);
      // replace with actual dimensions;
      console.log(asset._id);
      newProduct.image = {
        _type: "image",
        asset: {
          _ref: asset._id,
          _type: "reference",
        },
      };
    }
    //add product to db
    client
      .create({ _type: "product", ...newProduct })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });

    //add product to state
    setProducts([...products, newProduct]);
    //reset form
    e.target.reset();
  };

  // console.log(newProduct);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newProduct = {
      name: formData.get("name"),
      details: formData.get("details"),
      price: formData.get("price"),
    };

    if (formData.get("image")) {
      const file = formData.get("image");

      const asset = await client.assets.upload("image", file);
      // replace with actual dimensions;
      console.log(asset._id);
      newProduct.image = {
        _type: "image",
        asset: {
          _ref: asset._id,
          _type: "reference",
        },
      };
    }

    client
      .patch(storeId)
      .set(newProduct)
      .commit()
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });

    const updatedProducts = products.map((product) => {
      if (product._id === storeId) {
        return {
          ...product,
          name: newProduct.name,
          details: newProduct.details,
          price: newProduct.price,
          image: newProduct.image,
        };
      } else {
        return product;
      }
    });

    setProducts(updatedProducts);
  };

  const storeIdFunc = (id) => {
    setStoreId(id);
    console.log(storeId);
    products.map((product) => {
      if (product._id === storeId) {
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
        <button
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#AddProduct"
          className="dashboardUpdate"
        >
          Add New Product
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
                            src={urlFor(product.image).url()}
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
                          {/* {console.log(storeId)} */}
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
                    accept="image/*"
                    onChange={(e) =>
                      setPProduct({ ...pProduct, image: e.target.files[0] })
                    }
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
                    value={pProduct.name}
                    onChange={(e) => {
                      setPProduct({ ...pProduct, name: e.target.value });
                    }}
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
                    onChange={(e) => {
                      setPProduct({ ...pProduct, details: e.target.value });
                    }}
                    value={pProduct.details}
                  >
                    {pProduct.details}
                  </textarea>
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
                    value={pProduct.price.slice(0)}
                    onChange={(e) => {
                      setPProduct({ ...pProduct, price: e.target.value });
                    }}
                  />
                </div>
                <div className="modal-footer d-flex justify-content-center align-items-center">
                  <button type="submit" className="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="AddProduct"
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
              <form onSubmit={handleAddProductSubmit}>
                <div className="mb-3">
                  <label htmlFor="image" className="form-label">
                    Image
                  </label>
                  <input
                    type="file"
                    name="AddImage"
                    className="form-control"
                    id="image"
                    placeholder={"Change Image"}
                    accept="image/*"
                    onChange={(e) =>
                      setPProduct({ ...pProduct, image: e.target.files[0] })
                    }
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    name="AddName"
                    className="form-control"
                    id="name"
                    onChange={(e) => {
                      setPProduct({ ...pProduct, name: e.target.value });
                    }}
                    required
                  />
                </div>

                {/*slug */}

                <div className="mb-3">
                  <label htmlFor="slug" className="form-label">
                    Slug
                  </label>
                  <input
                    type="text"
                    name="AddSlug"
                    className="form-control"
                    id="slug"
                    onChange={(e) => {
                      setPProduct({ ...pProduct, slug: e.target.value });
                    }}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="details" className="form-label">
                    Details
                  </label>

                  <textarea
                    name="AddDetails"
                    className="form-control"
                    id="details"
                    onChange={(e) => {
                      setPProduct({ ...pProduct, details: e.target.value });
                    }}
                    required
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="price" className="form-label">
                    Price
                  </label>
                  <input
                    type="text"
                    name="AddPrice"
                    className="form-control"
                    id="price"
                    onChange={(e) => {
                      setPProduct({ ...pProduct, price: e.target.value });
                    }}
                    required
                  />
                </div>
                <div className="modal-footer d-flex justify-content-center align-items-center">
                  <button type="submit" className="btn btn-primary">
                    Add New Product
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
