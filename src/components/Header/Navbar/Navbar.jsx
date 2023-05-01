// import "./Navbar.css";
// // import { Link } from "react-router-dom";

// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import { navbarTexts } from "../../../constants/header";
// import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
// import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
// import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
// import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

// const NavBar = () => {
//   return (
//     <Navbar collapseOnSelect expand="lg" className="p-0">
//       <Container fluid className="navBigCont d-flex">
//         <Navbar.Brand href="/">
//           <img src={navbarTexts[0]?.logo} />
//         </Navbar.Brand>
//         <Container className="navsButtons m-0 d-flex">
//           <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//           <Navbar.Collapse id="responsive-navbar-nav">
//             <Nav className="me-auto firstNavLinks">
//               <Nav.Link href="/">
//                 {/* <Link to="/"> */}
//                 {navbarTexts[1]?.Home}
//                 {/* </Link> */}
//               </Nav.Link>
//               <NavDropdown
//                 title={navbarTexts[1]?.Shop}
//                 id="navbarScrollingDropdown"
//                 href="*"
//               >
//                 <NavDropdown.Item href="*">Drugs</NavDropdown.Item>
//                 <NavDropdown.Item href="*">Medical Products</NavDropdown.Item>
//                 <NavDropdown.Divider />
//                 <NavDropdown.Item href="*">Get Help</NavDropdown.Item>
//               </NavDropdown>
//               <Nav.Link href="*">{navbarTexts[1]?.About}</Nav.Link>
//               <Nav.Link href="*">{navbarTexts[1]?.Blog}</Nav.Link>
//               <Nav.Link href="*">{navbarTexts[1]?.Contact}</Nav.Link>
//               <NavDropdown
//                 title={navbarTexts[1]?.Pages}
//                 id="navbarScrollingDropdown"
//               >
//                 <NavDropdown.Item href="/dashboard">DashBoard</NavDropdown.Item>
//               </NavDropdown>
//             </Nav>
//           </Navbar.Collapse>
//           <Nav className="navlogin">
//             <Nav.Link className="p-3 text1" href="*">
//               <PersonOutlinedIcon />
//               <span>{navbarTexts[2]?.login}</span>
//             </Nav.Link>
//             <Nav.Link className="p-3" eventKey={2} href="*">
//               <SearchOutlinedIcon />
//             </Nav.Link>
//             <Nav.Link className="p-3" href="*">
//               <ShoppingCartOutlinedIcon />
//             </Nav.Link>
//             <Nav.Link className="p-3" href="*">
//               <FavoriteBorderOutlinedIcon />
//             </Nav.Link>
//           </Nav>
//         </Container>
//       </Container>
//     </Navbar>
//   );
// };

// export default NavBar;
