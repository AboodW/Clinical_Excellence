import {
  About,
  Advantage,
  Footer,
  Header,
  LatestNews,
  Products,
  Research,
  Reviews,
} from "../components";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Header />
      <About />
      <Research />
      <Products />
      <Advantage />
      <LatestNews />
      <Reviews />
      <Footer />
    </>
  );
};

export default Home;