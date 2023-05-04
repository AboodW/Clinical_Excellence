/* eslint-disable no-unused-vars */
import "./Footer.css";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footerContainer container-fluid d-flex flex-column justify-content-around align-items-center">
      <div className="rowBanner w-100">
        <div className="row w-100">
          <div className="d-flex justify-content-around">
            <div className="colo-md-4">
              <div className="co1 d-flex flex-column justify-content-between">
                <h6 className="footerHeaderOption">Get In Touch</h6>
                <p className="footerOption footerOPText">
                  the quick fox jumps over the lazy dog
                </p>
                <div className="socialIcons d-flex justify-content-between align-items-center">
                  <BsFacebook className="socialIcon" />
                  <BsInstagram className="socialIcon" />
                  <BsTwitter className="socialIcon" />
                </div>
              </div>
            </div>
            <div className="colo-md-4">
              <div className="co1 d-flex flex-column justify-content-between">
                <h6 className="footerHeaderOption">Company info</h6>
                <p className="footerOption">About Us</p>
                <p className="footerOption">Carrier</p>
                <p className="footerOption">We are hiring</p>
                <p className="footerOption">Blog</p>
              </div>
            </div>
            <div className="colo-md-4">
              <div className="co1 d-flex flex-column justify-content-between">
                <h6 className="footerHeaderOption">Features</h6>
                <p className="footerOption">Business Marketing</p>
                <p className="footerOption">User Analytic</p>
                <p className="footerOption">Live Chat</p>
                <p className="footerOption">Unlimited Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="theRights">
        <p>Made With Love By Finland All Right Reserved </p>
      </div>
    </div>
  );
};

export default Footer;
