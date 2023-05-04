/* eslint-disable no-unused-vars */
import "./Navbar.css";
// import { Link } from "react-router-dom";
import { navbarTexts } from "../../../constants/header";
import { BiMenuAltRight } from "react-icons/bi";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const Navbar = () => {
  return (
    <div className="navBanner">
      <nav className="navbar navbar-expand-lg p-0 flex-nowrap">
        <div className="container p-3">
          <a className="navbar-brand" href="/">
            <img src={navbarTexts[0].logo} alt="logo img" />
          </a>
          <div className="allNavsLinks d-flex ">
            <button
              className="navbar-toggler border-0 my-auto"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="spanMenu">
                <BiMenuAltRight />
              </span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="*"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Shop
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="*">
                        Drugs
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="*">
                        Medical Products
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="*">
                        Get Help
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="*">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="*">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="*">
                    Contact
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="*"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    pages
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="*">
                        Dashboard
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="loginBanner">
              <ul className="navbar-nav flex-row ">
                <li className="nav-item ">
                  <a to="*" className="nav-link login">
                    <PersonOutlinedIcon />
                    {navbarTexts[2]?.login}
                  </a>
                </li>
                <li className="nav-item ">
                  <a to="*" className="nav-link">
                    <SearchOutlinedIcon />
                  </a>
                </li>
                <li className="nav-item">
                  <a to="*" className="nav-link">
                    <ShoppingCartOutlinedIcon />
                  </a>
                </li>
                <li className="nav-item">
                  <a to="*" className="nav-link favi">
                    <FavoriteBorderOutlinedIcon />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
