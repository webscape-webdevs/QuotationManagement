import React from "react";
import GMTlogo from "../../assets/images/Rectangle 2.png";
import "./Navbar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../slices/sessionSlice";

const Navbar = () => {
  const { sessionUser } = useSelector((state) => state.sessionSlice);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const location = useLocation();

  return (
    <div style={{ backgroundColor: "rgb(255 237 237)", width: "100%" }}>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid header">
          <div>
            <Link className="navbar-brand" to="/">
              <img src={GMTlogo} alt="..." style={{ width: "100px", marginLeft: "18px" }} />
            </Link>
          </div>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <span className={sessionUser?._id ? "free" : "free2"}>FREE</span>
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/postYourProgram"
                  style={
                    location.pathname === "/postYourProgram"
                      ? { borderRadius: "10px", paddingLeft: "10px", paddingRight: "10px", color: "white", backgroundColor: "#d6193f" }
                      : null
                  }
                >
                  Post Your Program
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                  style={
                    location.pathname === "/"
                      ? { borderRadius: "10px", paddingLeft: "10px", paddingRight: "10px", color: "white", backgroundColor: "#d6193f" }
                      : null
                  }
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/allPostedPrograms"
                  style={
                    location.pathname === "/allPostedPrograms"
                      ? { borderRadius: "10px", paddingLeft: "10px", paddingRight: "10px", color: "white", backgroundColor: "#d6193f" }
                      : null
                  }
                >
                  All Posted Programs
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/membership"
                  style={
                    location.pathname === "/membership"
                      ? { borderRadius: "10px", paddingLeft: "10px", paddingRight: "10px", color: "white", backgroundColor: "#d6193f" }
                      : null
                  }
                >
                  Membership
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/aboutUs"
                  style={
                    location.pathname === "/aboutUs"
                      ? { borderRadius: "10px", paddingLeft: "10px", paddingRight: "10px", color: "white", backgroundColor: "#d6193f" }
                      : null
                  }
                >
                  About Us
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/contactUs"
                  style={
                    location.pathname === "/contactUs"
                      ? { borderRadius: "10px", paddingLeft: "10px", paddingRight: "10px", color: "white", backgroundColor: "#d6193f" }
                      : null
                  }
                >
                  Contact Us
                </Link>
              </li>

              {sessionUser?._id && (
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/dashboard"
                    style={
                      location.pathname === "/dashboard"
                        ? { borderRadius: "10px", paddingLeft: "10px", paddingRight: "10px", color: "white", backgroundColor: "#d6193f" }
                        : null
                    }
                  >
                    Dashboard
                  </Link>
                </li>
              )}
            </ul>
          </div>
          <div>
            {sessionUser?._id ? (
              <span
                className="btn btn-success"
                style={{ backgroundColor: "#d6193f", borderRadius: "25px", width: "150px", marginRight: "70px", border: "none" }}
                onClick={handleLogout}
              >
                Logout
              </span>
            ) : (
              <Link
                className="btn btn-success"
                type="submit"
                style={{ backgroundColor: "#d6193f", borderRadius: "25px", width: "150px", marginRight: "70px", border: "none" }}
                to="/login"
              >
                Login / SignUp
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
