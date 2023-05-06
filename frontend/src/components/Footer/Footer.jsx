import React, { useState } from "react";
import FooterLogo from "../../assets/images/FooterLogo.png";
import location from "../../assets/images/pin.png";
import phone from "../../assets/images/telephone.png";
import "./Footer.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Footer() {
  const [email, setEmail] = useState();

  const handleSend = async () => {
    await axios
      .post(`/api/newsletter/signupNewsletter`, { email })
      .then(({ data }) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="footer">
      <div className="footermaindiv">
        <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <img src={FooterLogo} alt="" />
          <div>
            <i className="fa fa-instagram" style={{ color: "#000000", padding: "10px" }}></i>
            <i className="fa fa-twitter" style={{ color: "#000000", padding: "10px" }}></i>
            <i className="fa fa-facebook-f" style={{ color: "#000000", padding: "10px" }}></i>
          </div>
        </div>
        <hr />
        <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <div>
            <ul style={{ listStyleType: "none", width: "300px", marginTop: "50px" }}>
              <li style={{ fontSize: "25px", fontWeight: "600" }}>For Companies</li>
              <Link to="/postYourProgram" style={{ color: "black", width: "200px" }}>
                Post Your Program
              </Link>
              <li style={{ color: "black", width: "200px" }}>Pre-Employement</li>
              <li style={{ color: "black", width: "200px" }}>Overseas Employment</li>
              <li style={{ color: "black", width: "200px" }}>Overseas Student Checkup</li>
            </ul>
          </div>
          <div>
            <ul style={{ listStyleType: "none", width: "300px", marginTop: "50px" }}>
              <li style={{ fontSize: "25px", fontWeight: "600" }}>For Programs</li>
              <li style={{ color: "black", width: "110px" }}>Wellness Aggregator</li>
              <li style={{ color: "black", width: "110px" }}>Quote Assitant</li>
              <li style={{ color: "black", width: "110px" }}>Plan & Pricing</li>
            </ul>
          </div>

          <div>
            <ul style={{ listStyleType: "none", width: "300px", marginTop: "50px" }}>
              <li style={{ fontSize: "25px", fontWeight: "600" }}>Helpful Links</li>
              <Link to="/contactUs" style={{ color: "black", width: "110px" }}>
                Contact Us
              </Link>
              <li style={{ color: "black", width: "110px" }}>Privacy Policy</li>
              <Link to="/termsAndConditions" style={{ color: "black", width: "110px" }}>
                Terms of Use
              </Link>
              <li style={{ color: "black", width: "110px" }}>Career</li>
            </ul>
          </div>

          <div>
            <ul style={{ listStyleType: "none", width: "300px", marginTop: "50px" }}>
              <li style={{ fontSize: "25px", fontWeight: "600" }}>Account</li>
              <Link to="/login" style={{ color: "black", width: "110px" }}>
                Login
              </Link>
              <li style={{ width: "400px" }}></li>
              <Link to="/signup" style={{ color: "black", width: "110px" }}>
                Signup
              </Link>
            </ul>
          </div>

          <div>
            <ul style={{ listStyleType: "none", width: "400px", marginTop: "50px" }}>
              <span style={{ fontSize: "25px", fontWeight: "600" }}>Sign Up For a Newsletter</span>
              <li style={{ width: "400px" }}>Weekly News ,New Program Alert,</li>
              <li style={{ width: "400px" }}>Quotation Alert, Quotation Assistance</li>
              <div style={{ display: "flex", alignItems: "center", marginTop: "20px" }}>
                <input
                  style={{ border: "none", borderRadius: "10px", padding: "10px" }}
                  type="text"
                  placeholder="Enter Your Email id"
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
                <span
                  style={{
                    height: "44px",
                    width: "100px",
                    backgroundColor: "#d6193f",
                    borderRadius: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white",
                    marginLeft: "10px",
                    cursor: "pointer",
                  }}
                  onClick={handleSend}
                >
                  Submit
                </span>
              </div>
            </ul>
          </div>
        </div>
        <hr />
        <span style={{ width: "100%", textAlign: "center" }}>© 2023 Good Tech Mind. All Right Reserved</span>
        <hr />
      </div>
    </div>
  );
}
