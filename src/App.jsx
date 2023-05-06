import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import NoMatch from "./pages/NoMatch";
import { Products, ProductDetails } from "./components";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="dashboard" element={<Dashboard />} />
        <Route exact path="/product" element={<Products />} />
        <Route exact path="/product/:slug" element={<ProductDetails />} />
        <Route exact path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
