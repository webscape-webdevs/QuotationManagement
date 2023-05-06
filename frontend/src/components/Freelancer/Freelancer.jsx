import React, { useEffect, useState } from "react";
import working from "../../assets/hero1.PNG";

import "./Freelancer.css";
import { useDispatch, useSelector } from "react-redux";
import { setDate, setLocation } from "../../slices/searchSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Freelancer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [image, setImage] = useState("");

  const { location, date } = useSelector((state) => state.searchSlice);

  const getHero = async () => {
    await axios
      .get(`http://localhost:8080/api/admin/getHero`)
      .then(({ data }) => {
        setImage(data.image);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getHero();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate("/allPostedPrograms");
  };

  const [data, setData] = useState({
    vendorCount: 0,
    customerCount: 0,
    postedProgramsCount: 0,
    pendingApprovalsCount: 0,
  });

  const getFeaturedInfo = async () => {
    await axios
      .get(`/api/admin/adminFeaturedInfo`)
      .then(({ data }) => {
        setData({ ...data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getFeaturedInfo();
  }, []);

  return (
    <div>
      <div style={{ backgroundImage: `url(${image})`, height: "500px", width: "100%", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
        <div className="FreelanceDiv">
          <div style={{ display: "flex", flexDirection: "column", marginLeft: "150px", marginTop: "20px", width: "50%" }}>
            {/* <div>
              <h1 className="pragraphtag">Prevention is better then cure,</h1>
            </div>
            <p className="pragraph">Post your wellness program and GET Quote from Certified Labs, Hospital & Wellness Expert</p>
            <p className="pragraph">Search Wellness Program in your location</p> */}

            <div style={{ width: "40%", display: "flex", marginTop: "300px" }}>
              <span className="when">Where?</span>
              <span className="when" style={{ marginLeft: "150px" }}>
                When?
              </span>
            </div>

            <form className="example" onSubmit={handleSearch}>
              <div style={{ width: "40%", display: "flex", flexDirection: "column" }}>
                <input
                  type="text"
                  placeholder="Location"
                  value={location}
                  className="searchInputs"
                  style={{ borderRight: "1px solid grey" }}
                  onChange={(e) => dispatch(setLocation(e.target.value))}
                />
              </div>
              <div style={{ width: "40%", display: "flex", flexDirection: "column" }}>
                <input
                  value={date}
                  type="date"
                  placeholder="Event Date"
                  className="searchInputs"
                  onChange={(e) => dispatch(setDate(e.target.value))}
                />
              </div>

              <button type="submit">
                <i className="fa fa-search"></i>
              </button>
            </form>
            <span style={{ color: "black", fontSize: "25px" }}>{data.postedProgramsCount}</span>
            <span style={{ color: "gray" }}>Programs Posted</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", width: "50%" }}></div>
        </div>
      </div>
    </div>
  );
};

export default Freelancer;
