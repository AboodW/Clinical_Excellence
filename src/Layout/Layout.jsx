/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {
  About,
  Advantage,
  Footer,
  Header,
  LatestNews,
  Products,
  Research,
  Reviews,
  Navbar,
} from "../components";

const Layout = ({ children }) => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <main>{children}</main>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
