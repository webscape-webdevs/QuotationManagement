import React, { useState } from "react";
import "./membership.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import MembershipPlansHome from "../../components/membershipPlansHome/MembershipPlansHome";
import { useSelector } from "react-redux";

export default function Membership() {
  const { sessionUser, loading } = useSelector((state) => state.sessionSlice);
  const [radioMonthly, setRadioMonthly] = useState(true);
  const [radioYearly, setRadioYearly] = useState(false);

  const handleMonthly = () => {
    setRadioMonthly(true);
    setRadioYearly(false);
  };

  const handleYearly = () => {
    setRadioMonthly(false);
    setRadioYearly(true);
  };

  return (
    <div className="membership">
      <Navbar />

      <h1 style={{ marginTop: "50px", textAlign: "center" }}>
        Membership <span style={{ color: "#d6193f" }}>Plans</span>
      </h1>

      {sessionUser && sessionUser._id && sessionUser.role === "vendor" && (
        <div className="activePlan">
          <h1 style={{ color: "#d6193f", marginBottom: "30px" }}>Active Plan</h1>
          <div style={{ display: "flex" }}>
            <div style={{ display: "flex", flexDirection: "column", flex: "2" }}>
              <span style={{ fontSize: "25px", fontWeight: "600" }}>Silver Plan</span>
              <span style={{ fontSize: "20px", fontWeight: "400", color: "gray", marginTop: "10px" }}>
                Information and Plan , Text to write & Text to write & Text to write and Tex
              </span>
              <span style={{ fontSize: "20px", fontWeight: "600", marginTop: "10px" }}>Feature & Plan :</span>
              <span style={{ fontSize: "20px", fontWeight: "400", color: "gray", marginTop: "5px" }}>Information and Plan</span>
              <span style={{ fontSize: "20px", fontWeight: "400", color: "gray", marginTop: "5px" }}>Information and Plan</span>
              <span style={{ fontSize: "20px", fontWeight: "400", color: "gray", marginTop: "5px" }}>Information and Plan</span>
              <span style={{ fontSize: "20px", fontWeight: "400", color: "gray", marginTop: "5px" }}>Information and Plan</span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", flex: "1" }}>
              <div style={{ display: "flex", flexDirection: "column", flex: "1" }}>
                <div className="priceDiv">
                  <span>Rs. 2599/- (Monthly)</span>
                </div>
                <span className="expire">Exipring On: 22/05/2023</span>
              </div>
              <span className="buyNowButton">Renew Plan</span>
            </div>
          </div>
        </div>
      )}

      <div className="membershipPlansHome">
        <div className="monthlyYearly">
          <div className="monthlyYearlyMain">
            <input type="radio" checked={radioMonthly} onChange={handleMonthly}></input>
            <span>Billed Monthly</span>
          </div>
          <div className="monthlyYearlyMain">
            <input type="radio" checked={radioYearly} onChange={handleYearly}></input>
            <span>Billed Yearly</span>
          </div>
        </div>
        {radioMonthly ? (
          <div className="plansContainer">
            <div className="plan">
              <div style={{ display: "flex", flexDirection: "column", flex: "1" }}>
                <span style={{ fontSize: "25px", fontWeight: "600" }}>Silver Plan</span>
                <span style={{ fontSize: "20px", fontWeight: "400", color: "gray", marginTop: "10px" }}>
                  Information and Plan , Text to write & Text to write & Text to write and Tex
                </span>
                <div className="priceDiv">
                  <span>Rs. 2599/- (Monthly)</span>
                </div>
                <span style={{ fontSize: "20px", fontWeight: "600", marginTop: "10px" }}>Feature & Plan :</span>
                <span style={{ fontSize: "20px", fontWeight: "400", color: "gray", marginTop: "5px" }}>Information and Plan</span>
                <span style={{ fontSize: "20px", fontWeight: "400", color: "gray", marginTop: "5px" }}>Information and Plan</span>
                <span style={{ fontSize: "20px", fontWeight: "400", color: "gray", marginTop: "5px" }}>Information and Plan</span>
                <span style={{ fontSize: "20px", fontWeight: "400", color: "gray", marginTop: "5px" }}>Information and Plan</span>
              </div>

              <span className="buyNowButton">Buy Now</span>
            </div>
            <div className="recommendedPlan">
              <div className="recommendedPlan-header">
                <span>Recommended</span>
              </div>

              <div className="plan">
                <div style={{ display: "flex", flexDirection: "column", flex: "1" }}>
                  <span style={{ fontSize: "25px", fontWeight: "600" }}>Gold Plan</span>
                  <span style={{ fontSize: "20px", fontWeight: "400", color: "gray", marginTop: "10px" }}>
                    Information and Plan , Text to write & Text to write & Text to write and Tex
                  </span>
                  <div className="priceDiv">
                    <span>Rs. 2599/- (Monthly)</span>
                  </div>
                  <span style={{ fontSize: "20px", fontWeight: "600", marginTop: "10px" }}>Feature & Plan :</span>
                  <span style={{ fontSize: "20px", fontWeight: "400", color: "gray", marginTop: "5px" }}>Information and Plan</span>
                  <span style={{ fontSize: "20px", fontWeight: "400", color: "gray", marginTop: "5px" }}>Information and Plan</span>
                  <span style={{ fontSize: "20px", fontWeight: "400", color: "gray", marginTop: "5px" }}>Information and Plan</span>
                  <span style={{ fontSize: "20px", fontWeight: "400", color: "gray", marginTop: "5px" }}>Information and Plan</span>
                </div>

                <span className="buyNowButton2">Buy Now</span>
              </div>
            </div>

            <div className="plan">
              <div style={{ display: "flex", flexDirection: "column", flex: "1" }}>
                <span style={{ fontSize: "25px", fontWeight: "600" }}>Platinum Plan</span>
                <span style={{ fontSize: "20px", fontWeight: "400", color: "gray", marginTop: "10px" }}>
                  Information and Plan , Text to write & Text to write & Text to write and Tex
                </span>
                <div className="priceDiv">
                  <span>Rs. 2599/- (Monthly)</span>
                </div>
                <span style={{ fontSize: "20px", fontWeight: "600", marginTop: "10px" }}>Feature & Plan :</span>
                <span style={{ fontSize: "20px", fontWeight: "400", color: "gray", marginTop: "5px" }}>Information and Plan</span>
                <span style={{ fontSize: "20px", fontWeight: "400", color: "gray", marginTop: "5px" }}>Information and Plan</span>
                <span style={{ fontSize: "20px", fontWeight: "400", color: "gray", marginTop: "5px" }}>Information and Plan</span>
                <span style={{ fontSize: "20px", fontWeight: "400", color: "gray", marginTop: "5px" }}>Information and Plan</span>
              </div>

              <span className="buyNowButton">Buy Now</span>
            </div>
          </div>
        ) : (
          <div className="plansContainer">
            <div className="plan">
              <div style={{ display: "flex", flexDirection: "column", flex: "1" }}>
                <span style={{ fontSize: "25px", fontWeight: "600" }}>Silver Plan</span>
                <span style={{ fontSize: "20px", fontWeight: "400", color: "gray", marginTop: "10px" }}>
                  Information and Plan , Text to write & Text to write & Text to write and Tex
                </span>
                <div className="priceDiv">
                  <span>Rs. 28070/- (Yearly)</span>
                </div>
                <span style={{ fontSize: "20px", fontWeight: "600", marginTop: "10px" }}>Feature & Plan :</span>
                <span style={{ fontSize: "20px", fontWeight: "400", color: "gray", marginTop: "5px" }}>Information and Plan</span>
                <span style={{ fontSize: "20px", fontWeight: "400", color: "gray", marginTop: "5px" }}>Information and Plan</span>
                <span style={{ fontSize: "20px", fontWeight: "400", color: "gray", marginTop: "5px" }}>Information and Plan</span>
                <span style={{ fontSize: "20px", fontWeight: "400", color: "gray", marginTop: "5px" }}>Information and Plan</span>
              </div>

              <span className="buyNowButton">Buy Now</span>
            </div>
            <div className="recommendedPlan">
              <div className="recommendedPlan-header">
                <span>Recommended</span>
              </div>

              <div className="plan">
                <div style={{ display: "flex", flexDirection: "column", flex: "1" }}>
                  <span style={{ fontSize: "25px", fontWeight: "600" }}>Gold Plan</span>
                  <span style={{ fontSize: "20px", fontWeight: "400", color: "gray", marginTop: "10px" }}>
                    Information and Plan , Text to write & Text to write & Text to write and Tex
                  </span>
                  <div className="priceDiv">
                    <span>Rs. 28070/- (Yearly)</span>
                  </div>
                  <span style={{ fontSize: "20px", fontWeight: "600", marginTop: "10px" }}>Feature & Plan :</span>
                  <span style={{ fontSize: "20px", fontWeight: "400", color: "gray", marginTop: "5px" }}>Information and Plan</span>
                  <span style={{ fontSize: "20px", fontWeight: "400", color: "gray", marginTop: "5px" }}>Information and Plan</span>
                  <span style={{ fontSize: "20px", fontWeight: "400", color: "gray", marginTop: "5px" }}>Information and Plan</span>
                  <span style={{ fontSize: "20px", fontWeight: "400", color: "gray", marginTop: "5px" }}>Information and Plan</span>
                </div>

                <span className="buyNowButton2">Buy Now</span>
              </div>
            </div>

            <div className="plan">
              <div style={{ display: "flex", flexDirection: "column", flex: "1" }}>
                <span style={{ fontSize: "25px", fontWeight: "600" }}>Platinum Plan</span>
                <span style={{ fontSize: "20px", fontWeight: "400", color: "gray", marginTop: "10px" }}>
                  Information and Plan , Text to write & Text to write & Text to write and Tex
                </span>
                <div className="priceDiv">
                  <span>Rs. 28070/- (Yearly)</span>
                </div>
                <span style={{ fontSize: "20px", fontWeight: "600", marginTop: "10px" }}>Feature & Plan :</span>
                <span style={{ fontSize: "20px", fontWeight: "400", color: "gray", marginTop: "5px" }}>Information and Plan</span>
                <span style={{ fontSize: "20px", fontWeight: "400", color: "gray", marginTop: "5px" }}>Information and Plan</span>
                <span style={{ fontSize: "20px", fontWeight: "400", color: "gray", marginTop: "5px" }}>Information and Plan</span>
                <span style={{ fontSize: "20px", fontWeight: "400", color: "gray", marginTop: "5px" }}>Information and Plan</span>
              </div>

              <span className="buyNowButton">Buy Now</span>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
