import React, { useState } from "react";
import "./MembershipPlansHome.css";

export default function MembershipPlansHome() {
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
    <div className="membershipPlansHome">
      <h1 style={{ marginTop: "50px", textAlign: "center" }}>
        Membership <span style={{ color: "#d6193f" }}>Plans</span>
      </h1>
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
  );
}
