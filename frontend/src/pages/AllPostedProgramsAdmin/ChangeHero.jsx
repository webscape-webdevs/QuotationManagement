import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import axios from "axios";
import FormData from "form-data";
import "./ChangeHero.css";

export default function ChangeHero() {
  const [image, setImage] = useState("");

  const [image2, setImage2] = useState("");

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

  const updateHeroSubmitHandler = async () => {
    let data = new FormData();
    data.append("image", image2);

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "/api/admin/uploadHero",
      data: data,
    };

    await axios
      .request(config)
      .then(({ data }) => {
        getHero();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateHeroImagesChange = (e) => {
    setImage2(e.target.files[0]);
  };

  useEffect(() => {
    if (image2) {
      updateHeroSubmitHandler();
    }
  }, [image2]);

  return (
    <div className="dashboard-wrapper">
      <Navbar />
      <div className="dashboard-container">
        <Sidebar />
        <div className="dashboard-main">
          <h2>Change Hero Section Image</h2>

          <label className="custom-file-upload">
            <input type="file" onChange={updateHeroImagesChange} />
            Upload New Image
          </label>
          <img style={{ width: "1000px", marginTop: "30px" }} src={image} alt="" />
        </div>
      </div>
    </div>
  );
}
