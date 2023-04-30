import "./About.css";
import AboutCard from "./AboutCard";
import { aboutTexts } from "../../constants/About.js";

const About = () => {
  return (
    <div className="container aboutMainCont d-flex align-items-center p-0">
      <div className="my-auto mx-auto">
        <div className="row d-flex">
          {aboutTexts.map((obj, index) => (
            <AboutCard key={index} {...obj} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
